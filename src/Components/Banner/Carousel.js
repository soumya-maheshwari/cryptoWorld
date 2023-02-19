// // import axios from "axios";
// // import React from "react";
// // import { TrendingCoins } from "../../Config/Api";
// // import { CryptoState } from "../../ContextApi";
// // import { useState, useEffect } from "react";

// // import AliceCarousel from "react-alice-carousel";
// // import { Link } from "react-router-dom";

// // const Carousel = () => {
// // const [trending, setTrending] = useState([]);
// // const { currency, symbol } = CryptoState();
// // const getTrendingCoins = async () => {
// //   const { coinData } = await axios.get(TrendingCoins(currency));
// //   // setTrendinCoin to coinData
// //   setTrending(coinData);
// // };
// // //   console.log(trendingCoin);
// // //   console.log(coinData);
// // //call the function in useEffect
// // useEffect(() => {
// //   getTrendingCoins();
// // }, [currency]);
// // // const items = trendingCoin.map((coin) => {
// // //   // return <Link></Link>;
// // //   return <>hello</>;
// // // });
// // // const items = "hello";
// // const items = trending.map((coin) => {
// //   let profit = coin.price_change_percentage_24h >= 0;
// //   return (
// //     <Link to={`/coins/${coin.id}`}>
// //       <img
// //         src={coin.image}
// //         alt={coin.name}
// //         height="80"
// //         style={{ marginBottom: 10 }}
// //       />
// //       <span>
// //         {coin.symbol}
// //         &nbsp;
// //         <span
// //           style={{
// //             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
// //             fontWeight: 500,
// //           }}
// //         >
// //           {profit && "+"}
// //           {coin.price_change_percentage_24h.toFixed(2)}%
// //         </span>
// //       </span>
// //       <span style={{ fontSize: 22, fontWeight: 500 }}>{symbol}</span>
// //     </Link>
// //   );
// // });
// // const responsive = {
// //   0: {
// //     items: 2,
// //   },
// //   512: {
// //     items: 4,
// //   },
// // };
// // return (
// //   <>
// //     {/* <AliceCarousel
// //       mouseTracking
// //       infinite
// //       autoPlayInterval={1000}
// //       animationDuration={2000}
// //       responsive
// //       disableDotsControls
// //     /> */}
// //     <AliceCarousel
// //       mouseTracking
// //       infinite
// //       disableDotsControls
// //       responsive={responsive}
// //       autoPlay
// //       item={items}
// //     />
// //   </>
// // );
// // };

// // export default Carousel;

// import axios from "axios";
// import React from "react";
// import { TrendingCoins } from "../../Config/Api";
// import { CryptoState } from "../../ContextApi";
// import { useState, useEffect } from "react";

// import AliceCarousel from "react-alice-carousel";
// import { Link } from "react-router-dom";
// const Carousel = () => {
//   const [trendingCoin, setTrendingCoin] = useState([]);
//   const { currency } = CryptoState();

//   const getTrendingCoins = async () => {
//     const { coinData } = await axios.get(TrendingCoins(currency));

//     // setTrendinCoin to coinData
//     setTrendingCoin(coinData);
//   };
//   //   console.log(trendingCoin);
//   //   console.log(coinData);

//   //call the function in useEffect
//   useEffect(() => {
//     getTrendingCoins();
//   }, [currency]);

//   //   const items = TrendingCoins.map((coin) => {
//   //     return (
//   //       <Link to={`/coins/${coin.id}`}>
//   //         <img src={coin?.image} alt={coin.name} height="80" />
//   //       </Link>
//   //     );
//   //   });

//   const responsive = {
//     0: {
//       items: 2,
//     },
//     512: {
//       items: 4,
//     },
//   };
//   return (
//     <>
//       {/* <AliceCarousel
//         mouseTracking
//         infinite
//         autoPlayInterval={1000}
//         animationDuration={2000}
//         responsive
//         disableDotsControls
//       /> */}
//       <AliceCarousel
//         mouseTracking
//         infinite
//         autoPlayInterval={1000}
//         animationDuration={2000}
//         disableDotsControls
//         responsive={responsive}
//         autoPlay
//         // item={items}
//       />
//     </>
//   );
// };

// export default Carousel;

import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../Config/Api";
import { CryptoState } from "../../ContextApi";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const { trending, setTrending } = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);

    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  // const items = trending.map((coin) => {
  //   let profit = coin.price_change_percentage_24h >= 0;

  //   return (
  //     <Link
  //       // className={classes.carouselItem}
  //       to={`/coins/${coin.id}`}
  //     >
  //       <img
  //         src={coin.image}
  //         alt={coin.name}
  //         height="80"
  //         style={{ marginBottom: 10 }}
  //       />
  //       <span>
  //         {coin.symbol}
  //         &nbsp;
  //         <span
  //           style={{
  //             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
  //             fontWeight: 500,
  //           }}
  //         >
  //           {profit && "+"}
  //           {coin.price_change_percentage_24h.toFixed(2)}%
  //         </span>
  //       </span>
  //       <span style={{ fontSize: 22, fontWeight: 500 }}>{symbol}</span>
  //     </Link>
  //   );
  // });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={2000}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
