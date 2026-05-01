import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const items = [
  {
    n: "01",
    title: "White-label nativo",
    desc: "Deployment sob marca, domínio e identidade próprios. Os clientes finais interagem com a marca do parceiro, sem nenhuma referência à T-STACK.",
  },
  {
    n: "02",
    title: "Integração em minutos",
    desc: "API REST limpa, SDKs opcionais, documentação em português. Do primeiro hash à produção em um sprint.",
  },
  {
    n: "03",
    title: "Sem curva cripto",
    desc: "A equipe não precisa saber o que é uma wallet, gas ou smart contract. Blockchain vira detalhe de infraestrutura.",
  },
  {
    n: "04",
    title: "IA integrada, não vendida à parte",
    desc: "Detecção de anomalias, previsão e insights acionáveis sobre os mesmos dados auditáveis. No mesmo preço.",
  },
  {
    n: "05",
    title: "Alta performance",
    desc: "Pipeline assíncrono com confirmação em segundos e capacidade de milhões de eventos por dia.",
  },
  {
    n: "06",
    title: "Pronto para compliance",
    desc: "Relatórios auditáveis para LGPD, SOX, ISO e exigências setoriais, gerados em um clique.",
  },
];

export function Diferenciais() {
  return (
    <Section bg="white">
      <Container>
        <SectionHead>
          <Eyebrow>07 · Diferenciais</Eyebrow>
          <h2>
            Construído para
            <br />
            <span className="grad-text-blue">quem não aceita ambiguidade.</span>
          </h2>
        </SectionHead>

        <div className="grid grid-cols-2 max-[700px]:grid-cols-1 border border-line rounded-3xl overflow-hidden bg-white">
          {items.map((it, i) => {
            const isLastTwo = i >= items.length - 2;
            const isEven = (i + 1) % 2 === 0;
            return (
              <div
                key={it.n}
                className={`px-10 py-9 flex flex-col gap-2.5 ${
                  isLastTwo ? "max-[700px]:border-b max-[700px]:border-line" : "border-b border-line"
                } ${isEven ? "" : "border-r border-line max-[700px]:border-r-0"} ${
                  i === items.length - 1 ? "max-[700px]:!border-b-0" : ""
                }`}
              >
                <div className="font-mono text-[11px] tracking-[.15em] text-muted-2">{it.n}</div>
                <h4 className="text-[19px] font-medium leading-[1.2] -tracking-[.02em]">
                  {it.title}
                </h4>
                <p className="text-sm leading-[1.6] max-w-[340px]">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
