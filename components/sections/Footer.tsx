"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { TStackLogo } from "../ui/TStackLogo";

const cols = [
  {
    title: "Produto",
    links: [
      { href: "#solucao", label: "Solução" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#casos", label: "Casos de uso" },
      { href: "#custo", label: "Preço" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "#", label: "Documentação" },
      { href: "#", label: "API Reference" },
      { href: "#", label: "Status" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#", label: "Sobre" },
      { href: "#", label: "Segurança" },
      { href: "#", label: "Privacidade" },
      { href: "#contato", label: "Contato" },
    ],
  },
];

export function Footer() {
  const [openCol, setOpenCol] = useState<number | null>(null);

  return (
    <footer className="py-[60px] pb-10 max-[768px]:py-10 bg-bg-mist border-t border-line">
      <Container>
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[768px]:!grid-cols-1 gap-10 max-[768px]:!gap-0 pb-[50px] max-[768px]:!pb-0">
          {/* logo + tagline col */}
          <div className="max-[768px]:w-full max-[768px]:pb-9">
            <a href="#" className="flex items-center gap-2.5 text-ink no-underline" aria-label="T-STACK">
              <TStackLogo className="h-[26px] w-auto block" />
            </a>
            <p className="text-[13.5px] mt-3.5 max-w-[280px] text-muted">
              Infraestrutura white-label para provas imutáveis e inteligência auditável.
            </p>
          </div>

          {cols.map((col, idx) => {
            const open = openCol === idx;
            return (
              <div key={col.title} className={`foot-col-collapsible ${open ? "open" : ""}`}>
                <h5
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth <= 768) {
                      setOpenCol(open ? null : idx);
                    }
                  }}
                  className="font-mono text-[11px] uppercase tracking-[.15em] text-muted-2 m-0 mb-[18px] font-medium"
                >
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-muted no-underline text-sm py-1.5 transition-colors duration-200 hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            );
          })}
        </div>

        <div className="pt-[26px] max-[768px]:pt-9 border-t border-line flex justify-between text-[12.5px] text-muted-2 flex-wrap gap-4">
          <span>© 2026 T-STACK · Todos os direitos reservados</span>
          <span className="font-mono">SHA-256 · POLYGON · WHITE-LABEL</span>
        </div>
      </Container>
    </footer>
  );
}
