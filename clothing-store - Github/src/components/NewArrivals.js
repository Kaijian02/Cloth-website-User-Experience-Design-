import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../img/new_arrival1.png";
import image2 from "../img/new_arrival2.png";
import image3 from "../img/new_arrival3.png";
import image4 from "../img/new_arrival4.png";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "One-life Graphic T-shirt",
      price: "RM 120",
      image: image1,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: "RM 240",
      image: image2,
    },
    { id: 3, name: "Checkered Shirt", price: "RM 180", image: image3 },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "RM 130",
      image: image4,
    },
  ];

  const navigate = useNavigate();

  const goNewArrivals = () => {
    navigate("/new-arrivals");
  };

  return (
    <Container>
      <h2 className="text-center my-5">NEW ARRIVALS</h2>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id}>
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
      <div className="text-center mb-5">
        <Button variant="outline-dark" onClick={goNewArrivals}>
          View All
        </Button>
      </div>
    </Container>
  );
};

export default NewArrivals;
