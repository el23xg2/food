import { cases } from "@/content/cases/registry";
import type { CaseStudy } from "@/types/case-study";

export function getAllCases(): CaseStudy[] {
  return [...cases].sort((a, b) => a.number - b.number);
}

export function getFeaturedCases(): CaseStudy[] {
  return getAllCases().filter((c) => c.featured);
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return getAllCases().find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const all = getAllCases();
  const index = all.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}

export function getAllCaseSlugs(): string[] {
  return getAllCases().map((c) => c.slug);
}

export function formatCaseNumber(num: number): string {
  return String(num).padStart(2, "0");
}
