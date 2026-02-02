import type { ReactNode } from "react";

type SectionVariant = "light" | "dark" | "primary" | "gold";

interface SectionWrapperProps {
  variant: SectionVariant;
  children: ReactNode;
  className?: string;
}

const variantClassMap: Record<SectionVariant, string> = {
  light: "vm-section--light",
  dark: "vm-section--dark",
  primary: "vm-section--primary",
  gold: "vm-section--gold",
};

export function SectionWrapper({
  variant,
  children,
  className,
}: SectionWrapperProps) {
  const classes = ["vm-section", variantClassMap[variant], className]
    .filter(Boolean)
    .join(" ");

  return <section className={classes}>{children}</section>;
}
