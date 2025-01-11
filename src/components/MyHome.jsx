import { Component } from "react";
import MyGallery from "./MyGallery";
import {Container} from "react-bootstrap";
import SearchCarousel from "./SearchCarousel";


class MyHome extends Component {
  

  render() {
    return (
      <main className="bg-black container-fluid">
        {/* SERVE PER CREARE UN CAROSELLO DINAMICO IN BASE ALLA SCRITTURA DI UNA PAROLA CHIAVE  */}
        <h2 className="text-light">Movies</h2>
        <SearchCarousel />
        
        

        <Container fluid>
          {/* QUESTA SEZIONE AVRA' al suo interno le tre gallerie che riceveranno come props cosa cercare */}
          <h3 className=" text-light">Altri Titoli per Te</h3>
          <MyGallery research="Transformers" />
          <MyGallery research="Godzilla" />
          <MyGallery research="Star Wars" />
        </Container>
        {/* TODO Inserire EXTRA UNO */}
      </main>
    );
  }
}

export default MyHome;
