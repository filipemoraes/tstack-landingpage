import { Section, SectionHead } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

const items = [
  {
    n: "01",
    text: (
      <>
        <strong>Detecção em tempo real:</strong> fraudes, inconsistências e anomalias identificadas no momento do
        evento, não no relatório do mês.
      </>
    ),
  },
  {
    n: "02",
    text: (
      <>
        <strong>Análise preditiva de riscos:</strong> modelos treinados sobre dados auditáveis antecipam
        vulnerabilidades antes que se tornem problemas.
      </>
    ),
  },
  {
    n: "03",
    text: (
      <>
        <strong>Automação de controles:</strong> monitoramento contínuo que age autonomamente, bloqueando, alertando ou
        escalando conforme as regras do negócio.
      </>
    ),
  },
  {
    n: "04",
    text: (
      <>
        <strong>Relatórios inteligentes:</strong> geração automática de insights acionáveis, prontos para gestão,
        auditores e reguladores.
      </>
    ),
  },
  {
    n: "05",
    text: (
      <>
        <strong>Projeções operacionais:</strong> previsão de demanda, custo e performance com base em histórico imutável
        e verificável.
      </>
    ),
  },
];

export function IA() {
  return (
    <Section bg="ink" id="ia">
      <Container>
        <SectionHead>
          <Eyebrow className="!text-c-300">05 · Inteligência</Eyebrow>
          <h2>
            Dados auditáveis viram
            <br />
            <span className="grad-text-light">inteligência que protege</span>
          </h2>
          <p>
            A <i>t.stack</i> aplica IA diretamente sobre registros com prova de integridade. Cada insight, alerta e
            relatório gerado parte de dados que ninguém adulterou, sem exceção.
          </p>
        </SectionHead>

        <div className="grid grid-cols-[1.1fr_1fr] max-[900px]:grid-cols-1 gap-14 items-stretch">
          <div className="flex flex-col justify-center">
            <h3 className="max-w-[480px]">Inteligência que age antes do problema acontecer.</h3>
            <div className="mt-9 grid">
              {items.map((it, idx) => (
                <div
                  key={it.n}
                  className={`py-[18px] grid grid-cols-[36px_1fr] gap-3.5 items-baseline ${
                    idx < items.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-c-300">{it.n}</span>
                  <p className="!text-white text-[15.5px]">{it.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI insights card */}
          <div className="ai-card-bg p-8 rounded-2xl border border-white/10 flex flex-col gap-[18px]">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,.5)" }}>
              Insights gerados · ao vivo
            </span>

            {/* alert */}
            <div className="p-[18px] rounded-xl border border-[rgba(240,138,138,.25)] bg-[rgba(240,138,138,.06)]">
              <div className="flex justify-between items-center font-mono text-[11px] uppercase tracking-[.1em] text-[#F5A8A8] mb-2.5">
                <span>⚠ Risco antecipado</span>
                <span>há 2 min</span>
              </div>
              <p className="text-[14.5px] leading-[1.5] !text-white">
                Modelo preditivo detectou padrão de inconsistência no ponto{" "}
                <span className="font-mono text-c-300">#PT-84A21</span> — risco de fraude 87% acima da média; controle
                automático ativado.
              </p>
            </div>

            {/* good */}
            <div className="p-[18px] rounded-xl border border-[rgba(109,227,160,.22)] bg-[rgba(109,227,160,.05)]">
              <div className="flex justify-between items-center font-mono text-[11px] uppercase tracking-[.1em] text-[#7AE8A8] mb-2.5">
                <span>✓ Controle automatizado</span>
                <span>há 14 min</span>
              </div>
              <p className="text-[14.5px] leading-[1.5] !text-white">
                Regra de monitoramento acionada para transações acima de R$ 50k. 3 eventos bloqueados para revisão
                manual antes da liquidação.
              </p>
            </div>

            {/* default */}
            <div className="p-[18px] rounded-xl border border-white/10 bg-white/[.03]">
              <div className="flex justify-between items-center font-mono text-[11px] uppercase tracking-[.1em] text-white/50 mb-2.5">
                <span>
                  <span className="text-c-300">●</span> Relatório inteligente · gerado agora
                </span>
                <span>00:18</span>
              </div>
              <p className="text-[14.5px] leading-[1.5] !text-white">
                Insight para gestão: <strong className="text-white">redução de 23% no risco operacional</strong> vs mês
                anterior. Relatório pronto para auditoria exportado automaticamente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
