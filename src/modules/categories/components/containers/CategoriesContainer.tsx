import { New } from "@/modules/news/types";
import type { CategoriesContainerProps } from "@/modules/categories/types";
import CategoryCard from "@/modules/categories/components/cards/CategoryCard";
import mockNews from "@/modules/news/mocks/news.json";
import { CATEGORY_CARD_BACKGROUND_COLORS } from "@/modules/categories/constants";

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  categories,
}) => {
  const news: Array<New> = mockNews;
  const colors = Object.entries(CATEGORY_CARD_BACKGROUND_COLORS);
  return (
    <div>
      {categories.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <li className="h-full">
              {/* Manejar la lógica para obtener las noticias, podría ser que el backend devuelva con una solicitud a categoria/id con noticias seleccionadas por el backend.
               */}
              <CategoryCard
                category={category}
                news={news
                  .filter(
                    (newLy) => newLy.clasificacion.nombre === category.nombre
                  )
                  .slice(0, 2)}
                key={index}
                bgColor={colors[Math.floor(Math.random() * colors.length)][1]}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>No Hay categorías</h2>
      )}
    </div>
  );
};

export default CategoriesContainer;
