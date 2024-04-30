import React from "react";
import "./IntroductionSection.css";
import { useState } from "react";
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
        <img className="line" alt="Line" src="/line-9.svg" />
        <div className="frame-5">
          <p className="p">Available for functions, weddings, parties, parking and others</p>
          <p style={{ marginBottom: "0px" }} className="text-wrapper-6">{props.items.plot} {props.items.street} {props.items.village} </p>
          <p className="text-wrapper-6">{props.items.city} {props.items.landmark} {props.items.state} {props.items.pincode} {props.items.country}</p>

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