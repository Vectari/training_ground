import { useState } from "react";

export function LikesCounter(children) {
  const [numberOfLikes, setNumberOfLikes] = useState(children.number);

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
      <h2>Licznik polubień: {numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubię to!</button>
      <button onClick={handleLoveButtonClick}>Kocham to!</button>
    </>
  );
}
