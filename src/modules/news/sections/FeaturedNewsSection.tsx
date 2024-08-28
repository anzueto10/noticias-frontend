"use client";

import FeaturedNewCard from "@/modules/news/components/cards/FeaturedNewCard";
import HorizontalNewCard from "@/modules/news/components/cards/HorizontalNewCard";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";
import { useAuthStore } from "@/context/store";
import useNews from "../hooks/useNews";

const FeaturedNewsSection = () => {
  const { token } = useAuthStore();
  if (!token) return;

  const { news, error, loading } = useNews(token);

  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent-light dark:bg-accent-dark flex flex-col md:flex-row justify-center ">
      <div className="container px-4 md:px-6">
        {loading ? (
          <SpinnerLoader />
        ) : (
          <>
            {news.length > 0 ? (
              <>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                  Noticias Destacadas
                </h2>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <FeaturedNewCard new={news[0]} />
                  <div className="grid gap-6">
                    {news.slice(0, 3).map((newLy, index) => (
                      <HorizontalNewCard new={newLy} key={index} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <h2>No hay noticias...</h2>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
