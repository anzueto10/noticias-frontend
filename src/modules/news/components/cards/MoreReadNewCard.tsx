import type { MoreReadNewCardProps } from "../../types";
import Link from "next/link";

const MoreReadNewCard: React.FC<MoreReadNewCardProps> = ({
  new: newLy,
  index,
}) => {
  const { id_noticias, titulo, clasificacion } = newLy;
  return (
    <div className="flex items-center space-x-4 group">
      <div className="text-2xl font-bold text-gray-300">{index + 1}</div>
      <div>
        <h4 className="text-lg font-semibold group-hover:text-highlight transition-colors">
          <Link href={`/news/${id_noticias}`}>{titulo}</Link>
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {clasificacion.nombre}
        </p>
      </div>
    </div>
  );
};

export default MoreReadNewCard;
