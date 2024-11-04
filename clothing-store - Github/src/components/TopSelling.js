import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../img/top_selling1.png";
import image2 from "../img/top_selling2.png";
import image3 from "../img/top_selling3.png";
import image4 from "../img/top_selling4.png";
import { useNavigate } from "react-router-dom";

const TopSelling = () => {
  const products = [
    {
      id: 1,
      name: "Loose-Fit Sports Hoodie",
      price: "RM 80",
      oldPrice: "RM 130",
      image: image1,
    },
    {
      id: 2,
      name: "Regular-Fit Twill Overshirt",
      price: "RM 60",
      oldPrice: "RM 80",
      image: image2,
    },
    {
      id: 3,
      name: "Loose Fit Sweatshirt",
      price: "RM 80",
      oldPrice: "RM 100",
      image: image3,
    },
    {
      id: 4,
      name: "Loose Fit Printed Hoodie",
      price: "RM 75",
      oldPrice: "RM 90",
      image: image4,
    },
  ];

  const navigate = useNavigate();

  const goOnSale = () => {
    navigate("/top-selling");
  };

  return (
    <Container>
      <h2 className="text-center my-5">ON SALE</h2>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.price}{" "}
                  <s className="old-price">{product.oldPrice}</s>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mb-5">
        <Button variant="outline-dark" onClick={goOnSale}>
          View All
        </Button>
      </div>
    </Container>
  );
};

export default TopSelling;
