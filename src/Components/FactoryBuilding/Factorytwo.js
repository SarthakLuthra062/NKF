import React from "react";
import img2 from "../../assets/images/factory2.png";
import molding from "../../assets/images/molding.png";
import sewing2 from "../../assets/images/sewing2.png";
import cutter2 from "../../assets/images/cutter2.png";
import line from "../../assets/images/line.png";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
import { Link } from "react-router-dom";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Factory 1",
      image: molding,
    },
  },
  {
    player: {
      title: "Factory 2",
      image: sewing2,
    },
  },
  {
    player: {
      title: "Factory 3",
      image: cutter2,
    },
  },
];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(0)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className=" text-center">
        <div className="carousel__slide-item-img-link "></div>
        <div className="carousel-slide-item__body">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-4">
                <ul class="multibtn">
                  {" "}
                  <a href="#" class="custom-btn w-75">
                    Claim
                  </a>{" "}
                  <a href="#" class="custom-btn w-75">
                    1
                  </a>{" "}
                  <a href="#" class="custom-btn w-75">
                    120/120
                  </a>{" "}
                  <a href="#" class="custom-btn w-75">
                    Energize
                  </a>{" "}
                  <a href="#" class="custom-btn w-75">
                    01:59:59
                  </a>{" "}
                </ul>
              </div>
              <div className="col-md-6 text-center mt-2">
                {" "}
                <img
                  src={item.player.image}
                  id="navbutton headinimage"
                  className="img-fluid ctm-height custom-heading-image"
                ></img>
              </div>
              <div className="col-md-2 text-center">
                <ul class="multibtn">
                  <p>
                    <input type="radio" id="test1" name="radio-group" checked />
                    <label for="test1"></label>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Factorytwo = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="backgroundbg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <LeftInnerNavigation />
          </div>
          <div className='col-md-6 heading-section mt-4 pt-4"'>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <ul className="menu-factory ">
                  <a href="#">
                    <li>
                      <span>Factory 2</span>
                    </li>
                  </a>
                </ul>
              </div>
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-md-4">
                    <ul class="multibtn">
                      {" "}
                      <a href="#" class="custom-btn w-75">
                        Claim
                      </a>{" "}
                      <a href="#" class="custom-btn w-75">
                        Energize All
                      </a>{" "}
                      <a href="#" class="custom-btn w-75">
                        Claim All
                      </a>{" "}
                    </ul>
                  </div>
                  <div className="col-md-6 text-center mt-2  ctm-height custom-heading-image">
                    {" "}
                    <img
                      src={img2}
                      id="navbutton headinimage"
                      className="img-fluid"
                    ></img>
                    <ul class="multibtn">
                      {" "}
                      <a href="#" class="custom-btn">
                        01:59:59
                      </a>{" "}
                    </ul>
                  </div>
                  <div className="col-md-2 text-center">
                    <ul class="multibtn">
                      <p>
                        <input
                          type="radio"
                          id="test1"
                          name="radio-group"
                          checked
                        />
                        <label for="test1"></label>
                      </p>
                      <p>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test2"></label>
                      </p>
                      <p>
                        <input type="radio" id="test3" name="radio-group" />
                        <label for="test3"></label>
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        {/* SLider Section */}
        <div className="container-fluid">
          <div className="row">
            <div className="factory_slider">
              <div className="row  marginzero">
                <div className="col-md-12 col-12">
                  <div className="carousel__wrap">
                    <div className="carousel__inner">
                      <button
                        className="carousel__btn carousel__btn--prev"
                        onClick={() => prevClick()}
                      >
                        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                      </button>
                      <div className="carousel__container">
                        <ul className="carousel__slide-list">
                          {items.map((pos, i) => (
                            <CarouselSlideItem
                              key={i}
                              idx={i}
                              pos={pos}
                              activeIdx={activeIdx}
                            />
                          ))}
                        </ul>
                      </div>
                      <button
                        className="carousel__btn carousel__btn--next"
                        onClick={() => nextClick()}
                      >
                        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              {/* <img
                src={line}
                className="img-fluid img-fluid ctn-image-line"
              ></img> */}
              <Link to="/factory-building">
                <img
                  src={line}
                  className="img-fluid img-fluid ctn-image-line"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container-fluid">
        <div className="row ctm-menu-images">
          <div className="col-md-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Factorytwo;
