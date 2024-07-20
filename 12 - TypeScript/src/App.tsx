import { CV } from "./CV";

function App() {
  const name = "Mateusz";
  const currentJob = "Aktualna praca";
  const jobHistory = ["Praca I", "Praca II"];

  return <CV name={name} jobHistory={jobHistory} currentJob={currentJob} />;
}

export default App;
