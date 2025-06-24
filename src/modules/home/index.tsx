import type { LangProps } from "@/interfaces/component";
import Hero from "./components/layouts/hero";
import Problem from "./components/layouts/problem";
import Solution from "./components/layouts/solution";
import Feature from "./components/layouts/feature";
import Waitlist from "./components/layouts/waitlist";
import Init from "./init";

export default function HomePage({ lang }: LangProps) {
  return (
    <div className="space-y-6">
      <Init />
      <Hero lang={lang} />
      <Problem lang={lang} />
      <Solution lang={lang} />
      <Feature lang={lang} />
      <Waitlist lang={lang} />
    </div>
  );
}
