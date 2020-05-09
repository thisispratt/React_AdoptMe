import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };

    //sets the "this" context inside the handleIndexClick fuction to Carousel component.
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  //getDerivedStateFromProps captures the props that are passed by the parent component then does some filtering on them and then pass them to the component.(this.props.media can also be used direclty inside render)
  static getDerivedStateFromProps({ media }) {
    let photos = ["https://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map((mediaImg) => mediaImg.large);
    }

    return { photos };
  }

  handleIndexClick(event) {
    this.setState({
      active: Number(event.target.dataset.index),
    });
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
