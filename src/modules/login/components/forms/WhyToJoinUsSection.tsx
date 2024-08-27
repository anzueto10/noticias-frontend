import { CATEGORY_CARD_BACKGROUND_COLORS } from "@/modules/categories/constants";
import categoriesMock from "@/modules/categories/mocks/categories.json";
import newsMock from "@/modules/news/mocks/news.json";

const WhyToJoinUsSection = async () => {
  const colors = Object.entries(CATEGORY_CARD_BACKGROUND_COLORS);
  const trendingNews = newsMock.filter((newLy) => newLy.trending);
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className="w-full max-w-md space-y-8">
        {categoriesMock.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Categorías Populares</h2>
            <div className="flex flex-wrap gap-2">
              {categoriesMock.map((category, index) => (
                <span
                  key={index}
                  className={`text-white px-3 py-1 rounded-full text-sm ${colors[Math.floor(Math.random() * colors.length)][1]}`}
                >
                  {category.nombre}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Noticias Destacadas</h2>
          <div className="space-y-4">
            {trendingNews.slice(0, 3).map((newLy, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-1">{newLy.titulo}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {newLy.clasificacion.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">¿Por qué unirte a NewsApp?</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Noticias personalizadas basadas en tus intereses</li>
            <li>Acceso a contenido exclusivo y análisis en profundidad</li>
            <li>
              Guarda y sincroniza tus artículos favoritos en todos tus
              dispositivos
            </li>
            <li>Participa en discusiones y comparte tus opiniones</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyToJoinUsSection;
