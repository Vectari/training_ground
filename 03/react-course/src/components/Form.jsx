import { useState } from "react";
import { Review } from "./Review";

const initialReviews = [
  { author: "Tomek", text: "Słabe!", id: 1 },
  { author: "Ola", text: "Mocne 2/10.", id: 2 },
];

export function Form() {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const reviewsElement = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textAreaValue;

    setReviews((prevReviews) => {
      return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
    });

    setInputValue("");
    setTextAreaValue("");
  }

  return (
    <>
      <hr />
      {reviewsElement}
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Autor</label>
        </div>
        <input
          type="text"
          name="author"
          id="author"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textAreaValue}
            onChange={(event) => {
              setTextAreaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textAreaValue === ""}
        >
          Dodaj
        </button>
      </form>
    </>
  );
}
