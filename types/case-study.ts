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
  why: CaseStudySection;
  problem: CaseStudySection;
  opportunity: CaseStudySection;
  solution: CaseStudySection;
  aiWorkflow: CaseStudyAIWorkflow;
  outcome: CaseStudySection;
  reflection: CaseStudySection;
  links?: CaseStudyLink[];
  media?: CaseStudyMedia;
  productHunt?: ProductHuntLaunch;
}

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
