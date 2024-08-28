import type { Category } from "@/modules/categories/types";

export interface New {
  id_noticias: number;
  titulo: string;
  clasificacion: Category;
  descripcion: string;
  fecha_creacion: string;
  texto: string;
  enlace_photo: string;
  trending: boolean;
}

export interface NewCardProps {
  new: New;
}

export interface MoreReadNewCardProps extends NewCardProps {
  index: number;
}

export interface NewCategoryProps {
  category: Category;
}
interface NewsContainerProps {
  news: Array<New>;
  newsToShow?: number;
}
