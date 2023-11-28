import { PersonInfo } from "./components/PersonInfo";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "j.k@gmail.com",
    tel: "+48 666 222 555",
  };
  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "janina@gmail.com",
    tel: "+48 666 222 666",
  };
  const ola = {
    name: "Ola",
    lastName: "Kowalska",
    mail: "ola.kow@gmail.com",
  };

  const img = "https://zrozumiecreact.pl/dog.jpg";

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={ola} />
      <img src={img} alt="dog" />
    </>
  );
}

export default App;
