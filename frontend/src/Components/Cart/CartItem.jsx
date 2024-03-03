import React from "react";
import { useCart } from "../../Context/CartContext";

const CartItem = (props) => {
  const { incrementAddedItem, decrementAddedItem, removeItem, getItemCount } =
    useCart();

  return (
    <>
      <div className="mb-5">
        <div className="row g-0 overflow-hidden">
          <div className="col-12 col-sm-3 h-70">
            <img
              className="img-fluid h-70"
              src={props.image}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>

          <div className="col-12 col-sm-4 bg-light d-flex flex-column justify-content-center">
            <div className="me-5 ms-5">
              <h5 className="text-titlecase mb-3">{props.name}</h5>
              <div className="d-flex flex-column justify-content-center mb-3">
                <span>Price : ${props.price}</span>
                <span>Count : {props.count}</span>
                <br />
                <span>Total : ${props.total}</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-2 bg-light d-flex flex-column justify-content-center">
            <div className="me-5 ms-5">
              <div className="btn-action d-flex mb-3 d-flex justify-content-center text-center text-align-center ">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => incrementAddedItem(props.id)}
                  >
                    +
                  </button>

                  <h4 className="text-center mb-0">{getItemCount(props.id)}</h4>

                  <button
                    className="btn btn-primary m-2"
                    onClick={() => decrementAddedItem(props.id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="btn-action mb-3 d-flex justify-content-center col-12">
                <button
                  onClick={() => removeItem(props.id)}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
