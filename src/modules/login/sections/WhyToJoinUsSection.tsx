"use client";
import { CATEGORY_CARD_BACKGROUND_COLORS } from "@/modules/categories/constants";
import useCategories from "@/modules/categories/hooks/useCategories";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const WhyToJoinUsSection = () => {
  const colors = Object.entries(CATEGORY_CARD_BACKGROUND_COLORS);
  const { categories, error, loading } = useCategories();
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className="w-full max-w-md space-y-8">
        {!error && (
          <>
            {" "}
            {loading ? (
              <SpinnerLoader />
            ) : (
              <>
                {categories.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Categorías Populares
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
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
              </>
            )}
          </>
        )}

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
