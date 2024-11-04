import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import poster from "../img/man_banner.png";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <Row>
        <Col md={6} className="banner-text">
          <h1>Discover clothing that reflects your unique style</h1>
          <p>
            Explore our curated collection of finely crafted garments, designed
            to highlight your unique style and personality.
          </p>
          <Button variant="dark">Shop Now</Button>
        </Col>
        <Col md={5} className="banner-image">
          <img src={poster} alt="banner" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
