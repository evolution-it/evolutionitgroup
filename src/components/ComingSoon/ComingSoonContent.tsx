"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

import comingBgImg from "/public/images/coming-soon.jpg";

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {

  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div
        className="coming-soon-area" 
        style={{ backgroundImage: `url(${comingBgImg.src})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Under Construction</h1>
                <p>
                  Our website is currently undergoing scheduled maintenance.
                  We Should be back shortly. Thank you for your patience.
                </p>

                <form>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter email address"
                    name="email"
                    required
                  />

                  <button type="submit" className="submit-btn">
                    Notify Me
                  </button>
                </form>

                <div id="timer">
                  <div id="days">
                    {countdown.days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {countdown.hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {countdown.minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {countdown.seconds} <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="social-list">
          <li className="list-heading">Follow us for an update:</li>
          <li>
            <a
              href="https://facebook.com/"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Facebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Instagram />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Countdown;
