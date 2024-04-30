import React from "react";
import { useState } from "react";
import "./AboutProperty.css";

const AboutProperty = (props) => {
  const [read, isRead] = useState(false);
  const readMore = function () {
    isRead(!read);
  }
  return (
    <>
      <div className="about-property">
        <div className="frame-2">
          <span style={{ width: "1395px" }} className="line"></span>
          <div className="text-wrapper-2">About Property</div>
          <div className="address">
            <div className="text-wrapper-3">Address :</div>
            <p className="p">{props.items.plot} {props.items.street} {props.items.village}  {props.items.city} {props.items.landmark} {props.items.state} {props.items.pincode} {props.items.country}</p>
          </div>
          <div className="frame">
            <p className="about-the-property">
              {read ? props.items.description : props.items.description.slice(0, 500)}...
            </p>
          </div>
        </div>
      </div>
      <div onClick={readMore} className="text-wrapper">{read ? "Read Less" : "Read More"} &gt;&gt;</div>
      <div style={{ width: "1395px" }} className="line2"></div>
    </>

  );
};

export default AboutProperty;
