import { useEffect, useState } from "react";
import { Link, NavLink } from "@/components/i18n/LocalizedLink";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.team, to: "/team" },
    { label: t.nav.partners, to: "/partners" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/contact" },
  ];

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

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-ink dark:text-paper"
                    : "text-ink/55 dark:text-paper/55 hover:text-ink dark:hover:text-paper",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
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

        <div className="flex items-center gap-1 md:hidden">
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
            className="md:hidden overflow-hidden border-t border-ink/10 dark:border-white/10 bg-paper dark:bg-ink"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
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
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 px-4">
                <LanguageSwitcher />
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
