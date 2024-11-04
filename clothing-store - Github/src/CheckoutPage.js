import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartCount, resetCart } = useContext(CartContext);
  const { cartItems, subtotal, discountAmount, deliveryFee, total } =
    state || {};

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    postalCode: "",
    townCity: "",
    state: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const colorNames = {
    "#EADAB9": "Beige",
    "#273043": "Dark Blue",
    "#3A5A40": "Green",
    "#000000": "Black",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a confirmation alert before processing the payment
    const isConfirmed = window.confirm(
      "Are you sure you want to proceed with the payment?"
    );

    if (isConfirmed) {
      alert("Payment processed successfully!");
      navigate("/purchase-history", {
        state: {
          cartItems,
          subtotal,
          discountAmount,
          deliveryFee,
          total,
          orderDetails: {
            orderNumber: "AMY07525590",
            orderDate: "04/11/2024",
            delivery: "Standard Delivery",
            paymentMethod: "Visa",
            expectedDelivery: "11/11/2024",
          },
          billingInfo: formData,
        },
      });

      // Reset the cart after payment confirmation
      resetCart();
    }
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center my-4">
        <p className="text-muted d-flex align-items-center">
          <span>Home</span>
          <span className="mx-3">{">"}</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            Cart
          </span>
          <span className="mx-3">{">"}</span>
          <span>Checkout</span>
        </p>

        <Button
          variant="link"
          onClick={() => navigate(-1)}
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {"< Go Back"}
        </Button>
      </div>
      <h2 style={{ fontWeight: "bold" }}>Checkout</h2>
      <Row>
        <Col md={8}>
          <div
            className="mb-3 p-4"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "15px",
              borderColor: "grey",
            }}
          >
            <h5 style={{ fontWeight: "bold" }}>My Information</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>
                Billing Address
              </h5>
              <Form.Group className="mb-3" controlId="address">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Control
                  type="text"
                  placeholder="Postal code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="townCity">
                <Form.Control
                  type="text"
                  placeholder="Town/City"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="state">
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Form.Group>

              <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>
                Payment Details (Pay by Credit Card)
              </h5>
              <Form.Group className="mb-3" controlId="cardName">
                <Form.Control
                  type="text"
                  placeholder="Cardholder Name"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Control
                  type="text"
                  placeholder="Cardholder Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="expiryDate">
                <Form.Control
                  type="text"
                  placeholder="Expiry Date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cvv">
                <Form.Control
                  type="text"
                  placeholder="CVV/CVC"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                onClick={resetCart}
                style={{ width: "100%", padding: "10px", borderRadius: "20px" }}
              >
                Pay Now
              </Button>
            </Form>
          </div>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body style={{ padding: "30px" }}>
              <h5 style={{ fontWeight: "bold" }}>Order Summary</h5>
              <Row style={{ marginBottom: "10px", marginTop: "20px" }}>
                <Col style={{ color: "grey" }}>Subtotal</Col>
                <Col className="text-end card-text">
                  RM {subtotal ? subtotal.toFixed(2) : "0.00"}
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ color: "grey" }}>Discount (10%)</Col>
                <Col className="text-end card-text" style={{ color: "red" }}>
                  -RM {discountAmount ? discountAmount.toFixed(2) : "0.00"}
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ color: "grey" }}>Delivery Fee</Col>
                <Col className="text-end card-text">
                  RM {deliveryFee ? deliveryFee.toFixed(2) : "0.00"}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>Total</Col>
                <Col className="text-end card-text">
                  RM {total ? total.toFixed(2) : "0.00"}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h5 style={{ fontWeight: "bold" }}>Order Details</h5>
            {cartItems &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-3 p-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    padding: "10px",
                  }}
                >
                  <div style={{ flex: "0 0 25%", paddingRight: "10px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div style={{ flex: "1" }}>
                    <h6>{item.name}</h6>
                    <p>Size: {item.size}</p>
                    <p>Color: {colorNames[item.color] || "Unknown Color"}</p>
                    <p>Quantity: {item.quantity}</p>{" "}
                    <p className="card-text">
                      RM {item.price}{" "}
                      <s className="text-muted">RM {item.oldPrice}</s>
                    </p>
                  </div>
                  <div style={{ flex: "0 0 10%", textAlign: "right" }}>
                    <Button variant="link" className="text-danger p-0">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
