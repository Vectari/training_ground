import { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Section.css";

export function Section() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => setIsModalShown(true)}>Otwórz</button>
      {isModalShown && <Modal onClose={() => setIsModalShown(false)} />}
    </section>
  );
}
