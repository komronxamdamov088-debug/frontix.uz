import { Link } from "react-router-dom";
import { Send, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.team, to: "/team" },
    { label: t.nav.partners, to: "/partners" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer className="border-t border-ink/10 dark:border-white/10 bg-paper-2/60 dark:bg-ink-2/60">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/55 dark:text-paper/55">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              >
                <Send size={16} />
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/40 dark:text-paper/40">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink/65 dark:text-paper/65 hover:text-ink dark:hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/40 dark:text-paper/40">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/65 dark:text-paper/65">
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-ink dark:hover:text-paper transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-ink dark:hover:text-paper transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="text-ink/50 dark:text-paper/50">{SITE.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-ink/10 dark:border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink/40 dark:text-paper/40">
            © {year} FRONTIX. {t.footer.rights}
          </p>
          <p className="text-xs text-ink/40 dark:text-paper/40">{t.footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
