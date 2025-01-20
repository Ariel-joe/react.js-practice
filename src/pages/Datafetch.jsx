import React, { useEffect, useState } from "react";

const Datafetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/jokes/programming/random"
        );
        const result = await response.json();

        setData(result[0]);
      } catch (error) {
        console.error("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    dataFetching();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p> 
      ) : (
        <div>
          <p>Type: {data.type}</p>
          <p>Joke: {data.setup}</p>
          <p>Punchline: {data.punchline}</p>
        </div>
      )}
    </div>
  );
};

export { Datafetch };
