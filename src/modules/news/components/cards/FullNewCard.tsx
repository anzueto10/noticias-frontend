import type { NewCardProps } from "@/modules/news/types";
import Link from "next/link";

const FullNewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  const {
    descripcion,
    enlace_photo,
    fecha_creacion,
    id_noticias,
    titulo,
    trending,
  } = newLy;
  return (
    <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img
        src={enlace_photo}
        alt={`Foto de la noticia ${titulo}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-light dark:text-muted-dark">
            {fecha_creacion}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-highlight transition-colors">
          <Link href={`/news/${id_noticias}`}>{titulo}</Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{descripcion}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/noticias/${id_noticias}`}
            className="text-highlight hover:underline"
          >
            Leer más
          </Link>
          {trending && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Tendencia
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullNewCard;
