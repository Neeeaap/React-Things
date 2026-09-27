import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initValue) {
  const [fetchedData, setFetchedData] = useState(initValue);
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch ({ error, fallbackData }) {
        setFetchedData(fallbackData || initValue);
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { fetchedData, isFetching, setFetchedData, error };
}