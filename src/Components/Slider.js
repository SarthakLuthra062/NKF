import React from "react";
//import { Link } from "react-router-dom";
import factory from "../assets/images/FactoryBuilding.png";
import moulding from "../assets/images/MoldingMachine.png";
//import sweing from "../assets/images/SewingMachine.png";
import cardframe from "../assets/images/cardframe.png";
import exil from "../assets/images/exil.png";
import carl from "../assets/images/carl.png";
import moldingLax from "../assets/images/moldingLax.png";
import moldingRubberta from "../assets/images/moldingRubberta.png";
import leather from "../assets/images/leather.png";
import Sweaing from "../assets/images/SewingMachine.png";
const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Factory Building",
      desc: "The factory building will be your source of your energy (NKFE) that will power all your machines in game.",
      image: factory,
      url: "#factory-buildings",
    },
  },
  {
    player: {
      title: "Molding Machine",
      desc: " The molding machine will produce the needed rubber (NFKR) for your kicks soles, and other colab NFT’s",
      image: moulding,
      url: "#machines",
    },
  },
  {
    player: {
      title: "Sewing Machine",
      desc: "The sewing machine will produce the needed textile (NKFT) for your kicks and other colab NFT’s",
      image: Sweaing,
      url: "#machines",
    },
  },
  {
    player: {
      title: "Leather Cutter",
      desc: "The Leather Cutter will produce the needed leather (NKFL) for your kicks and other colab NFT",
      image: leather,
      url: "#machines",
    },
  },
  {
    player: {
      title: "Rubberta Rubber",
      desc: "Rubberta is your skilled rubber laborer, who will boost the  production of your molding machine based on her rarity, without using additional energy.",
      image: moldingRubberta,
      url: "#machines",
    },
  },
  {
    player: {
      title: "Exil Textile",
      desc: "Exil is your skilled textile laborer, who will boost the  production of your sewing machine based on her rarity, without using additional energy",
      image: exil,
      url: "#laborers",
    },
  },
  {
    player: {
      title: "Carl Bentley",
      desc: "Carl Bentley is your cobbler. He will boost the  production of your factory building based on his rarity, without using additional energy.",
      image: carl,
      url: "#laborers",
    },
  },
  {
    player: {
      title: "Lex Leather",
      desc: "Lex is your skilled leather laborer, who will boost the production of your leather cutter based on his rarity, without using additional energy",
      image: moldingLax,
      url: "#laborers",
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
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }
  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="card card-nft text-center">
        <img src={cardframe} class="card-img" alt="card-background" />
        <div className="carousel__slide-item-img-link">
        </div>
        <div className="carousel-slide-item__body">
          <div className="card-img mt-3">
            <img
              src={item.player.image}
              alt={item.player.title}
              className="img-fluid"
            />
          </div>
          <a
            href={`https://niftykicksio.gitbook.io/nifty-kicks-factory/game-nfts${item.player.url}`}
            target="_blank"
            class="btn btn-nft my-3"
          >
            {item.player.title}
          </a>
          <p class="card-text text-center px-3"> {item.player.desc}</p>
        </div>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
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
    <div className="nft__container">
      <div className="divider">
        <p className="container__title horizontal-line">NFT's</p>
      </div>
      <div className="nft_slider slider_conatiner">
        <div className="row px-sm-3 g-sm-3 marginzero">
          <div className="col-md-12 col-12 px-0">
            <div className="carousel__wrap">
              <div className="carousel__inner">
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
                <div className="carousel__dots">
                  {items.slice(0, length).map((pos, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      className={i === activeIdx ? "dot active" : "dot"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
