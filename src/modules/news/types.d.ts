export interface Category {
  id_clasificacion: number;
  nombre: string;
}

export interface New {
  id_noticias: number;
  titulo: string;
  clasificacion: Category;
  descripcion: string;
  fecha_creacion: string;
  texto: string;
  enlace_photo: string;
}

export interface NewCardProps {
  new: New;
  innerRef?: React.Ref<HTMLDivElement>;
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
