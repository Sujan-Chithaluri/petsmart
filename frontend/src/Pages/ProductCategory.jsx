import React from "react";
import all_products from "../Components/Assets/all_products";
import ProductCards from "../Components/Products/ProductCards";

const ProductCategory = (props) => {
  return (
    <>
      <div className="product-carousel">
        {all_products.map((item, i) => {
          if (
            props.petCategory === item.petCategory &&
            props.itemCategory === item.itemCategory
          ) {
            return (
              <ProductCards
                key={i.toString()}
                id={item.id}
                name={item.name}
                image={item.image}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default ProductCategory;
