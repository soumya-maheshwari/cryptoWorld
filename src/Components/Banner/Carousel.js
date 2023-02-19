import axios from "axios";
import React from "react";
import { TrendingCoins } from "../../Config/Api";
import { CryptoState } from "../../ContextApi";
import { useState, useEffect } from "react";

import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const Carousel = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const { currency } = CryptoState();

  const getTrendingCoins = async () => {
    const { coinData } = await axios.get(TrendingCoins(currency));

    // setTrendinCoin to coinData
    setTrendingCoin(coinData);
  };
  //   console.log(trendingCoin);
  //   console.log(coinData);

  //call the function in useEffect
  useEffect(() => {
    getTrendingCoins();
  }, [currency]);

  //   const items = TrendingCoins.map((coin) => {
  //     return (
  //       <Link to={`/coins/${coin.id}`}>
  //         <img src={coin?.image} alt={coin.name} height="80" />
  //       </Link>
  //     );
  //   });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <>
      {/* <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={2000}
        responsive
        disableDotsControls
      /> */}
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={2000}
        disableDotsControls
        responsive={responsive}
        autoPlay
        // item={items}
      />
    </>
  );
};

export default Carousel;
