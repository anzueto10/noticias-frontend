import type { CategoriesContainerProps } from "@/modules/categories/types";
import CategoryCard from "@/modules/categories/components/cards/CategoryCard";
import { CATEGORY_CARD_BACKGROUND_COLORS } from "@/modules/categories/constants";
import useNews from "@/modules/news/hooks/useNews";
import { useAuthStore } from "@/context/store";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  categories,
}) => {
  const { token } = useAuthStore();
  if (!token) return;
  const colors = Object.entries(CATEGORY_CARD_BACKGROUND_COLORS);
  const { error, loading, news } = useNews(token);
  if (error)
    return (
      <h1 className="mx-auto font-bold text-4xl text-center my-auto">
        Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
      </h1>
    );

  return (
    <div>
      {categories.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <SpinnerLoader />
          ) : (
            <>
              {categories.map((category, index) => (
                <li className="h-full" key={index}>
                  {/* Manejar la lógica para obtener las noticias, podría ser que el backend devuelva con una solicitud a categoria/id con noticias seleccionadas por el backend.
                   */}
                  <CategoryCard
                    category={category}
                    news={news
                      .filter(
                        (newLy) =>
                          newLy.clasificacion.nombre === category.nombre
                      )
                      .slice(0, 2)}
                    bgColor={
                      colors[Math.floor(Math.random() * colors.length)][1]
                    }
                  />
                </li>
              ))}
            </>
          )}
        </ul>
      ) : (
        <h2>No Hay categorías</h2>
      )}
    </div>
  );
};

export default CategoriesContainer;
