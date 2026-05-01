import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const steps = [
  {
    num: "ENVIO",
    dot: "1",
    title: "O sistema envia o evento",
    desc: "Transações, créditos, documentos: qualquer evento crítico via API REST.",
  },
  {
    num: "HASH",
    dot: "2",
    title: "Geramos a prova criptográfica",
    desc: "SHA-256 converte o evento em uma impressão digital única e irreversível.",
  },
  {
    num: "REGISTRO",
    dot: "3",
    title: "Gravamos na blockchain",
    desc: "A prova é publicada em rede pública, verificável por qualquer parte, para sempre.",
  },
  {
    num: "AUDITORIA",
    dot: "4",
    title: "Visualização completa no dashboard",
    desc: "Consulta, exportação e compartilhamento de provas. Reguladores e clientes validam de forma independente.",
  },
];

export function ComoFunciona() {
  return (
    <Section bg="cream" id="como-funciona">
      <Container>
        <SectionHead>
          <Eyebrow>03 · Como funciona</Eyebrow>
          <h2>Quatro etapas, zero fricção</h2>
          <p>
            Do sistema ao dashboard de auditoria em menos de dois segundos. Sem necessidade de conhecimento em
            blockchain; toda a complexidade é abstraída pela plataforma.
          </p>
        </SectionHead>

        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[768px]:!grid-cols-1 gap-4 mt-4">
          {steps.map((s) => (
            <div
              key={s.dot}
              className="px-[26px] py-8 rounded-2xl bg-white border border-line relative min-h-[220px] shadow-card"
            >
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#06081a] grid place-items-center font-display font-semibold text-white text-sm">
                {s.dot}
              </div>
              <div className="font-mono text-[11px] tracking-[.15em] text-accent">{s.num}</div>
              <div className="mt-4 font-display text-[19px] font-medium text-ink -tracking-[.02em] leading-[1.05]">
                {s.title}
              </div>
              <p className="mt-2.5 text-[13.5px] leading-[1.55]">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
