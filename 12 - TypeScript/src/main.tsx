import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CNJA } from "./ChuckNorrisJokesApi.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <CNJA />
  </React.StrictMode>
);
