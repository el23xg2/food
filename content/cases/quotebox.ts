import type { CaseStudy } from "@/types/case-study";

const quotebox: CaseStudy = {
  slug: "quotebox",
  number: 1,
  title: "QuoteBox",
  subtitle: "把自由职业者的报价-合同-签名-发票流程，从 4 个工具压缩成 1 个",
  tags: ["SaaS", "0→1", "独立交付", "AI Native"],
  featured: true,
  readTime: "10 min",
  status: "Live Product",
  role: "产品负责人 · 独立交付",
  timeline: "2025 – July 2026",
  keyOutcome: "独立上线 quotebox.pro，完成 Product Hunt 发布（6 upvotes）",
  overview:
    "面向海外自由职业者的一站式报价、合同、电子签名与发票 SaaS。从市场调研、产品定位到支付接入、SEO 与部署上线，由我一个人完成全部产品工作，开发全程使用 Cursor（Claude 模型）。",
  why: {
    paragraphs: [
      "海外自由职业者朋友在接单过程中反复抱怨：报价用一份工具、合同用另一份、电子签名再换一家、发票又是第四个系统。每次切换不只是操作成本，更是专业感与信任感的损耗。",
      "我想验证一个假设：在 AI 工具足够成熟的今天，一名产品经理能否不依赖工程团队，把一个 SaaS 产品从想法做到真正可运行、可收费、可被发现。",
    ],
  },
  problem: {
    paragraphs: [
      "自由职业者的商业闭环是：报价 → 合同 → 签名 → 收款 → 发票。这个链路看似简单，现实中却被多个割裂的工具切断。",
    ],
    bullets: [
      "报价与合同数据无法自动流转，需要手动复制粘贴",
      "电子签名服务独立计费，与报价工具无集成",
      "发票生成依赖第三方，格式与品牌不统一",
      "小型 Freelancer 无力承担 HoneyBook 等重型方案的成本与学习曲线",
      "跨境场景下，支付与税务合规更加复杂",
    ],
  },
  opportunity: {
    paragraphs: [
      "海外 Freelancer 市场持续增长，远程工作常态化让更多个体需要「一人公司」级别的商业工具。",
      "现有产品如 HoneyBook、Bonsai 等主要服务美国本土市场，在跨境支付、多币种、轻量定价上存在空白。",
      "AI 开发工具降低了独立交付的门槛——这正是我作为产品经理可以抓住的时机。",
    ],
  },
  solution: {
    paragraphs: [
      "产品定位：面向海外自由职业者的轻量、跨境、全流程商业工具。",
      "MVP 核心链路：创建报价 → 一键生成合同 → 发送电子签名 → 自动生成发票。",
    ],
    bullets: [
      "功能取舍：优先完成核心交易闭环，暂缓复杂的项目管理与 CRM 功能",
      "支付策略：先接入 Stripe，覆盖主流跨境支付场景",
      "数据库设计：以「报价单」为核心实体，合同、签名、发票均从报价单派生",
      "SEO 策略：针对 freelance invoicing、quote template 等长尾词优化落地页",
      "发布策略：Product Hunt 首发，获取早期用户反馈与外链",
    ],
  },
  aiWorkflow: {
    intro:
      "QuoteBox 是我 AI Native 工作流的完整实践——从产品定义到每一行代码，Cursor + Claude 贯穿始终。",
    rows: [
      {
        phase: "问题定义",
        myWork: "用户调研、痛点归纳、竞品功能矩阵",
        aiRole: "AI 辅助扫描竞品网站，快速生成对比表",
      },
      {
        phase: "产品定义",
        myWork: "PRD 撰写、MVP 功能优先级、数据库 schema 设计",
        aiRole: "AI 生成多方案对比，辅助决策取舍",
      },
      {
        phase: "设计",
        myWork: "核心流程定义、页面结构、交互逻辑",
        aiRole: "AI 快速生成 UI 原型并迭代",
      },
      {
        phase: "开发",
        myWork: "架构决策、代码审查、功能验收",
        aiRole: "Cursor 独立完成全部前后端开发",
      },
      {
        phase: "验证",
        myWork: "测试、部署、PH 发布策略",
        aiRole: "AI 辅助 SEO 文案与 landing page 优化",
      },
    ],
    examples: [
      "竞品分析：用 AI 在 2 小时内完成 8 个竞品的定价、功能、用户评价对比",
      "数据库设计：在 Cursor 中迭代 schema，从产品需求直接推导数据模型",
      "支付接入：Stripe webhook 逻辑由 Cursor 生成，我负责验收支付流程完整性",
    ],
  },
  outcome: {
    paragraphs: [
      "quotebox.pro 已上线并可访问，完成 Stripe 支付接入，并于 2026 年 7 月 22 日在 Product Hunt 正式发布。",
      "Product Hunt 定位为「The simplest HoneyBook alternative for freelancers」—— 轻量定价 $9/月，提供免费套餐，核心链路覆盖报价、合同、电子签名与发票。",
      "局限：作为个人项目，尚处于早期验证阶段，用户规模与留存数据仍在积累中。",
    ],
    bullets: [
      "产品地址：https://quotebox.pro",
      "Product Hunt 发布：6 upvotes · 8 comments · 11 followers",
      "完成核心链路：Quote → Service Agreement → E-Signature → Invoice",
      "定价策略：$9/月，Free plan available",
      "标签：Productivity · Freelance · SaaS",
    ],
  },
  reflection: {
    paragraphs: [
      "AI 将我的交付能力从「需要工程团队」压缩到「一人可完成」。但 AI 不能替代产品判断——什么进 MVP、什么砍掉，仍然需要人来做。",
      "如果重来，我会更早做用户访谈而非依赖 desk research。在产品上线后，我会优先验证「报价→签名」转化率，而非继续堆功能。",
    ],
  },
  links: [
    { label: "quotebox.pro", url: "https://quotebox.pro" },
    { label: "Product Hunt", url: "https://www.producthunt.com/products/quotebox" },
    { label: "GitHub", url: "https://github.com/el23xg2" },
  ],
  productHunt: {
    tagline: "Quotes, contracts & invoices for freelancers",
    description:
      "The simplest HoneyBook alternative for freelancers. Send professional quotes, get contracts signed online with e-signatures, and accept payments — all for $9/month. Free plan available.",
    launchDate: "Launched July 22, 2026 on Product Hunt",
    upvotes: 6,
    comments: 8,
    followers: 11,
    pricing: "$9/month · Free plan available",
    tags: ["Productivity", "Freelance", "SaaS"],
    url: "https://www.producthunt.com/products/quotebox",
  },
  media: {
    productImages: [
      {
        src: "/images/cases/quotebox/product-landing.png",
        alt: "QuoteBox landing page with pricing comparison",
        caption: "Landing Page — $9/月定位，对比 HoneyBook $36/月",
      },
      {
        src: "/images/cases/quotebox/product-dashboard.png",
        alt: "QuoteBox dashboard",
        caption: "Dashboard — 客户、报价、合同、发票一站式管理",
      },
      {
        src: "/images/cases/quotebox/product-quote.png",
        alt: "QuoteBox client quote page",
        caption: "Quote — 客户侧报价单，一键 Accept Quote",
      },
      {
        src: "/images/cases/quotebox/product-contract.png",
        alt: "QuoteBox service agreement",
        caption: "Contract — 从报价自动生成的 Service Agreement",
      },
      {
        src: "/images/cases/quotebox/product-invoice.png",
        alt: "QuoteBox invoice with payment",
        caption: "Invoice — 在线支付，完成交易闭环",
      },
    ],
    images: [
      {
        src: "/images/cases/quotebox/ph-product-page.png",
        alt: "QuoteBox Product Hunt product page",
        caption: "Product Hunt 产品页 — 展示定位、定价与核心功能",
      },
      {
        src: "/images/cases/quotebox/ph-launch-detail.png",
        alt: "QuoteBox Product Hunt launch detail with product screenshots",
        caption: "Launch 详情 — Quote、Service Agreement、Invoice 核心界面预览",
      },
    ],
  },
};

export default quotebox;
