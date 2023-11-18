import ReactDOM from "react-dom/client";
import { LinkComponent } from "./components/LinkComponent.jsx";

const linkElement = (
  <a href="https://google.pl" target="_blank" rel="noopener noreferrer">
    Google
  </a>
);

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      {linkElement}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        nostrum ab ullam facilis, voluptas quaerat consequatur voluptatem
        consequuntur eligendi ex maxime? Temporibus suscipit deserunt numquam
        delectus nam minima laboriosam soluta.
      </p>
      <LinkComponent />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
