/**
 * Case Study Registry
 *
 * To add a new project:
 * 1. Create a new file in content/cases/ (e.g. my-project.ts)
 * 2. Import and add it to the `cases` array below
 *
 * Homepage, /cases index, and navigation will update automatically.
 */
import type { CaseStudy } from "@/types/case-study";
import quotebox from "./quotebox";
import europeTravel from "./europe-travel";
import reptileEnvControl from "./reptile-env-control";
import nutriduel from "./nutriduel";
import pricingTool from "./pricing-tool";
import npcTeamAi from "./npc-team-ai";

export const cases: CaseStudy[] = [
  quotebox,
  europeTravel,
  reptileEnvControl,
  nutriduel,
  pricingTool,
  npcTeamAi,
];
