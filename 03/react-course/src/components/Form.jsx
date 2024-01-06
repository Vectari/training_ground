import { useState } from "react";

export function Form() {
  const [review, setReview] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const arrayOfNumbers = [1, 2, 3, 4, 5].map((number) => (
    <li>Item {number}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textAreaValue;

    setReview({ author, text });
  }

  return (
    <>
      <hr />
      {arrayOfNumbers}

      {review && (
        <article>
          <strong>{review.author}</strong>
          <p>{review.text}</p>
        </article>
      )}
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
