import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const features = [
  {
    title: "Registro imutável",
    desc: "Uma vez gravado, o evento não pode ser alterado por ninguém, sem exceção.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
        <rect x="5" y="11" width="14" height="10" rx="1" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Prova criptográfica (hash)",
    desc: "SHA-256 gera a impressão digital única de cada evento; dados sensíveis nunca saem do ambiente da operação.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Auditoria em tempo real",
    desc: "Clientes, reguladores e equipes internas consultam provas sem intermediários.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    ),
  },
  {
    title: "Integração via API REST",
    desc: "Três linhas de código. A stack existente não muda. A equipe não precisa aprender blockchain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
        <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      </svg>
    ),
  },
];

export function Solucao() {
  return (
    <Section bg="sky" id="solucao">
      <Container>
        <div className="grid grid-cols-[1.15fr_1fr] max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-10 items-center">
          <div>
            <Eyebrow>02 · Solução</Eyebrow>
            <h2 className="mt-4">
              Integre uma vez.
              <br />
              <span className="grad-text-blue">Prove para sempre.</span>
            </h2>
            <p className="mt-5 text-[17px] max-w-[520px]">
              A T-STACK registra eventos críticos de qualquer operação em blockchain e garante que
              não possam ser alterados, com auditoria verificável a qualquer momento, por qualquer
              parte.
            </p>

            <div className="flex flex-col mt-9">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex gap-[18px] items-start py-5 ${
                    i === 0 ? "" : "border-t border-line"
                  } ${i === 0 ? "pt-0" : ""}`}
                >
                  <div className="feature-icon-bg flex-none w-10 h-10 rounded-[10px] grid place-items-center">
                    <span className="block w-[18px] h-[18px]">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-medium mb-1">{f.title}</h4>
                    <p className="text-[14.5px]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shield visual */}
          <div className="shield-glow relative aspect-square rounded-3xl grid place-items-center">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="solGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#AED8FD" stopOpacity=".06" />
                  <stop offset="100%" stopColor="#AED8FD" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="190" fill="url(#solGlow)" />
              <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(0,36,174,.10)" strokeWidth={1} strokeDasharray="3 5" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(0,36,174,.13)" strokeWidth={1} strokeDasharray="3 5" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(0,36,174,.18)" strokeWidth={1} strokeDasharray="3 5" />
              <circle cx="200" cy="30" r="3" fill="#AED8FD" opacity=".7" />
              <circle cx="370" cy="200" r="3" fill="#60B4FB" opacity=".7" />
              <circle cx="200" cy="370" r="3" fill="#0095F8" opacity=".7" />
              <circle cx="30" cy="200" r="3" fill="#89C3FB" opacity=".7" />
              <circle cx="316" cy="84" r="2.5" fill="#AED8FD" opacity=".5" />
              <circle cx="84" cy="316" r="2.5" fill="#60B4FB" opacity=".5" />
              <g transform="translate(98.5, 91.5) scale(1.40)">
                <path d="M5 78V41.5L34.975 60.175L5 78Z" fill="#60B4FB" />
                <path d="M140 113V78L109.3 97.15L140 113Z" fill="#0063F3" />
                <path d="M7.5 37.5278L70 1.44338C71.547 0.550212 73.453 0.55021 75 1.44337L137.5 37.5278C140.833 39.4523 140.833 44.2635 137.5 46.188L75 82.2724C73.453 83.1656 71.547 83.1656 70 82.2724L7.5 46.188C4.16667 44.2635 4.16667 39.4523 7.5 37.5278Z" fill="#AED8FD" />
                <path d="M7.5 73.7778L70 37.6934C71.547 36.8002 73.453 36.8002 75 37.6934L137.5 73.7778C140.833 75.7023 140.833 80.5135 137.5 82.438L75 118.522C73.453 119.416 71.547 119.416 70 118.522L7.5 82.438C4.16667 80.5135 4.16667 75.7023 7.5 73.7778Z" fill="#0095F8" />
                <path fillRule="evenodd" clipRule="evenodd" d="M70.0005 37.6929C71.5474 36.8 73.4536 36.7999 75.0005 37.6929L113.607 59.982L75.0005 82.272C73.4536 83.1651 71.5474 83.165 70.0005 82.272L31.3931 59.982L70.0005 37.6929Z" fill="#89C3FB" />
                <path d="M7.5 108.578L70 72.4934C71.547 71.6002 73.453 71.6002 75 72.4934L137.5 108.578C140.833 110.502 140.833 115.314 137.5 117.238L75 153.322C73.453 154.216 71.547 154.216 70 153.322L7.5 117.238C4.16667 115.314 4.16667 110.502 7.5 108.578Z" fill="#0024AE" />
                <path d="M70.0004 72.4932C71.5473 71.6002 73.4535 71.6001 75.0004 72.4932L114.863 95.5078L75.0004 118.522C73.4534 119.416 71.5473 119.415 70.0004 118.522L30.1371 95.5078L70.0004 72.4932Z" fill="#005DF9" />
                <path fillRule="evenodd" clipRule="evenodd" d="M69.9999 72.493C71.5468 71.5999 73.4529 71.6 74.9999 72.493L83.4686 77.3826L75.0009 82.2723C73.4541 83.1653 71.5477 83.1651 70.0009 82.2723L61.5311 77.3816L69.9999 72.493Z" fill="#51ABEF" />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
