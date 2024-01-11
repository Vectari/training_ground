import { useState } from "react";
import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Reviews } from "./components/Reviews";

const initialReviews = [
  { author: "Tomek", text: "Słabe!", id: 1 },
  { author: "Ola", text: "Mocne 2/10.", id: 2 },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(60);

  function handleLikeButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <button
        onClick={() => {
          setCounterShown((prevCounterShown) => !prevCounterShown);
        }}
      >
        {counterShown ? "Ukryj counter" : "Pokaż counter"}
      </button>
      {counterShown && (
        <LikesCounter
          numberOfLikes={numberOfLikes}
          onLikeButtonClick={handleLikeButtonClick}
          onLoveButtonClick={handleLoveButtonClick}
        />
      )}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onReviewSubmit={(author, text) => {
          setReviews((prevReviews) => {
            return [
              { author, text, id: prevReviews.length + 1 },
              ...prevReviews,
            ];
          });
        }}
      />
    </>
  );
}

export default App;
