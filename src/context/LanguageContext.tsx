import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, type Dictionary, type Lang } from "@/i18n/translations";
import { getLangFromPathname, localizePath, stripLangPrefix } from "@/i18n/langRoutes";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = getLangFromPathname(location.pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    const canonicalPath = stripLangPrefix(location.pathname);
    navigate(`${localizePath(next, canonicalPath)}${location.search}${location.hash}`);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
