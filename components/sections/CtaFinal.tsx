"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

export function CtaFinal() {
  return (
    <Section bg="cream" id="contato">
      <Container>
        <div className="cta-final-bg relative rounded-3xl px-[60px] py-20 max-[700px]:px-7 max-[700px]:py-14 overflow-hidden text-center border border-white/10">
          <Eyebrow className="!text-c-300">12 · Começar</Eyebrow>
          <h2 className="max-w-[720px] mx-auto mt-5" style={{ color: "white" }}>
            Infraestrutura de confiança
            <br />
            para sistemas críticos.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-lg" style={{ color: "#A8B2CC" }}>
            Agende uma demo de 30 minutos. O primeiro evento imutável é registrado ainda durante a conversa.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
              alert("Obrigado! Entraremos em contato em breve.");
            }}
            className="mx-auto mt-10 max-w-[480px] flex flex-col gap-3 text-left"
          >
            <div className="flex gap-2.5 max-[768px]:flex-col">
              <input
                className="h-12 bg-white/[.06] border border-white/[.12] rounded-[10px] text-white px-4 font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-c-300 focus:bg-white/10 placeholder:text-white/40 w-full"
                placeholder="Nome"
                required
              />
              <input
                className="h-12 bg-white/[.06] border border-white/[.12] rounded-[10px] text-white px-4 font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-c-300 focus:bg-white/10 placeholder:text-white/40 w-full"
                placeholder="Empresa"
                required
              />
            </div>
            <input
              type="email"
              className="h-12 bg-white/[.06] border border-white/[.12] rounded-[10px] text-white px-4 font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-c-300 focus:bg-white/10 placeholder:text-white/40 w-full"
              placeholder="E-mail corporativo"
              required
            />
            <input
              className="h-12 bg-white/[.06] border border-white/[.12] rounded-[10px] text-white px-4 font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-c-300 focus:bg-white/10 placeholder:text-white/40 w-full"
              placeholder="Telefone (opcional)"
            />
            <textarea
              className="bg-white/[.06] border border-white/[.12] rounded-[10px] text-white px-4 py-3.5 font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-c-300 focus:bg-white/10 placeholder:text-white/40 w-full resize-y min-h-[100px]"
              placeholder="Conte brevemente seu caso de uso"
            />
            <Button type="submit" variant="primary" className="self-stretch !justify-center">
              Solicitar demo <span>→</span>
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
