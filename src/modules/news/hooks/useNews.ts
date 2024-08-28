import { useEffect, useState } from "react";
import { New } from "../types";
import { getAllNews } from "../api/news";

const useNews = (token: string) => {
  const [news, setNews] = useState<Array<New>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newNews = await getAllNews({ token });
        setNews(newNews);
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

export default useNews;
