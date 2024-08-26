"use client";
import { useState } from "react";
import type { NewCardProps } from "@/modules/news/types";
import { DEFAULT_TEXT_NEW_PAGE } from "../../constants";
import Button from "@/modules/core/ui/Button";
import {
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Facebook from "@/modules/core/icons/FacebookIcon";
import Twitter from "@/modules/core/icons/TwitterIcon";
import LinkedIn from "@/modules/core/icons/Linkedin";
import Link from "next/link";

const PageNewCard: React.FC<NewCardProps> = ({ new: newLy }) => {
  const { clasificacion, enlace_photo, fecha_creacion, titulo } = newLy;

  const [likes, setLikes] = useState(32);
  const [hasLiked, setHasLiked] = useState(false);
  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  return (
    <article className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{titulo}</h1>
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
          <span className="flex items-center mr-4">
            <UserIcon className="size-4 mr-2" />
            Autor De La Noticia
          </span>
          <span className="flex items-center mr-4">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {new Date(fecha_creacion).toLocaleDateString()}
          </span>
          <Link
            href={`/categoria/${clasificacion.nombre.toLowerCase()}`}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {clasificacion.nombre}
          </Link>
        </div>
      </header>

      {enlace_photo && (
        <img
          src={enlace_photo}
          alt={titulo}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
      )}
      <div
        className="prose dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: DEFAULT_TEXT_NEW_PAGE }} //Aquí iría new.texto pero es muy corto
      />

      <footer className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="md" onClick={handleLike}>
              <HandThumbUpIcon
                className={`h-4 w-4 mr-2 ${
                  hasLiked ? "text-blue-500 fill-blue-500" : ""
                }`}
              />
              {likes}
            </Button>
            <Button variant="outline" size="md">
              <ChatBubbleBottomCenterIcon className="h-4 w-4 mr-2" />
              32 Comentarios
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              Compartir:
            </span>
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Compartir en Facebook</span>
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Compartir en Twitter</span>
            </Button>
            <Button variant="outline" size="sm">
              <LinkedIn className="h-4 w-4" />
              <span className="sr-only">Compartir en LinkedIn</span>
            </Button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PageNewCard;
