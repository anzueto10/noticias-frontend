import FeaturedNewCard from "../cards/FeaturedNewCard";
import HorizontalNewCard from "../cards/HorizontalNewCard";
import type { New } from "../../types";

const FeaturedNewsSection = ({ news }: { news: Array<New> }) => {
  const randomMainFeaturedNewIndex = Math.floor(Math.random() * news.length);
  const randomFeaturedNewIndexes = news
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent-light dark:bg-accent-dark flex flex-col md:flex-row justify-center ">
      <div className="container px-4 md:px-6">
        {news.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Noticias Destacadas
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FeaturedNewCard new={news[randomMainFeaturedNewIndex]} />
              <div className="grid gap-6">
                {randomFeaturedNewIndexes.map((newLy, index) => (
                  <HorizontalNewCard new={newLy} key={index} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
