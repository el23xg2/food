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
  media: {
    solutionImages: [
      {
        src: "/images/cases/npc-team-ai/solution-perception-cover.png",
        alt: "UE4 演示：NPC 感知环境与掩体",
        caption:
          "NPC 通过视觉/听觉感知环境，同时感知队友掩体位置，选择最优掩体位置。",
      },
      {
        src: "/images/cases/npc-team-ai/solution-target-sharing.png",
        alt: "UE4 演示：小队目标共享与攻击对象分配",
        caption:
          "小队成员共享当前目标，根据多参数权重分配计算最优攻击对象。",
      },
      {
        src: "/images/cases/npc-team-ai/solution-cover-logic.png",
        alt: "UE4 蓝图：检测掩体 Service 逻辑",
        caption: "最优掩体选择逻辑",
      },
    ],
  },
};

export default npcTeamAi;
