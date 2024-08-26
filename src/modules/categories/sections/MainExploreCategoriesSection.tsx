import CategoriesContainer from "@/modules/categories/components/containers/CategoriesContainer";
import type { Category } from "@/modules/categories/types";
import categoriesMock from "@/modules/categories/mocks/categories.json";

const MainExploreCategoriesSection = async () => {
  const categories: Array<Category> = categoriesMock;
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-background-light dark:bg-background-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Explora Nuestras Categorías
        </h2>
        <CategoriesContainer categories={categories} />
      </div>
    </section>
  );
};

export default MainExploreCategoriesSection;
