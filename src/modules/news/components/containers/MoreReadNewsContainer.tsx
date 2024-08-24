import type { New } from "../../types";
import MoreReadNewCard from "../cards/MoreReadNewCard";

const MoreReadNewsContainer = ({
  initialNews,
}: {
  initialNews: Array<New>;
}) => {
  return (
    <div className="space-y-4">
      {initialNews.length > 0 ? (
        <>
          {initialNews.slice(0, 3).map((newLy, index) => (
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
