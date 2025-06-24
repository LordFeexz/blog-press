import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ReactNode } from "react";

export interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ProblemCard({
  icon,
  title,
  description,
}: ProblemCardProps) {
  return (
    <Card
      id={`problem-${title}-card`}
      data-test-id="problem-card"
      as="article"
      className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
    >
      <CardHeader className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
