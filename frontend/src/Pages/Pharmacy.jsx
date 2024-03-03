import React, { useState } from "react";
import ProductCards from "../Components/Products/ProductCards";
import all_products from "../Components/Assets/all_products";
import Pagenation from "../Components/Pagenation";
import { pet_categories } from "../Components/Assets/categories";

const Pharmacy = () => {
  const pharmacyProducts = all_products.filter(
    (product) => product.itemCategory === "pharmacy"
  );

  const [petCategory, setPetCategory] = useState(pet_categories[0].value);
  const [filteredProducts, setFilteredProducts] = useState(
    pharmacyProducts.filter(
      (item) => item.petCategory.toLowerCase() === petCategory.toLowerCase()
    )
  );

  const handlePetChange = (event) => {
    const selectedCategory = event.target.value;
    setPetCategory(selectedCategory);

    const filtered_Products = pharmacyProducts.filter(
      (item) =>
        item.petCategory.toLowerCase() === selectedCategory.toLowerCase()
    );
    setFilteredProducts(filtered_Products);
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-between">
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">Products</h6>
              <h1 className="display-5 text-uppercase mb-0">
                Pharmacy for your pets
              </h1>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5 col-12">
            <div className="p-3 col-3 text-center">
              <span className="text-primary text-titlecase mb-3">
                Pet Selection
              </span>

              <select
                id="dropdown"
                value={petCategory}
                onChange={handlePetChange}
                className="form-select"
              >
                {pet_categories.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="product-carousel">
            {filteredProducts.map((item, i) => {
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
            })}
          </div>

          <Pagenation />
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
