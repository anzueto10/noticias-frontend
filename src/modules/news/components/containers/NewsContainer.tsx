import type { NewsContainerProps } from "@/modules/news/types";
import NewCard from "@/modules/news/components/cards/NewCard";

const NewsContainer: React.FC<NewsContainerProps> = ({ news, newsToShow }) => {
  return (
    <div>
      {news.length > 0 ? (
        <ul className="space-y-4 flex flex-col">
          {news.slice(0, newsToShow ? newsToShow : -1).map((newLy) => (
            <NewCard key={newLy.id_noticias} new={newLy} />
          ))}
        </ul>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default NewsContainer;
