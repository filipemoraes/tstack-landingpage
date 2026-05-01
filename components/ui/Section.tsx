import type { CSSProperties, ReactNode } from "react";

type Background = "cream" | "white" | "sky" | "mist" | "ink";

type Props = {
  children: ReactNode;
  bg?: Background;
  id?: string;
  className?: string;
  style?: CSSProperties;
  tight?: boolean;
};

const bgClass: Record<Background, string> = {
  cream: "bg-bg-cream",
  white: "bg-bg-white",
  sky: "bg-bg-sky",
  mist: "bg-bg-mist",
  ink: "bg-bg-ink text-[#E8EEF7] [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&>*_p]:text-[#A8B2CC]",
};

export function Section({ children, bg = "cream", id, className = "", style, tight = false }: Props) {
  const padding = tight ? "py-20" : "py-[120px] max-[768px]:py-[50px]";
  return (
    <section id={id} className={`relative overflow-hidden ${padding} ${bgClass[bg]} ${className}`} style={style}>
      {children}
    </section>
  );
}

type SectionHeadProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function SectionHead({ children, className = "", style }: SectionHeadProps) {
  return (
    <div
      className={`max-w-[760px] mb-[72px] [&_h2]:mt-4 [&>p]:mt-5 [&>p]:text-[19px] [&>p]:max-w-[620px] [&>p]:leading-[1.55] max-[768px]:[&>p]:!text-base ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
