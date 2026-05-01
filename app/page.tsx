import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucao } from "@/components/sections/Solucao";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Terminal } from "@/components/sections/Terminal";
import { IA } from "@/components/sections/IA";
import { CasosUso } from "@/components/sections/CasosUso";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Preco } from "@/components/sections/Preco";
import { SegurancaEsg } from "@/components/sections/SegurancaEsg";
import { FAQ } from "@/components/sections/FAQ";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import { TweaksPanel } from "@/components/TweaksPanel";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <Terminal />
      <IA />
      <CasosUso />
      <Diferenciais />
      <Preco />
      <SegurancaEsg />
      <FAQ />
      <CtaFinal />
      <Footer />
      <TweaksPanel />
    </div>
  );
}
