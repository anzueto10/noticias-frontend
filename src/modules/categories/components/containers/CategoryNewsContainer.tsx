import type { New } from "@/modules/news/types";
import CategoryNewCard from "@/modules/categories/components/cards/CategoryNewCard";

const CategoryNewsContainer = ({ news }: { news: Array<New> }) => {
  return (
    <div className="p-4 space-y-4">
      {news.length > 0 && (
        <ul>
          {news.map((newLy, index) => (
            <CategoryNewCard new={newLy} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryNewsContainer;
