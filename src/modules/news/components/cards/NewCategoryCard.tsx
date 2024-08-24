import Link from "next/link";
import type { NewCategoryProps } from "../../types";

const NewCategoryCard: React.FC<NewCategoryProps> = ({ category }) => {
  const { nombre } = category;
  return (
    <Link
      href="#"
      className="flex flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark rounded-lg shadow-md hover:shadow-lg transition-shadow flex-grow"
    >
      <span className="text-sm font-medium">{nombre}</span>
    </Link>
  );
};

export default NewCategoryCard;
