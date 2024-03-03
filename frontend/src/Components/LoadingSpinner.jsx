import React from "react";
import { Overlay, Spinner } from "react-bootstrap";

const LoadingSpinner = (props) => {
  return (
    <>
      {props.isLoading && (
        <>
          <Overlay
            show={props.isLoading}
            target={document.body}
            rootClose={false}
            transition={false}
            placement="top"
          >
            {({ show: _show }) => (
              <div
                className="loading-spinner position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(2px)",
                  zIndex: 9999,
                }}
              >
                <Spinner className="text-primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
          </Overlay>
        </>
      )}
    </>
  );
};

export default LoadingSpinner;
