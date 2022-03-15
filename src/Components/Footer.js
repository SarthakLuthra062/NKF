import React from "react";
import facebook from "../assets/images/Icon awesome-facebook-f.svg";
import twitter from "../assets/images/Icon awesome-twitter.svg";
import youtube from "../assets/images/Icon awesome-twitter.svg";
import instagram from "../assets/images/Icon awesome-instagram.svg";
//import scrollup from "../assets/images/Icon ionic-ios-arrow-round-forward.svg";

const Footer = () => {
  return (
    <>
      <section id="footer-section">
        <div className="container pt-4 pb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="footer__text">
                <span class="text-white">
                  &copy; 2022CramNFT.All Rights Reserved
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div class="footer-info">
                <div class="social-links">
                  <a href="#" class="social-icons">
                    <img src={facebook} alt="facebook icon" />
                  </a>
                  <a href="#" class="social-icons">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="#" class="social-icons">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="#" class="social-icons">
                    <img src={youtube} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
