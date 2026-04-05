// scripts/generate-deliverable-images.mjs
// Gera 8 imagens WebP para seção "O que você recebe" do Mapa de Funil
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/img/services');
const W = 720, H = 480;

// ─── SVG wrapper ────────────────────────────────────────────────────────────
function wrap(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="og" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#f97316"/>
    <stop offset="100%" stop-color="#fb923c"/>
  </linearGradient>
  <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#ef4444"/>
    <stop offset="100%" stop-color="#dc2626"/>
  </linearGradient>
  <linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#22c55e"/>
    <stop offset="100%" stop-color="#16a34a"/>
  </linearGradient>
  <linearGradient id="recFill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#f97316" stop-opacity="0.45"/>
    <stop offset="100%" stop-color="#f97316" stop-opacity="0.02"/>
  </linearGradient>
  <linearGradient id="lucFill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#eab308" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="#eab308" stop-opacity="0.02"/>
  </linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="#0a0a06"/>
${inner}
</svg>`;
}

function bar(title) {
  return `<rect x="20" y="16" width="680" height="44" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="36" y="44" font-family="sans-serif" font-size="16" font-weight="700" fill="white">${title}</text>
<circle cx="668" cy="38" r="5" fill="#f97316"/>
<circle cx="683" cy="38" r="5" fill="rgba(255,255,255,0.25)"/>
<circle cx="698" cy="38" r="5" fill="rgba(255,255,255,0.12)"/>`;
}

// ─── 1. Mapa do Funil ───────────────────────────────────────────────────────
const svg1 = wrap(`
${bar('Mapa do Funil')}

<!-- Barra 1: Tráfego -->
<rect x="75" y="88" width="570" height="58" rx="6" fill="#f97316" fill-opacity="1"/>
<text x="360" y="113" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Tráfego</text>
<text x="360" y="135" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.9)">10.000 visitantes · 100%</text>

<!-- Barra 2: Captura de Leads -->
<rect x="147" y="160" width="426" height="58" rx="6" fill="#f97316" fill-opacity="0.88"/>
<text x="360" y="185" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Captura de Leads</text>
<text x="360" y="207" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.9)">3.000 leads · 30%</text>

<!-- Barra 3: Página de Vendas -->
<rect x="207" y="232" width="306" height="58" rx="6" fill="#f97316" fill-opacity="0.72"/>
<text x="360" y="257" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Página de Vendas</text>
<text x="360" y="279" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.9)">900 interessados · 9%</text>

<!-- Barra 4: Checkout -->
<rect x="255" y="304" width="210" height="58" rx="6" fill="#f97316" fill-opacity="0.55"/>
<text x="360" y="329" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Checkout</text>
<text x="360" y="351" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.9)">270 compradores · 2,7%</text>

<!-- Barra 5: Compra -->
<rect x="295" y="376" width="130" height="58" rx="6" fill="#f97316" fill-opacity="0.4"/>
<text x="360" y="401" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Compra</text>
<text x="360" y="423" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.9)">81 clientes · 0,8%</text>

<text x="360" y="460" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.3)">Taxa de conversão total: 0,81%</text>
`);

// ─── 2. Resumo do Projeto ────────────────────────────────────────────────────
const svg2 = wrap(`
${bar('Resumo do Projeto')}

<!-- Card 1: Receita Total -->
<rect x="20" y="80" width="330" height="175" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="40" y="112" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Receita Total</text>
<text x="40" y="180" font-family="sans-serif" font-size="42" font-weight="700" fill="white">R$ 7.500</text>
<rect x="40" y="228" width="90" height="3" rx="2" fill="#f97316"/>
<text x="40" y="246" font-family="sans-serif" font-size="11" fill="#22c55e">&#x2191; +18% vs. meta</text>

<!-- Card 2: Taxa de Conversão -->
<rect x="370" y="80" width="330" height="175" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="390" y="112" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Taxa de Conversão</text>
<text x="390" y="180" font-family="sans-serif" font-size="52" font-weight="700" fill="white">3,2%</text>
<rect x="390" y="228" width="90" height="3" rx="2" fill="#f97316"/>
<text x="390" y="246" font-family="sans-serif" font-size="11" fill="#f97316">Meta: 2,5%</text>

