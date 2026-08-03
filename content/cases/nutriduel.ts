import type { CaseStudy } from "@/types/case-study";

const nutriduel: CaseStudy = {
  slug: "nutriduel",
  number: 4,
  title: "NutriDuel",
  subtitle: "把营养学转化为策略卡牌游戏的数值体系",
  tags: ["Game Design", "System Design", "GDD", "数值策划"],
  featured: false,
  readTime: "10 min",
  status: "Playable Demo",
  role: "游戏策划 · 独立开发",
  timeline: "2024",
  keyOutcome: "完整可试玩版本，5000+ 行 GDD，200+ Git commits",
  overview:
    "一款原创策略卡牌游戏，灵感来自真实营养学。把真实食物的营养成分设计成游戏数值体系，包含回合制战斗、职业体系与完整的卡牌策略深度。我负责全部游戏玩法设计、数值设计与 GDD 撰写，开发全程使用 Cursor 完成。",
  why: {
    paragraphs: [
      "健身期间对营养学产生浓厚兴趣，发现宏量营养素（蛋白质、碳水、脂肪）与微量营养素之间的平衡关系，本质上是一个资源分配与策略优化问题。",
      "这个洞察让我想到：营养学和游戏数值体系有天然的映射关系——食物就是卡牌，营养成分就是属性，均衡饮食就是策略。",
    ],
  },
  problem: {
    paragraphs: [
      "营养科普内容枯燥，难以让大众产生持续学习的动力。游戏化是解法，但大多数健康游戏要么「不好玩」，要么「不准确」。",
    ],
    bullets: [
      "营养知识传播依赖说教，用户留存率低",
      "现有健康类游戏缺乏真实的知识内核，玩法与知识割裂",
      "如何在「好玩」和「营养准确」之间取得平衡",
      "卡牌游戏的数值平衡需要大量迭代，一人团队如何高效完成",
    ],
  },
  opportunity: {
    paragraphs: [
      "健康游戏市场存在空白——没有一款游戏真正用「营养逻辑」驱动核心玩法。",
      "卡牌 + 策略品类有成熟的受众基础，降低用户教育成本。",
      "作为个人项目，可以用最小成本验证「营养 × 游戏」的核心假设。",
    ],
  },
  solution: {
    paragraphs: [
      "核心设计：回合制策略卡牌对战，玩家通过选择食物卡牌构建营养策略，击败对手。",
    ],
    bullets: [
      "核心循环：回合开始 → 抽牌 → 选择食物 → 计算营养效果 → 触发技能 → 回合结束",
      "数值体系：每种真实食物映射为卡牌，蛋白质/碳水/脂肪/维生素等映射为战斗属性",
      "职业体系：不同「饮食流派」对应不同职业，各有独特的营养策略与技能树",
      "平衡设计：通过胜率数据与对局时长反馈迭代数值",
      "GDD 结构：5000+ 行，涵盖玩法、数值、职业、卡牌、UI、音效全部设计",
    ],
  },
  aiWorkflow: {
    intro:
      "NutriDuel 是 Cursor 在游戏开发场景下的深度实践——从 GDD 到 Godot 代码，AI 贯穿始终。",
    rows: [
      {
        phase: "玩法设计",
        myWork: "核心循环、职业体系、卡牌机制",
        aiRole: "AI 辅助头脑风暴与方案对比",
      },
      {
        phase: "数值设计",
        myWork: "食物→属性映射、平衡性调参",
        aiRole: "AI 辅助数值计算与批量生成",
      },
      {
        phase: "GDD 撰写",
        myWork: "5000+ 行完整游戏设计文档",
        aiRole: "AI 辅助文档结构与内容扩展",
      },
      {
        phase: "开发",
        myWork: "Godot 项目架构、功能验收",
        aiRole: "Cursor 生成全部游戏逻辑代码",
      },
    ],
    examples: [
      "GDD 迭代：用 AI 快速扩展卡牌技能描述，从 50 张扩展到 200+ 张",
      "数值平衡：AI 辅助批量计算食物属性映射，我负责验证游戏性",
      "Godot 开发：200+ commits，全部由 Cursor 生成代码，我负责玩法验收",
    ],
  },
  outcome: {
    paragraphs: [
      "完成完整可试玩版本，包含回合制战斗、职业体系与卡牌策略深度。",
      "5000+ 行 GDD 与 200+ Git commits 证明了项目的完整度。",
    ],
    bullets: [
      "完整可试玩版本",
      "5000+ 行 GDD",
      "200+ Git commits",
      "多职业体系与完整卡牌策略",
    ],
  },
  reflection: {
    paragraphs: [
      "复杂系统产品必须有严格文档驱动——没有 GDD，200+ 张卡牌的数值根本不可能管理。",
      "AI 在游戏开发中擅长「实现」，但玩法设计必须人主导。AI 可以生成 100 个技能描述，但「哪个好玩」只有人能判断。",
      "如果商业化，我会先做 PvE 模式降低匹配成本，用关卡设计替代纯 PvP 平衡的压力。",
    ],
  },
  links: [
    { label: "GitHub", url: "https://github.com/el23xg2/nutriduel" },
    {
      label: "GDD 全文",
      url: "https://github.com/el23xg2/nutriduel/blob/main/GAME_DESIGN_PRD.md",
    },
  ],
  media: {
    productImages: [
      {
        src: "/images/cases/nutriduel/gdd-toc.png",
        alt: "NutriDuel GDD table of contents",
        caption: "GDD 目录 — v8.3 · 5056 行单一权威设计规范，A–W 节覆盖全部机制与数值",
      },
      {
        src: "/images/cases/nutriduel/gdd-core-loop.png",
        alt: "NutriDuel core gameplay loop rules",
        caption: "核心玩法循环 — 三层渐进规则：血糖驱动回合制策略，教程分阶段解锁",
      },
      {
        src: "/images/cases/nutriduel/gdd-turn-structure.png",
        alt: "NutriDuel turn structure diagram",
        caption: "回合结构 — 苏醒 → 摸牌 → 行动 → 代谢 → 结束，五阶段精确结算",
      },
      {
        src: "/images/cases/nutriduel/gdd-nutrition-mapping.png",
        alt: "Card strength value formula and cost targets",
        caption: "数值基准 — CSV = ATK×2 + HP + ARM×1.5，COST 决定数值预算",
      },
      {
        src: "/images/cases/nutriduel/gdd-rarity-system.png",
        alt: "Rarity system and nutrition to stats mapping",
        caption: "营养映射 — 现实营养密度 → ★稀有度 → 游戏技能；COST 与 ★ 正交设计",
      },
      {
        src: "/images/cases/nutriduel/gdd-character-system.png",
        alt: "Character card system and archetypes",
        caption: "角色卡体系 — 11 张饮食流派角色，构筑策略核心（vs 方案卡战术层）",
      },
      {
        src: "/images/cases/nutriduel/gdd-balance-params.png",
        alt: "Balance parameters and design constraints",
        caption: "平衡性参数 — 全卡池数值上限、已知风险监控、设计禁则",
      },
    ],
  },
};

export default nutriduel;
