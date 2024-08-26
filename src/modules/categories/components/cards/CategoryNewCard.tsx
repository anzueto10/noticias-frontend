import { New } from "@/modules/news/types";
import Link from "next/link";

const CategoryNewCard = ({ new: newLy }: { new: New }) => {
  return (
    <div className="border-b pb-4 last:pt-4 last:border-b-0 last:pb-0">
      <h4 className="font-semibold text-lg mb-1 hover:text-highlight transition-colors">
        <Link href={`/news/${newLy.id_noticias}`}>{newLy.titulo}</Link>
      </h4>
      <p className="text-sm text-muted-light dark:text-muted-dark">
        {newLy.descripcion}
      </p>
    </div>
  );
};

export default CategoryNewCard;
