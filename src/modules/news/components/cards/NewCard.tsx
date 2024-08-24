import Image from "next/image";
import type { NewCardProps } from "@/modules/news/types";
import Link from "next/link";

const NewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  const { clasificacion, descripcion, enlace_photo, id_noticias, titulo } =
    newLy;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl max-w-fit">
      <Link className="absolute inset-0 z-10" href={`/news/${id_noticias}`}>
        <span className="sr-only">Ver Artículo</span>
      </Link>
      <Image
        alt={`Imagen de Noticia ${titulo}`}
        className="h-60 transition-all group-hover:scale-105 object-cover"
        height="400"
        src={enlace_photo}
        style={{ aspectRatio: "600 / 400" }}
        width="600"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <div className="text-sm text-highlight mb-1">
          {clasificacion.nombre}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-highlight transition-colors">
          {titulo}
        </h3>
        <p className="text-sm text-muted-foreground-light dark:text-muted-foreground-dark">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default NewCard;
