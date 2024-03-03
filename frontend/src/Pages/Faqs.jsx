import React from "react";
import all_faqs from "../Components/Assets/all_faqs";
import { useState } from "react";

const pet_categories = [
  { id: 1, name: "Dogs", value: "Dogs" },
  { id: 2, name: "Cats", value: "Cats" },
  { id: 3, name: "Birds", value: "Birds" },
];

const Faqs = () => {
  const [petCategory, setPetCategory] = useState(pet_categories[0].value);
  const [filteredFaqs, setFilteredFaqs] = useState(
    all_faqs.filter(
      (faq) =>
        faq.petCategory.toLowerCase() === pet_categories[0].value.toLowerCase()
    )
  );

  const handlePetChange = (event) => {
    const selectedCategory = event.target.value;
    setPetCategory(selectedCategory);

    const filteredFaqs = all_faqs.filter(
      (faq) => faq.petCategory.toLowerCase() === selectedCategory.toLowerCase()
    );
    setFilteredFaqs(filteredFaqs);
  };

  return (
    <>
      <div className="container py-5" style={{ width: "80%" }}>
        <div className="border-start border-5 border-primary ps-5 mb-5">
          <h6 className="text-primary text-uppercase">FAQS</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Frequently Asked questions about pets
          </h1>
        </div>

        <form className="d-flex justify-content-center">
          <div className="col-3">
            <div className="p-3 text-center">
              <span className="text-primary text-titlecase">Pets Category</span>

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
        </form>

        <div className="row g-5">
          <div className="col-lg-8"></div>
          <div className="accordion mb-3" id="eachOrder">
            {filteredFaqs.map((item, i) => {
              return (
                <>
                  <div className="accordion-item mt-3" key={i.toString()}>
                    <div className="accordion-header" id={`heading-${i}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${i}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${i}`}
                      >
                        {item.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${i}`}
                      className="accordion-collapse collapse show"
                      aria-labelledby={`heading-${i}`}
                      data-bs-parent="#eachOrder"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
