import type { Service } from "@/data/services";

export interface ProjectResult {
  /** Short, concrete number or outcome: "35%", "2 hafta", "3x". */
  metric: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  slug: string;
  title: string;
  clientName: string;
  clientWebsite?: string;
  /** Short industry label shown on the card, e.g. "Restoran". */
  industry: string;
  service: Service["slug"];
  summary: string;
  problem: string;
  solution: string;
  results: ProjectResult[];
  testimonial?: ProjectTestimonial;
  completedDate: string;
}

// Intentionally empty. This is real-client case-study content, not editorial
// copy — Google and AI answer engines index it as a factual claim about
// FRONTIX's actual work, so every entry needs a real client name and a real,
// client-approved outcome (metric or honest qualitative result). Never fill
// this with placeholder/demo data. Add entries here (and give each project a
// slug in scripts/projectRoutes.mjs, mirroring solutionRoutes.mjs) once a
// client's project and testimonial are ready to publish.
export const projects: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
