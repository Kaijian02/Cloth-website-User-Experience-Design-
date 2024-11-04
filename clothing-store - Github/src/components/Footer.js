import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="footer mt-5 py-4"
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <Container>
        <Row>
          <Col md={3}>
            <h5 style={{ fontWeight: "bold" }}>CLOTH.Men</h5>
            <p>
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="social-links">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </Col>
          <Col md={2}>
            <h6>Company</h6>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Help</h6>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>FAQ</h6>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Resources</h6>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2023 Shop.co, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
