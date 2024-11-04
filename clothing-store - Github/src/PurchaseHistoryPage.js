import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import image6 from "./img/top_selling6.png";

const PurchaseHistoryPage = () => {
  const { state } = useLocation();

  const defaultCartItems = [
    {
      id: 1,
      name: "Printed Sweatshirt",
      size: "M",
      color: "#000000",
      price: 90,
      oldPrice: 130,
      quantity: 3,
      image: image6,
    },
  ];

  const defaultBillingInfo = {
    email: "abc123@gmail.com",
    name: "lawkaijian",
    phone: "0123456789",
    address: "123 Inti",
    postalCode: "12345",
    townCity: "Bayan Lepas",
    state: "Penang",
  };

  const billingInfo = state?.billingInfo || defaultBillingInfo;

  const defaultOrderDetails = {
    orderNumber: "AMY07525590",
    orderDate: "04/11/2024",
    delivery: "Standard Delivery",
    paymentMethod: "Visa",
    expectedDelivery: "11/11/2024",
  };

  const cartItems = state?.cartItems || defaultCartItems;
  const orderDetails = state?.orderDetails || defaultOrderDetails;
  const subtotal = state?.subtotal || 270;

  const discountRate = 0.1; // 10% discount
  const discountAmount = state?.discountAmount || subtotal * discountRate;

  const deliveryFee = state?.deliveryFee || 5;
  const total = state?.total || subtotal - discountAmount + deliveryFee;

  const colorNames = {
    "#EADAB9": "Beige",
    "#273043": "Dark Blue",
    "#3A5A40": "Green",
    "#000000": "Black",
  };

  const handlePaymentInfoClick = () => {
    alert(
      `Billing Information:\n\n` +
        `Email: ${billingInfo.email}\n` +
        `Name: ${billingInfo.name}\n` +
        `Phone: ${billingInfo.phone}\n` +
        `Address: ${billingInfo.address}\n` +
        `Postal Code: ${billingInfo.postalCode}\n` +
        `Town/City: ${billingInfo.townCity}\n` +
        `State: ${billingInfo.state}\n\n` +
        `Receipt Information:\n\n` +
        `Receipt No.: #123456789\n` +
        `Payment Method: Credit Card\n` +
        `Total Amount: RM ${total.toFixed(2)}`
    );
  };

  const handleReturnRefundClick = () => {
    const orderNumber = prompt("Please enter your order number:");

    if (orderNumber) {
      alert(
        `We are processing your return and refund for order number: ${orderNumber}.`
      );
    } else {
      alert("Order number is required to process return and refund.");
    }
  };

  return (
    <Container className="my-5">
      <div className="my-3 d-flex justify-content-between align-items-center">
        <p className="text-muted">
          <span>Home</span> <span className="mx-2">{">"}</span>
          <span>Purchase History</span>
        </p>

        <Button variant="danger" onClick={handleReturnRefundClick}>
          Return and Refund
        </Button>
      </div>
      <h2 style={{ fontWeight: "bold" }}>Purchase History</h2>
      <Row>
        <Col md={8}>
          {cartItems &&
            cartItems.map((item) => (
              <Card
                className="p-3 mb-3"
                key={item.id}
                style={{ borderRadius: "10px", backgroundColor: "white" }}
              >
                <Row className="align-items-center">
                  <Col xs={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Col>
                  <Col xs={8}>
                    <h5 style={{ fontWeight: "bold" }}>{item.name}</h5>
                    <p>Size: {item.size}</p>
                    <p>Color: {colorNames[item.color] || "Unknown Color"}</p>
                    <p>Quantity: {item.quantity}</p>
                    <h6 className="card-text">
                      RM {item.price}{" "}
                      <s className="old-price">RM {item.oldPrice}</s>
                    </h6>
                  </Col>
                </Row>
              </Card>
            ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body style={{ padding: "30px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 style={{ fontWeight: "bold" }}>Order Details</h5>
                <Button variant="link" onClick={handlePaymentInfoClick}>
                  Billing & Receipt
                </Button>
              </div>
              {orderDetails && (
                <>
                  <Row style={{ marginBottom: "10px", marginTop: "20px" }}>
                    <Col style={{ color: "grey" }}>Order Number</Col>
                    <Col className="text-end card-text">
                      {orderDetails.orderNumber}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col style={{ color: "grey" }}>Order Date</Col>
                    <Col className="text-end card-text">
                      {orderDetails.orderDate}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col style={{ color: "grey" }}>Delivery</Col>
                    <Col className="text-end card-text">
                      {orderDetails.delivery}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col style={{ color: "grey" }}>Payment</Col>
                    <Col className="text-end card-text">
                      {orderDetails.paymentMethod}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col style={{ color: "grey" }}>Expected Delivery Time</Col>
                    <Col className="text-end card-text">
                      {orderDetails.expectedDelivery}
                    </Col>
                  </Row>
                </>
              )}
              <hr />
              <Row>
                <Col>
                  <strong>Total</strong>
                </Col>
                <Col className="text-end card-text">
                  <strong>RM {total.toFixed(2)}</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseHistoryPage;
