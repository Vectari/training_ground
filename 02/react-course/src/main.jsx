import ReactDOM from "react-dom/client";
import { LinkComponent } from "./components/LinkComponent.jsx";

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      <LinkComponent text="GOOOGLE" open={true} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        nostrum ab ullam facilis, voluptas quaerat consequatur voluptatem
        consequuntur eligendi ex maxime? Temporibus suscipit deserunt numquam
        delectus nam minima laboriosam soluta.
      </p>
      <LinkComponent open={false} />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
