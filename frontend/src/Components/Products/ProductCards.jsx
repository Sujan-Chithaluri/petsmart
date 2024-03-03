import React from "react";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCards = (props) => {
  const { addItem, getItemCount, removeItem } = useCart();

  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-3 h-100">
            <img
              className="img-fluid h-100"
              src={props.image}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-6 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">Rating : {props.rating}</small>
                <small>Price : ${props.price}</small>
              </div>
              <h5 className="text-uppercase mb-3">{props.name}</h5>
              <p>{props.desc}</p>
            </div>
          </div>
          <div className="col-12 col-sm-3 h-100 d-flex flex-column justify-content-center">
            {getItemCount(props.id) === 0 ? (
              <div className="btn-action d-flex justify-content-center">
                <div
                  className="btn btn-primary py-2 px-3"
                  onClick={() => {
                    if (isLoggedIn) addItem(props.id);
                    else navigate("/login");
                  }}
                >
                  <small className="mb-3">Add to cart</small>
                  <i className="bi bi-cart ms-2" />
                </div>
              </div>
            ) : (
              <div className="btn-action d-flex justify-content-center">
                <div
                  className="btn btn-primary py-2 px-3"
                  onClick={() => {
                    removeItem(props.id);
                  }}
                >
                  <small className="mb-3">Remove from Cart</small>
                  <i className="bi bi-cart ms-2" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
