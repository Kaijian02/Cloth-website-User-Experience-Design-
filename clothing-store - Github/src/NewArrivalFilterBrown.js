import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import image1 from "./img/new_arrival2.png";
import image2 from "./img/new_arrival4.png";

const NewArrivalFilterBrown = () => {
  const filteredProducts = [
    {
      id: 1,
      name: "Wool-Blend Jacket",
      price: "RM 130",
      image: image2,
    },
    {
      id: 2,
      name: "Regular Fit Corduroy Pants",
      price: "RM 90",
      image: image1,
    },
  ];

  // State to track selected color and size (preselected to match the filter)
  const [selectedColor, setSelectedColor] = useState(3); // Brown color selected
  const [selectedSize, setSelectedSize] = useState("XL"); // XL size selected

  // Color options (Orange already preselected)
  const colors = [
    { id: 1, color: "#008000" }, // Green
    { id: 2, color: "#ff0000" }, // Red
    { id: 4, color: "#0000ff" }, // Blue
    { id: 5, color: "#00ffff" }, // Cyan
    { id: 3, color: "#5C4033" }, // Dark Brown
    { id: 6, color: "#808080" }, // Grey
    { id: 7, color: "#FFFFFF" }, // White
    { id: 8, color: "#000000" }, // Black
  ];

  // Size options (XL preselected)
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <Container>
      <div className="my-5">
        <p className="text-muted d-flex align-items-center">
          <span>Home</span>
          <span className="mx-3">{">"}</span>
          <span>New Arrivals</span>
          <span className="mx-3">{">"}</span>
          <span>Filter - Dark Brown (Colors) & XL (Size)</span>
        </p>
      </div>
      <Row>
        <Col md={3}>
          <div className="filter-sidebar p-4 border rounded mb-5">
            <h5 className="fw-bold">
              Filters{" "}
              <span className="float-end">
                <i className="fas fa-sliders-h"></i>
              </span>
            </h5>
            <hr />

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>All</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Shorts</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Shirts</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Hoodie</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Jeans</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>T-shirts</Accordion.Header>
              </Accordion.Item>
            </Accordion>

            <hr />

            <Form.Group className="mb-4" controlId="formColors">
              <Form.Label className="fw-bold">Colors</Form.Label>
              <Row>
                {colors.map((color) => (
                  <Col xs={3} key={color.id} className="mb-2">
                    <div
                      className={`color-swatch position-relative ${
                        selectedColor === color.id ? "active" : ""
                      }`}
                      style={{
                        backgroundColor: color.color,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedColor(color.id)}
                    >
                      {selectedColor === color.id && (
                        <FaCheck className="text-white position-absolute top-50 start-50 translate-middle" />
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <hr />

            <Form.Group className="mb-4" controlId="formSizes">
              <Form.Label className="fw-bold">Size</Form.Label>
              <div className="d-flex flex-wrap">
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedSize === size ? "dark" : "outline-secondary"
                    }
                    className="size-button me-2 mb-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Button variant="dark" className="w-100">
              Apply Filter
            </Button>
          </div>
        </Col>

        <Col md={9}>
          <Row>
            {filteredProducts.map((product) => (
              <Col md={4} key={product.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="text-center mb-5">
        <Button variant="outline-dark">View All</Button>
      </div>
    </Container>
  );
};

export default NewArrivalFilterBrown;
