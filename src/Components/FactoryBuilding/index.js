import React, { useEffect, useState } from "react";
import "../../Components/index.css";
import img1 from "../../assets/images/factory1.png";
import img2 from "../../assets/images/factory2.png";
import img3 from "../../assets/images/factory3.png";
import molding from "../../assets/images/molding.png";
import sewing2 from "../../assets/images/sewing2.png";
import cutter2 from "../../assets/images/cutter2.png";
import previewImage from "../../assets/images/previewImage.png";
// import factorybtn from "./images/factorybtn.png";
import line from "../../assets/images/line.png";
import { Link } from "react-router-dom";
// import Factorytwo from './Factorytwo';
// import Factorythree from './Factorythree';
import { BottomInnerNavigation, LeftInnerNavigation, RightInnerNavigation } from "../InnerNavigation";
import BalanceBar from "../BalanceBar";
import axios from "axios";
import {GetTemplatesById,arrdropdown} from "../../Services/index"
import { useSelector } from 'react-redux'


GetTemplatesById();
GetTemplatesById();
// let sum =StoreDataTemplateById
//  console.log("arrdropdown" ,arrdropdown);
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
          <div className="row">
            <div className="col-md-4">
              <ul class="multibtn">
                <a href="#" class="custom-btn">
                  Claim
                </a>
                <a href="#" class="custom-btn">
                  1
                </a>
                <a href="#" class="custom-btn">
                  120/120
                </a>
                <a href="#" class="custom-btn">
                  Energize
                </a>
                <a href="#" class="custom-btn">
                  01:59:59
                </a>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-2">
              {" "}
              <img
                src={item.player.image}
                id="navbutton headinimage"
                className="img-fluid"
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
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Factory = () => {
  const url = "../../assets/images/previewImage.png";
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;
  const [dropList1, setDropList1] = React.useState(previewImage);
  const [dropList2, setDropList2] = React.useState(previewImage);
  const [dropList3, setDropList3] = React.useState(previewImage);
  const [factoryData, setFactoryData] = useState([]);
 
  const state1 = useSelector(state => state)
  
  // console.log('====>', state1)
  const propertyNames = Object.values(state1);
  console.log(propertyNames, "propertyNames");
  const [abc ,setAbc]= useState(propertyNames);
  
  console.log(abc, "abcabcabc");
 
  useEffect(() => {
    GetAssets();
  }, []);

  const GetAssets = (colc, rates) => {
    let results = [];
    axios
      .get(
        `https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=nkftestnetio&page=1&limit=100&order=desc&sort=asset_id`
      )
      // https://test.wax.api.atomicassets.io/atomicassets/v1/templates/nkftestnetio/337616
      // .then((response) => (response.ok ? response : Promise.reject(response)))
      .then((response) => {
        // console.log("Response", response)
        if (response.data.success === true) {
          console.log("Response", response.data.data);
          setFactoryData(response);
        } else {
          console.log("Error");
        }
      });
  };
  console.log("factory data =========", factoryData);

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

  const setDropListImg = (value, setDropList) => {
    switch (value) {
      case "fone":
        setDropList(img1);
        break;
      case "ftwo":
        setDropList(img2);
        break;
      case "fthree":
        setDropList(img3);
        break;

      default:
        setDropList(previewImage);
    }
  };

  const factorySelectChanger1 = (e) => {
    // setDropListImg(e.target.value, setDropList1);
    setDropList1(`https://ipfs.io/ipfs/`+e.target.value );
    // console.log(dropList1);
  };
  const factorySelectChanger2 = (e) => {
    // setDropListImg(e.target.value, setDropList2);
     setDropList2(`https://ipfs.io/ipfs/`+e.target.value);
    // console.log(dropList2);
  };
  const factorySelectChanger3 = (e) => {
    // setDropListImg(e.target.value, setDropList3);
    setDropList3(`https://ipfs.io/ipfs/`+e.target.value);
    // console.log(dropList3);
  };

  return (
    <div className="backgroundbg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <LeftInnerNavigation />
          </div>
          <div className="col-md-6 text-center heading-section d-flex justify-content-center align-items-center">
            <ul className="menu-factory">
              <Link to="/factories">
                <li>
                  <span>Factories</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-md-3 mt-4 text-left p-0 m-0">
            <RightInnerNavigation />
          </div>
        </div>
        {/* Slider */}
        <div className="container">
          <div className="row">
            <div className="col-4 text-center ctm-height">
              <Link to="/Factoryone">
                {" "}
                <img className="navbutton img-fluid" style={{}} src={dropList1} />
              </Link>
              <ul className="factory-button">
                <Link to="/Factoryone">
                  <li>
                    <span>Factory 1</span>
                  </li>
                </Link>
              </ul>
              <div className="build_select my-0 ">
                <select
                  id="cars"
                  name="cars"
                  className="form-select"
                  onChange={factorySelectChanger1}
                >
                     <option value="default">None</option>
                {propertyNames.map((e)=>{
                    return(
                      <option value={e.img}>{e.rarity}</option>
                    )
                })}
               
                  {/* <option value="fone">Factory One</option>
                  <option value="ftwo">Factory Two</option>
                  <option value="fthree">Factory Three</option> */}
                </select>
              </div>
            </div>
            <div className="col-4  text-center ctm-height">
              <div className="build_select my-0 ">
                {/* <Link to="/Factorytwo"> */}
                  <img className="navbutton img-fluid" src={dropList2} />
                {/* </Link> */}
                <ul className="factory-button ">
                  <Link to="/Factorytwo">
                    <li className="mb-0">
                      <span>Factory 2</span>
                    </li>
                  </Link>
                </ul>
                <select
                  id="cars"
                  name="cars"
                  className="form-select"
                  onChange={factorySelectChanger2}
                >
                 <option value="default">None</option>
                {propertyNames.map((e)=>{
                  console.log(e.img , "img");
                    return(
                      <option value={e.img}>{e.rarity}</option>
                    )
                })}
                </select>
              </div>
            </div>
            <div className="col-4  text-center ctm-height">
              <div className="build_select my-0 ">
                <Link to="/Factorythree">
                  <img className="navbutton img-fluid" src={dropList3} />
                </Link>
                <ul className="factory-button">
                  <Link to="/Factorythree">
                    <li>
                      <span>Factory 3</span>
                    </li>
                  </Link>
                </ul>
                <select
                  id="cars"
                  name="cars"
                  className="form-select"
                  onChange={factorySelectChanger3}
                >
                <option value="default">None</option>
                {propertyNames.map((e)=>{
                    return(
                      <option value={e.img}>{e.rarity}</option>
                    )
                })}
                </select>
              </div>
            </div>
            <div className="col-md-12  text-center">
              <BottomInnerNavigation/>
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
export default Factory;
