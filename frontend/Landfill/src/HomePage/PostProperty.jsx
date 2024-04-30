import React from "react";
import "./PostProperty.css";

export const PostProperty = ({ padding }) => {
  return (
    <div className="post-property" style={{ padding }}>
      <div className="overlap-group">
        <p className="make-your-land">
          <span className="text-wrapper1">Make Your Land available for rent with us for </span>
          <span className="span">Free</span>
        </p>
      </div>
      <p className="div">Find people who will pay you for your land</p>
      <button className="post-your-land">
        <div className="text-wrapper-2">Post Your Land</div>
      </button>
      <div className="why-landfill-holder">
        <div className="text-wrapper-3">Why LandFill:</div>
        <div className="why-land-fill-points">
          <div className="point">
            <img className="green-tick" alt="Green tick" src="/green-tick.svg" />
            <p className="text-wrapper-4">Make’s your property reach the right audience</p>
          </div>
          <div className="point">
            <img className="green-tick" alt="Green tick" src="/green-tick.svg" />
            <p className="text-wrapper-4">Get your unused land to the work and earn from it</p>
          </div>
          <div className="point">
            <img className="green-tick" alt="Green tick" src="/green-tick.svg" />
            <p className="text-wrapper-4">Get the best advice and support regarding your land</p>
          </div>
          <div className="point">
            <img className="green-tick" alt="Green tick" src="/green-tick.svg" />
            <div className="text-wrapper-4">Find only genuine leads</div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default PostProperty;
