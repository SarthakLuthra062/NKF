import React, {useState} from "react";
//import img2 from "./images/factory2.png";
import model from "../../assets/images/model.png";
import molding from "../../assets/images/molding.png";
import molding3 from "../../assets/images/molding3.png";
import line from "../../assets/images/line.png";
import "../../Components/index.css";
import CountDownTimer from "../../Components/Timer/CountDownTimer";
import { LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
import BalanceBar from "../BalanceBar";
import {getmodlingMachine,storemodlingMachine,storeLeatherCutter,getLeatherCutter,storeSewingMachine,
  storeFactoryBuilding,storeCobex} from "../../Services/index"
const slideWidth = 30;
getmodlingMachine();
getLeatherCutter();
 console.log("storemodlingMachine"  ,storemodlingMachine);
//  console.log("storeSewingMachine"  ,storeSewingMachine);
//  console.log("storeFactoryBuilding"  ,storeFactoryBuilding);
// var img;
// const crowselImg = storemodlingMachineImg.map((img,imgindex)=>{
//       return img
// })
console.log(storeLeatherCutter ,"storeLeatherCutter");

// console.log(img ,"crowselImgesfgdffdgb");
const _items = [
  {
    player: {
      title: "Factory 1",
      image: model,
    },
  },
  {
    player: {
      title: "Factory 2",
      image: molding,
    },
  },
  {
    player: {
      title: "Factory 3",
      image: molding3,
    },
  },
];
const length = _items.length;
_items.push(..._items);

// const sleep = (ms = 0) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

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
let url=`https://ipfs.io/ipfs/`
const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const [img121 ,setImg121]=useState()
  const img= storemodlingMachine.filter((ele)=>{
    console.log(ele);
    if(ele.asset_id==="1099528364124"){
      setImg121(img);
    }
  })
  const hoursMinSecs = { hours: 1, minutes: 59, seconds: 59 };
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
                  <a href="#" class="custom-btn">
                    Claim
                  </a>{" "}
                  <a href="#" class="custom-btn">
                    1
                  </a>{" "}
                  <a href="#" class="custom-btn">
                    120/120
                  </a>{" "}
                  <a href="#" class="custom-btn">
                    Energize
                  </a>{" "}
                  <a href="#" class="custom-btn">
                    <CountDownTimer hoursMinSecs={hoursMinSecs} />
                  </a>{" "}
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <ul className="menu-image-molding">
                  <li>
                    <a href="">{item.player.title}</a>
                  </li>
                </ul>

                <img
                  src={item.player.image}
                  // src={`${url}`+`${img121}`}
                  id="navbutton headinimage"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-12 text-center">
                <ul class="multibtn">
                  <p className="inputbottomfiled">
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
const MoldingMachine = () => {
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

  // React.useEffect(() => {
  //   if (isTicking) sleep(300).then(() => setIsTicking(false));
  // }, [isTicking]);

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
                  <span>Molding Machines</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            {/* Slider */}

            <div className="factory_slider sweing_slider">
              <div className="row  marginzero">
                <div className="col-md-12 col-12 ">
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
                          {/* {items.map((pos, i) => (
                            <CarouselSlideItem
                              key={i}
                              idx={i}
                              pos={pos}
                              activeIdx={activeIdx}
                            />
                          ))} */}
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
              {" "}
              <img src={line} className="img-fluid ctn-image-line-2"></img>
            </div>
          </div>
        </div>
      </div>

      <BalanceBar />
    </div>
  );
};

export default MoldingMachine;