<!-- Card 3: Custo por Aquisição -->
<rect x="20" y="272" width="330" height="175" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="40" y="304" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Custo por Aquisição</text>
<text x="40" y="372" font-family="sans-serif" font-size="42" font-weight="700" fill="white">R$ 8,50</text>
<rect x="40" y="420" width="90" height="3" rx="2" fill="#f97316"/>
<text x="40" y="438" font-family="sans-serif" font-size="11" fill="#22c55e">Abaixo do limite</text>

<!-- Card 4: ROI (destaque laranja) -->
<rect x="370" y="272" width="330" height="175" rx="12" fill="rgba(249,115,22,0.09)" stroke="rgba(249,115,22,0.3)" stroke-width="1"/>
<text x="390" y="304" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Retorno sobre Investimento</text>
<text x="390" y="372" font-family="sans-serif" font-size="52" font-weight="700" fill="#f97316">285%</text>
<rect x="390" y="420" width="90" height="3" rx="2" fill="#f97316"/>
<text x="390" y="438" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.45)">ROI do mês</text>
`);

// ─── 3. Meta de Lucro dos Sonhos ─────────────────────────────────────────────
const svg3 = wrap(`
${bar('Meta de Lucro dos Sonhos')}

<text x="360" y="132" text-anchor="middle" font-family="sans-serif" font-size="13" fill="rgba(255,255,255,0.5)">Meta Mensal</text>
<text x="360" y="205" text-anchor="middle" font-family="sans-serif" font-size="56" font-weight="700" fill="white">R$ 50.000</text>
<text x="360" y="228" text-anchor="middle" font-family="sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">por mês</text>

<!-- Barra de progresso -->
<rect x="40" y="252" width="640" height="14" rx="7" fill="rgba(255,255,255,0.07)"/>
<rect x="40" y="252" width="288" height="14" rx="7" fill="#f97316"/>
<text x="340" y="244" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.45)">45% da meta alcançada</text>

<!-- 3 cards de breakdown -->
<rect x="20" y="284" width="218" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="129" y="312" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Tráfego Necessário</text>
<text x="129" y="352" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="white">50.000</text>
<text x="129" y="372" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#f97316">visitantes/mês</text>

<rect x="251" y="284" width="218" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="360" y="312" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">CPA Alvo</text>
<text x="360" y="352" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="white">R$ 2,00</text>
<text x="360" y="372" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#f97316">por aquisição</text>

<rect x="482" y="284" width="218" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="591" y="312" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Conversão Necessária</text>
<text x="591" y="352" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="white">2,5%</text>
<text x="591" y="372" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#f97316">de conversão</text>

<rect x="20" y="398" width="680" height="60" rx="10" fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.15)" stroke-width="1"/>
<text x="360" y="435" text-anchor="middle" font-family="sans-serif" font-size="13" fill="rgba(255,255,255,0.65)">Com essas métricas você alcança R$ 50.000/mês com seu funil</text>
`);

// ─── 4. Reinvestimento em Tráfego ────────────────────────────────────────────
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
const receita = [8000, 12000, 16000, 21000, 27000, 34000, 42000];
const lucro   = [3000, 4800, 6500, 8800, 11500, 14500, 18000];
const maxVal  = 46000;
const cX = 64, cY = 80, cW = 630, cH = 300, cBot = cY + cH;

function pt(val, i, n) {
  return {
    x: +(cX + (i / (n - 1)) * cW).toFixed(1),
    y: +(cY + cH - (val / maxVal) * cH).toFixed(1)
  };
}

const rPts = receita.map((v, i) => pt(v, i, receita.length));
const lPts = lucro.map((v, i) => pt(v, i, lucro.length));
const rPoly = rPts.map(p => `${p.x},${p.y}`).join(' ');
const lPoly = lPts.map(p => `${p.x},${p.y}`).join(' ');
const rArea = `${cX},${cBot} ${rPoly} ${cX + cW},${cBot}`;
const lArea = `${cX},${cBot} ${lPoly} ${cX + cW},${cBot}`;

const gridLines = [0, 0.25, 0.5, 0.75, 1].map(f => {
  const y = +(cY + cH * f).toFixed(1);
  const val = Math.round(maxVal * (1 - f) / 1000);
  return `<line x1="${cX}" y1="${y}" x2="${cX + cW}" y2="${y}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
