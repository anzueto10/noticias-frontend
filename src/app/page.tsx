import FeaturedNewsSection from "@/modules/news/components/sections/FeaturedNewsSection";
import InformedFormSection from "@/modules/news/components/sections/InformedFormSection";
import OpinionsAndLastNewsSection from "@/modules/news/components/sections/OpinionsAndLastNewsSection";
import PopularCategoriesSection from "@/modules/news/components/sections/PopularCategoriesSection";
import newsMock from "@/modules/news/mocks/news.json";
import type { New } from "@/modules/news/types";

const HomePage = async () => {
  const news: Array<New> = await newsMock;
  return (
    <main className="w-full flex-grow flex-1">
      <FeaturedNewsSection news={news} />
      <PopularCategoriesSection />
      <InformedFormSection />
      <OpinionsAndLastNewsSection news={news} />
    </main>
  );
};

export default HomePage;
