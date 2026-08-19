import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "mark";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        viewBox="0 0 44 44"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <polygon points="10,7 38,7 30,17 2,17" className="fill-ink dark:fill-paper" />
        <polygon points="10,21 25,21 16,42 1,42" className="fill-ink dark:fill-paper" />
        <rect x="27.5" y="23.5" width="8" height="8" rx="1.6" className="fill-brand-500" />
      </svg>
      {variant === "full" && (
        <span className="font-display text-lg font-semibold tracking-[0.14em] uppercase">
          Frontix
        </span>
      )}
    </span>
  );
}
