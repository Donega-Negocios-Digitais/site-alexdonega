import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12;

const blocks = [
  {
    imgUrl: "/img/services/diagrama-mapa-funil.webp",
    title: "Diagrama de Mapa de Funil",
    description: "Mapeamento visual profissional de todas as etapas do seu funil — da atração à conversão.",
    descriptionExtra: "Veja exatamente por onde seu cliente passa, quais ofertas aparecem em cada etapa e onde estão as oportunidades que você está deixando escapar.",
  },
  {
    imgUrl: "/img/services/resumo-projeto.webp",
    title: "Resumo do Projeto",
    description: "Visão consolidada de todas as suas previsões em um único painel.",
    descriptionExtra: "Receita, custo, lucro e métricas-chave organizadas para você entender o cenário completo do seu negócio em minutos.",
  },
  {
    imgUrl: "/img/services/meta-lucro-sonhos.webp",
    title: "Meta de Lucro dos Sonhos",
    description: "Descubra exatamente o que é necessário para chegar lá.",
    descriptionExtra: "Defina um valor-alvo e veja quantos clientes, tickets médios e taxa de conversão você precisa para atingir essa meta.",
  },
  {
    imgUrl: "/img/services/reinvestimento-trafego.webp",
    title: "Reinvestimento em Tráfego",
    description: "Gráfico de crescimento de receita e lucro ao longo dos meses.",
    descriptionExtra: "Entenda como reinvestir parte do lucro em anúncios pode criar um ciclo virtuoso de crescimento previsível e escalável.",
  },
  {
    imgUrl: "/img/services/comparacao-cenarios.webp",
    title: "Comparação de Cenários",
    description: "Pessimista, provável e otimista lado a lado.",
    descriptionExtra: "Prepare-se para o pior, confie no provável e sonhe com o otimista — sempre com números reais simulados para o seu negócio.",
  },
];

interface TextParallaxContentProps {
  imgUrl: string;
  title: string;
  description: string;
  descriptionExtra: string;
  index: number;
}

const TextParallaxContent = ({ imgUrl, title, description, descriptionExtra }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={title} />
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold text-white md:col-span-4" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>
          {title}
        </h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
            {description}
          </p>
          <p className="text-xl text-neutral-400 md:text-2xl">
            {descriptionExtra}
          </p>
        </div>
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/80"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading }: { heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>{heading}</p>
    </motion.div>
  );
};

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-[#0a0a0a]">
      {blocks.map((block, index) => (
        <TextParallaxContent
          key={block.imgUrl}
          imgUrl={block.imgUrl}
          title={block.title}
          description={block.description}
          descriptionExtra={block.descriptionExtra}
          index={index}
        />
      ))}
      <div className="mx-auto max-w-5xl px-4 pb-24 text-center">
        <p className="text-xl text-neutral-400 md:text-2xl">
          E esses são só os relatórios visuais.{" "}
          <a href="#pacote-completo" className="font-semibold text-orange-500 underline decoration-orange-500 underline-offset-4 transition-colors hover:text-orange-400">
            Veja abaixo tudo o que vem junto no pacote completo
          </a>{" "}
          &rarr;
        </p>
      </div>
    </div>
  );
};
