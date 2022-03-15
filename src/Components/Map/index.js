import React from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import line from "../../assets/images/line.png";
import { Link } from "react-router-dom";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";

const index = () => {
  return (
    <div className="backgroundbg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <LeftInnerNavigation />
          </div>
          <div className="col-md-6 heading-section mt-4 d-flex justify-content-center align-items-center">
            <ul className="menu-factory">
              <Link to="/marketplace">
                <li>
                  <span>Map</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        <ComingSoon />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12 text-center">
              {" "}
              <Link to="/factory-building">
                <img src={line} className="img-fluid"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
