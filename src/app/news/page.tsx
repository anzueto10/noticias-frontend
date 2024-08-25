import FeaturedNewsContainer from "@/modules/news/components/containers/FeaturedNewsContainer";
import LazyNewsContainer from "@/modules/news/components/containers/LazyNewContainer";

const NewsPage = async () => {
  return (
    <main className="w-full flex-grow flex-1 p-3">
      <header className="space-y-5 text-center">
        <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Las mejores Noticias
        </h1>
        <p className="text-muted-foreground-light dark:text-muted-foreground-dark text-center text-lg">
          Encuentra las mejores noticias de tu interés
        </p>
      </header>
      <section className="p-6 md:p-12">
        <LazyNewsContainer />
      </section>
    </main>
  );
};

export default NewsPage;
