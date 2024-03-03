import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import hero_img from "../Assets/main-banner.jpg";

import puppy_btn from "../Assets/puppy.avif";
import kitten_btn from "../Assets/kitten.avif";

import banner1 from "../Assets/banner1.jpeg";

import c1 from "../Assets/vet7.jpg";
import c2 from "../Assets/groom7.jpg";
import c3 from "../Assets/train3.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container-fluid bg-primary py-5 mb-5"
        style={{
          background: `url(${hero_img}) top right no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 text-uppercase text-dark mb-lg-4">
                Pet's Mart
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
                "There is nothing pure than love of a pet".
              </h1>
              <p className="fs-4 text-white mb-lg-4">
                A one stop destination for all pet lover's
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <Link
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <div className="col-6 mb-5">
          <Carousel style={{ maxHeight: "500px" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c1}
                alt="First slide"
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption>
                <div className="py-2 mb-5 bg-light">
                  <div>
                    <span className="text-dark">
                      Compassionate Pet Treatment Tailored to Your Pet's Needs
                    </span>
                  </div>
                  <div>
                    <small className="text-primary">
                      Book an Appointment with the Nearest Vet
                    </small>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      navigate("/treatment");
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c2}
                alt="Second slide"
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption>
                <div className="py-2 mb-5 bg-light">
                  <div>
                    <span className="text-dark">
                      Pamper Your Pet with Expert Grooming Services
                    </span>
                  </div>
                  <div>
                    <small className="text-primary">
                      Book a Grooming Session Today
                    </small>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      navigate("/grooming");
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c3}
                alt="Third slide"
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption>
                <div className="py-2 mb-5 bg-light">
                  <div>
                    <span className="text-dark">
                      Premium Pet Boarding & Expert Training Services
                    </span>
                  </div>
                  <div>
                    <small className="text-primary">
                      Reserve Your Pet's Stay and Training Session
                    </small>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      navigate("/training");
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="d-flex justify-content-around mb-5">
        <img
          src={puppy_btn}
          alt=""
          className="btn"
          onClick={() => {
            navigate("/products", {
              state: { petCategoryProp: "dog", itemCategoryProp: "food" },
            });
          }}
        />

        <img
          src={kitten_btn}
          alt=""
          className="btn"
          onClick={() => {
            navigate("/products", {
              state: { petCategoryProp: "cat", itemCategoryProp: "apparel" },
            });
          }}
        />
      </div>
      <div className="d-flex col-12 px-5 mb-5">
        <img
          src={banner1}
          alt=""
          className="btn img-fluid"
          style={{ objectFit: "cover" }}
          onClick={() => {
            navigate("/products", {
              state: { petCategoryProp: "dog", itemCategoryProp: "apparel" },
            });
          }}
        />
      </div>
    </>
  );
};

export default Hero;
