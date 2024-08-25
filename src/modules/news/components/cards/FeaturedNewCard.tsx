import type { NewCardProps } from "@/modules/news/types";
import Link from "next/link";

const FeaturedNewCard: React.FC<NewCardProps> = ({ new: newLy, innerRef }) => {
  const { descripcion, enlace_photo, id_noticias, titulo } = newLy;
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
      ref={innerRef}
    >
      <Link className="absolute inset-0 z-10" href={`/news/${id_noticias}`}>
        <span className="sr-only">Ver Artículo</span>
      </Link>
      <img
        alt={`Imagen de fondo de la noticia${titulo}`}
        className="object-cover w-full h-[400px] transition-all hover:scale-105"
        height="400"
        src={enlace_photo}
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width="600"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{titulo}</h3>
        <p className="text-sm text-gray-300">{descripcion}</p>
      </div>
    </div>
  );
};

export default FeaturedNewCard;
