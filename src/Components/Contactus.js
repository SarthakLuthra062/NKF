import React from "react";
import arrowright from "../assets/images/rightarrow.svg";
import email from "../assets/images/Icon material-email.svg";
import location from "../assets/images/Icon metro-location.svg";
import building from "../assets/images/Icon awesome-building.svg";
const mapurl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57377.50114557019!2d-80.29679534718423!3d25.997743830363316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a601a86682fd%3A0xa8c41457cd4febf5!2sMiramar%2C%20FL%2033025%2C%20USA!5e0!3m2!1sen!2sin!4v1647078420994!5m2!1sen!2sin";
const Contactus = () => {
  return (
    <>
      <div className="Contact_container conatiner">
        <div className="row marginzero">
          <div className="col-md-12">
            <div className="divider">
              <p className="container__title horizontal-line"> Contact US</p>
            </div>
          </div>

          <div class="contact-form py-4  gx-4  px-md-5">
            <div className="container-xl p-0">
              <div className="row marginzero">
                <div className="col-md-6 col-12 col-lg-6 col-sm-12 mb-3">
                  <form className="row">
                    <div class="col-md-6 mb-3 ">
                      <input
                        class="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <input
                        class="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        class="form-control"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="col-12 mb-4">
                      <textarea
                        class="form-control"
                        id="message"
                        type="text"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div class="d-grid col-md-5">
                      <button class="btn  btn-md contact-button" type="submit">
                        <span className="">Submit</span>
                        <span className="ms-2">
                          <img src={arrowright} alt="arrowRight" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-6  col-12 offset-lg-1 col-lg-5 col-sm-12 mb-2 mt-2">
                  <div className="Adrress__conatiner ">
                    <div className="adreess_details">
                      <h2 class="font-bold"> Get In Touch </h2>
                      <div className="mobile address">
                        <div className="address-item">
                          <img src={building} alt="building deatils"></img>
                        </div>
                        <div className="ms-3 ">
                          C.R.A.M. NFT LLC L21000506939
                        </div>
                      </div>
                      <div className="email address">
                        <div className="address-item">
                          <img src={email} alt="emal deatils"></img>
                        </div>
                        <span className="ms-3">
                          NiftyKicksFactory@gmail.com
                        </span>
                      </div>
                      <div className="location address">
                        <div className="location-item">
                          <img src={location} alt="location deatils"></img>
                        </div>
                        <div className="ms-3">
                          {" "}
                          Carlos Lantigua . Ramon Lantigua . Marco Devares
                          Miramar, FL 33025
                        </div>
                      </div>
                    </div>
                    <div className="map__conatiner ">
                      <iframe
                        src={mapurl}
                        width="520"
                        height="200"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
