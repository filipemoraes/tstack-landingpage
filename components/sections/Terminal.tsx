"use client";

import { useEffect, useRef } from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

type Step =
  | { t: "prompt" | "cmd" | "out" | "ok"; txt: string; delay: number }
  | { t: "json"; delay: number }
  | { t: "cursor"; delay: 0 };

const script: Step[] = [
  { t: "prompt", txt: "$ ", delay: 200 },
  {
    t: "cmd",
    txt: 'curl -X POST https://api.tstack.io/v1/events \\\n    -H "Authorization: Bearer sk_live_••••" \\\n    -d \'{"event":"credito.emitido","ref":"#48291"}\'\n',
    delay: 1200,
  },
  { t: "out", txt: "\n→ Gerando criptografia EVM...\n", delay: 600 },
  { t: "out", txt: "→ Submetendo à blockchain...\n", delay: 900 },
  { t: "out", txt: "→ Aguardando confirmação de bloco...\n", delay: 800 },
  { t: "ok", txt: "\n✓ Evento registrado · imutável\n", delay: 400 },
  { t: "json", delay: 300 },
  { t: "prompt", txt: "\n$ ", delay: 600 },
  { t: "cursor", delay: 0 },
];

const jsonLines = [
  "{",
  '  "id": "evt_8fa3e21c4d",',
  '  "hash": "0x8fa3e21c4d9b2af08c31...",',
  '  "block": 62841203,',
  '  "chain": "polygon",',
  '  "status": "OK",',
  '  "timestamp": "2026-04-17T18:24:03Z",',
  '  "verify_url": "https://verify.tstack.io/0x8fa3..."',
  "}",
];

export function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    async function runTyping() {
      if (!body) return;
      body.innerHTML = "";
      for (const step of script) {
        if (step.t === "cursor") {
          const c = document.createElement("span");
          c.className = "term-cursor";
          body.appendChild(c);
          break;
        }
        await new Promise((r) => setTimeout(r, step.delay));
        const line = document.createElement("span");
        line.className = "block whitespace-pre-wrap break-all";
        if (step.t === "prompt") line.innerHTML = `<span class="text-c-300">${step.txt}</span>`;
        else if (step.t === "cmd") line.innerHTML = `<span class="text-[#E8EEF7]">${step.txt}</span>`;
        else if (step.t === "out") line.innerHTML = `<span class="text-[#8A97B0]">${step.txt}</span>`;
        else if (step.t === "ok") line.innerHTML = `<span class="text-[#6DE3A0]">${step.txt}</span>`;
        else if (step.t === "json") {
          for (const jl of jsonLines) {
            const colored = jl
              .replace(/"(\w+)":/g, '<span class="text-c-300">"$1"</span>:')
              .replace(/: "([^"]+)"/g, ': <span class="text-[#9CE5B5]">"$1"</span>')
              .replace(/: (\d+)/g, ': <span class="text-[#9CE5B5]">$1</span>');
            line.innerHTML += `<span class="block whitespace-pre-wrap break-all text-[#8A97B0]">${colored}</span>`;
          }
        }
        body.appendChild(line);
      }
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            runTyping();
            intervalRef.current = setInterval(runTyping, 14000);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(body);

    return () => {
      obs.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Section bg="ink" id="demo" tight>
      <Container>
        <div className="grid grid-cols-[1fr_1.15fr] max-[900px]:grid-cols-1 gap-12 items-center">
          <div>
            <Eyebrow className="!text-c-300">04 · Integração</Eyebrow>
            <h2 className="mt-4">
              Três linhas de código.
              <br />
              <span className="grad-text-light">Imutabilidade para sempre.</span>
            </h2>
            <p className="mt-5 text-[17px] max-w-[460px] !text-[#A8B2CC] max-[768px]:!text-base">
              Uma única chamada POST. Sem SDKs obrigatórios, sem dependências exóticas, sem necessidade de aprender
              Solidity. A stack existente permanece intacta, agora à prova de adulteração.
            </p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button href="#contato" variant="primary">
                Testar API grátis
              </Button>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full font-sans text-[14.5px] font-medium no-underline cursor-pointer h-11 px-5 text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                Ver documentação
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl bg-[#0A1330] overflow-hidden font-mono text-[13px] border border-[#1A2350]"
            style={{
              boxShadow: "0 30px 60px -20px rgba(10,19,48,0.3), 0 0 40px -10px rgba(0,149,248,0.3)",
            }}
          >
            <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/10 text-[11px] text-white/40 uppercase tracking-[.1em]">
              <div className="flex gap-1.5 mr-3">
                <span className="w-[9px] h-[9px] rounded-full bg-white/10" />
                <span className="w-[9px] h-[9px] rounded-full bg-white/10" />
                <span className="w-[9px] h-[9px] rounded-full bg-white/10" />
              </div>
              <span>terminal · curl</span>
            </div>
            <div ref={bodyRef} className="p-5 h-[550px] overflow-hidden leading-[1.8] text-[#E8EEF7]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
