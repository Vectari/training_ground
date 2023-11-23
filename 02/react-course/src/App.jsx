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

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={ola} />
    </>
  );
}

export default App;
