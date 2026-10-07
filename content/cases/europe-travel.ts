import type { CaseStudy } from "@/types/case-study";

const europeTravel: CaseStudy = {
  slug: "europe-travel",
  number: 2,
  layout: "travel",
  title: "从深度旅行者到产品思考：自由行全场景与 AI 链路探索",
  subtitle:
    "基于 30+ 天跨国自由行真实体验的用户研究与 0-1 产品概念推演",
  tags: ["Travel", "用户研究", "0-1 概念"],
  featured: true,
  readTime: "8 min",
  status: "Case #02",
  role: "深度旅行者 · 产品推演",
  timeline: "英国留学至今",
  keyOutcome: "30+ 天/年跨国自由行样本 + 内容—地图断层与 Plan B 两类 0-1 方向",
  overview:
    "基于 30+ 天跨国自由行真实体验的用户研究与 0-1 产品概念推演",
  travelProfile: {
    caseAttribute:
      "基于 30+ 天跨国自由行真实体验的用户研究与 0-1 产品概念推演",
    playerProfile: {
      annualAssets:
        "每年自由行 30+ 天，近一年足迹覆盖欧洲多国（英/法/西/克罗地亚/希腊/意大利）、埃及、澳洲。",
      scenarios: [
        {
          label: "决策驱动型",
          detail:
            "IP 影视打卡（《权游》君临城原型杜布罗夫尼克）、历史遗迹（古希腊/文艺复兴雅典与罗马）、垂直兴趣（埃及与大堡礁潜水）。",
        },
        {
          label: "同行关系型",
          detail:
            "高难度单人跨国 Solo（埃及、欧洲多段）与多人同行磨合（巴黎、西班牙）。",
        },
      ],
    },
    sceneReview: [
      {
        title: "决策机制：从「灵感触发」到「锚点收敛」",
        phenomenon:
          "出发很少源于「先搜机票」，更多来自情绪与兴趣——例如为《冰与火之歌》去杜布罗夫尼克，再串雅典、罗马；潜水则导向沙姆沙伊赫与大堡礁。",
        thinking:
          "路线规划本质是「做减法」。产品不必先堆几百个景点，可先帮用户锁定 1–2 个必去核心锚点，再按地理与交通做路线收敛。",
      },
      {
        title: "现场变化：极端突发下的「信息黑盒」",
        phenomenon:
          "因全球系统故障叠加瑞安航空长时间延误，亲历机场停飞、大屏无更新、软件无回应，在机场过夜；原计划前往法国卡尔卡松未能成行。",
        thinking:
          "旅行产品最难的不是「顺利时」，而是「出变故时」。现场用户缺信息透明度，也缺可立刻执行的替代方案（Plan B）带来的安全感。",
      },
    ],
    corePain: {
      scene:
        "在小红书刷 City Walk 或自由行攻略时，路线常画在图文或图片里。",
      painPoints: [
        "步骤繁琐：看一张图、记住地点，切到 Google Maps / 高德，手敲搜索、添加途径点，重复 5–10 次。",
        "链路折损：大量「看帖灵感」停在收藏夹，难以变成真正出发。",
      ],
      abstraction:
        "内容/社区（灵感端）与地图/导航（工具端）之间存在明显的操作断层。",
    },
    concepts: {
      goal: "把分散在社区里的信息与灵感，做成真正帮助人一键出发的产品。",
      ideas: [
        {
          title: "设想一：小红书/图文路线「一键识别与地图导出」",
          aiWorkflow:
            "多模态 Vision LLM 识别图文帖中的地点名称、推荐顺序与营业时间，提取结构化 POI。",
          productExperience:
            "上传攻略截图或粘贴帖链接 → AI 生成结构化路线卡片 → 一键拉起 Google Maps Deeplink 开始导航（将约 10 分钟的录入缩短到秒级）。",
        },
        {
          title: "设想二：现场变局的「动态 Plan B」助手 Agent",
          aiWorkflow:
            "监测航班取消、景区闭馆或用户主动求助时，进入应急模式。",
          productExperience:
            "推送现场现状说明 + 替代交通建议（如附近大巴/火车站）+ 24h 休息区指引，在高度不确定下提供可执行的兜底信息。",
        },
      ],
    },
    pmSummary: [
      "把散落的灵感做成「能够迈开腿的产品」：好的旅行产品，既要有懂文化、懂 IP 的审美与温度，也要有高效结构化信息的工具力。",
      "AI 的边界是辅助，而非越俎代庖：AI 负责识图、找坐标、拼线路等繁琐步骤，偏好选择与现场探索仍留给旅行者。",
    ],
  },
};

export default europeTravel;
