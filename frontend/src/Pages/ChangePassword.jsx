import React from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword, sendOtp } from "../api/ApiService";
import { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { userDetails } = useAuth();

  const [error, setError] = useState(null);
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState();
  const [showSentModal, setShowSentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOTPInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const sendOtpToEmail = async () => {
    try {
      setIsLoading(true);
      let authentication = await sendOtp(userDetails.email);
      setIsLoading(false);

      if (authentication.data) {
        setShowSentModal(true);
        setError(null);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Please try with valid Details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: userDetails.email,
      otp: otp,
      password: password,
    };

    try {
      setIsLoading(true);

      let resp = await updatePassword(user);

      setIsLoading(false);

      if (resp.data) {
        setShowSuccessModal(true);
        setError(null);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Please try with valid OTP");
      console.log("error", error);
    }
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <Modal show={showSentModal} onHide={() => setShowSentModal(false)}>
        <Modal.Body className="d-flex justify-content-center text-center">
          Check Your Email for OTP
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={() => {
              setShowSentModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Body className="d-flex justify-content-center text-center">
          Password Changed Successfully
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccessModal(false);
              navigate("/home");
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container py-5" style={{ width: "700px" }}>
        <div className="row g-5">
          <div className="col-lg-8"></div>

          <div className="bg-light rounded p-5">
            <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
              Update Password
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    name="otp"
                    className="form-control bg-white border-0"
                    placeholder="OTP"
                    style={{ height: "55px" }}
                    required
                    onChange={handleOTPInputChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    name="password"
                    className="form-control bg-white border-0"
                    placeholder="Password"
                    style={{ height: "55px" }}
                    required
                    onChange={handlePasswordInputChange}
                  />
                </div>

                <div className="col-6">
                  <button
                    className="btn btn-primary w-100 py-3"
                    onClick={() => {
                      sendOtpToEmail();
                    }}
                  >
                    Send OTP to e-Mail
                  </button>
                </div>

                <div className="col-6">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Update password
                  </button>
                </div>
              </div>
            </form>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
