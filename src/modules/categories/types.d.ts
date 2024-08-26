import type { New } from "@/modules/news/types";

export interface Category {
  id_clasificacion: number;
  nombre: string;
}

export interface CategoryCardProps {
  category: Category;
  news?: Array<New>;
  bgColor?: string;
  Icon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
}

export interface CategoriesContainerProps {
  categories: Array<Category>;
}
