import React from "react";
import Cards from "./Cards";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container as="main" className="App">
      <Cards />
    </Container>
  );
}

export default App;
