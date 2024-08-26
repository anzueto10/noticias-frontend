import type { Category } from "@/modules/categories/types";
import NewCategoryCard from "@/modules/news/components/cards/NewCategoryCard";

const NewCategoriesContainer = ({
  categories,
}: {
  categories: Array<Category>;
}) => {
  return (
    <div className="flex flex-row gap-4 justify-center">
      {categories.length > 0 ? (
        <>
          {categories.map((category, index) => (
            <NewCategoryCard key={index} category={category} />
          ))}
        </>
      ) : (
        <h2>No hay categorías</h2>
      )}
    </div>
  );
};

export default NewCategoriesContainer;
