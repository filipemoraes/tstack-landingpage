import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const segurancaItems = [
  "Criptografia EVM",
  "Blockchain pública (Polygon)",
  "Dados sensíveis nunca expostos",
  "Apenas a prova é registrada on-chain",
  "Análises sobre dados íntegros",
];

const compliances = ["SOC 2", "LGPD", "GDPR", "ISO"];

const esgRows = [
  {
    title: "Transparência verificável",
    desc: "Clientes e parceiros auditam de forma independente, sem depender de declarações unilaterais.",
  },
  {
    title: "Auditorias em horas, não meses",
    desc: "Exportação direta da trilha completa de provas, pronta para auditor externo.",
  },
  {
    title: "Prontos para regulação futura",
    desc: "Exigências de rastreabilidade só aumentam. Quem adota antes sai na frente.",
  },
  {
    title: "Relatórios inteligentes",
    desc: "IA gera sumários auditáveis sobre dados que não podem ter sido alterados.",
  },
];

export function SegurancaEsg() {
  return (
    <Section bg="cream" id="seguranca">
      <Container>
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-5">
          {/* Segurança */}
          <div className="p-11 max-[700px]:p-7 rounded-3xl border border-line bg-white relative overflow-hidden min-h-[380px] shadow-card">
            <Eyebrow>09 · Segurança</Eyebrow>
            <h3 className="mt-[18px]">
              Segurança de nível
              <br />
              empresarial, por padrão
            </h3>
            <p className="mt-3.5 text-[15px] max-w-[420px] text-muted">
              Os dados sensíveis permanecem no ambiente da operação. A <i>t.stack</i> registra apenas a prova, nunca o
              conteúdo original.
            </p>
            <ul className="mt-7 flex flex-col gap-0.5 list-none p-0">
              {segurancaItems.map((it, i) => (
                <li
                  key={it}
                  className={`py-3 flex gap-3 items-center text-[14.5px] text-ink ${
                    i === 0 ? "" : "border-t border-line"
                  }`}
                >
                  <CheckIcon className="text-c-800" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-2 flex-wrap">
              {compliances.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-line-strong bg-white font-sans text-xs font-medium tracking-[.02em] text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* ESG */}
          <div className="p-11 max-[700px]:p-7 rounded-3xl border border-line bg-white relative overflow-hidden min-h-[380px] shadow-card">
            <Eyebrow>10 · ESG &amp; Compliance</Eyebrow>
            <h3 className="mt-[18px]">
              Origem e integridade,
              <br />
              <span className="grad-text-blue">comprovadas.</span>
            </h3>
            <div className="mt-5 grid">
              {esgRows.map((r, i) => (
                <div
                  key={r.title}
                  className={`grid grid-cols-[auto_1fr] gap-[18px] py-[18px] ${i === 0 ? "" : "border-t border-line"}`}
                >
                  <CheckIcon className="text-c-800 mt-1" />
                  <div>
                    <strong className="block mb-1 font-medium text-ink text-base">{r.title}</strong>
                    <span className="text-muted text-[14.5px]">{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
