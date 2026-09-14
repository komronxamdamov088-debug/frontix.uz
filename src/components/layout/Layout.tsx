import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { FrxWidget } from "@/components/frx/FrxWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FrxWidget />
      <CookieConsent />
    </div>
  );
}
