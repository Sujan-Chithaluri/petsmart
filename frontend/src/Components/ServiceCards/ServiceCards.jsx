import React from "react";
import { Link } from "react-router-dom";

const ServiceCards = (props) => {
  return (
    <>
      <div className="col-md-6">
        <div className="service-item bg-light d-flex p-4">
          <i className={`${props.image} display-1 text-primary me-4`}></i>
          <div>
            <h5 className="text-uppercase mb-3">{props.name} </h5>
            <p>{props.desc}</p>
            <Link
              className="text-primary text-uppercase"
              to={`/${props.category}`}
            >
              Read More<i className="bi bi-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
