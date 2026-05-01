import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

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

const standardItems = [
  "Cobrança por transação registrada",
  "Dashboard white-label incluído",
  "Sem custo de infraestrutura",
  "Escala automática com seu uso",
];

const enterpriseItems = [
  "Volume comprometido · pricing negociado",
  "Private chain opcional",
  "SLA 99.99% + suporte 24/7",
  "Integração dedicada",
  "Auditoria e compliance assinados",
  "Escala automática com seu uso",
];

export function Preco() {
  return (
    <Section bg="ink" id="custo">
      <Container>
        <SectionHead>
          <Eyebrow className="!text-c-300">08 · Preço</Eyebrow>
          <h2>
            Pague pelo que usa.
            <br />
            <span className="grad-text-light">Cresça sem surpresas.</span>
          </h2>
          <p>
            Sem setup, sem mínimos, sem infraestrutura para manter. A operação registra; a
            plataforma prova.
          </p>
        </SectionHead>

        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-5">
          {/* Standard */}
          <div className="p-11 max-[700px]:p-7 rounded-3xl border border-white/10 bg-white/[.04] relative overflow-hidden min-h-[380px] flex flex-col shadow-card">
            <Eyebrow className="!text-c-300">Standard</Eyebrow>
            <h3 className="text-white mt-[18px]">
              Simples, previsível,
              <br />
              escalável por design
            </h3>
            <p className="text-[#A8B2CC] mt-3.5">
              Cobrança apenas pelo que é registrado. Ideal para operações que crescem no próprio
              ritmo.
            </p>

            <div className="mt-8">
              <div className="mt-2 flex items-baseline gap-2.5">
                <span
                  className="text-white font-display font-bold leading-none"
                  style={{ fontSize: 80, letterSpacing: "-.05em" }}
                >
                  R$ 0,02
                </span>
                <span className="text-base text-[#A8B2CC] font-normal">/ evento registrado</span>
              </div>
            </div>

            <ul className="mt-7 flex-1 flex flex-col gap-0.5 list-none p-0">
              {standardItems.map((it, i) => (
                <li
                  key={it}
                  className={`py-3 flex gap-3 items-center text-[14.5px] !text-[#E8EEF7] ${
                    i === 0 ? "" : "border-t border-white/10"
                  }`}
                >
                  <CheckIcon className="text-c-100" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full font-sans text-[14.5px] font-medium no-underline cursor-pointer h-11 px-5 bg-white text-ink border border-white/30 shadow-[0_2px_8px_rgba(0,0,0,.15)] hover:bg-white/90 transition-all duration-200"
              >
                Começar agora →
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="p-11 max-[700px]:p-7 rounded-3xl border border-white/10 bg-[#06081a] relative overflow-hidden min-h-[380px] flex flex-col shadow-card">
            <Eyebrow className="!text-c-300">Enterprise</Eyebrow>
            <h3 className="text-white mt-[18px]">
              Sob medida para
              <br />
              grandes operações
            </h3>
            <p className="text-[#A8B2CC] mt-3.5 text-[15px]">
              Volumes a partir de 5M eventos/mês, rede privada, SLA dedicado e compliance assinado
              por auditores especializados.
            </p>

            <ul className="mt-7 flex-1 flex flex-col gap-0.5 list-none p-0">
              {enterpriseItems.map((it, i) => (
                <li
                  key={it}
                  className={`py-3 flex gap-3 items-center text-[14.5px] !text-[#E8EEF7] ${
                    i === 0 ? "" : "border-t border-white/10"
                  }`}
                >
                  <CheckIcon className="text-c-100" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contato" variant="primary">
                Falar com especialista →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
