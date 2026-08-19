import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper dark:bg-paper dark:text-ink hover:opacity-90 shadow-soft",
  secondary:
    "bg-transparent text-ink dark:text-paper border border-ink/15 dark:border-white/15 hover:border-ink/30 dark:hover:border-white/30 hover:bg-ink/[0.03] dark:hover:bg-white/[0.04]",
  ghost:
    "bg-transparent text-ink dark:text-paper hover:bg-ink/[0.04] dark:hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 whitespace-nowrap";

type ButtonProps = BaseProps & HTMLMotionProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseClasses, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

interface ButtonLinkProps extends BaseProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function ButtonLink({ variant = "primary", size = "md", className, to, children, onClick }: ButtonLinkProps) {
  return (
    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="inline-block">
      <Link to={to} onClick={onClick} className={cn(baseClasses, sizes[size], variants[variant], className)}>
        {children}
      </Link>
    </motion.div>
  );
}
