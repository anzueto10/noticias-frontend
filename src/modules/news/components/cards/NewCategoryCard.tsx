import Link from "next/link";
import type { NewCategoryProps } from "@/modules/news/types";

const NewCategoryCard: React.FC<NewCategoryProps> = ({ category }) => {
  const { nombre, id_clasificacion } = category;
  return (
    <Link
      href={`/categories/${id_clasificacion}`}
      className="flex flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark rounded-lg shadow-md hover:shadow-lg transition-shadow flex-grow"
    >
      <span className="text-sm font-medium">{nombre}</span>
    </Link>
  );
};

export default NewCategoryCard;
