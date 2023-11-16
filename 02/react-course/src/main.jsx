import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("a", { href: "https://google.pl" }, "Test");

console.log(<h1>Test</h1>);
console.log(element);

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Czas: ${hours}:${minutes}:${seconds}`);

const timer = (
  <div>
    Czas:{hours}:{minutes}:{seconds}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(timer);
