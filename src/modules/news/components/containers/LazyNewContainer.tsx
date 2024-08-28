"use client";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import FeaturedNewsContainer from "@/modules/news/components/containers/FeaturedNewsContainer";
import { getNew } from "../../api/news";
import { useAuthStore } from "@/context/store";

const LazyNewsContainer = () => {
  const { ref, inView } = useInView({});
  const { token } = useAuthStore();

  const fetchNews = async ({ pageParam }: { pageParam: number }) => {
    const newNew = await getNew({
      newId: pageParam,
      token: token as string,
    });
    return newNew || undefined;
  };

  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: fetchNews,
      initialPageParam: 1,

      getNextPageParam: (lastPage, allPages) => {
        const hasMoreNews = lastPage && lastPage.id_noticias;
        return hasMoreNews ? allPages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  const news = data?.pages.flat().filter((n) => n !== undefined) || [];

  if (status === "pending") return <h1>Cargando datos...</h1>;

  if (status === "error") return <h1>Error</h1>;

  return (
    <div>
      {news.length > 0 ? (
        <FeaturedNewsContainer news={news} />
      ) : (
        <h2>No hay noticias</h2>
      )}
      {isFetchingNextPage && <h2>Loading...</h2>}
      {!hasNextPage && <p>Ya no hay más noticias</p>}
      <div ref={ref}></div>
    </div>
  );
};

export default LazyNewsContainer;
