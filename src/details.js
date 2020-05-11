import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

//used to replace special html entities from the api response.(inside the description for animals)
// const entities = {
//   "&#039;": "'",
//   "&quot;": '"',
//   // add more if needed
// };

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then((animalObj) => {
      this.setState({
        name: animalObj.animal.name,
        animal: animalObj.animal.type,
        location:
          animalObj.animal.contact.address.city +
          ", " +
          animalObj.animal.contact.address.state,
        description: animalObj.animal.description,
        media: animalObj.animal.photos,
        breed: animalObj.animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const { name, animal, location, description, breed, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{animal + " - " + breed + " - " + location}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>{" "}
          {/* {description.replace(/&#?\w+;/, (match) => entities[match])} */}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
