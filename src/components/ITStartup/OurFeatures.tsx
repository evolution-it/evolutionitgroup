"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>About Our Services</h2>
            <div className="bar"></div>
            <p>
              At Evolution IT, we believe in harnessing the power of technology
              to transform businesses and enhance efficiency. Our team of
              experts is dedicated to delivering tailored solutions that address
              your unique challenges. Explore our comprehensive suite of
              services below
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Automated AI Testing Solutions
                  </Link>
                </h3>
                <p>
                  Quality Assurance is at the heart of every successful product.
                  Our automated AI testing solutions ensure robustness,
                  reliability, and seamless performance.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Telephone QA</Link>
                </h3>
                <p>
                  Our Telephone AI services help you maintain exceptional call
                  quality, improve customer interactions, and optimize call
                  center operations.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Agent Development
                  </Link>
                </h3>
                <p>
                  Our AI helps develop comprehensive training and development
                  programs to empower your agents with the skills and knowledge
                  needed to excel.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Call Center Solutions
                  </Link>
                </h3>
                <p>
                  Our call center AI solutions cover it all. From omnichannel
                  support to intelligent routing, we’ve got your call center
                  needs covered.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Customs Solutions
                  </Link>
                </h3>
                <p>
                  Navigating complex customs regulations? Look no further. We
                  offers tailored customs AI solutions to streamline processes,
                  reduce delays, and ensure compliance.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Healthcare Solutions
                  </Link>
                </h3>
                <p>
                  In the ever-evolving healthcare landscape, our AI solutions
                  enhance patient care, optimize workflows, and improve
                  outcomes. Trust us to be your healthcare technology partner.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Department of Defense Solutions
                  </Link>
                </h3>
                <p>
                  Security, resilience, and precision define our defense
                  solutions. We work closely with government agencies to
                  strengthen national security through cutting-edge AI
                  technology.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Bots for Anything
                  </Link>
                </h3>
                <p>
                  From chatbots to virtual assistants, our AI bots are versatile
                  problem-solvers. Whether it’s customer support, data analysis,
                  or process automation, we’ve got the bot for you.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">
                    Anomaly Detection
                  </Link>
                </h3>
                <p>
                  Early detection is the key to preventing critical issues. Our
                  anomaly detection algorithms analyze data patterns, alerting
                  you to deviations and potential risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
