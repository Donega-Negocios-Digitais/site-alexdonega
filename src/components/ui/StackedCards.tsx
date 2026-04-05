import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface Deliverable {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  badge?: string;
  theme: string;
}

const deliverables: Deliverable[] = [
  {
    id: 1,
    title: "Diagrama de Mapa de Funil",
    subtitle: "Mapeamento visual profissional",
    description:
      "Veja exatamente o que vou entregar para você visualizar seu lucro antes de investir. Você vai segurar na mão um mapa completo do seu funil, com todos os números simulados e cenários projetados — pronto para você tomar decisões com confiança, não com achismo.",
    image: "/img/services/diagrama-mapa-funil.webp",
    features: [
      "Etapas do funil mapeadas",
      "Ofertas e pontos de contato",
      "Fluxo visual completo",
      "Identificação de gargalos",
    ],
    badge: "Principal",
    theme: "orange",
  },
  {
    id: 2,
    title: "Resumo do Projeto",
    subtitle: "Visão consolidada das previsões",
    description:
      "Um painel com todas as suas previsões em um único lugar. Receita, lucro, custo de aquisição, ticket médio e todas as métricas que importam para seu negócio — organizadas e prontas para análise.",
    image: "/img/services/resumo-projeto.webp",
    features: [
      "Métricas-chave consolidadas",
      "Visão 360° do negócio",
      "Dados baseados no seu contexto",
      "Fácil de compartilhar",
    ],
    theme: "purple",
  },
  {
    id: 3,
    title: "Meta de Lucro dos Sonhos",
    subtitle: "Descubra o que é necessário para chegar lá",
    description:
      "Quer faturar R$ 100 mil por mês? R$ 1 milhão? Este relatório mostra exatamente o que precisa acontecer em cada etapa do funil para atingir sua meta — com números reais e alcançáveis.",
    image: "/img/services/meta-lucro-sonhos.webp",
    features: [
      "Cenário personalizado",
      "Metas por etapa do funil",
      "Volume de tráfego necessário",
      "Investimento previsto",
    ],
    badge: "Diferencial",
    theme: "pink",
  },
  {
    id: 4,
    title: "Reinvestimento em Tráfego",
    subtitle: "Gráfico de crescimento de receita e lucro",
    description:
      "Veja como seu negócio cresce mês a mês com o reinvestimento inteligente em tráfego. Gráficos de receita, lucro e ponto de equilibrio para você planejar com precisão cada real investido.",
    image: "/img/services/reinvestimento-trafego.webp",
    features: [
      "Projeção mensal de receita",
      "Curva de crescimento",
      "Ponto de equilibrio claro",
      "ROI por fase de investimento",
    ],
    theme: "blue",
  },
  {
    id: 5,
    title: "Comparação de Cenários",
    subtitle: "Pessimista, provável e otimista lado a lado",
    description:
      "Não dependa de um único palpite. Compare 3 cenários simulados e entenda o intervalo de resultados possíveis — do conservador ao ambicioso — para tomar decisões com segurança.",
    image: "/img/services/comparacao-cenarios.webp",
    features: [
      "Cenário pessimista",
      "Cenário provável",
      "Cenário otimista",
      "Análise de sensibilidade",
    ],
    badge: "Essencial",
    theme: "orange",
  },
];

const THEME_COLORS: Record<string, { accent: string; accentRgb: string }> = {
  pink: { accent: "#ec4899", accentRgb: "236, 72, 153" },
  orange: { accent: "#f97316", accentRgb: "249, 115, 22" },
  purple: { accent: "#a855f7", accentRgb: "168, 85, 247" },
  blue: { accent: "#3b82f6", accentRgb: "59, 130, 246" },
};

const CARD_OFFSET = 30;
const CARD_SCALE = 0.96;

interface StackedCardProps {
  item: Deliverable;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
}

const StackedCard = ({ item, index, scrollYProgress, totalCards }: StackedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = THEME_COLORS[item.theme] || THEME_COLORS.orange;

  const { scrollYProgress: cardProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(cardProgress, [0.6, 1], [CARD_SCALE, 1]);
  const y = useTransform(cardProgress, [0.6, 1], [CARD_OFFSET, 0]);

  const overlayOpacity = useTransform(cardProgress, [0.75, 1], [0.5, 0]);

  return (
    <div ref={ref} className="sc-scroll-segment">
      <motion.div
        style={{
          position: "sticky",
          top: "60px",
          scale,
          y,
          zIndex: index,
          transformOrigin: "top center",
        }}
        className="sc-card-wrap"
      >
        <motion.div className="sc-card-overlay" style={{ opacity: overlayOpacity }} />
        <div className={`sc-card theme-${item.theme}`}>
          <div className="sc-card-inner">
            <div className="sc-col-img">
              <div className="sc-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="sc-img"
                />
                <div
                  className="sc-img-glow"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, rgba(${theme.accentRgb}, 0.2) 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>

            <div className="sc-col-content">
              {item.badge && (
                <span
                  className="sc-badge"
                  style={{
                    color: theme.accent,
                    background: `rgba(${theme.accentRgb}, 0.12)`,
                    borderColor: `rgba(${theme.accentRgb}, 0.3)`,
                  }}
                >
                  {item.badge}
                </span>
              )}
              <h3 className="sc-card-title">{item.title}</h3>
              <p
                className="sc-card-subtitle"
                style={{ color: theme.accent }}
              >
                {item.subtitle}
              </p>
              <p className="sc-card-desc">{item.description}</p>
              <div className="sc-features">
                {item.features.map((f, fi) => (
                  <div key={fi} className="sc-feature">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      width="16"
                      height="16"
                      style={{ color: theme.accent }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StackedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="sc-root" ref={containerRef}>
      <div className="sc-header">
        <motion.span
          className="sc-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O que você recebe
        </motion.span>
        <motion.h2
          className="sc-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Seus Relatórios de{" "}
          <span className="sc-title-accent">Simulação</span>
        </motion.h2>
        <motion.p
          className="sc-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Veja exatamente o que vou entregar para você visualizar seu lucro
          antes de investir.
        </motion.p>
      </div>

      <div className="sc-container">
        {deliverables.map((item, index) => (
          <StackedCard
            key={item.id}
            item={item}
            index={index}
            scrollYProgress={scrollYProgress}
            totalCards={deliverables.length}
          />
        ))}
      </div>
    </div>
  );
};
