import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { getAvatarBlobs } from "@/lib/avatar";
import { teamColorStyles } from "./teamColorStyles";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  const { t } = useLanguage();
  const style = teamColorStyles[member.color];
  const blobs = getAvatarBlobs(member.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] shadow-soft transition-colors duration-300 hover:border-brand-500/40"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br",
          style.gradient,
        )}
      >
        {blobs.map((blob, i) => (
          <span
            key={i}
            className={cn("absolute rounded-full blur-2xl transition-transform duration-500 group-hover:scale-110", style.blobs[i])}
            style={{ top: blob.top, left: blob.left, width: blob.size, height: blob.size }}
          />
        ))}
        <div className="absolute inset-0 bg-ink/[0.02] backdrop-blur-[2px] dark:bg-ink/10" />
        <span className="relative font-display text-4xl font-semibold text-ink/60 dark:text-paper/80">
          {getInitials(member.name)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm text-brand-500">{t.team.roles[member.roleKey]}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/55 dark:text-paper/55">
          {t.team.bios[member.roleKey]}
        </p>
      </div>
    </motion.div>
  );
}
