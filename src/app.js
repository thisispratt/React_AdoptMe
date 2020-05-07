import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Cacti" animal="Dog" breed="pomsky" />
      <Pet name="Mitu" animal="Bird" breed="parrot" />
      <Pet name="Donku" animal="Cat" breed="catsky" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
