import React,{useState, createContext, useContext} from "react";
import { Link } from "react-router-dom";
import { FilterStaked, GetBalance } from "../../Services";
import line from "../../assets/images/line.png";
import {GetTemplatesById,arrdropdown} from "../../Services/index"
import insertDData from '../../Services/actionCreater/actionCreater'
import { useDispatch } from 'react-redux'
export const UserContext = createContext();

export const LeftInnerNavigation = () => {

  const dispatch = useDispatch()
  return (

    <ul className="menu">
      <li>
        <a
          onClick={() => {
            dispatch(insertDData(arrdropdown))
            // GetTemplatesById(337615);
            // GetTemplatesById(337616);
            // GetTemplatesById(337617);
          }}
          //  to="/stack"
        >
          <span>Stake</span>
        </a>
      </li>
      <li>
        <Link to="/unstack">
          <span>Unstake</span>
        </Link>
      </li>
      <li>
        <a
          href="https://neftyblocks.com/marketplace/listing?page=1&collection_name=niftykicksio"
          target="_blank"
        >
          <span>NeftyBlocks</span>
        </a>
      </li>
      <li>
        <Link to="/build">
          <span>Build</span>
        </Link>
      </li>
    </ul>
  )
};

export const RightInnerNavigation = () => (
  <ul className="menu">
    <li>
      <Link
        to="/bank"
        onClick={() => {
          GetBalance();
        }}
      >
        <span>Bank</span>
      </Link>
    </li>
    <li>
      <Link to="/marketplace">
        <span>Marketplace</span>
      </Link>
    </li>
    <li>
      <a
        href="https://wax.atomichub.io/market?collection_name=niftykicksio&order=desc&sort=created&symbol=WAX"
        target="_blank"
      >
        <span>Automic Hub</span>
      </a>
    </li>
    <li>
      <Link to="/map">
        <span>Map</span>
      </Link>
    </li>
  </ul>
);

export const BottomInnerNavigation = () => (
  <Link to="/factory-building">
    {" "}
    <img src={line} className="img-fluid"></img>
  </Link>
);
