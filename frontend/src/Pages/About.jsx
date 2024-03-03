import React from "react";
import about_img from "../Components/Assets/banner2.webp";

const About = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={about_img}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  Caring for Pets,
                </h1>
                <h1 className="display-5 text-uppercase mb-0">
                  Creating Smiles
                </h1>
              </div>
              <div className="bg-light p-4">
                <ul
                  className="nav nav-pills justify-content-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100 active"
                      id="pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-1"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0">
                      PetSmart is the ultimate hub for every pet enthusiast out
                      there. With just a few taps, you can explore a world of
                      pets right from the cozy corners of your home. Our app is
                      designed to be your go-to destination, where you can
                      seamlessly search for pets that align with your interests
                      and lifestyle.
                    </p>
                    <br />
                    <p className="mb-0">
                      We understand the bond you share with your furry friends.
                      That's why we've curated a wide array of pet-related
                      services, all conveniently accessible in one place.
                      Whether you're looking for your ideal pet companion or
                      seeking expert veterinary care, we've got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
