"use client";
import NewCategoriesContainer from "@/modules/news/components/containers/NewCategoriesContainer";
import useCategories from "@/modules/categories/hooks/useCategories";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const PopularCategoriesSection = () => {
  const { categories, error, loading } = useCategories();
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Categorías Populares
        </h2>
        {loading ? (
          <div className="mx-auto">
            <SpinnerLoader />
          </div>
        ) : (
          <NewCategoriesContainer categories={categories} />
        )}
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
