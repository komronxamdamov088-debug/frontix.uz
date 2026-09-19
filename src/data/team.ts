export type RoleKey =
  | "founder"
  | "coFounder"
  | "coFounderCTO"
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops"
  | "qa"
  | "admin"
  | "smm"
  | "designer";

export type TeamCategory = "founder" | "developer" | "admin" | "designer";

export type TeamColor =
  | "brand"
  | "fuchsia"
  | "emerald"
  | "amber"
  | "sky"
  | "violet"
  | "rose"
  | "cyan"
  | "lime"
  | "orange"
  | "indigo"
  | "pink";

export interface TeamMember {
  slug: string;
  name: string;
  roleKey: RoleKey;
  category: TeamCategory;
  color: TeamColor;
}

export const team: TeamMember[] = [
  { slug: "Komron-Xamdamov", name: "Komron Xamdamov", roleKey: "founder", category: "founder", color: "brand" },
  { slug: "Abdurahmon-Ahunjanov", name: "Abdurahmon Ahunjanov", roleKey: "coFounder", category: "founder", color: "fuchsia" },
  { slug: "Ismail-Ulugbekov", name: "Ismail Ulug'bekov", roleKey: "coFounderCTO", category: "founder", color: "sky" },
  { slug: "Komron-Xamdamov-Dev", name: "Komron Xamdamov", roleKey: "fullstack", category: "developer", color: "brand" },
  { slug: "Bahriddin-Ikromov", name: "Bahriddin Ikromov", roleKey: "fullstack", category: "developer", color: "emerald" },
  { slug: "Akmal-Rustamov", name: "Akmal Rustamov", roleKey: "smm", category: "admin", color: "rose" },
  { slug: "Diyor-Abdurahimov", name: "Diyor Abdurahimov", roleKey: "admin", category: "admin", color: "indigo" },
  { slug: "Behruz-Rahmatullaev", name: "Behruz Rahmatullaev", roleKey: "frontend", category: "developer", color: "emerald" },
  { slug: "Boxodir-Komolov", name: "Boxodir Komolov", roleKey: "frontend", category: "developer", color: "amber" },
  { slug: "Isroilbek-Nuriddinov", name: "Isroilbek Nuriddinov", roleKey: "frontend", category: "developer", color: "sky" },
  { slug: "nilufar-xolova", name: "Nilufar Xolova", roleKey: "mobile", category: "developer", color: "violet" },
  { slug: "sherzod-qodirov", name: "Sherzod Qodirov", roleKey: "backend", category: "developer", color: "rose" },
  { slug: "madina-ergasheva", name: "Madina Ergasheva", roleKey: "frontend", category: "developer", color: "cyan" },
  { slug: "farrux-islomov", name: "Farrux Islomov", roleKey: "devops", category: "developer", color: "lime" },
  { slug: "zarina-mirzayeva", name: "Zarina Mirzayeva", roleKey: "qa", category: "developer", color: "orange" },
  { slug: "malika-rahimova", name: "Malika Rahimova", roleKey: "designer", category: "designer", color: "pink" },
];
