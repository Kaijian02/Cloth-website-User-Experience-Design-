import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { FiSearch, FiShoppingCart, FiFileText } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const products = [
    { id: 1, name: "Loose-Fit Sports Hoodie" },
    { id: 2, name: "Regular-Fit Twill Overshirt" },
    { id: 3, name: "Loose Fit Sweatshirt" },
    { id: 4, name: "Loose Fit Printed Hoodie" },
    { id: 5, name: "Loose Fit Shirt" },
    { id: 6, name: "Printed Sweatshirt" },
    { id: 7, name: "Wool-Blend Sweater" },
    { id: 8, name: "Lyocell Resort Shirt" },
    { id: 9, name: "Regular Fit Textured Shirt" },
    { id: 10, name: "Regular Fit Corduroy Pants" },
    { id: 11, name: "Patterned Sweatshirt" },
    { id: 12, name: "Wool-Blend Jacket" },
    { id: 13, name: "Regular-Fit Knit Sweater" },
    { id: 14, name: "Brushed Overshirt" },
    { id: 15, name: "Regular Fit Ribbed Polo Shirt" },
    { id: 16, name: "Regular Fit Velvet Pants" },
  ];

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term.");
    } else {
      navigate("/search-result");
    }
  };

  const handleSuggestionClick = (product) => {
    setSearchTerm(product.name);
    setTimeout(() => {
      setSuggestions([]);
    }, 0);
  };

  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          CLOTH.Men
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-3">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/top-selling" className="mx-3">
              On Sale
            </Nav.Link>
            <Nav.Link as={Link} to="/new-arrivals" className="mx-3">
              New Arrivals
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <InputGroup>
                <InputGroup.Text
                  className="bg-white border-end-0"
                  onClick={handleSearchClick}
                  style={{ cursor: "pointer" }}
                >
                  <FiSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search a cloth"
                  className="border-start-0"
                  style={{ width: "300px" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              {suggestions.length > 0 && (
                <div className="position-absolute start-0 w-100 mt-1">
                  <div
                    className="border rounded shadow-sm bg-white"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {suggestions.map((product, index) => (
                      <div
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        style={{
                          borderBottom:
                            index === suggestions.length - 1
                              ? "none"
                              : "1px solid #dee2e6",
                          cursor: "pointer",
                        }}
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="position-relative me-3"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <FiShoppingCart size={20} className="text-dark" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {cartCount}
              </span>
            </div>
            <div
              className="position-relative"
              onClick={() => navigate("/purchase-history")}
              style={{ cursor: "pointer" }}
            >
              <FiFileText size={20} className="text-dark" />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
