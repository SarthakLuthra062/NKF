import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
// import { NavLink } from "react-router-dom";
import Login from "../Login.js";
import { Link } from "react-scroll";
// import Button from "@mui/material/Button";
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import nkf from "../../assets/images/NKF.png";
// import shoes from "../../assets/images/shoes.png";
import nkfFactory from "../../assets/images/NKF2.png";
import arrowright from "../../assets/images/rightarrow.svg";
import "animate.css";
import ThreeSixty from "react-360-view";
import logout from "../Logout";
// import FactoryBuilding from "../FactoryBuilding";
const duration = 500;

const Navigation = () => {
  const isUserLoggedIn = localStorage.getItem("userName") ? true : false;

  return (
    <>
      <header class="home">
        <svg height="0" width="0" className="svg-clip">
          <defs>
            <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
              <polygon fill="none" points="0,0 1,0 1,.8 .5,1 0,.8 " />
            </clipPath>
          </defs>
        </svg>
        <div className="wrapper-nkf">
          <div className="shoe-image">
            {/* <img src={shoes}></img>  autoplay={72}*/}
            <ThreeSixty
              amount={72}
              imagePath="Comp-Shoes"
              fileName="Comp_{index}.png"
              loop={-1}
              autoplay
            />
          </div>
          <div class="nkf-image animate__animated animate__backInDown">
            <img src={nkf}></img>
          </div>
          <div class="nkffactory-image  animate__animated animate__backInUp">
            <img src={nkfFactory}></img>
          </div>
        </div>
        <div className="navigation">
          <div className="container-fluid px-md-0">
            <div className="row">
              <div className="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-dark sticky-md-top">
                  <a class="navbar-brand" href="#">
                    <img src={logo} alt="Image of logo" className="crm__logo" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  {/* Container fluid */}
                  <div
                    class="collapse navbar-collapse "
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mx-auto list">
                      <li class="nav-item">
                        <Link
                          activeClass="active"
                          className="list__item nav-link"
                          to="Home"
                          spy
                          smooth
                          duration={duration}
                        >
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          activeClass="active"
                          className="list__item nav-link"
                          to="about"
                          spy
                          smooth
                          duration={duration}
                        >
                          About
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          activeClass="active"
                          className="list__item nav-link"
                          to="Roadmap"
                          spy
                          smooth
                          duration={duration}
                        >
                          RoadMap
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          activeClass="active"
                          className="list__item nav-link"
                          to="contactus"
                          spy
                          smooth
                          duration={duration}
                        >
                          Contact US
                        </Link>
                      </li>
                      <li class="nav-item">
                        <a
                          activeClass="active"
                          className="list__item nav-link"
                          href="https://niftykicksfactory.gitbook.io/nifty-kicks-factory/"
                          target="_blank"
                          spy
                          smooth
                          duration={duration}
                        >
                          WhitePaper
                        </a>
                      </li>
                      {isUserLoggedIn && (
                        <>
                          <li class="nav-item">
                            <a
                              activeClass="active"
                              className="list__item nav-link"
                              //to="/factory-building"
                              spy
                              smooth
                              duration={duration}
                              href="/factory-building"
                            >
                              Factories
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              activeClass="active"
                              className="list__item nav-link"
                              //to="/factory-building"
                              spy
                              smooth
                              duration={duration}
                              href="/sneakervault"
                            >
                              SneakerVault
                            </a>
                          </li>
                        </>
                      )}
                      <li class="nav-item"></li>
                    </ul>
                    {/* <form class="d-flex ms-auto"> */}
                    <div className="sign__up">
                      {!isUserLoggedIn && (
                        <button
                          class="btn button-signup btn-outline"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Log-In
                          <span className="ms-3">
                            <img src={arrowright} alt="arrow right" />
                          </span>
                        </button>
                      )}
                      {isUserLoggedIn && (
                        <button
                          // class="btn button-signup btn-outline"
                          // type="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#exampleModal"
                          activeClass="active"
                          className="btn button-signup btn-outline list__item nav-link"
                          onClick={() => logout()}
                        >
                          {localStorage.getItem("userName")}
                        </button>
                      )}
                    </div>
                    {/* </form> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered  modal-xl">
          <div class="modal-content modelbg">
            <div class="modal-header"></div>
            <div class="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
