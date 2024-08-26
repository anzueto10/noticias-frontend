"use client";
import { useEffect } from "react";
import newsMock from "@/modules/news/mocks/news.json";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import FeaturedNewsContainer from "@/modules/news/components/containers/FeaturedNewsContainer";

const LazyNewsContainer = () => {
  const { ref, inView } = useInView({});

  const fetchNews = async ({ pageParam }: { pageParam: number }) => {
    const news = newsMock.slice(pageParam, pageParam + 5) as any;
    return news;
    //TODO hacer petición a la api
    //"https://localhost:5000/noticias?page=${pageParam}"
  };

  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: fetchNews,
      initialPageParam: 0,

      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.flat().length : undefined;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  const news = data?.pages.flat();

  if (status === "pending") return <h1>Cargando datos...</h1>;

  if (status === "error") return <h1>Error</h1>;

  return (
    <div>
      {news ? <FeaturedNewsContainer news={news} /> : <h2>No hay noticias</h2>}
      {isFetchingNextPage && <h2>Loading...</h2>}
      {!hasNextPage && <p>Ya no hay más noticias</p>}
      <div ref={ref}></div>
    </div>
  );
};

export default LazyNewsContainer;