<text x="${cX - 6}" y="${y + 4}" text-anchor="end" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.4)">${val}k</text>`;
}).join('\n');

const xLabels = months.map((m, i) => {
  const x = +(cX + (i / (months.length - 1)) * cW).toFixed(1);
  return `<text x="${x}" y="${cBot + 20}" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">${m}</text>`;
}).join('\n');

const svg4 = wrap(`
${bar('Projeção de Reinvestimento')}

${gridLines}
${xLabels}

<defs>
  <linearGradient id="rfA" x1="0" y1="${cY}" x2="0" y2="${cBot}" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#f97316" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="#f97316" stop-opacity="0.02"/>
  </linearGradient>
  <linearGradient id="lfA" x1="0" y1="${cY}" x2="0" y2="${cBot}" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#eab308" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="#eab308" stop-opacity="0.02"/>
  </linearGradient>
</defs>

<polygon points="${rArea}" fill="url(#rfA)"/>
<polygon points="${lArea}" fill="url(#lfA)"/>
<polyline points="${rPoly}" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="${lPoly}" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

<!-- Pontos finais -->
<circle cx="${rPts[6].x}" cy="${rPts[6].y}" r="5" fill="#f97316" stroke="#0a0a06" stroke-width="2"/>
<circle cx="${lPts[6].x}" cy="${lPts[6].y}" r="4" fill="#eab308" stroke="#0a0a06" stroke-width="2"/>

<!-- Valores finais -->
<rect x="${rPts[6].x + 8}" y="${rPts[6].y - 22}" width="64" height="22" rx="4" fill="rgba(249,115,22,0.2)" stroke="rgba(249,115,22,0.4)" stroke-width="1"/>
<text x="${rPts[6].x + 40}" y="${rPts[6].y - 6}" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#f97316">R$ 42k</text>

<rect x="${lPts[6].x + 8}" y="${lPts[6].y - 22}" width="60" height="22" rx="4" fill="rgba(234,179,8,0.2)" stroke="rgba(234,179,8,0.4)" stroke-width="1"/>
<text x="${lPts[6].x + 38}" y="${lPts[6].y - 6}" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#eab308">R$ 18k</text>

<!-- Legenda -->
<rect x="${cX}" y="430" width="14" height="4" rx="2" fill="#f97316"/>
<text x="${cX + 20}" y="436" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.7)">Receita</text>
<rect x="${cX + 88}" y="430" width="14" height="4" rx="2" fill="#eab308"/>
<text x="${cX + 108}" y="436" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.7)">Lucro</text>

<text x="${cX + cW}" y="436" text-anchor="end" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.3)">Reinvestimento mensal em tráfego</text>
`);

