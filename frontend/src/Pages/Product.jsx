import React from "react";
import ProductCategory from "./ProductCategory";
import Pagenation from "../Components/Pagenation";
import { pet_categories } from "../Components/Assets/categories";
import item_categories from "../Components/Assets/categories";
import { useLocation } from "react-router-dom";

import { useState } from "react";

const Product = () => {
  const location = useLocation();

  const [petCategory, setPetCategory] = useState(
    location.state?.petCategoryProp || pet_categories[0].value
  );

  const [itemCategory, setItemCategory] = useState(
    location.state?.itemCategoryProp || item_categories[0].value
  );

  const handlePetChange = (event) => {
    setPetCategory(event.target.value);
  };

  const handleItemChange = (event) => {
    setItemCategory(event.target.value);
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-between">
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">Products</h6>
              <h1 className="display-5 text-uppercase mb-0">
                Products For Your Best Friends
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

            <div className="p-3 col-3 text-center">
              <span className="text-primary text-titlecase">
                Category Selection
              </span>

              <select
                id="dropdown"
                value={itemCategory}
                onChange={handleItemChange}
                className="form-select"
              >
                {item_categories.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ProductCategory
            petCategory={petCategory}
            itemCategory={itemCategory}
          />

          <Pagenation />
        </div>
      </div>
    </>
  );
};

export default Product;
