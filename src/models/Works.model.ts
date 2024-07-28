import { StaticImageData } from "next/image";

export interface Work {
  name: string;
  url: string | null;
  thumbnail: StaticImageData;
  type: string;
  stack: string[];
  summary: string;
  links: WorkLink[];
}

interface WorkLink {
  icon: string;
  url: string;
  tooltip: string;
}
