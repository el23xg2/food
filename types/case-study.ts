export interface CaseStudyLink {
  label: string;
  url: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyHighlight {
  label: string;
  value: string;
}

export interface CaseStudyMedia {
  images?: CaseStudyImage[];
  productImages?: CaseStudyImage[];
  solutionImages?: CaseStudyImage[];
  highlights?: CaseStudyHighlight[];
}

export interface ProductHuntLaunch {
  tagline: string;
  description: string;
  launchDate: string;
  upvotes: number;
  comments: number;
  followers: number;
  pricing: string;
  tags: string[];
  url: string;
}

export interface AIWorkflowRow {
  phase: string;
  myWork: string;
  aiRole: string;
}

export interface CaseStudySection {
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudyAIWorkflow {
  intro: string;
  rows: AIWorkflowRow[];
  examples: string[];
}

export interface TravelCaseProfile {
  caseAttribute: string;
  playerProfile: {
    annualAssets: string;
    scenarios: { label: string; detail: string }[];
  };
  sceneReview: {
    title: string;
    phenomenon: string;
    thinking: string;
  }[];
  corePain: {
    sectionIntro: string;
    workflowDiagram: string;
    abstractions: string[];
  };
  productSchemes: {
    title: string;
    definition: string;
    value: string;
  }[];
  aiArchitectureDiagram: string;
  efficiencyComparison: {
    traditional: string;
    aiMode: string;
    validation: string;
  };
  pmSummary: string[];
  profileImages?: CaseStudyImage[];
  sceneImages?: CaseStudyImage[];
  painImages?: CaseStudyImage[];
}

export interface CaseStudy {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  status?: string;
  role: string;
  timeline: string;
  keyOutcome: string;
  overview: string;
  layout?: "standard" | "travel";
  travelProfile?: TravelCaseProfile;
  why?: CaseStudySection;
  problem?: CaseStudySection;
  opportunity?: CaseStudySection;
  solution?: CaseStudySection;
  aiWorkflow?: CaseStudyAIWorkflow;
  outcome?: CaseStudySection;
  reflection?: CaseStudySection;
  links?: CaseStudyLink[];
  media?: CaseStudyMedia;
  productHunt?: ProductHuntLaunch;
}

export const TRAVEL_CASE_SECTIONS = [
  { id: "profile", title: "01 · 个人玩家画像" },
  { id: "scenes", title: "02 · 场景深度复盘" },
  { id: "pain", title: "03 · 核心痛点拆解" },
  { id: "schemes", title: "04 · 0-1 产品方案" },
  { id: "ai-arch", title: "05 · AI 工作流推演" },
  { id: "efficiency", title: "06 · 体验效率对比" },
  { id: "summary", title: "07 · PM 思考与总结" },
] as const;

export const CASE_SECTIONS = [
  { id: "why", label: "Why", title: "为什么做" },
  { id: "problem", label: "Problem", title: "问题是什么" },
  { id: "opportunity", label: "Opportunity", title: "机会在哪里" },
  { id: "solution", label: "Solution", title: "产品方案" },
  { id: "aiWorkflow", label: "AI Workflow", title: "AI 如何参与" },
  { id: "outcome", label: "Outcome", title: "结果" },
  { id: "reflection", label: "Reflection", title: "反思" },
] as const;

export type CaseSectionId = (typeof CASE_SECTIONS)[number]["id"];
