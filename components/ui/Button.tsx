import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "default" | "sm";

const baseClass =
  "inline-flex items-center gap-2 rounded-full font-sans text-[14.5px] font-medium no-underline cursor-pointer border border-transparent transition-all duration-200 whitespace-nowrap";

const sizeClass: Record<Size, string> = {
  default: "h-11 px-5",
  sm: "h-[38px] px-4 text-[13.5px]",
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary-grad text-white",
  ghost:
    "text-ink border-line-strong bg-white/60 hover:bg-white hover:border-muted-2",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = "primary",
    size = "default",
    className = "",
    children,
    ...rest
  } = props;

  const cls = `${baseClass} ${sizeClass[size]} ${variantClass[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
