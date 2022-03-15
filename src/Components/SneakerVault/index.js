import React from "react";

//import img2 from "../../assets/images/factory2.png";
import line from "../../assets/images/line.png";
import BalanceBar from "../BalanceBar";
import { Link } from "react-router-dom";

// const SneakerList = [
//   { model: "ForceWhites" },
//   { model: "Powerphase Calabasa" },
//   { model: "35's DNA" },
//   { model: "Max 1" },
//   { model: "500's High Slateyeesy" },
//   { model: "Air MAx Infrared" },
//   { model: "1's High Shadow" },
//   { model: "5's Fire Red" },
//   { model: "10's Chicago" },
//   { model: "6's DMP" },
//   { model: "Foamposite Blue Royal" },
//   { model: "13's Flint" },
//   { model: "7's Tinker Alt" },
//   { model: "11's Concord" },
//   { model: "14's Last Shot" },
//   { model: "12's Reverse Taxi" },
//   { model: "3's UNC" },
//   { model: "9's WBR" },
//   { model: "3's" },
//   { model: "12's Bred" },
//   { model: "4's Bred" },
//   { model: "3's White Cement" },
//   { model: "1's Chicago" },
//   { model: "Y's Triple Black" },
// ];

const Sneakervault = () => {
  return (
    <>
      <div className="backgroundbg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mt-2 text-left p-0 m-0">
              <ul className="menu">
                <a href="#">
                  <li>
                    {" "}
                    <span>Stake</span>
                  </li>
                </a>
                <a href="#">
                  <li>
                    {" "}
                    <span>Unstake</span>
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-md-6 heading-section mt-2 d-flex justify-content-center align-items-center">
              <ul className="menu-factory">
                <a href="#">
                  <li>
                    <span>Sneaker Vault</span>
                  </li>
                </a>
              </ul>
            </div>

            <div className="col-md-3 mt-2 text-left p-0 m-0">
              <ul className="menu">
                <a href="#">
                  <li>
                    <Link to="/bank">
                      <span>Bank</span>
                    </Link>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <Link to="/factory-building">
                      <span>Factories</span>
                    </Link>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid py-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-4 text-center d-flex justify-content-center align-items-center vault">
              <ul class="multibtn w-75">
                {" "}
                <a href="#" class="custom-btn">
                  Model Name
                </a>
              </ul>
            </div>
            <div class="col">
              <div className="row">
                <div
                  className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center vault"
                  id="datatable"
                >
                  <ul class="multibtn w-50">
                    {" "}
                    <a href="#" class="custom-btn">
                      Factory 1
                    </a>
                  </ul>
                </div>
                <div
                  className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center vault"
                  id="datatable"
                >
                  <ul class="multibtn w-50">
                    {" "}
                    <a href="#" class="custom-btn ">
                      Factory 2
                    </a>
                  </ul>
                </div>
                <div
                  className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center vault"
                  id="datatable"
                >
                  <ul class="multibtn w-50">
                    {" "}
                    <a href="#" class="custom-btn ">
                      Factory 3
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sneaker's Button Section */}
        <div className="container-fluid  mt-4 sneaker-multibtn">
          <div className="row">
            {/* ForceWhites */}
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  ForceWhites
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div class="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div class="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div class="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Powerphase Calabasa */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Powerphase Calabasa
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4 ">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 35's DNA Max 1  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  35's DNA Max 1
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 500's High Slate  */}

          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  500's High Slate
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Air Max Infrared  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Air Max Infrared
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 1's High Shadow   */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  1's High Shadow
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 5's Fire Red  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  5's Fire Red
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 10's Chicago   */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  10's Chicago
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 6's DMP  */}

          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  5's Fire Red
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Foamposite Blue Royal  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  5's Fire Red
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 13's Flint  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  13's Flint
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 7's Tinker Alt  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  7's Tinker Alt
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 11's Concord  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  11's Concord
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 14's Last Shot  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  14's Last Shot
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 12's Reverse Taxi  */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  12's Reverse Taxi
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 3's UNC  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  3's UNC
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 9's WBR  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  9's WBR
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 3’s   */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  3’s
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 12's Bred  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  12's Bred
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 4's Bred  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  4's Bred
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 3's White Cement  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  3's White Cement
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 1's Chicago  */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  1's Chicago
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Y's Triple Black 4boxes */}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Y's Triple Blac
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <a href="#" class="custom-btn">
                      Stake
                    </a>

                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                    <a href="#" class="custom-btn">
                      Stake
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Neon Promo’s 5 Boxes */}
          <div className="row  ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Neon Promo’s
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Oliveland Exclusives 4 Boxes*/}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Oliveland Exclusives
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Bleeding J5’s	 5 Boxes*/}
          <div className="row ">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Bleeding J5’s
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* X-Mass Edition 1 Box*/}
          <div className="row">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  X-Mass Edition
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Promo Planet	 10 boxes*/}
          <div className="row">
            <div className="col-md-2 d-flex justify-content-center vault">
              <ul class="multibtn w-75 ">
                <a href="#" class="custom-btn">
                  Promo Planet
                </a>
              </ul>
            </div>
            <div class="col ">
              <div class="row highlight-row">
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="multibtn w-80 d-flex flex-row sneaker-boxes">
                    <div className="sneaker-flex">
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>

                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                      <div className="sneaker-items">
                        <a href="#" class="custom-btn">
                          Stake
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <Link to="/factory-building">
                {" "}
                <img
                  src={line}
                  className="img-fluid ctn-image-line-2 ctn-image-sneaker"
                ></img>{" "}
              </Link>
            </div>
            <BalanceBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sneakervault;
