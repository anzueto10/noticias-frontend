"use client";
import OpinionsContainer from "@/modules/opinions/components/containers/OpinionsContainer";
import NewsContainer from "@/modules/news/components/containers/NewsContainer";
import MoreReadNewsContainer from "@/modules/news/components/containers/MoreReadNewsContainer";
import Link from "next/link";
import useNews from "../hooks/useNews";
import { useAuthStore } from "@/context/store";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const OpinionsAndLastNewsSection = () => {
  const { token } = useAuthStore();

  if (!token) return;

  const { news, error, loading } = useNews(token);

  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Últimas Noticias
            </h2>
            {loading ? (
              <SpinnerLoader />
            ) : (
              <>
                {" "}
                <NewsContainer news={news} newsToShow={4} />
                <Link
                  href="/news/"
                  className="flex flex-col items-center justify-center px-6 py-3 border rounded-lg shadow-md hover:bg-accent-light transition-colors flex-grow max-w-fit"
                >
                  <span className="text-sm font-medium">Ver Más</span>
                </Link>
              </>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Opinión
            </h2>
            <OpinionsContainer />
            <div className="mt-8">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                Más Leídas
              </h3>
              <MoreReadNewsContainer news={news} newsToShow={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionsAndLastNewsSection;
