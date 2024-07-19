import { CV } from "./CV";

function App() {
  const name = "Mateusz";
  const currentJob = "Sadownik";
  const jobHistory = ["Absolutnie nic", "Szlachta nie pracuje"];

  return <CV name={name} jobHistory={jobHistory} currentJob={currentJob} />;
}

export default App;
