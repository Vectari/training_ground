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

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <LikesCounter number={50} />
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
