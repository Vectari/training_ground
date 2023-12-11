import { useState } from "react";

export function Plot() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [closeWarningClick, setCloseWarningClick] = useState(true);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    setCloseWarningClick(false);
  }

  function handleCloseWarningClick() {
    setCloseWarningClick(false);
  }
  return (
    <>
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
