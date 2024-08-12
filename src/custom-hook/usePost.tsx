import { useCallback, useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const usePost = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      if (res.status >= 300) {
        setError(`Status Code ${res.status}`);

        return;
      }

      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, isLoading, error, refetch: fetchPosts };
};

export { usePost };
