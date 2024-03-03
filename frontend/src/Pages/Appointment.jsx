import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveAppointment } from "../api/ApiService";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { useService } from "../Context/ServiceContext";
import LoadingSpinner from "../Components/LoadingSpinner";

export const Appointment = () => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const { userDetails } = useAuth();

  const { serviceDetails } = useService();

  const today = new Date().toISOString().split("T")[0];

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const parsedDate = new Date(formValues.date);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = parsedDate.toLocaleDateString(undefined, options);

    const parsedTime = new Date(`2000-01-01T${formValues.timeSlot}`);
    const timeOptions = { hour: "2-digit", minute: "2-digit" };
    const formattedTime = parsedTime.toLocaleTimeString(undefined, timeOptions);

    formValues.date = formattedDate;
    formValues.timeSlot = formattedTime;

    formValues["serviceId"] = serviceDetails.category;
    formValues["serviceName"] = serviceDetails.name;
    formValues["userId"] = userDetails.id;

    try {
      setIsLoading(true);
      let response = await saveAppointment({
        ...formValues,
      });
      setIsLoading(false);

      if (response.data) {
        setShowModal(true);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
    }

    console.log("error", error);
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          Appointment booked successfully! <br />
          <br />
          Check Your Email
          <br />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              navigate(-1);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">
              {serviceDetails.category !== "parks"
                ? "Book an Appointment for"
                : "Get Recommendations for"}
            </h6>
            <h1 className="display-7 text-uppercase text-titlecase">
              {serviceDetails.name}
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <Form onSubmit={submitHandler}>
                <div className="row g-3">
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      name="username"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <Form.Control
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      name="email"
                      required
                    />
                  </div>

                  {serviceDetails.category !== "parks" && (
                    <>
                      <div className="col-12">
                        <Form.Control
                          type="date"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Preferenced date"
                          style={{ height: "55px" }}
                          name="date"
                          min={today}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <Form.Control
                          type="time"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Preferenced time"
                          style={{ height: "55px" }}
                          name="timeSlot"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="col-12">
                    <Form.Control
                      as="textarea"
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="8"
                      placeholder="Message"
                      name="message"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <Button
                      variant="white"
                      type="submit"
                      className="btn btn-primary me-5"
                    >
                      {serviceDetails.category !== "parks"
                        ? "Book Slot"
                        : "Get Recommendations"}
                    </Button>

                    <Button
                      variant="white"
                      onClick={() => {
                        navigate(-1);
                      }}
                      className="btn btn-primary ms-5"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-lg-5">
              <div className="bg-light mb-5 p-5">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Our Office</h6>
                    <span>412 Summit Ave, Arlington , TX, USA</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    <span>pets.mart@gmail.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Call Us</h6>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
