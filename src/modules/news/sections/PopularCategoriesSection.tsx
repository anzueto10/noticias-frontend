import { Category } from "@/modules/categories/types";
import NewCategoriesContainer from "@/modules/news/components/containers/NewCategoriesContainer";
import categoriesMock from "@/modules/categories/mocks/categories.json";

const PopularCategoriesSection = () => {
  const categories: Array<Category> = categoriesMock;
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Categorías Populares
        </h2>
        <NewCategoriesContainer categories={categories} />
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
