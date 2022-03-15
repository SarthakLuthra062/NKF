import React from "react";
//import img2 from "./images/factory2.png";
import carl1 from "../../assets/images/carl1.png";
import carl2 from "../../assets/images/carl2.png";
import carl3 from "../../assets/images/carl3.png";
import line from "../../assets/images/line.png";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Factory 1",

      image: carl1,
    },
  },
  {
    player: {
      title: "Factory 2",

      image: carl2,
    },
  },
  {
    player: {
      title: "Factory 3",

      image: carl3,
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
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center mt-2">
                <ul className="menu-image-molding">
                  <li>
                    <a href="">{item.player.title}</a>
                  </li>
                </ul>

                <img
                  src={item.player.image}
                  id="navbutton headinimage"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-12 text-center">
                <ul class="multibtn">
                  <p>
                    <input type="radio" id="test3" name="radio-group" checked />
                    <label for="test3"></label>
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

const Cobbler = () => {
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
          <div className="col-md-6 heading-section mt-4 d-flex justify-content-center align-items-center">
            <ul className="menu-factory">
              <a href="#">
                <li>
                  <span>Cobbler</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            {/* Slider */}
            <div className="factory_slider sweing_slider">
              <div className="row px-sm-3 g-sm-3 marginzero mt-4">
                <div className="col-md-12 col-12 px-0 my-4">
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
          </div>

          <div className="row">
            <div className="col-md-4  "></div>
            <div
              className="col-md-4 mt-4 text-center d-flex justify-content-center align-items-center"
              id="datatable"
            >
              <ul class="multibtn w-25">
                {" "}
                <a href="#" class="custom-btn">
                  Build
                </a>
              </ul>
              <table className="table table-border">
                <tr>
                  <th>NKFE</th>
                  <th>NKFL</th>
                  <th>NKFT</th>
                  <th>NKFR</th>
                </tr>
                <tr>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                </tr>
              </table>
            </div>
            <div className="col-md-4"></div>

            <div className="col-md-12 text-center">
              {" "}
              <img src={line} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
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
export default Cobbler;
