"use client";
import Button from "@/modules/core/ui/Button";
import Select from "@/modules/core/ui/fields/Select";
import FullNewsContainer from "@/modules/news/components/containers/FullNewsContainer";
import type { New } from "@/modules/news/types";
import { ArrowTrendingUpIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CategoriePageTitleCard from "@/modules/categories/components/cards/CategoriePageTitleCard";
import { findCategoryIcon } from "@/modules/core/utils/findCategoryIcon";
import useValidateSession from "@/modules/core/hooks/useValidateSession";
import useCategory from "@/modules/categories/hooks/useCategory";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";
import { Category } from "@/modules/categories/types";

const CategoryPage = ({ params }: { params: { id: string } }) => {
  const { token } = useValidateSession();

  const categoryId = parseInt(params.id);
  const { categoriesNews, category, error, loading } = useCategory(
    categoryId,
    token as string
  );

  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  const [sorterBy, setSorterBy] = useState<"earliest" | "latest">("latest");
  const [filterTrending, setFilterTrending] = useState(false);

  const dateSortedNews = categoriesNews.sort((a, b) => {
    if (sorterBy === "latest")
      return (
        new Date(b.fecha_creacion).getTime() -
        new Date(a.fecha_creacion).getTime()
      );
    else
      return (
        new Date(a.fecha_creacion).getTime() -
        new Date(b.fecha_creacion).getTime()
      );
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );
  }

  const filteredNews: Array<New> = filterTrending
    ? categoriesNews.filter((newLy) => newLy.trending)
    : dateSortedNews;

  return (
    <section className="flex flex-col w-full py-6 md:py-12 lg:py-16 bg-accent-light dark:bg-accent-dark flex-grow">
      <div className="container px-4 md:px-6 mx-auto">
        {loading ? (
          <SpinnerLoader />
        ) : (
          <>
            <CategoriePageTitleCard
              category={category as Category}
              Icon={findCategoryIcon(category?.nombre as string)}
            />
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <Select
                  options={[
                    { text: "Más recientes", value: "latest" },
                    { text: "Menos recientes", value: "earliest" },
                  ]}
                  onChange={(e) =>
                    setSorterBy(e.currentTarget.value as "latest" | "earliest")
                  }
                />
                <Button
                  variant={filterTrending ? "primary" : "outline"}
                  onClick={() => setFilterTrending(!filterTrending)}
                >
                  <ArrowTrendingUpIcon className="size-6" />
                  Tendencias
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <FunnelIcon className="size-6" />
                <span className="text-sm text-muted-light dark:text-muted-dark">
                  Mostrando {filteredNews.length} de {categoriesNews.length}{" "}
                  noticias
                </span>
              </div>
            </div>

            <FullNewsContainer news={filteredNews} />
          </>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
