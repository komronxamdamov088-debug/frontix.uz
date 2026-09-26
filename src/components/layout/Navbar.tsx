import { useEffect, useRef, useState, type ComponentType } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "@/components/i18n/LocalizedLink";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  LayoutGrid,
  Lightbulb,
  FolderOpen,
  Info,
  Users,
  Handshake,
  type LucideProps,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { stripLangPrefix } from "@/i18n/langRoutes";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  to: string;
  description?: string;
  icon?: ComponentType<LucideProps>;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

type NavEntry = NavItem | NavGroup;

const isGroup = (entry: NavEntry): entry is NavGroup => "items" in entry;

function isActivePath(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

function NavDropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(undefined);
  const active = group.items.some((item) => isActivePath(pathname, item.to));

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
          active || open
            ? "text-ink dark:text-paper"
            : "text-ink/55 dark:text-paper/55 hover:text-ink dark:hover:text-paper",
        )}
      >
        {group.label}
        <ChevronDown size={14} className={cn("opacity-60 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            <div className="w-80 rounded-2xl border border-ink/[0.06] bg-paper p-2 shadow-[0_16px_48px_-12px_rgba(5,5,6,0.25)] dark:border-white/10 dark:bg-ink-2 dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.7)]">
              {group.items.map((item) => {
                const Icon = item.icon;
                const itemActive = isActivePath(pathname, item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-start gap-3 rounded-xl p-3 transition-colors",
                      itemActive ? "bg-brand-50 dark:bg-brand-500/10" : "hover:bg-ink/[0.04] dark:hover:bg-white/[0.06]",
                    )}
                  >
                    {Icon && (
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                          itemActive
                            ? "bg-brand-500 text-white"
                            : "bg-ink/[0.04] text-ink/70 group-hover:bg-brand-500 group-hover:text-white dark:bg-white/[0.06] dark:text-paper/70",
                        )}
                      >
                        <Icon size={17} />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block text-sm font-semibold",
                          itemActive ? "text-brand-600 dark:text-brand-300" : "text-ink dark:text-paper",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs leading-snug text-ink/55 dark:text-paper/55">
                          {item.description}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = group.items.some((item) => isActivePath(pathname, item.to));
  const [expanded, setExpanded] = useState(active);

  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
          active || expanded ? "text-ink dark:text-paper" : "text-ink/60 dark:text-paper/60",
        )}
      >
        {group.label}
        <ChevronDown size={18} className={cn("opacity-50 transition-transform duration-200", expanded && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-4 flex flex-col gap-0.5 border-l border-ink/10 py-1 pl-3 dark:border-white/10">
              {group.items.map((item) => {
                const Icon = item.icon;
                const itemActive = isActivePath(pathname, item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
                      itemActive
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                        : "text-ink/65 dark:text-paper/65",
                    )}
                  >
                    {Icon && <Icon size={17} className="shrink-0 opacity-70" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const { pathname: rawPathname } = useLocation();
  const pathname = stripLangPrefix(rawPathname);

  // "Bosh sahifa" is the logo and "Aloqa" is the CTA button, so neither needs
  // its own nav entry (both stay in the mobile menu).
  const navEntries: NavEntry[] = [
    {
      label: t.nav.services,
      items: [
        { label: t.nav.services, to: "/services", description: t.nav.servicesDesc, icon: LayoutGrid },
        { label: t.nav.solutions, to: "/yechimlar", description: t.nav.solutionsDesc, icon: Lightbulb },
        { label: t.nav.projects, to: "/loyihalar", description: t.nav.projectsDesc, icon: FolderOpen },
      ],
    },
    {
      label: t.nav.company,
      items: [
        { label: t.nav.about, to: "/about", description: t.nav.aboutDesc, icon: Info },
        { label: t.nav.team, to: "/team", description: t.nav.teamDesc, icon: Users },
        { label: t.nav.partners, to: "/partners", description: t.nav.partnersDesc, icon: Handshake },
      ],
    },
    { label: t.nav.blog, to: "/blog" },
  ];
  const mobileEntries: NavEntry[] = [{ label: t.nav.home, to: "/" }, ...navEntries, { label: t.nav.contact, to: "/contact" }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-paper/80 dark:bg-ink/80 backdrop-blur-lg border-b border-ink/10 dark:border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link to="/" onClick={() => setOpen(false)} aria-label="FRONTIX">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navEntries.map((entry) =>
            isGroup(entry) ? (
              <NavDropdown key={entry.label} group={entry} pathname={pathname} />
            ) : (
              <NavLink
                key={entry.to}
                to={entry.to}
                className={({ isActive }) =>
                  cn(
                    "relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-ink dark:text-paper"
                      : "text-ink/55 dark:text-paper/55 hover:text-ink dark:hover:text-paper",
                  )
                }
              >
                {entry.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            aria-label="Theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/60 dark:text-paper/60 hover:text-ink dark:hover:text-paper hover:bg-ink/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <ButtonLink to="/contact" size="md">
            {t.nav.contactCta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/60 dark:text-paper/60"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink dark:text-paper"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-ink/10 dark:border-white/10 bg-paper dark:bg-ink"
          >
            <Container className="flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto py-4">
              {mobileEntries.map((entry) =>
                isGroup(entry) ? (
                  <MobileNavGroup key={entry.label} group={entry} pathname={pathname} onNavigate={() => setOpen(false)} />
                ) : (
                  <NavLink
                    key={entry.to}
                    to={entry.to}
                    end={entry.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-ink/[0.04] dark:bg-white/[0.06] text-ink dark:text-paper"
                          : "text-ink/60 dark:text-paper/60",
                      )
                    }
                  >
                    {entry.label}
                  </NavLink>
                ),
              )}
              <div className="mt-2 px-4">
                <LanguageSwitcher variant="inline" />
              </div>
              <ButtonLink to="/contact" size="md" onClick={() => setOpen(false)} className="mt-3 w-full">
                {t.nav.contactCta}
              </ButtonLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
