import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";
import { saveOrder } from "../../api/ApiService";
import { Button, Form, Modal } from "react-bootstrap";
import LoadingSpinner from "../LoadingSpinner";

const curbsideLocations = [
  {
    id: 1,
    name: "412 Summit Ave, Arlington, TX 76013, USA",
    value: "412 Summit Ave, Arlington, TX 76013, USA",
  },
  {
    id: 2,
    name: "216 Pennie Ct, Arlington, TX 76013, USA",
    value: "216 Pennie Ct, Arlington, TX 76013, USA",
  },
  {
    id: 3,
    name: "1618 W Randol Mill Rd, Arlington, TX 76012, USA",
    value: "1618 W Randol Mill Rd, Arlington, TX 76012, USA",
  },
];

const Payment = () => {
  const [deliveryType, setDeliveryType] = useState("1");
  const [formData, setFormData] = useState({
    address: "",
    cardNumber: "",
    nameOnTheCard: "",
    cvv: "",
    expiryDate: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { cartWithDetails, emptyTheCart } = useCart();
  const { userDetails } = useAuth();
  const navigate = useNavigate();

  const handleRadioBtnClick = (e) => {
    const delType = e.target.value;
    setDeliveryType(delType);
    console.log("delType", delType);
    delType === "0"
      ? setFormData({ ...formData, address: curbsideLocations[0].value })
      : setFormData({ ...formData, address: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const threeDaysLater = new Date(currentDate);
    threeDaysLater.setDate(currentDate.getDate() + 3);

    const orderedItems = cartWithDetails.map((product) => ({
      name: product.name,
      count: product.count,
      price: product.price,
    }));

    const orderDetail = {
      orderItem: [...orderedItems],
      delivery: {
        deliveryType: deliveryType,
        deliveryDate: threeDaysLater.toDateString(),
        address: formData.address,
      },
      userId: userDetails.id,
      cardNumber: "XXXX XXXX XXXX " + formData.cardNumber.slice(-4),
      nameOnTheCard: formData.nameOnTheCard,
    };

    try {
      setIsLoading(true);
      let response = await saveOrder(orderDetail);

      if (response.data) {
        setShowModal(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Something went wrong");
    }
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
          Ordered booked successfully! <br />
          <br />
          Check Your Email
          <br />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={() => {
              emptyTheCart();
              setShowModal(false);
              navigate("/your-orders");
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-fluid pt-5 mb-4">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-7 text-uppercase">Payment Details</h1>
          </div>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="deliveryType"
                id="inlineRadio1"
                value="0"
                onChange={handleRadioBtnClick}
                checked={deliveryType === "0"}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Curbside pickup
              </label>
            </div>
            <div className="form-check form-check-inline mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="deliveryType"
                id="inlineRadio2"
                value="1"
                onChange={handleRadioBtnClick}
                checked={deliveryType === "1"}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Home Delivery
              </label>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <Form onSubmit={handleSubmit} id="payment-form">
                <div className="row g-3">
                  {deliveryType === "1" && (
                    <div className="col-12">
                      <Form.Control
                        type="text"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your address"
                        style={{ height: "55px" }}
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                  {deliveryType === "0" && (
                    <div className="col-12">
                      <select
                        id="dropdown"
                        value={formData.address}
                        name="address"
                        onChange={handleInputChange}
                        className="form-select mb-1 bg-light"
                        required
                      >
                        {curbsideLocations.map((option) => (
                          <option key={option.id} value={option.value}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Account Number - 12 Digits"
                      style={{ height: "55px" }}
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      minLength="16"
                      maxLength="16"
                      pattern="\d*"
                      title="Enter only 12 digits (0-9)"
                    />
                  </div>
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Name on the Card"
                      style={{ height: "55px" }}
                      name="nameOnTheCard"
                      value={formData.nameOnTheCard}
                      onChange={handleInputChange}
                      required
                      minLength="2"
                    />
                  </div>
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="CVV - 3 Digits"
                      style={{ height: "55px" }}
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      minLength="3"
                      maxLength="3"
                      pattern="\d{3}"
                      title="Enter exactly 3 digits"
                    />
                  </div>
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Expiry Date MM/YY"
                      style={{ height: "55px" }}
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      minLength="5"
                      maxLength="5"
                      pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                      title="Enter a valid MM/YY date"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary text-uppercase"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