// ─── 5. Comparação de Cenários ────────────────────────────────────────────────
const svg5 = wrap(`
${bar('Comparação de Cenários')}

<!-- Pessimista -->
<rect x="20" y="80" width="218" height="375" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
<rect x="20" y="80" width="218" height="7" rx="12" fill="url(#rg)"/>
<text x="129" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#ef4444">Pessimista</text>

<rect x="36" y="126" width="186" height="64" rx="8" fill="rgba(239,68,68,0.08)"/>
<text x="129" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Receita</text>
<text x="129" y="176" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 5.000</text>

<rect x="36" y="200" width="186" height="64" rx="8" fill="rgba(239,68,68,0.08)"/>
<text x="129" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Custo</text>
<text x="129" y="250" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 3.000</text>

<rect x="36" y="274" width="186" height="64" rx="8" fill="rgba(239,68,68,0.12)"/>
<text x="129" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Lucro</text>
<text x="129" y="324" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="#ef4444">R$ 2.000</text>

<text x="129" y="368" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">Conv: 1,0% · CPA: R$ 30</text>
<text x="129" y="386" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">ROI: 67%</text>
<text x="129" y="440" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(239,68,68,0.7)">Cenário de risco</text>

<!-- Provável (destaque) -->
<rect x="251" y="80" width="218" height="375" rx="12" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.45)" stroke-width="1.5"/>
<rect x="251" y="80" width="218" height="7" rx="12" fill="url(#og)"/>
<text x="360" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#f97316">Provável ★</text>

<rect x="267" y="126" width="186" height="64" rx="8" fill="rgba(249,115,22,0.1)"/>
<text x="360" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Receita</text>
<text x="360" y="176" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 15.550</text>

<rect x="267" y="200" width="186" height="64" rx="8" fill="rgba(249,115,22,0.1)"/>
<text x="360" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Custo</text>
<text x="360" y="250" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 5.000</text>

<rect x="267" y="274" width="186" height="64" rx="8" fill="rgba(249,115,22,0.15)"/>
<text x="360" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Lucro</text>
<text x="360" y="324" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="#f97316">R$ 10.550</text>

<text x="360" y="368" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">Conv: 3,2% · CPA: R$ 8,50</text>
<text x="360" y="386" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">ROI: 211%</text>
<text x="360" y="440" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#f97316">Cenário mais provável</text>

<!-- Otimista -->
<rect x="482" y="80" width="218" height="375" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
<rect x="482" y="80" width="218" height="7" rx="12" fill="url(#gg)"/>
<text x="591" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#22c55e">Otimista</text>

<rect x="498" y="126" width="186" height="64" rx="8" fill="rgba(34,197,94,0.08)"/>
<text x="591" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Receita</text>
<text x="591" y="176" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 30.000</text>

<rect x="498" y="200" width="186" height="64" rx="8" fill="rgba(34,197,94,0.08)"/>
<text x="591" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Custo</text>
<text x="591" y="250" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="white">R$ 5.000</text>

<rect x="498" y="274" width="186" height="64" rx="8" fill="rgba(34,197,94,0.12)"/>
<text x="591" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Lucro</text>
<text x="591" y="324" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="#22c55e">R$ 25.000</text>

<text x="591" y="368" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">Conv: 6,0% · CPA: R$ 4,50</text>
<text x="591" y="386" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">ROI: 500%</text>
<text x="591" y="440" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(34,197,94,0.7)">Cenário ideal</text>
`);

// ─── 6. Funil Completo ────────────────────────────────────────────────────────
const svg6 = wrap(`
${bar('Funil Completo')}

<!-- Etapa 1: Topo -->
<polygon points="60,88 480,88 432,162 108,162" fill="rgba(249,115,22,0.28)" stroke="rgba(249,115,22,0.55)" stroke-width="1.5"/>
<text x="270" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Anúncios e Redes Sociais</text>
<text x="270" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.8)">10.000 visitantes · 15% · R$ 2.500</text>

<!-- Etapa 2: Meio -->
<polygon points="108,172 432,172 388,246 152,246" fill="rgba(249,115,22,0.18)" stroke="rgba(249,115,22,0.4)" stroke-width="1.5"/>
<text x="270" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Landing Page</text>
<text x="270" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.8)">1.500 leads · 25% · R$ 500</text>

<!-- Etapa 3: Base -->
<polygon points="152,256 388,256 352,330 188,330" fill="rgba(249,115,22,0.11)" stroke="rgba(249,115,22,0.3)" stroke-width="1.5"/>
<text x="270" y="284" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Checkout</text>
<text x="270" y="304" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.8)">375 vendas · 8% · R$ 100</text>

<!-- Card lateral: Resumo -->
<rect x="500" y="88" width="200" height="252" rx="12" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.25)" stroke-width="1"/>
<text x="600" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#f97316">Resumo</text>

<text x="516" y="148" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Tráfego Total</text>
<text x="516" y="172" font-family="sans-serif" font-size="20" font-weight="700" fill="white">10.000</text>
<line x1="516" y1="184" x2="684" y2="184" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>

<text x="516" y="206" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Conversões</text>
<text x="516" y="230" font-family="sans-serif" font-size="20" font-weight="700" fill="white">300</text>
<line x1="516" y1="242" x2="684" y2="242" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>

<text x="516" y="264" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">CPA</text>
<text x="516" y="288" font-family="sans-serif" font-size="20" font-weight="700" fill="#f97316">R$ 10</text>
<line x1="516" y1="300" x2="684" y2="300" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>

<text x="516" y="322" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">CVR Global</text>
<text x="516" y="328" font-family="sans-serif" font-size="20" font-weight="700" fill="white"> </text>

<!-- Barra de resultado -->
<rect x="20" y="352" width="680" height="60" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
<text x="360" y="374" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.45)">Receita Projetada</text>
<text x="200" y="398" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">R$ 37.500</text>
<text x="360" y="398" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.3)">·</text>
<text x="360" y="374" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.45)">           Investimento</text>
<text x="450" y="398" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">R$ 3.000</text>
<text x="360" y="374" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.45)">                                ROI</text>
<text x="630" y="398" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#f97316">1.150%</text>

<text x="360" y="432" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.25)">CVR global: 3,0%</text>
`);

