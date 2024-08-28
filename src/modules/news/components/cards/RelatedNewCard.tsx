import React from "react";
import { NewCardProps } from "../../types";
import Link from "next/link";

const RelatedNewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  return (
    <Link
      key={newLy.id_noticias}
      href={`/news/${newLy.id_noticias}`}
      className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      <img
        src={newLy.enlace_photo}
        alt="Foto"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="font-semibold mb-1">{newLy.titulo}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {new Date(newLy.fecha_creacion).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default RelatedNewCard;
