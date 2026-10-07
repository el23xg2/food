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
  /** Shown below the Solution / 产品方案 section */
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

/** Travel PM portfolio page — not the standard product case seven-act structure. */
export interface TravelCaseProfile {
  /** What this page is for (HR / hiring manager scan). */
  readerHook: string;
  /** Traits the travel innovation PM role cares about. */
  traitsForRole: { label: string; detail: string }[];
  routes: { group: string; items: string[] }[];
  journey: { stage: string; body: string; friction: string }[];
  frictions: { title: string; scene: string; productInsight: string }[];
  planningMethod: string[];
  productBets: string[];
  roleFit: string;
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
  /** Default: standard seven-act case. Travel role uses `travel` + `travelProfile`. */
  layout?: "standard" | "travel";
  travelProfile?: TravelCaseProfile;
  why?: CaseStudySection;
  problem?: CaseStudySection;
  opportunity?: CaseStudySection;
  solution?: CaseStudySection;
  /** Omit for projects that did not use AI in delivery (section hidden on case page). */
  aiWorkflow?: CaseStudyAIWorkflow;
  outcome?: CaseStudySection;
  reflection?: CaseStudySection;
  links?: CaseStudyLink[];
  media?: CaseStudyMedia;
  productHunt?: ProductHuntLaunch;
}

export const TRAVEL_CASE_SECTIONS = [
  { id: "hook", title: "概要" },
  { id: "routes", title: "我规划并成行的路线" },
  { id: "journey", title: "小红书用户的决策链路" },
  { id: "frictions", title: "三个亲身痛点" },
  { id: "method", title: "我怎么定方案" },
  { id: "bets", title: "我会先验证什么" },
  { id: "fit", title: "和旅行产品岗的对应" },
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
