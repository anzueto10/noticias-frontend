import type { NewsContainerProps } from "@/modules/news/types";
import MoreReadNewCard from "@/modules/news/components/cards/MoreReadNewCard";

const MoreReadNewsContainer: React.FC<NewsContainerProps> = ({
  news,
  newsToShow,
}) => {
  return (
    <div className="space-y-4">
      {news.length > 0 ? (
        <>
          {news.slice(0, newsToShow || news.length).map((newLy, index) => (
            <MoreReadNewCard key={index} new={newLy} index={index} />
          ))}
        </>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default MoreReadNewsContainer;
