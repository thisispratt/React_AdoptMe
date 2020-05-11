import React from "react";
import { Link } from "@reach/router";

export default function Pet({ name, animal, breed, media, id }) {
  let placeholderImage = "http://placecorgi.com/300/300";

  if (media.length) {
    placeholderImage = media[0]["small"];
  }

  return (
    //backtics `` are used to make template strings.
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={placeholderImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal + " - " + breed}</h2>
      </div>
    </Link>
  );
}
