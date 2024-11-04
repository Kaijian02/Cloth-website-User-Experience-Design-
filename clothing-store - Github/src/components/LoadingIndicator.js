import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const LoadingIndicator = ({ fadeOut }) => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setFade(true);
        setTimeout(() => {
          setVisible(false);
        }, 500);
      }, 1000);
    }
  }, [fadeOut]);

  return (
    visible && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(128, 128, 128, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          opacity: fade ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3 text-light">Loading Apparel...</p>{" "}
      </div>
    )
  );
};

export default LoadingIndicator;
