import { useEffect, useState } from "react";

function Jokes() {
  let [jokes, setJokes] = useState({});

  const Url =
    "https://hindi-jokes-api.onrender.com/jokes?api_key=c2c7aba6cf16f4f9e737a2f7e04e";

  const fetchData = async (params) => {
    let response = await fetch(Url);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJokes({ jokeContent: jsonResponse.jokeContent });
  };

  useEffect(() => {
    const fetchFirstData = async () => {
      let response = await fetch(Url);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJokes({
        jokeContent: jsonResponse.jokeContent,
      });
    };
    fetchFirstData();
  }, []);

  return (
    <>
      <h2>{jokes.jokeContent}</h2>

      <button onClick={fetchData}>Generate New Joke</button>
    </>
  );
}

export default Jokes;
