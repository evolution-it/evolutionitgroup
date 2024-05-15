"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "/public/images/evolution-banner.png";
import iotShape1 from "/public/images/iot-shape1.png";

const MainBanner = () => {
  return (
    <>
      <div className="iot-main-banner">
        <div className="container">
          <div className="iot-banner-content">
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Evolved AI Solutions
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Leverage AI driven analytics to gain actionable insights from your
              data. Make informed decisions faster than ever before.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Get Started
            </Link>
          </div>

          <div className="iot-banner-image">
            <Image
              src={bannerImg}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt="image"
              width={840}
              height={445}
            />

            <Image
              src={iotShape1}
              className="animate__animated animate__zoomIn"
              alt="image"
              width={247}
              height={247}
            />
          </div>

          <div className="animate-border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
