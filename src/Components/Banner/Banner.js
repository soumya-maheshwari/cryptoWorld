import React from "react";
import styles from "./Banner.css";
import Carousel from "./Carousel";
function Banner() {
  return (
    <>
      <div className="banner">
        <h1 className="banner-heading">CRYPTO WORLD</h1>
        <p className="banner-para">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        <Carousel />
      </div>
    </>
  );
}

export default Banner;
