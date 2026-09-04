import { Link as RouterLink, NavLink as RouterNavLink, type LinkProps, type NavLinkProps } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/i18n/langRoutes";

// Internal `to` props across the app are written as canonical (uz) paths, e.g.
// "/contact". These wrappers localize them to the current language's URL
// (e.g. "/ru/contact") so navigation never drops the visitor back to uz.
export function Link({ to, ...props }: LinkProps) {
  const { lang } = useLanguage();
  return <RouterLink to={typeof to === "string" ? localizePath(lang, to) : to} {...props} />;
}

export function NavLink({ to, ...props }: NavLinkProps) {
  const { lang } = useLanguage();
  return <RouterNavLink to={typeof to === "string" ? localizePath(lang, to) : to} {...props} />;
}
