import type { New } from "@/modules/news/types";
import Link from "next/link";

const RealtedNewsNewPageSection = ({
  relatedNews,
}: {
  relatedNews: Array<New>;
}) => {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Noticias Relacionadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedNews.map((news) => (
          <Link
            key={news.id_noticias}
            href={`/news/${news.id_noticias}`}
            className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src={news.enlace_photo}
              alt="Foto"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold mb-1">{news.titulo}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(news.fecha_creacion).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RealtedNewsNewPageSection;
