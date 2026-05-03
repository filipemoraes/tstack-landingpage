"use client";

import { useState } from "react";
import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const items = [
  {
    q: "Meus dados sensíveis vão parar na blockchain?",
    a: "Não. Nunca. A <i>t.stack</i> gera apenas o <em>hash</em> (SHA-256) dos eventos enviados. O dado original permanece 100% no ambiente da operação. O que fica on-chain é uma impressão digital irreversível; suficiente para provar integridade, incapaz de expor conteúdo.",
  },
  {
    q: "Preciso entender de blockchain para usar?",
    a: "Não. Basta uma chamada POST para a API REST com o evento. Hash, gas, confirmação de bloco e toda a complexidade on-chain são gerenciados pela plataforma. A equipe trabalha como sempre trabalhou.",
  },
  {
    q: "Em quanto tempo consigo integrar?",
    a: "Clientes típicos colocam a primeira chamada em produção no mesmo dia. Integrações completas, com dashboard white-label e webhooks, costumam levar de 3 a 10 dias úteis.",
  },
  {
    q: "Que blockchain vocês usam? E se ela mudar?",
    a: "Usamos Polygon por padrão: baixo custo, alta performance e finalidade em segundos. A arquitetura é multi-chain: podemos usar outras redes públicas sob demanda, sem que seu código precise mudar.",
  },
  {
    q: "A IA tem acesso aos meus dados?",
    a: "A IA opera sobre metadados e eventos explicitamente enviados. Nada é compartilhado com terceiros e nada é usado para treinar modelos externos. O escopo é totalmente controlado pela operação.",
  },
  {
    q: "Consigo provar um evento para um cliente ou auditor?",
    a: "Sim. Cada evento registrado gera um link público verificável na blockchain. Qualquer cliente, auditor ou regulador pode confirmar hash, bloco e timestamp de forma independente, sem depender da operação ou da <i>t.stack</i>.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section bg="white" id="faq">
      <Container style={{ maxWidth: 880 }}>
        <SectionHead
          className="!text-center !mx-auto !max-w-[640px] max-[768px]:!text-left max-[768px]:!ml-0"
          style={{ marginBottom: 60 }}
        >
          <Eyebrow>11 · Perguntas frequentes</Eyebrow>
          <h2 className="mt-4">
            Tudo que importa
            <br />
            saber antes de integrar
          </h2>
        </SectionHead>

        <div className="border-t border-line">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`faq-item border-b border-line ${open ? "open" : ""} ${
                  i === items.length - 1 ? "max-[768px]:!border-b-0" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full py-7 bg-transparent border-0 flex justify-between items-center gap-6 font-display text-[19px] font-medium text-ink cursor-pointer text-left -tracking-[.015em]"
                >
                  <span>{it.q}</span>
                  <span className="faq-plus w-[30px] h-[30px] flex-none rounded-full border border-line-strong bg-white grid place-items-center relative transition-all duration-300" />
                </button>
                <div className="faq-a">
                  <p className="text-[15.5px] leading-[1.65] max-w-[720px] text-muted" dangerouslySetInnerHTML={{ __html: it.a }} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
