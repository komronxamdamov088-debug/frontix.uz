import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Partner } from "@/data/partners";

export function PartnerCard({ partner, index = 0 }: { partner: Partner; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 16, mass: 0.4 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), springConfig);
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowX} ${glowY}, color-mix(in srgb, var(--color-brand-500) 18%, transparent), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] shadow-soft transition-shadow duration-300 hover:shadow-[0_24px_60px_-20px_color-mix(in_srgb,var(--color-brand-500)_45%,transparent)]"
    >
      <span
        className="pointer-events-none absolute -inset-px rounded-[inherit] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      >
        <span
          className="absolute inset-[-100%] animate-spin [animation-duration:3.5s]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, var(--color-brand-300) 8%, var(--color-brand-500) 14%, transparent 26%, transparent 100%)",
          }}
        />
      </span>

      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white p-10">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glowBackground }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-brand-500/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[280%]" />
        <motion.img
          src={partner.logo}
          alt={partner.name}
          style={{ translateZ: 30 }}
          className="relative max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="relative flex flex-1 items-center overflow-hidden border-t border-ink/10 dark:border-white/10 p-6">
        <span
          className="pointer-events-none absolute -top-3 right-1 select-none font-display text-7xl font-semibold text-ink/[0.04] transition-colors duration-500 group-hover:text-brand-500/10 dark:text-white/[0.05]"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative">
          <span className="mb-2 block h-[3px] w-6 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-10" />
          <h3 className="text-lg font-semibold tracking-tight">{partner.name}</h3>
        </div>
      </div>
    </motion.div>
  );
}
