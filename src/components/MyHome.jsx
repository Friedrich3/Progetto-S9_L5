import { Component } from "react";
import MyGallery from "./MyGallery";
import { Button, Container, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

class MyHome extends Component {
  state = {
    filmResearch: {
      search: "",
    },
    researchVisible: {
      isVisible: false,
    },
  };

  render() {
    return (
      <main className="bg-black container-fluid">
        {/* SERVE PER CREARE UN CAROSELLO DINAMICO IN BASE ALLA SCRITTURA DI UNA PAROLA CHIAVE  */}
        <h2 className="text-light">Movies</h2>
        <Container className="py-4">
          <Form>
            <Form.Group className="d-flex">
              <Button
                type="Button"
                variant="outline-secondary"
                className="px-4"
                onClick={(e) => {
                  e.preventDefault;
                  this.setState({
                    researchVisible: {
                      isVisible: true,
                    },
                  });
                }}
              >
                <Search></Search>
              </Button>
              <Form.Control
                type="text"
                value={this.state.filmResearch.search}
                className="bg-dark border-0 text-light"
                onChange={(e) => {
                  this.setState({
                    filmResearch: {
                      search: e.target.value,
                    },
                  });
                }}
                onBlur={() => {
                  this.setState({
                    researchVisible: {
                      isVisible: false,
                    },
                  });
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Container>
        {this.state.researchVisible.isVisible === true && (
          <Container fluid>
            <MyGallery research={this.state.filmResearch.search} />
          </Container>
        )}
        {/* TODO FIXARE IL BLUR OUT QUANDO UNA VALUE E' PRESENTE */}

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
