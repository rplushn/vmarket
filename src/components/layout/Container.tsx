import type { ReactNode } from "react";

type ContainerSize = "default" | "narrow";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
}

const sizeClassMap: Record<ContainerSize, string> = {
  default: "vm-container",
  narrow: "vm-container--narrow",
};

export function Container({ children, size = "default" }: ContainerProps) {
  return <div className={sizeClassMap[size]}>{children}</div>;
}
