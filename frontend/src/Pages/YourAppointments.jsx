import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { getAllAppointments } from "../api/ApiService";
import LoadingSpinner from "../Components/LoadingSpinner";

const YourAppointments = () => {
  const { userDetails } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const appointments = await getAllAppointments(userDetails.id);
      setAppointments(
        appointments.data.filter((item) => item.serviceId !== "parks").reverse()
      );
      setIsLoading(false);
    })();
  }, [userDetails.id]);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <div className="container py-5" style={{ width: "80%" }}>
        <div className="border-start border-5 border-primary ps-5 mb-5">
          <h6 className="text-primary text-uppercase">Your Appointments</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Appointments you Booked
          </h1>
        </div>
        <div className="d-flex flex-column justify-content-center">
          {appointments.length > 0 ? (
            <>
              <div className="accordion mb-3" id="eachOrder">
                {appointments.map((item, i) => {
                  return (
                    <div key={i.toString()}>
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
                            {item.serviceName}
                          </button>
                        </div>
                        <div
                          id={`collapse-${i}`}
                          className="accordion-collapse collapse show"
                          aria-labelledby={`heading-${i}`}
                          data-bs-parent="#eachOrder"
                        >
                          <div className="accordion-body">
                            <div className="ms-3 mb-3">
                              Pet {item.serviceId} service
                            </div>

                            <small className="ms-3">
                              <i className="bi bi-calendar-date me-3"></i>
                              Date : {item.date}
                            </small>
                            <small className="ms-3">
                              <i className="bi bi-clock me-3"></i>
                              Slot Time : {item.timeSlot}
                            </small>

                            <div className="ms-3 mt-3">
                              <small>
                                <i className="bi bi-person me-3"></i>
                                Name : {item.username}
                              </small>
                            </div>
                            <div className="ms-3 mt-3 mb-2">
                              <small>
                                <i className="bi bi-envelope me-3"></i>Email :{" "}
                                {item.email}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <span className="fs-3 fw-light">No appointments booked</span>
          )}
        </div>
      </div>
    </>
  );
};

export default YourAppointments;
