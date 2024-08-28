"use client";
import Link from "next/link";
import Button from "../ui/Button";
import {
  ArrowLeftCircleIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import NewCategoriesContainer from "@/modules/news/components/containers/NewCategoriesContainer";
import useCategories from "@/modules/categories/hooks/useCategories";
import SpinnerLoader from "../ui/loaders/SpinnerLoader";

const NotFoundSection = () => {
  const { categories, error, loading } = useCategories();
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">404 - Página no encontrada</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Oops! Parece que la noticia que buscas se ha desvanecido.
        </p>
      </div>

      <div className="w-64 h-64 mb-8">
        <NewspaperIcon className="w-full h-full " />
      </div>
      <Link href="/">
        <Button size="lg" className="mb-8">
          <HomeIcon className="mr-2 h-4 w-4" /> Volver a la página de inicio
        </Button>
      </Link>

      {!error && (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Categorías populares</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {loading ? (
              <SpinnerLoader />
            ) : (
              <NewCategoriesContainer categories={categories} />
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ¿No encuentras lo que buscas? Explora nuestras secciones
              principales.
            </p>

            <Link href="/categories">
              <Button>
                <ArrowLeftCircleIcon className="mr-2 size-6" /> Ver todas las
                categorías
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFoundSection;
