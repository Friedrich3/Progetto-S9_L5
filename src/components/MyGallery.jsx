/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Component } from "react";
import { Container } from "react-bootstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class MyGallery extends Component {
  state = {};

  fetchData = async () => {
    let url = `https://www.omdbapi.com/?apikey=5e8aed44&s=${this.props.research.replaceAll(
      " ",
      "%20"
    )}`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
      } else {
        throw new Error("Problema con fetch");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        {/* // QUI SARANNO RIUNITI I COMPONENTI DELLE CARTE GENERATE DALLA FETCH DI UNA PROPS PASSATA COME PARAMETRO DI 'RICERCA'  */}
        <Container fluid>
          <Carousel responsive={responsive} className="">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 8</div>
          </Carousel>
          ;
        </Container>
      </>
    );
  }
}
export default MyGallery;
