import Link from "next/link";
import { CategoryCardProps } from "@/modules/categories/types";
import CategoryNewsContainer from "@/modules/categories/components/containers/CategoryNewsContainer";

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  news,
  bgColor,
}) => {
  const { id_clasificacion, nombre } = category;
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
      <div
        className={`p-4 ${
          bgColor ? bgColor : "bg-blue-500"
        } flex items-center justify-between`}
      >
        <h3 className="text-xl font-bold text-white">{nombre}</h3>
        {/*<category.icon className="h-6 w-6 text-white" /> */}
      </div>
      <div className="p-4 flex-grow flex flex-col gap-3">
        <CategoryNewsContainer news={news} />
        <Link
          href={`/categories/${id_clasificacion}`}
          className="inline-flex items-center text-sm font-medium mt-auto text-blue-600 dark:text-blue-400 hover:underline"
        >
          Ver más noticias de {nombre}
          <svg
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
