"use client";

import { useEffect, useState } from "react";
import { TStackLogo } from "./ui/TStackLogo";
import { Button } from "./ui/Button";

const links = [
  { href: "#solucao", label: "Solução" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#ia", label: "Inteligência" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#custo", label: "Preço" },
];

function NavInner({ variant }: { variant: "transparent" | "fixed" }) {
  const isFixed = variant === "fixed";
  const logoColor = isFixed ? "text-ink" : "text-white";
  const linksColor = isFixed ? "text-muted hover:[&_a:hover]:text-ink" : "text-white/75 hover:[&_a:hover]:text-white";

  return (
    <div className={`flex items-center justify-between ${isFixed ? "h-[60px] pl-5 pr-[11px]" : "h-[54px] px-10"}`}>
      <a href="#" className={`flex items-center gap-2.5 no-underline ${logoColor}`} aria-label="T-STACK">
        <TStackLogo className="h-9 w-auto block" />
      </a>
      <div
        className={`hidden min-[861px]:flex gap-9 text-sm transition-colors duration-200 ${
          isFixed ? "text-muted" : "text-white/75"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`no-underline transition-colors duration-200 ${isFixed ? "hover:text-ink" : "hover:text-white"}`}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex gap-2.5 items-center">
        {isFixed ? (
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full font-sans text-[13.5px] font-medium no-underline cursor-pointer h-[38px] px-4 text-ink border border-line-strong bg-transparent hover:bg-white"
          >
            Entrar
          </a>
        ) : (
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full font-sans text-[13.5px] font-medium no-underline cursor-pointer h-[38px] px-4 bg-white text-ink border border-white hover:bg-white/90"
          >
            Entrar
          </a>
        )}
        <Button href="#contato" variant="primary" size="sm" className="max-[768px]:hidden">
          Solicitar demo
        </Button>
      </div>
    </div>
  );
}

export function Nav() {
  const [fixedVisible, setFixedVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setFixedVisible(!e.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Nav inicial — absolute por cima do hero */}
      <div className="absolute top-[30px] left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-transparent border-none rounded-none w-full shadow-none text-white">
          <NavInner variant="transparent" />
        </nav>
      </div>

      {/* Nav fixa — aparece quando o hero sai */}
      <div
        className={`fixed top-2.5 left-0 right-0 z-[100] flex justify-center transition-opacity duration-200 ease-out ${
          fixedVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="pointer-events-auto bg-white border border-line rounded-[30px] h-[60px]"
          style={{ width: "min(1200px, 92vw)" }}
        >
          <NavInner variant="fixed" />
        </nav>
      </div>
    </>
  );
}
