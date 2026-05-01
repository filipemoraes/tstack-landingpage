import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Container responsivo:
 *   - desktop/tablet: width: min(1200px, 92vw)
 *   - mobile (≤768px): width: 100% + 20px padding lateral
 */
export function Container({ children, className = "", style }: Props) {
  return (
    <div
      className={`mx-auto relative max-[768px]:!w-full max-[768px]:px-5 ${className}`}
      style={{ width: "min(1200px, 92vw)", ...style }}
    >
      {children}
    </div>
  );
}
