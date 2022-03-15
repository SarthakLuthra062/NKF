import React from "react";
import line from "../../assets/images/line.png";
import "../../Components/index.css";
import BalanceBar from "../BalanceBar";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
// import './index.css';
import { sneakersList } from "./data";
import { Link } from "react-router-dom";

const Build = () => {
  const [molding, setMolding] = React.useState("");
  const tokenValues = [
    {
      name: "NKFE",
      value: {
        Basic: 864,
        Modern: 1152,
        Advance: 1728,
        BasicLeather: 1296,
        AdvanceLeather: 2160,
        ModernLeather: 3024,
        BasicSew: 864,
        AdvanceSew: 2592,
        ModernSew: 1728,
      },
    },
    {
      name: "NKFL",
      value: {
        BasicLeather: 4320,
        AdvanceLeather: 7200,
        ModernLeather: 10080,
      },
    },
    {
      name: "NKFT",
      value: {
        BasicSew: 2880,
        AdvanceSew: 8640,
        ModernSew: 5760,
      },
    },
    {
      name: "NKFR",
      value: {
        Basic: 2880,
        Modern: 3840,
        Advance: 5760,
      },
    },
  ];
  const handleChange = (event) => {
    setMolding(event.target.value);
  };

  const [factory, setFactory] = React.useState("");
  const factoryTokenValues = [
    {
      name: "NKFE",
      value: {
        Assembly: 7200,
        Manufacturing: 26400,
        Industrial: 43200,
      },
    },
    {
      name: "NKFL",
      value: {
        Assembly: 4320,
        Manufacturing: 7200,
        Industrial: 10080,
      },
    },
    {
      name: "NKFT",
      value: {
        Assembly: 2880,
        Manufacturing: 5760,
        Industrial: 8640,
      },
    },
    {
      name: "NKFR",
      value: {
        Assembly: 2880,
        Manufacturing: 3840,
        Industrial: 5760,
      },
    },
  ];

  const [sneakers, setSneakers] = React.useState("");

  const handleSneakers = (event) => {
    setSneakers(event.target.value);
  };

  const handleFactory = (event) => {
    setFactory(event.target.value);
  };

  const selectedSneakers = sneakersList.find(
    ({ value }) => value === sneakers
  )?.lists;

  console.log(
    selectedSneakers
      ? Object.keys(selectedSneakers).map((v) => selectedSneakers[v])
      : null
  );

  return (
    <div className="backgroundbg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <LeftInnerNavigation />
          </div>
          <div className="col-md-6 heading-section mt-4 d-flex justify-content-center align-items-center">
            <ul className="menu-factory">
              <a href="#">
                <li>
                  <span>Build</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div
              className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-50">
                {" "}
                <a href="#" class="custom-btn">
                  Build Machine
                </a>
              </ul>

              <div className="build_select ">
                <select className="form-select" onChange={handleChange}>
                  <option selected>Select Machine</option>
                  <option value="">None</option>
                  <option value="Basic">Basic Molding Machine</option>
                  <option value="Modern">Modern Molding Machine</option>
                  <option value="Advance">Advance Molding Machine</option>
                  <option value="BasicSew">Basic Sewing Machine</option>
                  <option value="ModernSew">Modern Molding Machine</option>
                  <option value="AdvanceSew">Advance Molding Machine</option>
                  <option value="BasicLeather">Basic Leather Cutter</option>
                  <option value="ModernLeather">Modern Leather Cutter</option>
                  <option value="AdvanceLeather">Advance Leather Cutter</option>
                </select>
                <div class="dropdownicon">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>

              {/* <table className="table table-border"> */}
              <div className="col-md-12">
                <div className="build_details">
                  {tokenValues.map(({ name, value }, index) => (
                    <div key={index}>
                      <div>{name} </div>
                      <div>{value[molding] || "-"}</div>
                      {/* <div>{tokenValues.moldingMachine.name} </div>
           <div>{tokenValues.moldingMachine.value[molding] || "-"}</div> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* </table> */}
            </div>
            <div
              className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-50">
                {" "}
                <a href="#" class="custom-btn">
                  Build Factory
                </a>
              </ul>
              <div className="build_select ">
                <select className="form-select" onChange={handleFactory}>
                  <option selected>Select Factory Building</option>
                  <option value="">None</option>
                  <option value="Assembly">Assembly</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Industrial">Industrial</option>
                </select>
                <div class="dropdownicon">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
              <div className="col-md-12">
                <div className="build_details">
                  {factoryTokenValues.map(({ name, value }, index) => (
                    <div key={index}>
                      <div>{name}</div>
                      <div>{value[factory] || "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-50">
                {" "}
                <a href="#" class="custom-btn">
                  Build Shoes NFT
                </a>
              </ul>
              <div className="build_select ">
                <select className="form-select" onChange={handleSneakers}>
                  {sneakersList.map((list) => (
                    <option key={list.value} value={list.value}>
                      {list.label}
                    </option>
                  ))}
                </select>
                <div class="dropdownicon">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
              <div className="col-md-12">
                <div className="build_details ">
                  {Object.keys(selectedSneakers).map((v, index) => (
                    <div key={index}>
                      <div>{v}</div>
                      <div>{selectedSneakers[v] || "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center custom-image-set">
            <Link to="/factory-building">
              {" "}
              <img src={line} className="img-fluid ctn-image-line"></img></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ctm-menu-images">
          <BalanceBar />
        </div>
      </div>
    </div>
  );
};
export default Build;
