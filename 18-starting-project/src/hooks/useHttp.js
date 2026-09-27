import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, configs) {
  const response = await fetch(url, configs);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Request failed!");
  }

  return resData;
}

export default function useHttp(url, configs, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function (data) {
      setIsLoading(true);

      try {
        const data = await sendHttpRequest(url, {
          ...configs,
          body: JSON.stringify(data),
        });
        setData(data);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    [url, configs],
  );

  useEffect(() => {
    if (
      (configs && (configs.method === "GET" || !configs.method)) ||
      !configs
    ) {
      sendRequest();
    }
  }, [sendRequest, configs]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
