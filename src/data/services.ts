import type { LucideIcon } from "lucide-react";
import { Globe, QrCode, Send, ShoppingCart, Workflow, Code2 } from "lucide-react";

export interface Service {
  slug: "website-development" | "qr-menu" | "telegram-bot" | "online-ordering" | "business-automation" | "custom-software";
  icon: LucideIcon;
}

export const services: Service[] = [
  { slug: "website-development", icon: Globe },
  { slug: "qr-menu", icon: QrCode },
  { slug: "telegram-bot", icon: Send },
  { slug: "online-ordering", icon: ShoppingCart },
  { slug: "business-automation", icon: Workflow },
  { slug: "custom-software", icon: Code2 },
];
