import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllCaseSlugs,
  getCaseBySlug,
  getAdjacentCases,
} from "@/lib/cases";
import { CaseStudyContent } from "@/components/cases/CaseStudyContent";
import { CaseNavigation } from "@/components/cases/CaseNavigation";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) return { title: "Not Found" };

  return {
    title: caseStudy.title,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} — Case Study`,
      description: caseStudy.subtitle,
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) notFound();

  const { prev, next } = getAdjacentCases(slug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseNavigation prev={prev} next={next} />
      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="text-sm text-subtle transition-colors hover:text-accent"
        >
          对这篇 Case 有疑问？→ Contact
        </Link>
      </div>
    </div>
  );
}
