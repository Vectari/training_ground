import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [closeWarningClick, setCloseWarningClick] = useState(true);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    console.log("handleShowSpoilerClick!");
    setCloseWarningClick(false);
  }

  function handleCloseWarningClick() {
    setCloseWarningClick(false);
  }

  console.log("app");

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
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
