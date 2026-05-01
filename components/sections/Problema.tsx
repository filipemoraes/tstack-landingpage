import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const cards = [
  {
    n: "01",
    title: "Sistemas internos podem ser alterados",
    desc: "Logs e bancos de dados podem ser modificados retroativamente, intencionalmente ou não, sem rastro.",
  },
  {
    n: "02",
    title: "Auditorias consomem meses e orçamento",
    desc: "Consolidar provas, reconciliar planilhas e responder reguladores custa caro e trava a operação.",
  },
  {
    n: "03",
    title: "Clientes contestam dados e cobranças",
    desc: "Sem prova independente, toda disputa vira um impasse sem saída; a empresa quase sempre sai perdendo.",
  },
  {
    n: "04",
    title: "Falta de transparência gera risco",
    desc: "Parceiros, reguladores e investidores exigem prova verificável. Confiança subjetiva não sustenta mais contratos.",
  },
];

export function Problema() {
  return (
    <Section bg="white" id="problema">
      <Container>
        <SectionHead>
          <Eyebrow>01 · Problema</Eyebrow>
          <h2>Sem prova, toda operação crítica é uma vulnerabilidade.</h2>
          <p>
            Sistemas internos podem ser adulterados. Auditorias são caras. Clientes questionam. Num cenário onde cada
            transação precisa ser comprovada, a falta de transparência deixa de ser um detalhe operacional e vira risco
            de negócio.
          </p>
        </SectionHead>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[768px]:!grid-cols-1 gap-4">
          {cards.map((c) => (
            <div
              key={c.n}
              className="px-[26px] py-[30px] rounded-2xl border border-line bg-white min-h-[200px] flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong shadow-card"
            >
              <div className="font-mono text-xs text-muted-2 tracking-[.12em]">{c.n}</div>
              <h4 className="text-[17px] font-medium leading-[1.3]">{c.title}</h4>
              <p className="text-sm leading-[1.55]">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
