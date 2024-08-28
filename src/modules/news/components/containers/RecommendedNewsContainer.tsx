"use client";
import Button from "@/modules/core/ui/Button";
import Select from "@/modules/core/ui/fields/Select";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Switch from "@/modules/core/ui/fields/Switch";
import categoriesMock from "@/modules/categories/mocks/categories.json";
import type { Category } from "@/modules/categories/types";
import RecommendedNewCard from "@/modules/news/components/cards/RecommendedNewCard";
import type { New } from "@/modules/news/types";
import { getAllNews } from "../../api/news";
import { useAuthStore } from "@/context/store";

const RecommendedNewsContainer = ({
  initialNews,
}: {
  initialNews: Array<New>;
}) => {
  const [showTrending, setShowTrending] = useState(false);
  const categories: Array<Category> = categoriesMock;
  const [filter, setFilter] = useState<"all" | string>("all");
  const [news, setNews] = useState(initialNews);
  const { token } = useAuthStore();

  const filteredNews = news
    .filter(
      (newLy) =>
        filter === "all" ||
        newLy.clasificacion.id_clasificacion.toString() === filter
    )
    .filter((newLy) => !showTrending || newLy.trending);

  const handdleSwitchChange = (value: boolean) => {
    setShowTrending(value);
  };

  const handdleReloadNews = async () => {
    const news = await getAllNews({ token: token as string });
    const newNews =
      news.length <= 6
        ? [...news]
        : news.sort(() => Math.random() - 0.5).slice(0, 6);
    setNews(newNews);
  };

  return (
    <section className="w-full py-4 flex-grow">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Select
            options={[{ value: "all", text: "Todas" }].concat(
              categories.map((category) => ({
                value: category.id_clasificacion.toString(),
                text: category.nombre,
              }))
            )}
            onChange={(e) => setFilter(e.currentTarget.value)}
          />
          <div className="flex items-center space-x-2">
            <label className="inline-flex items-center cursor-pointer">
              <Switch id="trending-mode" onChange={handdleSwitchChange} />
              <span className="ms-3 text-sm font-medium ">Solo tendencias</span>
            </label>
          </div>
        </div>

        <Button variant="outline" size="sm" onClick={handdleReloadNews}>
          <ArrowPathIcon className="size-6" />
          Actualizar recomendaciones
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          <>
            {filteredNews.map((newLy, index) => (
              <RecommendedNewCard key={index} new={newLy} />
            ))}
          </>
        ) : (
          <h2>No hay noticias</h2>
        )}
      </div>{" "}
    </section>
  );
};

export default RecommendedNewsContainer;
