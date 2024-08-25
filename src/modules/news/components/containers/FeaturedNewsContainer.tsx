import type { NewsContainerProps } from "../../types";
import FeaturedNewCard from "../cards/FeaturedNewCard";

const FeaturedNewsContainer: React.FC<NewsContainerProps> = ({
  news,
  newsToShow,
}) => {
  return (
    <div id="featured-news-container">
      {news.length > 0 ? (
        <ul className="space-y-4">
          {news.slice(0, newsToShow ? newsToShow : -1).map((newLy, index) => (
            <FeaturedNewCard key={index} new={newLy} />
          ))}
        </ul>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default FeaturedNewsContainer;
