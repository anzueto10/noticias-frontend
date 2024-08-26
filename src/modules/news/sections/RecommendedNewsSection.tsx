import RecommendedNewsContainer from "@/modules/news/components/containers/RecommendedNewsContainer";
import newsMock from "@/modules/news/mocks/news.json";

const RecommendedNewsSection = () => {
  const recommendedNews =
    newsMock.length <= 12
      ? [...newsMock]
      : newsMock.sort(() => Math.random() - 0.5).slice(0, 12);

  return (
    <section className="container mx-auto px-4 py-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Noticias Recomendadas para Ti</h1>
      <RecommendedNewsContainer initialNews={recommendedNews} />
    </section>
  );
};

export default RecommendedNewsSection;
