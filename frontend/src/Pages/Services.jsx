import React from "react";
import all_service_categories from "../Components/Assets/all_service_categories";
import ServiceCards from "../Components/ServiceCards/ServiceCards";

const Services = () => {
  const services = all_service_categories;

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Services</h1>
          </div>

          <div className="row g-5">
            {services.map((item) => {
              return (
                <React.Fragment key={item.id.toString()}>
                  <ServiceCards
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    desc={item.desc}
                    category={item.category}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
