import React from "react";
import "./IntroductionSection.css";

export const IntroductionSection = (props) => {
  return (
    <div className="introduction-section">
      <div className="frame">
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-2">₹</div>
              <div className="text-wrapper-3">{props.items.price}</div>
            </div>
            <div className="text-wrapper-4">@ per night</div>
          </div>
          <div className="text-wrapper-5">Negotiable for longer bookings</div>
        </div>
        <img className="line" alt="Line" src="/img/line-9.svg" />
        <div className="frame-5">
          <p className="p">Available for functions, weddings, parties, parking and others</p>
          <p className="text-wrapper-6">{props.items.location}</p>

        </div>
      </div>
      <div className="frame-6">
        <button className="contact"><b>Contact Owner</b><sup>Free</sup></button>
        <button className="shortlist">Shortlist</button>
      </div>
    </div>
  );
};

export default IntroductionSection;