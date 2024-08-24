import type { NewsContainerProps } from "../../types";
import NewCard from "../cards/NewCard";

const NewsContainer: React.FC<NewsContainerProps> = ({
  initialNews,
  newsToShow,
}) => {
  return (
    <div>
      {initialNews.length > 0 ? (
        <ul className="space-y-4 flex flex-col">
          {initialNews
            .slice(0, newsToShow ? newsToShow : -1)
            .map((newLy, _) => (
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
