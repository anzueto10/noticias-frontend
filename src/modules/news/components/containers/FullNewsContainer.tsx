import { NewsContainerProps } from "@/modules/news/types";
import FullNewCard from "@/modules/news/components/cards/FullNewCard";

const FullNewsContainer: React.FC<NewsContainerProps> = ({
  news,
  newsToShow,
}) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {news.length > 0 ? (
        <>
          {news.slice(0, newsToShow ? newsToShow : -1).map((newLy) => (
            <FullNewCard new={newLy} key={newLy.id_noticias} />
          ))}
        </>
      ) : (
        <h2>No hay noticias</h2>
      )}
    </div>
  );
};

export default FullNewsContainer;
