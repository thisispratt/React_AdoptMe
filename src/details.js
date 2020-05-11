import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";

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
      showModal: false,
      error: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.adopt = this.adopt.bind(this);
  }

  componentDidMount() {
    pet.animal(this.props.id).then((animalObj) => {
      this.setState({
        name: animalObj.animal.name,
        url: animalObj.animal.url,
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

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  adopt() {
    navigate(this.state.url);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const {
      name,
      animal,
      location,
      description,
      breed,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{animal + " - " + breed + " - " + location}</h2>
          {/* Using Context inside Class Components */}
          <ThemeContext.Consumer>
            {/*  Context consumer provides a function that gives the theme back, which can then be used. */}
            {(themehook) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themehook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>{" "}
          {/* {description.replace(/&#?\w+;/, (match) => entities[match])} */}
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a Monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
