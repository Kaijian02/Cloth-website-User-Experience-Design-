import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "./CartContext";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";
import image1 from "./img/top_selling1.png";
import image2 from "./img/top_selling2.png";
import image3 from "./img/top_selling3.png";
import image4 from "./img/top_selling4.png";
import image5 from "./img/top_selling5.png";
import image6 from "./img/top_selling6.png";
import image7 from "./img/top_selling7.png";
import image8 from "./img/top_selling8.png";
import image9 from "./img/new_arrival1.png";
import image10 from "./img/new_arrival2.png";
import image11 from "./img/new_arrival3.png";
import image12 from "./img/new_arrival4.png";
import image13 from "./img/new_arrival7.png";
import image14 from "./img/new_arrival6.png";
import image15 from "./img/new_arrival5.png";
import image16 from "./img/new_arrival8.png";
import image17 from "./img/detail1.png";
import image18 from "./img/detail2.png";
import image19 from "./img/detail3.png";
import image20 from "./img/detail4.png";
import image21 from "./img/detail5.png";
import image22 from "./img/detail6.png";
import image23 from "./img/detail7.png";
import image24 from "./img/detail8.png";
import image25 from "./img/detail9.png";

const products = [
  {
    id: 1,
    name: "Loose-Fit Sports Hoodie",
    price: 80,
    oldPrice: 130,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image1,
    thumbnails: [image19, image17, image18],
    composition: "Viscose 100%",
  },
  {
    id: 2,
    name: "Regular-Fit Twill Overshirt",
    price: 60,
    oldPrice: 80,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image2,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 3,
    name: "Loose Fit Sweatshirt",
    price: 80,
    oldPrice: 100,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image3,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 4,
    name: "Loose Fit Printed Hoodie",
    price: 75,
    oldPrice: 90,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image4,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 5,
    name: "Loose Fit Shirt",
    price: 80,
    oldPrice: 150,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image5,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 6,
    name: "Printed Sweatshirt",
    price: 90,
    oldPrice: 130,
    description:
      "Loose-fit sweatshirt in medium-weight, cotton-blend fabric with a printed motif and generous",
    colors: ["#000000"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image6,
    thumbnails: [image21, image20, image22],
    composition: "Cotton 100%",
  },
  {
    id: 7,
    name: "Wool-Blend Sweater",
    price: 80,
    oldPrice: 100,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image7,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 8,
    name: "Lyocell Resort Shirt",
    price: 80,
    oldPrice: 100,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image8,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 9,
    name: "Regular Fit Textured Shirt",
    price: 120,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image9,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 10,
    name: "Regular Fit Corduroy Pants",
    price: 90,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image10,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 11,
    name: "Patterned Sweatshirt",
    price: 130,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image11,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 12,
    name: "Wool-Blend Jacket",
    price: 130,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image12,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 13,
    name: "Regular-Fit Knit Sweater",
    price: 140,
    description:
      "Regular-fit polo shirt in ribbed, medium-weight jersey with a comfortable, classic silhouette. Collar, short button placket, and long sleeves. Straight-cut hem with slit at sides.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image15,
    thumbnails: [image23, image24, image25],
    composition: "Cotton 100%",
  },
  {
    id: 14,
    name: "Brushed Overshirt",
    price: 180,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image14,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
  {
    id: 15,
    name: "Regular Fit Ribbed Polo Shirt",
    price: 120,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image13,
    thumbnails: [image23, image24, image25],
    composition: "Viscose 100%",
  },
  {
    id: 16,
    name: "Regular Fit Velvet Pants",
    price: 90,
    description:
      "Shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.",
    colors: ["#EADAB9", "#273043", "#3A5A40"],
    sizes: ["S", "M", "XL", "XXL"],
    image: image16,
    thumbnails: [image1, image2, image3, image4],
    composition: "Viscose 100%",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // State for selected color, size, and quantity
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price,
      oldPrice: product.oldPrice,
    };

    addToCart(quantity);

    navigate("/cart", {
      state: {
        cartItems: [cartItem],
      },
    });

    alert("Add to cart successfully");
  };

  // if (!product) {
  //   return <p>Product not found</p>;
  // }

  return (
    <Container className="my-5">
      <div className="my-5">
        <p className="text-muted d-flex align-items-center">
          <span>Home</span>
          <span className="mx-3">{">"}</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            Shop
          </span>
          <span className="mx-3">{">"}</span>
          <span>{product.name}</span>
        </p>
      </div>
      <Row>
        <Col md={6}>
          <div className="d-flex justify-content-center mb-3">
            <img
              src={product.image}
              style={{
                borderRadius: "15px",
                maxHeight: "400px",
                objectFit: "contain",
                width: "100%",
              }}
              alt={product.name}
            />
          </div>
          <Row className="mt-3">
            {product.thumbnails.map((thumbnail, index) => (
              <Col xs={3} key={index}>
                <div className="d-flex justify-content-center">
                  <img
                    src={thumbnail}
                    style={{
                      borderRadius: "10px",
                      height: "auto",
                      objectFit: "contain",
                      width: "100%",
                      border: index === 0 ? "2px solid #000000" : "none",
                    }}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={6}>
          <h2 style={{ fontWeight: "700", fontSize: "24px" }}>
            {product.name}
          </h2>
          <h3
            style={{ color: "#4CAF50", fontSize: "20px", fontWeight: "bold" }}
          >
            RM {product.price}{" "}
            {product.oldPrice && (
              <s className="old-price">RM {product.oldPrice}</s>
            )}
          </h3>
          <p>{product.description}</p>

          <Form.Group className="mb-3">
            <Form.Label>Select Colors</Form.Label>
            <Row>
              {product.colors.map((color, index) => (
                <Col xs={1} key={index}>
                  <div
                    style={{
                      backgroundColor: color,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      position: "relative",
                      border:
                        selectedColor === color
                          ? "2px solid black"
                          : "1px solid #ddd",
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <FaCheck
                        className="text-white position-absolute top-50 start-50 translate-middle"
                        style={{ fontSize: "20px" }}
                      />
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Choose Size</Form.Label>
            <div>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "dark" : "outline-secondary"}
                  onClick={() => setSelectedSize(size)}
                  className="me-2 mb-2"
                  style={{ borderRadius: "25px" }}
                >
                  {size}
                </Button>
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Quantity</Form.Label>
            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={decrementQuantity}
                style={{ width: "40px" }}
              >
                -
              </Button>
              <span className="mx-3" style={{ fontSize: "18px" }}>
                {quantity}
              </span>
              <Button
                variant="outline-secondary"
                onClick={incrementQuantity}
                style={{ width: "40px" }}
              >
                +
              </Button>
              <Button
                variant="dark"
                className="ms-3"
                onClick={handleAddToCart}
                style={{
                  width: "400px",
                  padding: "10px 20px",
                  borderRadius: "25px",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Form.Group>

          <Tabs defaultActiveKey="details" className="mb-3">
            <Tab eventKey="details" title="Product Details">
              <Row>
                <Col md={6}>
                  <h6>Description</h6>
                  <p>{product.description}</p>

                  <p className="muted-text">Sleeve Length: Long sleeves</p>
                  <p className="muted-text">Fit: Regular Fit</p>
                  <p className="muted-text">Collar: Resort collar</p>
                  <br />

                  <p className="muted-text">Article number: 0656677068</p>
                </Col>
                <Col md={6}>
                  <h6>Materials</h6>
                  <p>Composition: {product.composition}</p>
                  <p>
                    We exclude the weight of minor components such as, but not
                    exclusively: threads, buttons, zippers, embellishments and
                    prints. The total weight of the product is calculated by
                    adding the weight of all layers and main components
                    together.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="reviews" title="Rating & Reviews">
              <p>No reviews yet.</p>
            </Tab>
            <Tab eventKey="faqs" title="FAQs">
              <p>Frequently Asked Questions</p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
