import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Cacti",
      animal: "Dog",
      breed: "pomski",
    }),
    React.createElement(Pet, {
      name: "Mitu",
      animal: "Bird",
      breed: "parrot",
    }),
    React.createElement(Pet, {
      name: "Donku",
      animal: "Cat",
      breed: "catsky",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
