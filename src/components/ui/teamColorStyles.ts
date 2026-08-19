import type { TeamColor } from "@/data/team";

interface ColorStyle {
  gradient: string;
  blobs: [string, string, string];
}

export const teamColorStyles: Record<TeamColor, ColorStyle> = {
  brand: {
    gradient: "from-brand-500/25 via-brand-500/5 to-transparent",
    blobs: ["bg-brand-400/50", "bg-brand-300/35", "bg-brand-500/30"],
  },
  fuchsia: {
    gradient: "from-fuchsia-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-fuchsia-400/45", "bg-fuchsia-300/30", "bg-brand-400/25"],
  },
  emerald: {
    gradient: "from-emerald-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-emerald-400/45", "bg-emerald-300/30", "bg-brand-400/25"],
  },
  amber: {
    gradient: "from-amber-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-amber-400/45", "bg-amber-300/30", "bg-brand-400/25"],
  },
  sky: {
    gradient: "from-sky-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-sky-400/45", "bg-sky-300/30", "bg-brand-400/25"],
  },
  violet: {
    gradient: "from-violet-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-violet-400/45", "bg-violet-300/30", "bg-brand-400/25"],
  },
  rose: {
    gradient: "from-rose-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-rose-400/45", "bg-rose-300/30", "bg-brand-400/25"],
  },
  cyan: {
    gradient: "from-cyan-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-cyan-400/45", "bg-cyan-300/30", "bg-brand-400/25"],
  },
  lime: {
    gradient: "from-lime-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-lime-400/45", "bg-lime-300/30", "bg-brand-400/25"],
  },
  orange: {
    gradient: "from-orange-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-orange-400/45", "bg-orange-300/30", "bg-brand-400/25"],
  },
  indigo: {
    gradient: "from-indigo-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-indigo-400/45", "bg-indigo-300/30", "bg-brand-400/25"],
  },
  pink: {
    gradient: "from-pink-500/20 via-brand-500/5 to-transparent",
    blobs: ["bg-pink-400/45", "bg-pink-300/30", "bg-brand-400/25"],
  },
};
