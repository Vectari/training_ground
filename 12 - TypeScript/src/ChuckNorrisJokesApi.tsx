import { useEffect, useState } from "react";

interface ChuckNorrisJoke {
  icon_url: string;
  value: string;
}

export function CNJA() {
  const [joke, setJoke] = useState<ChuckNorrisJoke>({
    icon_url: "",
    value: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const responde = await fetch("https://api.chucknorris.io/jokes/random");
      const jsonData = await responde.json();
      setJoke(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Today joke:</h1>
      <img src={joke.icon_url} alt="" />
      <div>
        <p>{joke.value}</p>
      </div>
    </>
  );
}
