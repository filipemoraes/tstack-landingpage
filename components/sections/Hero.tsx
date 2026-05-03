import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-white pt-[200px] pb-20 max-[768px]:pt-[120px] max-[768px]:pb-[50px]">
      {/* hero-bg: dark gradient inside frame */}
      <div className="hero-bg absolute inset-x-5 top-5 bottom-0 z-0 pointer-events-none overflow-hidden rounded-[24px] max-[768px]:inset-x-[10px] max-[768px]:top-[10px]">
        <svg
          className="hero-orbits absolute left-1/2 top-[60px] -translate-x-1/2 pointer-events-none opacity-[.35]"
          style={{ width: 1300, height: 1300 }}
          viewBox="-600 -600 1200 1200"
          aria-hidden
        >
          <circle cx="0" cy="0" r="260" />
          <circle cx="0" cy="0" r="400" />
          <circle cx="0" cy="0" r="540" />
        </svg>
      </div>

      <Container className="relative z-[2] !text-center !max-w-[920px]">
        <h1 style={{ color: "white" }} className="px-[20px] md:px-0 max-[768px]:px-[10px] max-[768px]:!text-left">
          Confiança imutável
          <br />
          <span className="grad-text-animated">para cada evento crítico</span>
        </h1>
        <p
          className="mt-7 leading-[1.55] max-w-[640px] mx-auto max-[768px]:!text-base px-[20px] md:px-0 max-[768px]:px-[10px] max-[768px]:!text-left"
          style={{ color: "#d9d9d9", fontSize: 20 }}
        >
          Registro de eventos críticos em blockchain com prova imutável. White-label, via API, com inteligência
          artificial sobre dados auditáveis, <strong>para empresas que não podem errar.</strong>
        </p>
        <div className="mt-10 flex gap-3.5 justify-center flex-wrap px-[20px] md:px-0 max-[768px]:px-0 max-[768px]:[&>*]:w-full max-[768px]:[&>*]:justify-center">
          <Button href="#contato" variant="primary">
            Solicitar demo <span>→</span>
          </Button>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 rounded-full font-sans text-[14.5px] font-medium no-underline cursor-pointer h-11 px-5 bg-white text-ink border border-white hover:bg-white/90 transition-all duration-200"
          >
            Ver como funciona
          </a>
        </div>

        <div className="mt-14 flex gap-8 justify-center text-[13px] text-muted-2 flex-wrap px-[20px] md:px-0 max-[768px]:px-[10px] max-[768px]:gap-x-[18px] max-[768px]:gap-y-[10px]">
          {["White-label", "API REST · 5 min para integrar", "Criptografia EVM", "IA nativa"].map((item) => (
            <span key={item} className="hero-meta-item inline-flex items-center gap-2">
              {item}
            </span>
          ))}
        </div>
      </Container>

      {/* hero preview dashboard — escondido no mobile */}
      <Container className="max-[768px]:hidden mt-20">
        <div
          className="relative z-[2] mx-auto max-w-[1160px] rounded-[24px] border border-line-strong bg-white p-2.5"
          style={{
            boxShadow:
              "0 1px 2px rgba(10,19,48,0.04), 0 40px 80px -30px rgba(0,93,249,0.25), 0 80px 120px -40px rgba(0,36,174,0.15)",
          }}
        >
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
