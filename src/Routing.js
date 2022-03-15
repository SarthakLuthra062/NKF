import React from "react";
import Home from "./Components/Home";
// import About from './Components/About';
// import Roadmap from './Components/Roadmap';
// import Contactus from './Components/Contactus';
// import Whitepaper from './Components/Whitepaper';
import Error from "./Components/Error";
import FactoryBuilding from "./Components/FactoryBuilding";
import MoldingMachine from "./Components/MoldingMachine";
import SewingMachine from "./Components/SewingMachine";
import LeatherCutter from "./Components/LeatherCutter";
import Build from "./Components/Build";
import { Routes, Route } from "react-router-dom";
import Factoryone from "./Components/FactoryBuilding/Factoryone";
import Bank from "./Components/Bank/Bank";
import Marketplace from "./Components/MarketPlace/Marketplace";
import Cobbler from "./Components/Cobbler/Cobbler";
import Map from "./Components/Map/index";
import Staked from "./Components/Staked";
import Factorytwo from "./Components/FactoryBuilding/Factorytwo";
import Factorythree from "./Components/FactoryBuilding/Factorythree";
import Sneakervault from "./Components/SneakerVault";
const Routing = () => {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        {/* <Route path="/Roadmap" element={<Roadmap/>}></Route> */}
        {/* <Route path="/Contactus" element={<Contactus/>}></Route> */}
        {/* <Route path="/Whitepaper" element={<Whitepaper/>}></Route> */}
        <Route path="/factory-building" element={<FactoryBuilding />}></Route>
        <Route path="/molding-machine" element={<MoldingMachine />}></Route>
        <Route path="/sewing-machine" element={<SewingMachine />}></Route>
        <Route path="/leather-cutter" element={<LeatherCutter />}></Route>
        <Route path="/build" element={<Build />}></Route>
        <Route path="/factoryone" element={<Factoryone />} />
        <Route path="/factorytwo" element={<Factorytwo />} />
        <Route path="/factorythree" element={<Factorythree />} />
        <Route path="/Bank" element={<Bank />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/cobbler" element={<Cobbler />} />
        <Route path="/map" element={<Map />} />
        <Route path="/stack" element={<Staked />} />
        <Route path="/unstack" element={<Staked />} />
        <Route path="/sneakervault" element={<Sneakervault />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
