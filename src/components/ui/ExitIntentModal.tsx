import React, { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

// ──────────────────────────────────────────────
// Config — baseada em pesquisa de melhores práticas B2B 2024/2025
// ──────────────────────────────────────────────
const CONFIG = {
  storage: {
    key: 'exit_modal_dismissed',
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 dias em ms
  },
  conditions: {
    minTimeOnPage: 20000,        // 20s (desktop B2B)
    minScrollPercent: 45,         // 45% (capturar antes de pricing)
    mobileInactivityMs: 40000,    // 40s (25-50% mais que desktop)
    desktopInactivityMs: 30000,   // 30s (trigger secundário desktop)
    cooldownAfterClose: 10000,    // 10s cooldown pós-fechar
  },
  desktop: {
    triggerZonePercent: 10,       // top 10% da viewport (não pixel fixo)
  },
  mobile: {
    scrollUpVelocityThreshold: 3, // pixels/frame mínimo para scroll-up rápido
  },
  success: {
    redirectUrl: 'https://youtu.be/Mqfwbf3X8SA?si=_Jzi71GbFJ9mYXfL',
    countdownSec: 3,
  },
};

const INPUT_NORMAL_BORDER = 'rgba(255,255,255,0.15)';
const INPUT_NORMAL_BG = 'rgba(255,255,255,0.05)';
const INPUT_ERROR_BORDER = 'rgb(239, 68, 68)';
const INPUT_ERROR_BG = 'rgba(239,68,68,0.08)';
const FOCUS_BORDER = 'rgb(249,115,22)';
const FOCUS_RING = '0 0 0 2px rgba(249,115,22,0.2)';

function mascaraWhatsApp(v: string): string {
  v = v.replace(/\D/g, '').slice(0, 11);
  if (v.length <= 10) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

function getFriendlyError(errorMsg: string): string {
  const msg = errorMsg.toLowerCase();
  if (msg.includes('duplicate') || msg.includes('unique')) return 'Você já enviou uma solicitação. Entraremos em contato em breve.';
  if (msg.includes('network') || msg.includes('fetch')) return 'Erro de conexão. Verifique sua internet e tente novamente.';
  if (msg.includes('rate limit')) return 'Muitas tentativas. Aguarde um momento e tente novamente.';
  return 'Ocorreu um erro inesperado. Tente novamente ou entre em contato pelo WhatsApp.';
}

// ──────────────────────────────────────────────
// Helper: frequência (localStorage)
// ──────────────────────────────────────────────
function isFrequencyBlocked(): boolean {
  try {
    const raw = localStorage.getItem(CONFIG.storage.key);
    if (!raw) return false;
    const ts = parseInt(raw, 10);
    if (isNaN(ts)) return false;
    return Date.now() - ts < CONFIG.storage.maxAge;
  } catch {
    return false;
  }
}

function setFrequencyDismissed(): void {
  try {
    localStorage.setItem(CONFIG.storage.key, String(Date.now()));
  } catch {
    // localStorage may be unavailable (private browsing, etc.)
  }
}

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────
export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ nome: '', whatsapp: '' });
  const [fieldErrors, setFieldErrors] = useState<{ nome?: string; whatsapp?: string }>({});
  const [alertMsg, setAlertMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasAnimatedPulse, setHasAnimatedPulse] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const nomeRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);
  const pageLoadTimeRef = useRef(Date.now());
  const lastCloseTimeRef = useRef(0);
  const triggerRef = useRef<string>('');
  const triggeredRef = useRef(false);
  const formStartedRef = useRef(false);

  // ── Analytics ──────────────────────────────
  const trackEvent = useCallback((name: string, data: Record<string, string>) => {
    (window as any).dataLayer?.push({ event: name, ...data });
  }, []);

  // ── Validação ──────────────────────────────
  const setErro = useCallback((field: 'nome' | 'whatsapp', msg: string) => {
    setFieldErrors(prev => ({ ...prev, [field]: msg }));
  }, []);

  const clearErro = useCallback((field: 'nome' | 'whatsapp') => {
    setFieldErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const validarNome = useCallback((): boolean => {
    const v = formData.nome.trim();
    if (!v || v.length < 2) {
      setErro('nome', 'Informe seu nome (mínimo 2 caracteres).');
      return false;
    }
    clearErro('nome');
    return true;
  }, [formData.nome, setErro, clearErro]);

  const validarWhatsApp = useCallback((): boolean => {
    const digits = formData.whatsapp.replace(/\D/g, '');
    const ddd = parseInt(digits.slice(0, 2), 10);
    if (digits.length < 10 || digits.length > 11 || ddd < 11 || ddd > 99) {
      setErro('whatsapp', 'Informe um WhatsApp válido com DDD (ex: (45) 99999-9999).');
      return false;
    }
    clearErro('whatsapp');
    return true;
  }, [formData.whatsapp, setErro, clearErro]);

  const isFormValid = formData.nome.trim().length >= 2
    && formData.whatsapp.replace(/\D/g, '').length >= 10;

  // Trigger pulse animation once when form becomes valid
  useEffect(() => {
    if (isFormValid && !hasAnimatedPulse) {
      setHasAnimatedPulse(true);
    }
  }, [isFormValid, hasAnimatedPulse]);

  // ── Device detection ───────────────────────
  const getDevice = useCallback(() => {
    return 'ontouchstart' in window ? 'mobile' : 'desktop';
  }, []);

  // ── Gates ──────────────────────────────────
  const allGatesPass = useCallback(() => {
    if (isFrequencyBlocked()) return false;
    if (triggeredRef.current) return false;
    if (lastCloseTimeRef.current > 0) {
      if (Date.now() - lastCloseTimeRef.current < CONFIG.conditions.cooldownAfterClose) return false;
    }
    if (Date.now() - pageLoadTimeRef.current < CONFIG.conditions.minTimeOnPage) return false;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const scrollPercent = window.scrollY / scrollHeight;
      if (scrollPercent < CONFIG.conditions.minScrollPercent / 100) return false;
    }
    return true;
  }, []);

  // ── Open / Close ───────────────────────────
  const openModal = useCallback((trigger: string) => {
    if (isClosing || triggeredRef.current) return;
    if (!allGatesPass()) return;

    triggeredRef.current = true;
    triggerRef.current = trigger;
    setIsOpen(true);
    trackEvent('exit_intent_viewed', { trigger, device: getDevice() });
    cleanupListeners();
  }, [isClosing, allGatesPass, trackEvent, getDevice]);

  const closeModal = useCallback((method: string) => {
    setIsClosing(true);
    setIsOpen(false);
    lastCloseTimeRef.current = Date.now();
    trackEvent('exit_intent_closed', { trigger: triggerRef.current, device: getDevice(), method });
    setTimeout(() => {
      setIsClosing(false);
      setIsSuccess(false);
      setFormData({ nome: '', whatsapp: '' });
      setFieldErrors({});
      setAlertMsg('');
      setIsSubmitting(false);
      setHasAnimatedPulse(false);
      formStartedRef.current = false;
    }, 300);
  }, [trackEvent, getDevice]);

  // ── Cleanup function ──
  const cleanupRef = useRef<(() => void) | null>(null);
  function cleanupListeners() {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }

  // ── Focus trap ─────────────────────────────
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      closeModal('escape');
      return;
    }
    if (e.key === 'Tab' && isOpen) {
      const modal = document.getElementById('exit-intent-modal-dialog');
      if (!modal) return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }, [isOpen, closeModal]);

  // ── Track form started ─────────────────────
  const handleFieldChange = useCallback((field: 'nome' | 'whatsapp', value: string) => {
    if (!formStartedRef.current && value.length > 0) {
      formStartedRef.current = true;
      trackEvent('exit_intent_form_started', { trigger: triggerRef.current, device: getDevice(), first_field: field });
    }
    if (field === 'whatsapp') {
      setFormData(prev => ({ ...prev, whatsapp: mascaraWhatsApp(value) }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  }, [trackEvent, getDevice]);

  // ── Submit ─────────────────────────────────
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const nomeOk = validarNome();
    const waOk = validarWhatsApp();

    if (!nomeOk || !waOk) {
      setAlertMsg('Corrija os campos destacados antes de continuar.');
      return;
    }

    setAlertMsg('');
    setIsSubmitting(true);

    const urlParams = new URLSearchParams(window.location.search);
    const leadData = {
      nome_completo: formData.nome.trim(),
      whatsapp: formData.whatsapp.trim(),
      produto: 'Diagnóstico Rápido Gratuito — Checklist 7 vazamentos + mini-análise',
      formulario: 'modal_exit_mapa_funil',
      page_url: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      referrer: document.referrer || null,
      utm_source: urlParams.get('utm_source') || null,
      utm_medium: urlParams.get('utm_medium') || null,
      utm_campaign: urlParams.get('utm_campaign') || null,
      utm_term: urlParams.get('utm_term') || null,
      utm_content: urlParams.get('utm_content') || null,
      user_agent: navigator.userAgent,
      language: navigator.language,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
    };

    const { error } = await supabase.from('leads').insert(leadData);

    setIsSubmitting(false);

    if (error) {
      console.error('[ExitIntent] Erro Supabase:', error);
      setAlertMsg(getFriendlyError(error.message));
      return;
    }

    setFrequencyDismissed();
    trackEvent('exit_intent_submitted', { trigger: triggerRef.current, device: getDevice() });
    setIsSuccess(true);

    setTimeout(() => {
      window.location.href = CONFIG.success.redirectUrl;
    }, CONFIG.success.countdownSec * 1000);
  }, [formData, validarNome, validarWhatsApp, trackEvent, getDevice]);

  // ────────────────────────────────────────────
  // useEffect #1 — Setup triggers + cleanup
  // ────────────────────────────────────────────
  useEffect(() => {
    if (isFrequencyBlocked()) return;

    const isTouch = 'ontouchstart' in window;
    const listeners: Array<{ target: EventTarget; event: string; handler: EventListener; options?: boolean | AddEventListenerOptions }> = [];
    let inactivityTimer: ReturnType<typeof setTimeout> | null = null;
    let inactivityInterval: ReturnType<typeof setInterval> | null = null;

    // ── Desktop: mouseleave (top 10% + upward velocity) ──
    const handleMouseLeave = (e: MouseEvent) => {
      const triggerZone = window.innerHeight * (CONFIG.desktop.triggerZonePercent / 100);
      if (e.clientY < triggerZone && e.clientY < 0) {
        trackEvent('exit_intent_triggered', { trigger: 'mouseleave' });
        openModal('mouseleave');
      }
    };

    // ── Desktop: inatividade do mouse (30s, secundário) ──
    let lastMouseMoveTime = Date.now();
    const handleMouseMove = () => { lastMouseMoveTime = Date.now(); };

    // ── Mobile: scroll-up rápido (primário) ──
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const delta = lastScrollY - window.scrollY;
      lastScrollY = window.scrollY;
      if (delta > CONFIG.mobile.scrollUpVelocityThreshold) {
        trackEvent('exit_intent_triggered', { trigger: 'scroll_up' });
        openModal('scroll_up');
      }
    };

    // ── Mobile: inatividade (40s, secundário) ──
    const startMobileInactivity = () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        trackEvent('exit_intent_triggered', { trigger: 'inactivity' });
        openModal('inactivity');
      }, CONFIG.conditions.mobileInactivityMs);
    };

    const resetMobileInactivity = () => {
      startMobileInactivity();
    };

    // ── Register ──────────────────────────────
    if (!isTouch) {
      document.documentElement.addEventListener('mouseleave', handleMouseLeave);
      listeners.push({ target: document.documentElement, event: 'mouseleave', handler: handleMouseLeave as EventListener });

      document.addEventListener('mousemove', handleMouseMove);
      listeners.push({ target: document, event: 'mousemove', handler: handleMouseMove as EventListener });

      inactivityInterval = setInterval(() => {
        if (Date.now() - lastMouseMoveTime >= CONFIG.conditions.desktopInactivityMs) {
          trackEvent('exit_intent_triggered', { trigger: 'inactivity' });
          openModal('inactivity');
        }
      }, 1000);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      listeners.push({ target: window, event: 'scroll', handler: handleScroll as EventListener, options: { passive: true } });

      startMobileInactivity();
      const resetEvents = ['touchstart', 'touchmove', 'scroll', 'click'] as const;
      resetEvents.forEach(evt => {
        window.addEventListener(evt, resetMobileInactivity, { passive: true });
        listeners.push({ target: window, event: evt, handler: resetMobileInactivity as EventListener, options: { passive: true } });
      });
    }

    cleanupRef.current = () => {
      listeners.forEach(({ target, event, handler, options }) => {
        target.removeEventListener(event, handler, typeof options === 'boolean' ? undefined : options);
      });
      listeners.length = 0;
      if (inactivityTimer) { clearTimeout(inactivityTimer); inactivityTimer = null; }
      if (inactivityInterval) { clearInterval(inactivityInterval); inactivityInterval = null; }
    };

    return () => {
      cleanupListeners();
    };
  }, [allGatesPass, openModal, closeModal, trackEvent]);

  // ────────────────────────────────────────────
  // useEffect #2 — Scroll lock + keyboard
  // ────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown as any);
      // Auto-focus first field
      setTimeout(() => nomeRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown as any);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown as any);
    };
  }, [isOpen, handleKeyDown]);

  // ────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────
  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { if (e.target === e.currentTarget) closeModal('overlay'); }}
          >
            <motion.div
              id="exit-intent-modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="exit-modal-title"
              className="relative w-full p-6 sm:p-8 exit-modal-scroll"
              style={{
                maxWidth: '500px',
                background: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                maxHeight: '100vh',
                overflowY: 'auto',
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                aria-label="Fechar modal"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
                onClick={() => closeModal('x')}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!isSuccess ? (
                <>
                  {/* Social proof badge */}
                  <div className="flex justify-center mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: 'rgba(249,115,22,0.1)', color: 'rgb(249,115,22)' }}
                    >
                      <span>📊</span> +200 funis analisados
                    </span>
                  </div>

                  <div className="mb-5">
                    <h2 id="exit-modal-title" className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
                      Antes de sair: seu funil tem pelo menos 3 desses 7 vazamentos
                    </h2>
                    <p className="text-sm mt-3 text-center" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      Mapeamos +200 funis e esses 7 erros aparecem em 89% deles. Descubra quais estão no seu — em 2 minutos.
                    </p>
                  </div>

                  {/* Oferta */}
                  <div
                    className="mb-5 p-4"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px dashed rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                    }}
                  >
                    <p className="text-base font-semibold" style={{ color: 'rgb(249, 115, 22)' }}>
                      Diagnóstico Rápido Gratuito
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Checklist dos 7 vazamentos mais comuns em funis digitais
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      + Mini-análise de 1 página do seu funil (grátis, sem compromisso)
                    </p>
                    {/* Entrega rápida */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <svg width="14" height="14" fill="none" stroke="rgb(249,115,22)" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Entrega em até 24h no WhatsApp
                      </span>
                    </div>
                  </div>

                  {alertMsg && (
                    <div
                      className="rounded-xl p-3 mb-4 text-sm"
                      style={{
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        color: 'rgb(248,113,113)',
                      }}
                    >
                      {alertMsg}
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label htmlFor="exit-nome" className="block text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Nome
                      </label>
                      <input
                        ref={nomeRef}
                        id="exit-nome"
                        type="text"
                        autoComplete="name"
                        placeholder="Seu nome"
                        className="w-full rounded-xl px-4 py-3 text-white transition-colors outline-none"
                        style={{
                          background: fieldErrors.nome ? INPUT_ERROR_BG : INPUT_NORMAL_BG,
                          border: `1px solid ${fieldErrors.nome ? INPUT_ERROR_BORDER : INPUT_NORMAL_BORDER}`,
                          fontSize: '16px',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = FOCUS_BORDER; e.currentTarget.style.boxShadow = FOCUS_RING; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = fieldErrors.nome ? INPUT_ERROR_BORDER : INPUT_NORMAL_BORDER; e.currentTarget.style.boxShadow = 'none'; }}
                        value={formData.nome}
                        onChange={(e) => handleFieldChange('nome', e.target.value)}
                      />
                      {fieldErrors.nome && (
                        <p className="text-xs mt-1" style={{ color: 'rgb(248,113,113)' }}>{fieldErrors.nome}</p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="exit-whatsapp" className="block text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        WhatsApp
                      </label>
                      <input
                        ref={whatsappRef}
                        id="exit-whatsapp"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(11) 99999-9999"
                        maxLength={15}
                        className="w-full rounded-xl px-4 py-3 text-white transition-colors outline-none"
                        style={{
                          background: fieldErrors.whatsapp ? INPUT_ERROR_BG : INPUT_NORMAL_BG,
                          border: `1px solid ${fieldErrors.whatsapp ? INPUT_ERROR_BORDER : INPUT_NORMAL_BORDER}`,
                          fontSize: '16px',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = FOCUS_BORDER; e.currentTarget.style.boxShadow = FOCUS_RING; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = fieldErrors.whatsapp ? INPUT_ERROR_BORDER : INPUT_NORMAL_BORDER; e.currentTarget.style.boxShadow = 'none'; }}
                        value={formData.whatsapp}
                        onChange={(e) => handleFieldChange('whatsapp', e.target.value)}
                      />
                      {fieldErrors.whatsapp && (
                        <p className="text-xs mt-1" style={{ color: 'rgb(248,113,113)' }}>{fieldErrors.whatsapp}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      ref={lastFocusableRef}
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-4 px-6 rounded-xl transition-all ${
                        isFormValid && !isSubmitting && hasAnimatedPulse ? 'exit-cta-pulse' : ''
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgb(249,115,22), rgb(234,88,12))',
                        opacity: isFormValid && !isSubmitting ? '1' : '0.5',
                        cursor: isFormValid && !isSubmitting ? 'pointer' : 'not-allowed',
                        minHeight: '52px',
                      }}
                    >
                      {isSubmitting && (
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                      )}
                      <span>{isSubmitting ? 'Enviando...' : 'Receber meu diagnóstico gratuito'}</span>
                    </button>

                    {/* Micro-copy de confiança */}
                    <p className="text-center text-xs mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {!isFormValid && !isSubmitting
                        ? 'Preencha todos os campos para continuar'
                        : 'Seus dados ficam seguros. Sem spam — apenas o diagnóstico.'}
                    </p>
                  </form>

                  <button
                    type="button"
                    className="block mx-auto mt-4 text-sm cursor-pointer bg-transparent border-none"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                    onClick={() => closeModal('dismiss_link')}
                  >
                    Agora não, obrigado
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.15)' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <svg width="32" height="32" fill="none" stroke="rgb(52,211,153)" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Pronto! Diagnóstico a caminho</h3>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Vou te enviar o checklist pelo WhatsApp nas próximas horas. Enquanto isso, assista esse vídeo de 3 min sobre o erro #1 que mais custa caro:
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Redirecionando em {CONFIG.success.countdownSec}s...
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;
  return (
    <>
      <style>{`
        .exit-modal-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .exit-modal-scroll::-webkit-scrollbar {
          display: none;
        }
        @keyframes exitCtaPulse {
          0% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(249,115,22,0); }
          100% { box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }
        .exit-cta-pulse {
          animation: exitCtaPulse 1s ease-out 1;
        }
        @media (max-width: 640px) {
          .exit-modal-scroll {
            max-height: 100vh !important;
            border-radius: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      {createPortal(modal, document.body)}
    </>
  );
}
