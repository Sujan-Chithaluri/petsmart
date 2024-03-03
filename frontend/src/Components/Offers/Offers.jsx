import React from "react";
import { Link } from "react-router-dom";
import offer_img from "../Assets/offer.jpg";

const Offers = () => {
  return (
    <div
      className="container-fluid my-5 py-5"
      style={{
        background: `url(${offer_img}) top right no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="container py-5">
        <div className="row gx-5 justify-content-start">
          <div className="col-lg-7">
            <div className="border-start border-5 border-dark ps-5 mb-5">
              <h6 className="text-dark text-uppercase">Offers</h6>
              <h1 className="display-5 text-uppercase text-white mb-0">
                Get Exciting offers on your first order
              </h1>
            </div>

            <Link to="/products" className="btn btn-light py-md-3 px-md-5 me-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
