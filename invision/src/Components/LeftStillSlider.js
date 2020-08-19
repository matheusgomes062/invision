import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../Assets/imgs/Data.png";

const LeftStillSlider = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="grid-6 carouselWrapper centerColumn"
    >
      <div>
        <img alt="" src={img1} style={{ backgroundColor: "#a9c5ba" }} />
      </div>
      <div>
        <img alt="" src={img1} style={{ backgroundColor: "#a9c5ba" }} />
      </div>
      <div>
        <img alt="" src={img1} style={{ backgroundColor: "#a9c5ba" }} />
      </div>
    </Carousel>
  );
};

export default LeftStillSlider;
