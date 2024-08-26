import type { New } from "@/modules/news/types";

export interface Author {
  name: string;
  photo: string;
}

export interface Opinion {
  new: New;
  author: Author;
}
export interface OpinionCardProps {
  opinion: Opinion;
}
