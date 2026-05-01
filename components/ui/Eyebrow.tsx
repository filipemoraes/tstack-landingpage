import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: Props) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
