import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //hooks always return an array with the basevalue and functiontochange the basevalue. NOTE: Hooks should always be in the order in which the components are rendered.
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const animalObj = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animalObj.animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then((breedArray) => {
      /* console.log(breedArray); */
      const breedStrings = breedArray.breeds.map((breedObj) => breedObj.name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">SUBMIT</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
