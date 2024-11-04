import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  const navigate = useNavigate();

  const handleSuggestionClick = (suggestion) => {
    onSuggestionClick(suggestion);
    navigate(`/product/${suggestion.id}`);
  };

  return (
    <ListGroup style={{ position: "absolute", zIndex: 1000, width: "300px" }}>
      {suggestions.map((product) => (
        <ListGroup.Item
          key={product.id}
          onClick={() => handleSuggestionClick(product)}
          style={{ cursor: "pointer" }}
        >
          {product.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SearchSuggestions;
