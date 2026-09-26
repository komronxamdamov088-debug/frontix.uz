import { Suspense, type ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Preloader } from "@/components/ui/Preloader";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServicePage from "@/pages/ServicePage";
import Team from "@/pages/Team";
import Partners from "@/pages/Partners";
import PartnerPage from "@/pages/PartnerPage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SolutionsIndex from "@/pages/SolutionsIndex";
import { preloadable } from "@/lib/preloadable";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import ProjectsIndex from "@/pages/ProjectsIndex";
import ProjectPage from "@/pages/ProjectPage";
import NotFound from "@/pages/NotFound";

// The 228 problem/solution pages carry ~850 KB of uz/ru/en copy that no other
// page needs, so they get their own chunk. main.tsx preloads it before the
// first render when the visitor lands directly on one of these pages.
export const SolutionPage = preloadable(() => import("@/pages/SolutionPage"));
export const isSolutionPagePath = (pathname: string) =>
  /^(\/(ru|en))?\/yechimlar\/[^/]+\/[^/]+\/?$/.test(pathname);

// Each page is served at a canonical (uz) path and again under /ru and /en so
// every language has its own indexable URL. Keep this list in sync with
// scripts/prerender.mjs and scripts/generate-sitemap.mjs.
const PAGES: { path: string; element: ReactElement }[] = [
  { path: "", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/services/:slug", element: <ServicePage /> },
  { path: "/team", element: <Team /> },
  { path: "/partners", element: <Partners /> },
  { path: "/partners/:slug", element: <PartnerPage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/yechimlar", element: <SolutionsIndex /> },
  { path: "/yechimlar/:industry/:service", element: <SolutionPage /> },
  { path: "/blog", element: <BlogIndex /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/loyihalar", element: <ProjectsIndex /> },
  { path: "/loyihalar/:slug", element: <ProjectPage /> },
];
const LANG_PREFIXES = ["", "/ru", "/en"];

export default function App() {
  return (
    <>
      <Preloader />
      <Layout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            {LANG_PREFIXES.flatMap((prefix) =>
              PAGES.map(({ path, element }) => (
                <Route
                  key={`${prefix}${path}`}
                  path={`${prefix}${path}` || "/"}
                  element={element}
                />
              )),
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
