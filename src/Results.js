import React from "react";
import Pet from "./Pet";

const Results = (pets) => {
  return (
    <div className="search">
      {pets.pets.length === 0 ? (
        <h1>No Pets Found!</h1>
      ) : (
        pets.pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
