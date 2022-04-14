import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <Spinner
        className="loader"
        animation="border"
        role="status"
        variant="primary"
        size="lg"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
