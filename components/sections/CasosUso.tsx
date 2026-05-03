"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const cases = [
  {
    num: "01 · ENERGIA",
    title: (
      <>
        Créditos energéticos
        <br />
        rastreáveis
      </>
    ),
    desc: "Prove a origem, o caminho e o destino de cada kWh registrado, com certificação ESG verificável.",
    items: [
      "Rastreabilidade de créditos energéticos",
      "Certificação de origem (ESG)",
      "Auditoria de consumo em tempo real",
      "Detecção de anomalias em distribuição",
    ],
  },
  {
    num: "02 · FINANCEIRO",
    title: (
      <>
        Reconciliação
        <br />à prova de fraude
      </>
    ),
    desc: "Cada transação vira prova independente, reduzindo disputas, perdas e o custo de conformidade.",
    items: [
      "Conciliação imutável entre sistemas",
      "Registro auditável de transações",
      "Prova contra fraudes e estornos",
      "Detecção automática de inconsistências",
    ],
  },
  {
    num: "03 · LOGÍSTICA",
    title: (
      <>
        Cadeia de custódia
        <br />
        que nunca mente
      </>
    ),
    desc: "Cada passagem, escaneamento e troca de responsável registrada, com análise de desvios embutida.",
    items: [
      "Rastreamento de eventos por etapa",
      "Cadeia de custódia verificável",
      "Análise inteligente de desvios",
      "Prova para clientes e seguradoras",
    ],
  },
  {
    num: "04 · DOCUMENTOS",
    title: (
      <>
        Assinatura digital
        <br />
        com integridade perpétua
      </>
    ),
    desc: "Prove que um documento existia em determinada data e não foi alterado desde então, sem necessidade de cartório.",
    items: [
      "Assinatura digital verificável",
      "Prova de integridade perpétua",
      "Timestamp público imutável",
      "Validação automatizada em lote",
    ],
  },
];

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 2L4 7l5 5" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M5 2l5 5-5 5" />
    </svg>
  );
}

function getMode() {
  if (typeof window === "undefined") return "desktop" as const;
  if (window.innerWidth <= 768) return "mobile" as const;
  if (window.innerWidth <= 1024) return "tablet" as const;
  return "desktop" as const;
}

export function CasosUso() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(2);

  useEffect(() => {
    function recompute() {
      const mode = getMode();
      const pages = mode === "mobile" ? 4 : 2; // tablet=2, desktop=2
      setTotalPages(pages);
      setPage(0);
      const t = trackRef.current;
      if (t) t.scrollTo({ left: 0, behavior: "auto" });
    }
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  function getPageWidth() {
    const t = trackRef.current;
    if (!t) return 0;
    const card = t.querySelector(".case-card") as HTMLElement | null;
    if (!card) return t.clientWidth;
    const mode = getMode();
    if (mode === "mobile") return t.clientWidth;
    const cardW = card.getBoundingClientRect().width;
    if (mode === "tablet") return (cardW + 20) * 2;
    return (cardW + 20) * 3;
  }

  function goTo(p: number) {
    const next = Math.max(0, Math.min(p, totalPages - 1));
    setPage(next);
    const t = trackRef.current;
    if (!t) return;
    t.scrollTo({ left: next * getPageWidth(), behavior: "smooth" });
  }

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let timer: ReturnType<typeof setTimeout>;
    function onScroll() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const pw = getPageWidth();
        const p = pw > 0 ? Math.round(t!.scrollLeft / pw) : 0;
        setPage(Math.min(p, totalPages - 1));
      }, 80);
    }
    t.addEventListener("scroll", onScroll);
    return () => {
      t.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [totalPages]);

  return (
    <Section bg="cream" id="casos">
      <Container>
        <SectionHead>
          <Eyebrow>06 · Casos de uso</Eyebrow>
          <h2>
            Uma plataforma.
            <br />
            Indústrias transformadas.
          </h2>
          <p>
            Onde há dado crítico, cobrança disputada ou auditoria exigida, a <i>t.stack</i> entrega prova antes da
            pergunta ser feita.
          </p>
        </SectionHead>

        <div className="relative">
          <div ref={trackRef} className="cases-track flex gap-5 overflow-x-auto py-2.5 pb-[30px] snap-x snap-mandatory">
            {cases.map((c, i) => (
              <article
                key={i}
                className="case-card flex-none basis-[calc((100%-40px)/3)] min-w-[280px] max-[1024px]:min-[765px]:!basis-[calc((100%-20px)/2)] max-[1024px]:min-[765px]:!min-w-0 max-[768px]:!basis-full p-[34px] rounded-2xl border border-line bg-white snap-start flex flex-col min-h-[440px] relative overflow-hidden transition-all duration-300 shadow-card"
              >
                <div className="font-mono text-[11px] text-muted-2 tracking-[.15em] relative">{c.num}</div>
                <div className="mt-4 font-display text-[28px] font-medium -tracking-[.02em] relative leading-[1.1] text-ink">
                  {c.title}
                </div>
                <p className="mt-3.5 text-[14.5px] text-muted relative">{c.desc}</p>
                <div className="mt-auto pt-7 flex flex-col gap-2.5 relative">
                  {c.items.map((it) => (
                    <div key={it} className="case-item flex gap-2.5 text-sm text-ink-2 items-start">
                      <span className="grow">{it}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="flex gap-2.5 items-center justify-end mt-3">
            <div className="flex gap-1.5 mr-auto">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-6 h-[3px] rounded-sm transition-colors duration-300 cursor-pointer ${
                    i === page ? "bg-accent" : "bg-line-strong"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(page - 1)}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-line-strong bg-white text-ink cursor-pointer grid place-items-center transition-all duration-200 hover:bg-bg-cream hover:border-muted-2 shadow-card"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full border border-line-strong bg-white text-ink cursor-pointer grid place-items-center transition-all duration-200 hover:bg-bg-cream hover:border-muted-2 shadow-card"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
