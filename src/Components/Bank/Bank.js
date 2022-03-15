// import img2 from "./images/factory2.png";
// import carl1 from "./images/carl1.png";
// import carl2 from "./images/carl2.png";
// import carl3 from "./images/carl3.png";
import line from "../../assets/images/line.png";
import { Link } from "react-router-dom";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
import BalanceBar from "../BalanceBar";
<span>Stake</span>;

const Bank = () => {
  return (
    <div className="backgroundbg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <LeftInnerNavigation />
          </div>
          <div className="col-md-6 heading-section mt-4 d-flex justify-content-center align-items-center">
            <ul className="menu-factory">
              <Link to="/factory">
                <li>
                  <span>Bank</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        <div className="container mt-4">
          <div className="row allbtn">
            <div
              className="col-md-6 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-25">
                {" "}
                <a href="#" class="custom-btn withdraw">
                  Deposit
                </a>
              </ul>
            </div>
            <div
              className="col-md-6 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-25">
                {" "}
                <a href="#" class="custom-btn withdraw">
                  Withdraw
                </a>
              </ul>
            </div>

            <div className="col-md-12 mt-4 text-center d-flex justify-content-center align-items-center">
              <ul class="multibtn w-50 mt-4">
                {" "}
                <a href="#" class="custom-btn withdraw">
                  7% off Bank Fee 
                </a>
              </ul>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-light pt-2"> </span>
            </div>

            <div className="row pt-4 allbtn">
              <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn withdraw">
                        Balance
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn withdraw">
                        Withdraw Amount
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn withdraw">
                        - Fee
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn withdraw">
                        Total withdraw
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        <input type="text"  class="bg-none" />
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                      <input type="text"  class="bg-none" />
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                      <input type="text"  class="bg-none" />
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                      <input type="text"  class="bg-none" />
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-2">
                <div>
                  <ul class="multibtn">
                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>

                    <li>
                      <a href="#" class="custom-btn">
                        000000
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="col-md-12 text-center custom-image-set-bank">
              <Link to="/factory-building">
                {" "}
                <img src={line} className="img-fluid ctn-image-line"></img>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <BalanceBar />
          {/* <div className="col-md-12 text-center">
            {" "}
            <img src={line} className="img-fluid"></img>
          </div> */}
          {/* <div className="col-md-2">
            <ul className="menu-image">
              <li>
                <a href="">00000</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="menu-image-2">
              <li>
                <a href="">00000</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center"> </div>
          <div className="col-md-2">
            <ul className="menu-image-3">
              <li>
                <a href="">00000</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="menu-image-4">
              <li>
                <a href="">00000</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Bank;
