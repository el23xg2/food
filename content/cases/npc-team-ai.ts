import type { CaseStudy } from "@/types/case-study";

const npcTeamAi: CaseStudy = {
  slug: "npc-team-ai",
  number: 6,
  title: "NPC Team AI",
  subtitle: "在 UE4 中探索团队协同 AI——NPC 如何像小队一样协作",
  tags: ["AI Experiment", "UE4", "Interest Project"],
  featured: false,
  readTime: "5 min",
  status: "AI Experiment",
  role: "独立探索",
  timeline: "兴趣项目",
  keyOutcome: "实现 NPC 感知、目标共享、掩体选择与团队协同",
  overview:
    "基于 Unreal Engine 4 的兴趣项目，探索团队协同 AI 的实现。让 NPC 具备感知能力、目标共享、敌我识别、掩体选择与团队协同行为，模拟真实小队作战逻辑。",
  why: {
    paragraphs: [
      "对游戏 AI 领域一直很好奇——传统游戏中 NPC 各自为战，缺乏真实的小队协同感。",
      "我想理解一个核心问题：多个 AI Agent 如何共享信息、协调行动、像一个团队一样作战？",
      "这不仅是一个游戏技术问题，也是 AI Native 产品中 Multi-Agent 协作的基础问题。",
    ],
  },
  problem: {
    paragraphs: [
      "传统游戏 AI 的 NPC 是独立个体，缺乏团队协作行为。",
    ],
    bullets: [
      "每个 NPC 独立决策，无法感知队友状态",
      "缺乏目标共享机制，无法协同攻击或防守",
      "敌我识别逻辑简单，无法应对复杂战场环境",
      "掩体选择各自为政，可能出现多个 NPC 抢同一掩体",
      "团队行为看起来「假」——玩家能明显感知到 AI 的机械感",
    ],
  },
  opportunity: {
    paragraphs: [
      "团队 AI 是游戏 AI 领域的前沿问题，也是 AI Agent 协作的产品化前沿。",
      "UE4 提供了成熟的行为树与感知系统，适合作为实验环境。",
      "作为兴趣项目，可以自由探索而无需考虑商业约束。",
    ],
  },
  solution: {
    paragraphs: [
      "系统架构：感知层 → 决策层 → 协同层 → 执行层。",
    ],
    bullets: [
      "感知系统：NPC 通过视觉/听觉感知环境，共享感知信息给队友",
      "目标共享：小队成员共享当前目标，避免重复攻击同一敌人",
      "敌我识别：基于阵营 + 视线确认的双重识别机制",
      "掩体选择：协同分配掩体，避免冲突，优先掩护血量低的队友",
      "团队协同：集火、掩护、包抄等基本战术行为",
    ],
  },
  aiWorkflow: {
    intro: "Cursor 辅助 UE4 蓝图与 C++ 逻辑开发，AI 帮助理解复杂的行为树架构。",
    rows: [
      {
        phase: "架构设计",
        myWork: "定义感知→决策→协同→执行四层架构",
        aiRole: "AI 辅助行为树设计模式研究",
      },
      {
        phase: "实现",
        myWork: "UE4 蓝图逻辑、行为树配置",
        aiRole: "Cursor 生成 C++ 与蓝图代码",
      },
      {
        phase: "调试",
        myWork: "观察 NPC 行为，迭代协同逻辑",
        aiRole: "AI 辅助分析行为异常原因",
      },
    ],
    examples: [
      "行为树设计：AI 帮助理解 UE4 行为树最佳实践，加速架构决策",
      "掩体算法：Cursor 生成掩体评分与分配逻辑",
      "这是一个学习型项目，重点是理解 AI Agent 协作的基础问题",
    ],
  },
  outcome: {
    paragraphs: [
      "实现了可运行的团队 AI 演示，NPC 具备基本的协同作战能力。",
      "作为兴趣项目，无商业目标，但对 AI Agent 协作建立了直觉理解。",
    ],
    bullets: [
      "实现感知、目标共享、敌我识别、掩体选择、团队协同",
      "UE4 可运行演示",
      "兴趣探索项目",
    ],
  },
  reflection: {
    paragraphs: [
      "理解了 AI Agent 协作的核心挑战：不是单个 Agent 有多聪明，而是多个 Agent 如何有效协调。",
      "这个洞察直接关联到 AI Native 产品——未来的 AI 产品不会是单一 Agent，而是 Multi-Agent 协作系统。",
      "作为 PM，我不需要成为 AI 工程师，但需要理解 Agent 协作的边界与可能性。",
    ],
  },
};

export default npcTeamAi;
