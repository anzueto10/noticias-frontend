"use client";
import RecommendedNewsContainer from "@/modules/news/components/containers/RecommendedNewsContainer";
import useNews from "../hooks/useNews";
import { useAuthStore } from "@/context/store";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const RecommendedNewsSection = () => {
  const { token } = useAuthStore();
  const { news, error, loading } = useNews(token as string);
  const recommendedNews =
    news.length <= 12
      ? [...news]
      : news.sort(() => Math.random() - 0.5).slice(0, 12);
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );
  return (
    <section className="container mx-auto px-4 py-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Noticias Recomendadas para Ti</h1>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <RecommendedNewsContainer initialNews={recommendedNews} />
      )}
    </section>
  );
};

export default RecommendedNewsSection;
