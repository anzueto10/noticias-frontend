"use client";
import CategoriesContainer from "@/modules/categories/components/containers/CategoriesContainer";
import useValidateSession from "@/modules/core/hooks/useValidateSession";
import useCategories from "../hooks/useCategories";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const MainExploreCategoriesSection = () => {
  useValidateSession();
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
    <section className="w-full py-6 md:py-12 lg:py-16 bg-background-light dark:bg-background-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Explora Nuestras Categorías
        </h2>
        {loading ? (
          <SpinnerLoader />
        ) : (
          <CategoriesContainer categories={categories} />
        )}
      </div>
    </section>
  );
};

export default MainExploreCategoriesSection;
