import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import image6 from "./img/top_selling6.png";

const CartPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const defaultCartItem = [
    {
      id: 1,
      name: "Printed Sweatshirt",
      size: "M",
      color: "#000000",
      price: 90,
      oldPrice: 130,
      quantity: 1,
      image: image6, // Replace with actual image path
    },
  ];

  const [cartItems, setCartItems] = useState(
    state?.cartItems || defaultCartItem
  );

  const deliveryFee = 5;
  const discount = 0.1; // 10% discount

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + deliveryFee;

  const goCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems,
        subtotal,
        discountAmount,
        deliveryFee,
        total,
      },
    });
  };

  const colorNames = {
    "#EADAB9": "Beige",
    "#273043": "Dark Blue",
    "#3A5A40": "Green",
    "#000000": "Black",
  };

  return (
    <Container className="my-5">
      <div className="my-3">
        <p className="text-muted">
          <span>Home</span> <span className="mx-2">{">"}</span>
          <span>Cart</span>
        </p>
      </div>
      <h2 style={{ fontWeight: "bold" }}>Your Cart</h2>
      <Row>
        <Col md={8}>
          {cartItems.map((item, index) => (
            <Card
              key={item.id}
              className="mb-3"
              style={{ backgroundColor: "white" }}
            >
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col xs={6}>
                    <h5 style={{ fontWeight: "bold" }}>{item.name}</h5>
                    <p>Size: {item.size}</p>
                    <p>Color: {colorNames[item.color] || "Unknown Color"}</p>
                    <p className="card-text">
                      RM {item.price}{" "}
                      {item.oldPrice && (
                        <s className="old-price">RM {item.oldPrice}</s>
                      )}
                    </p>
                  </Col>
                  <Col xs={2}>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        onClick={() => decrementQuantity(index)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        onClick={() => incrementQuantity(index)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col xs={1}>
                    <Button variant="danger" onClick={() => removeItem(index)}>
                      <FaTrashAlt />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body style={{ padding: "30px" }}>
              <h5 style={{ fontWeight: "bold" }}>Order Summary</h5>
              <Row style={{ marginBottom: "10px", marginTop: "20px" }}>
                <Col style={{ color: "grey" }}>Subtotal</Col>
                <Col className="text-end card-text">
                  RM {subtotal.toFixed(2)}
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ color: "grey" }}>Discount (10%)</Col>
                <Col className="text-end card-text" style={{ color: "red" }}>
                  -RM {discountAmount.toFixed(2)}
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ color: "grey" }}>Delivery Fee</Col>
                <Col className="text-end card-text">
                  RM {deliveryFee.toFixed(2)}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>Total</Col>
                <Col className="text-end card-text">RM {total.toFixed(2)}</Col>
              </Row>
              <Button
                variant="dark"
                className="mt-5"
                onClick={goCheckout}
                style={{ width: "100%", padding: "10px", borderRadius: "20px" }}
              >
                Go to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
