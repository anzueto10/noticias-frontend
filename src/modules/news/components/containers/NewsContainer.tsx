import type { NewsContainerProps } from "@/modules/news/types";
import NewCard from "@/modules/news/components/cards/NewCard";

const NewsContainer: React.FC<NewsContainerProps> = ({ news, newsToShow }) => {
  return (
    <div>
      {news.length > 0 ? (
        <ul className="space-y-4 flex flex-col">
          {news.slice(0, newsToShow || news.length).map((newLy) => (
            <li key={newLy.id_noticias}>
              <NewCard new={newLy} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default NewsContainer;
