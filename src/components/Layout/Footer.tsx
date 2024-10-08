"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo.png";
import map from "/public/images/map.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={157} height={20} />
                  </Link>
                </div>
                <p>
                  {`Don't miss out on the AI revolution. Contact us now to explore
                  how AI Operations can transform your business.`}
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Location</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    Fort Lauderdale, FL
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:info@evolutionitgroup.com">
                    info@evolutionitgroup.com
                    </a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:9549993015"> (954) 999-3015</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Evolution IT Group, LLC. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src={map} className="map" alt="map" width={910} height={443} />
      </footer>
    </>
  );
};

export default Footer;
