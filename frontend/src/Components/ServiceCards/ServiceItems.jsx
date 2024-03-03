import React from "react";
import { Link } from "react-router-dom";
import { useService } from "../../Context/ServiceContext";
import { useAuth } from "../../Context/AuthContext";

const ServiceItems = (props) => {
  const { isLoggedIn } = useAuth();

  const { setServiceToCtx } = useService();

  return (
    <>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src={props.image}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <h5 className="text-uppercase mt-3 mb-3">{props.name}</h5>
              <p>{props.desc}</p>

              <div className="d-flex flex-column mb-3">
                {props.category.toString() !== "parks" && (
                  <>
                    <small className="me-3">
                      Slots :{" "}
                      {props.slotsAvailable ? "Available" : "Not Available"}
                    </small>
                  </>
                )}
                <small>Rating : {props.rating}</small>
                <small>Address : {props.address}</small>
              </div>

              {((props.slotsAvailable &&
                props.category.toString() !== "parks") ||
                props.category.toString() === "parks") && (
                <>
                  <Link
                    className="text-primary text-uppercase"
                    to={isLoggedIn ? "/appointment" : "/login"}
                    onClick={() => {
                      setServiceToCtx(props.id);
                    }}
                  >
                    {props.category.toString() !== "parks"
                      ? "Book Appointemnt"
                      : "Get Recommendations"}
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItems;
