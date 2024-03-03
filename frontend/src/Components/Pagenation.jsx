import React from "react";
import { Link } from "react-router-dom";

const Pagenation = () => {
  return (
    <>
      <div className="col-12">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg m-0">
            <li className="page-item disabled">
              <Link
                className="page-link rounded-0"
                to="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">
                  <i className="bi bi-arrow-left"></i>
                </span>
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link rounded-0" to="#" aria-label="Next">
                <span aria-hidden="true">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagenation;
