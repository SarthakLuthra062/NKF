import React from "react";
import roadmapframe from "../assets/images/roadmapFrame.png";

const Roadmap = () => {
  return (
    <div className="roadmap__container ">
      <div className="divider">
        <p className="container__title horizontal-line">RoadMap</p>
      </div>

      <div class="road-container px-md-5">
        <div className="container">
          <div className="row marginzero">
            <div class="roadmap-optionbox ">
              <div class="roadmap-items ">
                <div className="connector">
                  <div className="card card-roadmap">
                    <div className="card-button">
                      <span class="roadmap__button__bg">1</span>
                    </div>
                    <div className="card card-roadmap ">
                      <img
                        src={roadmapframe}
                        class="card-img"
                        alt="card-background"
                      />
                      <div class="card-img-overlay">
                        <div class="card-body mt-3">
                          <div class="form-check">
                            <p>
                              <input
                                type="checkbox"
                                id="test1"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test1"> Game Script</label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test2"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test2"> NFT Art</label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test3"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test3"> Promo Drop</label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test4"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test4"> Website Launch</label>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="roadmap-items ">
                <div className="connector">
                  <div class="card card-roadmap  ">
                    <div className="card-button">
                      <span class="roadmap__button__bg">2</span>
                    </div>
                    <div className="card card-roadmap ">
                      <img
                        src={roadmapframe}
                        class="card-img"
                        alt="card-background"
                      />
                      <div class="card-img-overlay">
                        <div class="card-body mt-3">
                          <div class="form-heck">
                            <p>
                              <input
                                type="checkbox"
                                id="test5"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test5"> Smart Contracts</label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test6"
                                name="checkbox-group"
                                checked
                              />
                              <label for="test6">Whitelisting on AH</label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test7"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test7"> Tesnet Game Launch</label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test8"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test8"> Main Drops 1 & 2</label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test8"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test8">Token Alcor Deployment</label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test8"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test8"> Game Launch</label>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="roadmap-items ">
                <div className="roadlastitems">
                  <div class="card card-roadmap ">
                    <div className="card-button">
                      <span class="roadmap__button__bg">3</span>
                    </div>
                    <div className="card card-roadmap ">
                      <img
                        src={roadmapframe}
                        class="card-img"
                        alt="card-background"
                      />
                      <div class="card-img-overlay">
                        <div class="card-body mt-3">
                          <div class="form-heck">
                            <p>
                              <input
                                type="checkbox"
                                id="test9"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test9"> Employee Of the Month</label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test10"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test10"> Monthly Sneaker Event</label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test11"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test11">
                                {" "}
                                Testnet Delivery Game implementation
                              </label>
                            </p>

                            <p>
                              <input
                                type="checkbox"
                                id="test12"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test12">
                                {" "}
                                Colab implementation w/Marketplace
                              </label>
                            </p>
                            <p>
                              <input
                                type="checkbox"
                                id="test12"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="test12"> Mobile Responsive UI</label>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="roadmap-items">
                <div className="roadlastitems customroadmap">
                  <div class="card card-roadmap ">
                    <div className="card-button">
                      <span class="roadmap__button__bg">4</span>
                    </div>
                    <div className="card card-roadmap ">
                      <img
                        src={roadmapframe}
                        class="card-img"
                        alt="card-background"
                      />
                      <div class="card-img-overlay">
                        <div class="card-body mt-3">
                          <div class="form-heck">
                            <p>
                              <input
                                type="checkbox"
                                id="test13"
                                name="checkbox-group"
                                disabled
                              />
                              <label for="3"> Cross Gamin Implementation</label>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Roadmap;
