import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const Navbar = () => {
  let location = useLocation();
  const { isLoggedIn, logout, userDetails } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-top">
        <Link to="/home" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Pet's Mart
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 mr-5">
            <Link
              to="/home"
              className={`nav-item nav-link ${
                location.pathname.includes("home") ? "active" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-item nav-link ${
                location.pathname.includes("about") ? "active" : ""
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`nav-item nav-link ${
                location.pathname.includes("services") ? "active" : ""
              }`}
            >
              Services
            </Link>

            <Link
              to="/faqs"
              className={`nav-item nav-link ${
                location.pathname.includes("faqs") ? "active" : ""
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/pharmacy"
              className={`nav-item nav-link ${
                location.pathname.includes("pharmacy") ? "active" : ""
              }`}
            >
              Pharmacy
            </Link>

            <Link
              to="/products"
              className={`nav-item nav-link ${
                location.pathname.includes("products") ? "active" : ""
              }`}
            >
              Products
            </Link>

            {isLoggedIn && (
              <Link
                to="/cart"
                className={`nav-item nav-link ${
                  location.pathname.includes("cart") ? "active" : ""
                }`}
              >
                cart
              </Link>
            )}

            {!isLoggedIn && (
              <Link
                to="/login"
                className={`nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5 active}`}
              >
                Login
              </Link>
            )}
            {isLoggedIn && (
              <div
                className="nav-item dropdown bg-primary ms-3"
                style={{ maxWidth: "150px" }}
              >
                <Link
                  className="nav-link dropdown-toggle text-white text-truncate"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-2"></i>
                  {userDetails.firstname}
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to="/change-password" className="dropdown-item">
                    Change Password
                  </Link>
                  <Link to="/your-orders" className="dropdown-item">
                    Your Orders
                  </Link>
                  <Link to="/your-appointments" className="dropdown-item">
                    Your Appointments
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => {
                      logout();
                    }}
                    className="dropdown-item"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
