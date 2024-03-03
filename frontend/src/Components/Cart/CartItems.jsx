import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../Context/CartContext";
import Payment from "./Payment";

const CartItems = () => {
  const { cartWithDetails, cartTotalValue } = useCart();

  return (
    <>
      <div className="container-fluid pt-3">
        <div className="container py-5">
          <div>
            <div>
              <div
                className="border-start border-5 border-primary ps-5 mb-5"
                style={{ maxWidth: "600px" }}
              >
                <h1 className="display-7 text-uppercase">Cart Items</h1>
              </div>
              {cartWithDetails.length > 0 ? (
                <div className="mb-5">
                  {cartWithDetails.map((item) => {
                    return (
                      <React.Fragment key={item.id.toString()}>
                        <CartItem
                          key={item.id.toString()}
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          desc={item.desc}
                          category={item.category}
                          rating={item.rating}
                          price={item.price}
                          total={item.total}
                          count={item.count}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                <span className="fs-3 fw-light"> No Items in the cart </span>
              )}
            </div>
          </div>
          {cartWithDetails.length > 0 && (
            <h4 className="col-12 col-sm-9 text-primary text-center text-uppercase">
              Total Price : ${cartTotalValue}
            </h4>
          )}
        </div>
      </div>
      {cartWithDetails.length > 0 && <Payment />}
    </>
  );
};

export default CartItems;
