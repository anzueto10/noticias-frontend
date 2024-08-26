import type { NewsContainerProps } from "@/modules/news/types";
import FeaturedNewCard from "@/modules/news/components/cards/FeaturedNewCard";

const FeaturedNewsContainer: React.FC<NewsContainerProps> = ({
  news,
  newsToShow,
}) => {
  return (
    <div id="featured-news-container">
      {news.length > 0 ? (
        <ul className="space-y-4">
          {news.slice(0, newsToShow ? newsToShow : -1).map((newLy, index) => (
            <li key={index}>
              <FeaturedNewCard new={newLy} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default FeaturedNewsContainer;
