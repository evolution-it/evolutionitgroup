// "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import man from "/public/images/banner-image/man.png";
import code from "/public/images/banner-image/code.png";
import carpet from "/public/images/banner-image/carpet.png";
import bin from "/public/images/banner-image/bin.png";
import book from "/public/images/banner-image/book.png";
import dekstop from "/public/images/banner-image/dekstop.png";
import dot from "/public/images/banner-image/dot.png";
import flowerTopBig from "/public/images/banner-image/flower-top-big.png";
import flowerTop from "/public/images/banner-image/flower-top.png";
import keyboard from "/public/images/banner-image/keyboard.png";
import pen from "/public/images/banner-image/pen.png";
import table from "/public/images/banner-image/table.png";
import teaCup from "/public/images/banner-image/tea-cup.png";
import headphone from "/public/images/banner-image/headphone.png";
import mainPic from "/public/images/banner-image/main-pic.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Custom AI Solutions
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Leverage AI driven analytics to gain actionable insights
                      from your data. Make informed decisions faster than ever
                      before.
                    </p>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
