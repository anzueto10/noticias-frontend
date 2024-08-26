"use client";
import Button from "@/modules/core/ui/Button";
import Select from "@/modules/core/ui/fields/Select";
import FullNewsContainer from "@/modules/news/components/containers/FullNewsContainer";
import newsMock from "@/modules/news/mocks/news.json";
import type { New } from "@/modules/news/types";
import { ArrowTrendingUpIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import categoriesMock from "@/modules/categories/mocks/categories.json";
import CategoriePageTitleCard from "@/modules/categories/components/cards/CategoriePageTitleCard";
import { findCategoryIcon } from "@/modules/core/utils/findCategoryIcon";

const CategoryPage = ({ params }: { params: { id: string } }) => {
  const categoryId = parseInt(params.id);
  const category = categoriesMock[categoryId - 1];
  const { nombre } = category;
  const categoriesNews = newsMock.filter(
    (newLy) => newLy.clasificacion.id_clasificacion === categoryId && newLy
  ); // TODO quitar
  const [sorterBy, setSorterBy] = useState<"earliest" | "latest">("latest");
  const [filterTrending, setFilterTrending] = useState(false);

  const dateSortedNews = categoriesNews.sort((a, b) => {
    if (sorterBy === "latest")
      return (
        new Date(b.fecha_creacion).getTime() -
        new Date(a.fecha_creacion).getTime()
      );
    else sorterBy === "earliest";
    return (
      new Date(a.fecha_creacion).getTime() -
      new Date(b.fecha_creacion).getTime()
    );
  });

  const filteredNews: Array<New> = filterTrending
    ? categoriesNews.filter((newLy) => newLy.trending)
    : dateSortedNews;

  return (
    <section className="flex flex-col w-full py-6 md:py-12 lg:py-16 bg-accent-light dark:bg-accent-dark flex-grow">
      <div className="container px-4 md:px-6 mx-auto">
        <CategoriePageTitleCard
          category={category}
          Icon={findCategoryIcon(nombre)}
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
      </div>
    </section>
  );
};

export default CategoryPage;
