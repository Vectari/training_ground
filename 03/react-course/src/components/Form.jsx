import { useState } from "react";

export function Form({ onReviewSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textAreaValue;

  
    onReviewSubmit(author, text);

    setInputValue("");
    setTextAreaValue("");
  }

  return (
    <>
      <hr />

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
