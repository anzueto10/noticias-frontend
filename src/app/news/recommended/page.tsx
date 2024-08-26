import Button from "@/modules/core/ui/Button";
import RecommendedNewsSection from "@/modules/news/sections/RecommendedNewsSection";

const NewsRecommendedPage = () => {
  return (
    <>
      <RecommendedNewsSection />
      {/**
       * Elemento extra solo para darle más diseño
       */}
      <section className="container mx-auto px-4 py-8 flex flex-col mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Temas que te podrían interesar
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Inteligencia Artificial",
            "Cambio Climático",
            "Startups",
            "Política Internacional",
            "Nutrición",
            "Ciberseguridad",
          ].map((topic) => (
            <Button key={topic} variant="outline" size="sm">
              {topic}
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsRecommendedPage;