// ─── 7. Simulação de Lucro ────────────────────────────────────────────────────
const svg7 = wrap(`
${bar('Simulação de Lucro')}

<!-- Card central -->
<rect x="200" y="84" width="320" height="200" rx="14" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.35)" stroke-width="1.5"/>

<!-- Ícone funil simplificado -->
<polygon points="252,108 468,108 438,142 282,142" fill="rgba(249,115,22,0.45)"/>
<polygon points="282,150 438,150 414,184 306,184" fill="rgba(249,115,22,0.65)"/>
<polygon points="306,192 414,192 394,220 326,220" fill="#f97316"/>

<text x="360" y="252" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Lucro Projetado</text>
<text x="360" y="276" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="700" fill="white">R$ 7.500</text>

<!-- Card: Investimento (canto sup esq) -->
<rect x="20" y="84" width="164" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="102" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Investimento</text>
<text x="102" y="150" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="white">R$ 2.000</text>
<text x="102" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">em tráfego</text>

<!-- Card: Receita (canto sup dir) -->
<rect x="536" y="84" width="164" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="618" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Receita</text>
<text x="618" y="150" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="white">R$ 9.500</text>
<text x="618" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">bruta</text>

<!-- Card: ROI (canto inf esq) -->
<rect x="20" y="192" width="164" height="96" rx="10" fill="rgba(249,115,22,0.09)" stroke="rgba(249,115,22,0.25)" stroke-width="1"/>
<text x="102" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">ROI</text>
<text x="102" y="262" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="#f97316">450%</text>
<text x="102" y="280" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">retorno</text>

<!-- Card: Lucro Líquido (canto inf dir) -->
<rect x="536" y="192" width="164" height="96" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.22)" stroke-width="1"/>
<text x="618" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Lucro Líquido</text>
<text x="618" y="258" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#22c55e">R$ 5.500</text>
<text x="618" y="278" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">no bolso</text>

<!-- Barra de métricas -->
<rect x="20" y="306" width="680" height="130" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

<text x="100" y="340" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">Tráfego</text>
<text x="100" y="366" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">5.000</text>
<text x="100" y="384" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(255,255,255,0.3)">visitantes</text>

<line x1="172" y1="316" x2="172" y2="436" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

<text x="236" y="340" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">Conv. Leads</text>
<text x="236" y="366" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">30%</text>
<text x="236" y="384" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(255,255,255,0.3)">1.500 leads</text>

<line x1="300" y1="316" x2="300" y2="436" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

<text x="360" y="340" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">Conv. Vendas</text>
<text x="360" y="366" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">2,5%</text>
<text x="360" y="384" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(255,255,255,0.3)">38 vendas</text>

<line x1="420" y1="316" x2="420" y2="436" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

<text x="480" y="340" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">Ticket Médio</text>
<text x="480" y="366" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">R$ 250</text>
<text x="480" y="384" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(255,255,255,0.3)">por venda</text>

<line x1="542" y1="316" x2="542" y2="436" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

<text x="612" y="340" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">CPA</text>
<text x="612" y="366" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#f97316">R$ 52</text>
<text x="612" y="384" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(255,255,255,0.3)">por cliente</text>

<line x1="680" y1="316" x2="680" y2="436" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
`);

