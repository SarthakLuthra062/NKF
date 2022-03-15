import React, { useState, useEffect } from "react";
import scrollup from "../assets/images/Icon ionic-ios-arrow-round-forward.svg";
const Scrolltop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <div
        className="scroll-up"
        onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none" }}
      >
        <img src={scrollup} alt="scroll-up" alt="scroll up" />
      </div>
    </div>
  );
};

export default Scrolltop;
