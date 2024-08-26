import newsMock from "@/modules/news/mocks/news.json";
import PageNewCard from "@/modules/news/components/cards/PageNewCard";
import RealtedNewsNewPageSection from "@/modules/news/sections/RealtedNewsNewPageSection";

const NewPage = ({ params }: { params: { id: string } }) => {
  const newId = parseInt(params.id);
  const newLy = newsMock[newId - 1];
  const { clasificacion } = newLy;

  const relatedNews = newsMock
    .filter(
      (newLy) =>
        newLy.clasificacion.id_clasificacion === clasificacion.id_clasificacion,
    )
    .slice(newId !== 1 ? 0 : 1, newId !== 1 ? 3 : 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageNewCard new={newLy} />
      <hr className="my-8" />

      <RealtedNewsNewPageSection relatedNews={relatedNews} />

      <hr className="my-8" />
    </div>
  );
};

export default NewPage;
