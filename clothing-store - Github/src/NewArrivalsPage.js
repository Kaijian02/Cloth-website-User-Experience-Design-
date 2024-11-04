import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import image1 from "./img/new_arrival1.png";
import image2 from "./img/new_arrival2.png";
import image3 from "./img/new_arrival3.png";
import image4 from "./img/new_arrival4.png";
import image5 from "./img/new_arrival5.png";
import image6 from "./img/new_arrival6.png";
import image7 from "./img/new_arrival7.png";
import image8 from "./img/new_arrival8.png";
import LoadingIndicator from "./components/LoadingIndicator";

const NewArrivalsPage = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
      setContentVisible(true);
    }, 1000);
  }, []);

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

  // Size options
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const products = [
    {
      id: 9,
      name: "Regular Fit Texttured Shirt",
      price: "RM 120",
      image: image1,
    },
    {
      id: 10,
      name: "Regulat Fit Corduroy Pants",
      price: "RM 90",
      image: image2,
    },
    { id: 11, name: "Patterned Sweatshirt", price: "RM 130", image: image3 },
    {
      id: 12,
      name: "Wool-Blend Jacket",
      price: "RM 130",
      image: image4,
    },
    {
      id: 13,
      name: "Regular-Fit Knit Sweater",
      price: "RM 140",
      image: image5,
    },
    {
      id: 14,
      name: "Brushed Overshirt",
      price: "RM 180",
      image: image6,
    },
    {
      id: 15,
      name: "Regular Fit Ribbed Polo Shirt",
      price: "RM 120",
      image: image7,
    },
    {
      id: 16,
      name: "Regular Fit Velvet Pants",
      price: "RM 90",
      image: image8,
    },
  ];

  const handleApplyFilter = () => {
    navigate("/new-arrivals-filter-brown");
  };

  return (
    <>
      {loading && <LoadingIndicator fadeOut={true} />}
      <Container
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in",
          minHeight: "80vh",
        }}
      >
        <div className="my-5">
          <p className="text-muted d-flex align-items-center">
            <span>Home</span>
            <span className="mx-3">{">"}</span>
            <span>New Arrivals</span>
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

              <Button
                variant="dark"
                className="w-100"
                onClick={handleApplyFilter}
              >
                Apply Filter
              </Button>
            </div>
          </Col>

          <Col md={9}>
            <Row>
              {products.map((product) => (
                <Col md={4} key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card className="mb-4">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <div className="text-center mb-5">
          <Button variant="outline-dark">View All</Button>
        </div>
      </Container>
    </>
  );
};

export default NewArrivalsPage;
