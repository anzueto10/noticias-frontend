import { useEffect, useState } from "react";
import { New } from "../types";
import { getNew } from "../api/news";

const useRelatedNews = (token: string) => {
  const [news, setNews] = useState<[New, New, New] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [news1, news2, news3] = await Promise.all([
          getNew({
            newId: 14,
            token: token as string,
          }),
          getNew({
            newId: 40,
            token: token as string,
          }),
          getNew({
            newId: 2,
            token: token as string,
          }),
        ]);

        if (news1 && news2 && news3) setNews([news1, news2, news3]);
        else throw Error("No existen noticias relacionadas.");
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [token]);

  return { news, loading, error };
};

export default useRelatedNews;
