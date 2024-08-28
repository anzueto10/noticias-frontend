"use client";
import PageNewCard from "@/modules/news/components/cards/PageNewCard";
import RealtedNewsNewPageSection from "@/modules/news/sections/RealtedNewsNewPageSection";
import useValidateSession from "@/modules/core/hooks/useValidateSession";
import useNew from "@/modules/news/hooks/useNew";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";
import NotFoundSection from "@/modules/core/sections/404Section";

const NewPage = ({ params }: { params: { id: string } }) => {
  const { token } = useValidateSession();

  const newId = parseInt(params.id);

  const { error, loading, newLy } = useNew(token as string, newId);

  if (error)
    return (
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="mx-auto font-bold text-4xl text-center my-auto">
          Ha ocurrido un error inesperado, por favor vuelva de nuevo más tarde.
        </h1>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <SpinnerLoader />
      ) : (
        <>
          {newLy ? (
            <>
              <PageNewCard new={newLy} />
              <hr className="my-8" />

              <RealtedNewsNewPageSection />

              <hr className="my-8" />
            </>
          ) : (
            <NotFoundSection />
          )}
        </>
      )}
    </div>
  );
};

export default NewPage;
