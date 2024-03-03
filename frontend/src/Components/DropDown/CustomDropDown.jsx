import React from "react";
import { Link } from "react-router-dom";

const MyDropdown = () => {
  return (
    <Link
              to="/products"
              className="nav-item nav-link active"
            >
              cart
            </Link>

  );
};

export default MyDropdown;
