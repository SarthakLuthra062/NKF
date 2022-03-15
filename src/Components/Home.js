import React from "react";
import About from "./About";
import Roadmap from "./Roadmap";
import Footer from "./Footer";
import Contactus from "./Contactus";
import Carousel from "./Slider.js";
import Scrolltop from "./ScrollTop";
import { Element } from "react-scroll";
import Navigation from "../Components/Navigation/Navigation";
import "./Home.css";
import { GetAssets,getmodlingMachine } from "../Services";

const Home = () => {
  const isUserLoggedIn = localStorage.getItem("userName") ? true : false;
  if (isUserLoggedIn) {
    GetAssets();
    // getmodlingMachine();
    console.log("call API");
  }
  return (
    <>
      <Navigation />
      <div className="home2">
        <div className="content">
          <Element className="section" name="about">
            <About />
          </Element>
          <Carousel />
          <Element className="section" name="Roadmap">
            <Roadmap />
          </Element>
          <Element className="section" name="contactus">
            <Contactus />
          </Element>

          <Scrolltop />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
