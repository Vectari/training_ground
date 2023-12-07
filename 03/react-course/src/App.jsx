import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [closeWarningClick, setCloseWarningClick] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(50);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    setCloseWarningClick(false);
  }

  function handleCloseWarningClick() {
    setCloseWarningClick(false);
  }

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
      <h2>Licznik polubień: {numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubię to!</button>
      <button onClick={handleLoveButtonClick}>Kocham to!</button>
      <h2>Fabuła:</h2>
      {closeWarningClick && (
        <p>
          Uwaga! Opis zawiera spoiler{" "}
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>Strzały i kosmos.</p>

      {isSpoilerShown ? (
        <p>Gwiezdne Wojny są słabe!!!</p>
      ) : (
        <button onClick={handleShowSpoilerClick}>SPOILER</button>
      )}
    </>
  );
}

export default App;
