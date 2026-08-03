import type { Metadata } from "next";
import { getAllCases } from "@/lib/cases";
import { FadeIn } from "@/components/ui/FadeIn";
import { CaseCard } from "@/components/cases/CaseCard";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "产品经理作品集——记录从问题定义到可运行产品的完整决策过程。",
};

export default function CasesPage() {
  const allCases = getAllCases();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.2em] text-subtle">
          Case Studies
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
          产品决策记录
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          每一个项目都是一次完整的产品思考——从 Why 到 Reflection。
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {allCases.map((caseStudy, i) => (
          <FadeIn key={caseStudy.slug} delay={i * 0.08}>
            <CaseCard caseStudy={caseStudy} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
