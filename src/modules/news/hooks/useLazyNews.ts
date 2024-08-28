import { useEffect, useState } from "react";
import { New } from "../types";
import { getNew } from "../api/news";

const useLazyNews = (token: string) => {
  const [news, setNews] = useState<Array<New>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handdleFetchNews = async () => {
    const newNew = await getNew({ newId: news.length + 1, token });
    if (newNew) setNews([...news, newNew]);
    return newNew;
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const new1 = await getNew({ newId: 1, token });
        const new2 = await getNew({ newId: 2, token });
        const new3 = await getNew({ newId: 3, token });
        if (new1 && new2 && new3) setNews([new1, new2, new3]);
        else throw Error("No hay noticias");
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [token]);

  return { news, loading, error, handdleFetchNews };
};

export default useLazyNews;
