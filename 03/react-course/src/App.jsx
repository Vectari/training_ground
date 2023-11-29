function App() {
  function handleClick() {
    alert("klik!");
  }

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła:</h2>
      <p>Strzały i kosmos.</p>
      <button onClick={handleClick}>SPOILER</button>
      <p>Gwiezdne Wojny są słabe!!!</p>
    </>
  );
}

export default App;
