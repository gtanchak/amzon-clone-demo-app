"use client";

import * as React from "react";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        showIndicators={false}
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="/banner_img_1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/banner_img_2.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/banner_img_3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
