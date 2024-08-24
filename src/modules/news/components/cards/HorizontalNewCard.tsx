import type { NewCardProps } from "@/modules/news/types";
import Link from "next/link";

const HorizontalNewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  const { descripcion, enlace_photo, id_noticias, titulo } = newLy;

  return (
    <div className="flex gap-4 items-start">
      <img
        alt={titulo}
        className="object-cover w-24 h-24 rounded-md"
        height="96"
        src={enlace_photo}
        style={{
          aspectRatio: "1/1",
          objectFit: "cover",
        }}
        width="96"
      />
      <div>
        <h4 className="text-lg font-semibold mb-1 hover:text-highlight transition-colors">
          <Link href={`/news/${id_noticias}`}>{titulo}</Link>
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default HorizontalNewCard;
