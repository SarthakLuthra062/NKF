import React from "react";

const About = () => {
  return (
    <div className="about__container" id="about">
      <div className="px-md-5">
        <div className="container-xl p-0">
          <div className="row g-sm-3  marginzero">
            <div className="divider">
              <p className="container__title horizontal-line">About Us</p>
              {/* <hr className='horizontal-line' /> */}
            </div>

            <div className="about__details">
              <div className="row px-3 gx-3  marginzero">
                <div className="about__details__description1 col-lg-12 col-md-12 col-12 mb-2">
                  <p>
                    Nifty Kicks Factory is the first sneaker builder game to
                    function on the NFT platform. You will need skill workers,
                    suitable machinery, and a factory building. Stake your
                    machine/laborer NFT’s to gather the required raw materials
                    to make additional machines, buildings and your
                    NiftyKicksss. Join the sneaker NFT industry and enjoy the
                    fascinating experience of becoming a sneaker factory owner.
                  </p>
                </div>
              </div>
              <div className="about__details__description1 row px-3 gx-3  marginzero ">
                <div className="description__list__Items1 col-lg-6 col-12 mb-2">
                  <p></p>
                </div>

                <div className="description__list__Items1 col-lg-6 col-12 mb-2">
                  <p></p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
