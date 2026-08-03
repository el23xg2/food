import type { CaseStudy } from "@/types/case-study";

const pricingTool: CaseStudy = {
  slug: "pricing-tool",
  number: 5,
  title: "竞品定价分析工具",
  subtitle: "把追觅产品工作中 2 天的 Excel+PPT 分析，变成 10 分钟",
  tags: ["Internal Tool", "Data Visualization", "B2B"],
  featured: false,
  readTime: "6 min",
  status: "Internal Tool",
  role: "产品经理 · 独立开发",
  timeline: "源自追觅工作",
  keyOutcome: "将竞品定价分析效率从 2 天提升至 10 分钟",
  overview:
    "来源于我在追觅做竞品定价分析的真实痛点。以前需要 Excel 整理、手动制图、PPT 排版，现在导入 Excel 即可自动生成竞品定价气泡图、品牌分析与市场分析图表，直接可用于汇报。",
  why: {
    paragraphs: [
      "在追觅担任产品经理期间，竞品定价分析是高频工作。每次新品类立项或季度复盘，都需要做一轮完整的竞品定价研究。",
      "实际流程是：从各渠道搜集竞品价格 → Excel 整理 → 手动画气泡图 → 品牌矩阵分析 → 排版进 PPT。一套下来至少 2 天。",
      "作为 PM，我的时间应该花在解读数据背后的产品策略上，而不是画图上。",
    ],
  },
  problem: {
    paragraphs: [
      "竞品定价分析是产品经理的高频刚需，但现有流程效率极低。",
    ],
    bullets: [
      "数据搜集后需要大量手工整理，格式不统一",
      "气泡图、品牌矩阵等图表需要手动绘制，难以复用",
      "每次分析都是一次性工作，无法沉淀为可复用的模板",
      "图表排版耗时，且不同分析师的呈现标准不一致",
      "从数据到 PPT 就绪的图表，中间有太多重复劳动",
    ],
  },
  opportunity: {
    paragraphs: [
      "这是一个来自真实工作场景的痛点——不是假想的需求。",
      "工具化后可以服务所有需要做竞品定价分析的 PM 和市场分析人员。",
      "技术实现相对简单，可以快速验证价值。",
    ],
  },
  solution: {
    paragraphs: [
      "产品方案：Excel 导入 → 自动分析 → 图表生成 → 导出就绪。",
    ],
    bullets: [
      "核心功能：上传 Excel，自动识别品牌、产品、价格、参数等字段",
      "自动生成：竞品定价气泡图（价格 × 功能 × 市场份额）",
      "品牌分析：品牌定位矩阵图，直观展示竞争格局",
      "市场分析：价格带分布、功能覆盖率等统计图表",
      "导出：图表直接可用于 PPT，无需二次排版",
      "数据结构：以「产品」为核心实体，支持多维度筛选与分组",
    ],
  },
  aiWorkflow: {
    intro: "全程使用 Cursor 独立开发，从数据处理逻辑到图表渲染。",
    rows: [
      {
        phase: "需求定义",
        myWork: "梳理追觅真实工作流程，定义输入输出",
        aiRole: "AI 辅助整理功能清单",
      },
      {
        phase: "数据设计",
        myWork: "Excel 字段映射规则、数据清洗逻辑",
        aiRole: "AI 辅助 schema 设计",
      },
      {
        phase: "开发",
        myWork: "图表类型选择、交互逻辑、验收",
        aiRole: "Cursor 完成全部前后端开发",
      },
    ],
    examples: [
      "图表库选型：AI 对比 Chart.js、D3、ECharts 在本场景的优劣",
      "Excel 解析：Cursor 生成复杂的数据清洗与字段映射逻辑",
      "从想法到可用工具，总耗时约 3 天",
    ],
  },
  outcome: {
    paragraphs: [
      "工具完成开发并可正常使用，竞品定价分析效率从 2 天缩短至约 10 分钟。",
      "局限：作为个人工具，尚未部署给追觅团队使用。",
    ],
    bullets: [
      "分析效率：2 天 → 10 分钟",
      "支持气泡图、品牌矩阵、价格带分析",
      "一键导出 PPT 就绪图表",
    ],
  },
  reflection: {
    paragraphs: [
      "最好的内部工具来自真实痛点。作为 PM，我应该能把自己的效率问题产品化。",
      "这个项目的价值不在于技术复杂度，而在于「PM 用产品思维解决自己的工作效率问题」——这正是 AI Native PM 的核心能力。",
      "如果部署给团队，还需要增加：多人协作、历史分析存档、模板市场等功能。",
    ],
  },
};

export default pricingTool;
