export type RoleKey =
  | "founder"
  | "coFounder"
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops"
  | "qa"
  | "admin"
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
  { slug: "sardor-aliyev", name: "Sardor Aliyev", roleKey: "founder", category: "founder", color: "brand" },
  { slug: "diyora-nazarova", name: "Diyora Nazarova", roleKey: "coFounder", category: "founder", color: "fuchsia" },
  { slug: "jasur-toshev", name: "Jasur Toshev", roleKey: "frontend", category: "developer", color: "emerald" },
  { slug: "kamola-yusupova", name: "Kamola Yusupova", roleKey: "backend", category: "developer", color: "amber" },
  { slug: "otabek-rashidov", name: "Otabek Rashidov", roleKey: "fullstack", category: "developer", color: "sky" },
  { slug: "nilufar-xolova", name: "Nilufar Xolova", roleKey: "mobile", category: "developer", color: "violet" },
  { slug: "sherzod-qodirov", name: "Sherzod Qodirov", roleKey: "backend", category: "developer", color: "rose" },
  { slug: "madina-ergasheva", name: "Madina Ergasheva", roleKey: "frontend", category: "developer", color: "cyan" },
  { slug: "farrux-islomov", name: "Farrux Islomov", roleKey: "devops", category: "developer", color: "lime" },
  { slug: "zarina-mirzayeva", name: "Zarina Mirzayeva", roleKey: "qa", category: "developer", color: "orange" },
  { slug: "bekzod-saidov", name: "Bekzod Saidov", roleKey: "admin", category: "admin", color: "indigo" },
  { slug: "malika-rahimova", name: "Malika Rahimova", roleKey: "designer", category: "designer", color: "pink" },
];
