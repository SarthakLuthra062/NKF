import React from "react";
import { data } from "./dummy.js";
const BalanceBar = () => {
  return (
    <div>
      {" "}
      {data.map((x) => (
        <div className="container-fluid">
          <div className="row ctm-menu-images">
            <div className="col-md-2">
              <ul className="menu-image">
                <li>
                  <a href="">{x.balance_energy}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="menu-image-2">
                <li>
                  <a href="">{x.balance_leather}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center"></div>
            <div className="col-md-2">
              <ul className="menu-image-3">
                <li>
                  <a href="">{x.balance_rubber}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="menu-image-4">
                <li>
                  <a href="">{x.balance_rubber}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default BalanceBar;
