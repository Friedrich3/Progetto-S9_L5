/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Component } from "react";
import { Container } from "react-bootstrap";
import EachFilm from "./EachFilm";

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1920 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktopSmall: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tabletVert: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class MyGallery extends Component {
  state = {
    filmList: [], //ARRAY CHE VERRA RIEMPITO DOPO LA FETCH
  };

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
        this.setState({
          filmList: data.Search,
        });
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
          <Carousel
            responsive={responsive}
            // sliderClass="carousel-item-padding-40-px"
            infinite={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={1000}
          >
            {this.state.filmList.map((film) => {
              return <EachFilm film={film} key={film.imdbID} />;
            })}
          </Carousel>
          ;
        </Container>
      </>
    );
  }
}
export default MyGallery;
