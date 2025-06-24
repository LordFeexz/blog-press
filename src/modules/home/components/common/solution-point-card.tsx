import type { ReactNode } from "react";

export interface SolutionPointCardProps {
  icon: ReactNode;
  label: string;
}

export default function SolutionPointCard({
  icon,
  label,
}: SolutionPointCardProps) {
  return (
    <article
      className="flex items-center text-sm text-muted-foreground"
      data-test-id="solution-point-card"
      data-slot="solution-point-card"
    >
      {icon}
      <span>{label}</span>
    </article>
  );
}
