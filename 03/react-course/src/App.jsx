import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";

function App() {
  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <LikesCounter number={50} />
      <LikesCounter number={70} />
      <LikesCounter number={100} />
      <Plot />
    </>
  );
}

export default App;
