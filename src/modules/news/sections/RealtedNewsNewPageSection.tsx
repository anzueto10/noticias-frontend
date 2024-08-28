"use client";
import { useAuthStore } from "@/context/store";
import useRelatedNews from "../hooks/useRelatedNews";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";
import RelatedNewCard from "../components/cards/RelatedNewCard";

const RealtedNewsNewPageSection = () => {
  const { token } = useAuthStore();
  const { error, loading, news: relatedNews } = useRelatedNews(token as string);
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Noticias Relacionadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          <SpinnerLoader />
        ) : (
          <>
            {relatedNews.slice(0, 3).map((newLy) => (
              <RelatedNewCard new={newLy} key={newLy.id_noticias} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default RealtedNewsNewPageSection;
