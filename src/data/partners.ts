import partner1 from "@/assets/partners/partner-1.png";
import partner2 from "@/assets/partners/partner-2.png";
import partner3 from "@/assets/partners/partner-3.png";
import partner4 from "@/assets/partners/partner-4.png";
import partner5 from "@/assets/partners/partner-5.png";

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: "partner-1", name: "Tezcode", logo: partner1 },
  { id: "partner-2", name: "Coremed", logo: partner2 },
  { id: "partner-4", name: "AI Solution", logo: partner4 },
  { id: "partner-5", name: "Mars IT School", logo: partner5 },
  { id: "partner-3", name: "QarzDaftar", logo: partner3 },
];
