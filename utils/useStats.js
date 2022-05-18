import { useState, useEffect } from 'react';

const UseStats = (url, rapidapiHost, rapidapiKey) => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();

      const data = await fetch(
        url,
        rapidapiHost && {
          headers: {
            'x-rapidapi-host': rapidapiHost,
            'x-rapidapi-key': rapidapiKey,
          },
        }
      )
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });

      setStats(data);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return {
    stats,
    loading,
    error,
  };
}
export default UseStats
