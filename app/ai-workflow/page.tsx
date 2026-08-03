import type { Metadata } from "next";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { getAllCases } from "@/lib/cases";
import { formatCaseNumber } from "@/lib/cases";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "AI Workflow",
  description:
    "AI Native 产品开发工作流——六个项目中 AI 如何参与产品开发的模式总结。",
};

const workflowPhases = [
  { id: "define", label: "问题定义", desc: "用户调研、痛点归纳、竞品扫描" },
  { id: "product", label: "产品定义", desc: "PRD、功能优先级、方案对比" },
  { id: "design", label: "设计", desc: "流程、原型、交互逻辑" },
  { id: "build", label: "开发", desc: "架构决策、代码实现、功能验收" },
  { id: "validate", label: "验证", desc: "测试、上线、迭代优化" },
];

const boundaries = [
  {
    ai: "竞品扫描、信息聚合、文档初稿",
    human: "判断哪些洞察真正重要",
  },
  {
    ai: "多方案生成、代码实现、批量计算",
    human: "决定做什么、不做什么",
  },
  {
    ai: "UI 原型、文案优化、SEO 内容",
    human: "定义品牌调性与用户体验标准",
  },
  {
    ai: "技术选型建议、调试辅助",
    human: "架构决策与最终验收",
  },
];

export default function AIWorkflowPage() {
  const allCases = getAllCases();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.2em] text-subtle">
          Methodology
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
          AI Workflow
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          AI 如何参与我的产品开发——从六个项目实践中提炼的工作模式。
        </p>
      </FadeIn>

      {/* Process Overview */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-xl font-medium text-foreground md:text-2xl">
            AI Native 产品开发流程
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            每个项目都遵循同一框架，但 AI 的参与深度因项目类型而异。
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-5">
          {workflowPhases.map((phase, i) => (
            <FadeIn key={phase.id} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-surface p-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-medium text-foreground">
                  {phase.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-subtle">
                  {phase.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Case Comparison */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-xl font-medium text-foreground md:text-2xl">
            六项目 AI 参与对比
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {allCases.map((caseStudy, i) => (
            <FadeIn key={caseStudy.slug} delay={i * 0.06}>
              <TransitionLink
                href={`/cases/${caseStudy.slug}#aiWorkflow`}
                className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-elevated"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <span className="font-mono text-xs text-accent">
                      {formatCaseNumber(caseStudy.number)}
                    </span>
                    <h3 className="mt-1 text-base font-medium text-foreground transition-colors group-hover:text-accent">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {caseStudy.aiWorkflow.intro}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-subtle transition-colors group-hover:text-accent">
                    查看详情 →
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.aiWorkflow.rows.map((row) => (
                    <span
                      key={row.phase}
                      className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-subtle"
                    >
                      {row.phase}
                    </span>
                  ))}
                </div>
              </TransitionLink>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Work Modes */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-xl font-medium text-foreground md:text-2xl">
            三种典型工作模式
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              mode: "研究模式",
              tool: "Cursor + Claude",
              desc: "竞品扫描、市场调研、用户洞察提取。AI 加速信息处理，人做判断。",
              cases: "QuoteBox 竞品分析、Dreame 市场研究",
            },
            {
              mode: "构建模式",
              tool: "Cursor + Claude",
              desc: "PRD 迭代、数据库设计、前后端开发。AI 执行，人定义与验收。",
              cases: "QuoteBox 全栈开发、NutriDuel 游戏逻辑",
            },
            {
              mode: "迭代模式",
              tool: "Cursor + Claude",
              desc: "测试修复、SEO 优化、文案调整。AI 辅助快速迭代。",
              cases: "QuoteBox SEO、定价工具图表优化",
            },
          ].map((item, i) => (
            <FadeIn key={item.mode} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-base font-medium text-accent">
                  {item.mode}
                </h3>
                <p className="mt-1 font-mono text-xs text-subtle">{item.tool}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
                <p className="mt-4 text-xs text-subtle">{item.cases}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Boundaries */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-xl font-medium text-foreground md:text-2xl">
            边界：什么交给 AI，什么必须人做
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            AI 是加速器，不是决策者。以下边界在所有项目中一致。
          </p>
        </FadeIn>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated">
                <th className="px-5 py-3 font-medium text-foreground">
                  交给 AI
                </th>
                <th className="px-5 py-3 font-medium text-foreground">
                  必须人做
                </th>
              </tr>
            </thead>
            <tbody>
              {boundaries.map((row, i) => (
                <tr key={i} className="border-b border-border-subtle last:border-0">
                  <td className="px-5 py-4 text-muted">{row.ai}</td>
                  <td className="px-5 py-4 text-foreground">{row.human}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