// ─── 8. Análise de Custos ─────────────────────────────────────────────────────
const costItems = [
  { label: 'Anúncios / Tráfego', val: 1000, pct: 1000 / 1500 },
  { label: 'Ferramentas / Software', val: 350,  pct: 350  / 1500 },
  { label: 'Outros Custos', val: 150,  pct: 150  / 1500 },
];
const bX = 220, bY = 96, bW = 420, bH = 54, bGap = 22;
const opacities = [1, 0.75, 0.5];

const costBars = costItems.map((c, i) => {
  const y = bY + i * (bH + bGap);
  const w = Math.round(c.pct * bW);
  const op = opacities[i];
  return `<text x="${bX - 12}" y="${y + bH / 2 + 5}" text-anchor="end" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.75)">${c.label}</text>
<rect x="${bX}" y="${y}" width="${bW}" height="${bH}" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
<rect x="${bX}" y="${y}" width="${w}" height="${bH}" rx="6" fill="#f97316" fill-opacity="${op}"/>
<text x="${bX + w + 12}" y="${y + bH / 2 + 6}" font-family="sans-serif" font-size="14" font-weight="700" fill="white">R$ ${c.val.toLocaleString('pt-BR')}</text>`;
}).join('\n');

const svg8 = wrap(`
${bar('Análise de Custos')}

${costBars}

<text x="360" y="282" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.35)">Custo por Etapa do Funil</text>

<!-- Cards de resumo -->
<rect x="20" y="298" width="330" height="116" rx="12" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.28)" stroke-width="1"/>
<text x="185" y="332" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Investimento Total</text>
<text x="185" y="382" text-anchor="middle" font-family="sans-serif" font-size="38" font-weight="700" fill="white">R$ 1.500</text>
<text x="185" y="404" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.35)">por mês</text>

<rect x="370" y="298" width="330" height="116" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="535" y="332" text-anchor="middle" font-family="sans-serif" font-size="12" fill="rgba(255,255,255,0.55)">Custo por Lead</text>
<text x="535" y="382" text-anchor="middle" font-family="sans-serif" font-size="38" font-weight="700" fill="#f97316">R$ 0,50</text>
<text x="535" y="404" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.35)">com 3.000 leads/mês</text>

<rect x="20" y="432" width="680" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
<text x="360" y="454" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.3)">Anúncios 66,7% · Software 23,3% · Outros 10,0% · Total: R$ 1.500/mês</text>
`);

// ─── Converter e salvar ───────────────────────────────────────────────────────
const images = [
  { name: 'diagrama-mapa-funil', svg: svg1 },
  { name: 'resumo-projeto',      svg: svg2 },
  { name: 'meta-lucro-sonhos',   svg: svg3 },
  { name: 'reinvestimento-trafego', svg: svg4 },
  { name: 'comparacao-cenarios', svg: svg5 },
  { name: 'funil-exemplo',       svg: svg6 },
  { name: 'simulate',            svg: svg7 },
  { name: 'add-expensives',      svg: svg8 },
];

async function run() {
  for (const img of images) {
    const outPath = join(OUT, `${img.name}.webp`);
    await sharp(Buffer.from(img.svg))
      .resize(W, H)
      .webp({ quality: 90 })
      .toFile(outPath);
    console.log(`✓ ${img.name}.webp`);
  }
  console.log('\n✅ 8 imagens geradas em public/img/services/');
}

run().catch(err => { console.error(err); process.exit(1); });
