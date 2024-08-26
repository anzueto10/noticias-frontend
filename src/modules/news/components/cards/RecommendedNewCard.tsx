import type { NewCardProps } from "@/modules/news/types";
import {
  BookmarkIcon,
  ClockIcon,
  EyeIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const RecommendedNewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  const { descripcion, enlace_photo, id_noticias, titulo } = newLy;
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6">
        <Link href={`/news/${id_noticias}`}>
          <img
            src={enlace_photo}
            alt={"Imagen de la noticia"}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </Link>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
          <Link
            className="hover:text-highlight transition-colors"
            href={`/news/${id_noticias}`}
            rel="ugc"
          >
            {titulo}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground-light dark:text-muted-foreground-light">
          {descripcion}
        </p>
      </div>
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm text-muted-light dark:text-muted-dark">
          <span className="flex items-center">
            <ClockIcon className="size-6 mr-2" />7 min
          </span>
          <span className="flex items-center">
            <EyeIcon className="size-6 mr-2" />
            2100
          </span>
          <span className="flex items-center">
            <HandThumbUpIcon className="size-6 mr-2" />
            89
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            <BookmarkIcon className="size-6" />
            <span className="sr-only">Guardar para más tarde</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            <ShareIcon className="size-6" />
            <span className="sr-only">Compartir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedNewCard;
