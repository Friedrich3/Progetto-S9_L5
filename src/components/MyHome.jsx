import { Component } from "react";
import MyGallery from "./MyGallery";
import { Container } from "react-bootstrap";

class MyHome extends Component {
  render() {
    return <main className="bg-dark">
        <Container fluid>
        {/* QUESTA SEZIONE AVRA' al suo interno le tre gallerie che riceveranno come props cosa cercare */}
        <h3 className=" text-light">Altri Titoli per Te</h3>
        <MyGallery research='Transformers' />
        <MyGallery research='Star Wars' />
        <MyGallery research='Godzilla' />
        </Container>
    </main>;
  }
}

export default MyHome;
