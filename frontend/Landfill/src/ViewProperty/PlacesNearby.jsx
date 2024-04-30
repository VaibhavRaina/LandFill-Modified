import React from "react";
import "./PlacesNearby.css";

const PlacesNearby = () => {
  return (
    <div className="places-nearby">
      <div className="places-nearby-frame">
        <div className="frame">
          <div className="div">
            <img className="img" alt="Layer" src="/pnm.svg" />
            <span className="text-wrapper">Places Nearby</span>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">View all</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="buttons">
            <div className="contact-text-and">
              <img className="img" alt="Frame" src="/pn.svg" />
              <div className="text-wrapper-3">Railway Station</div>
            </div>
          </div>
          <div className="buttons">
            <div className="contact-text-and-2">
              <img className="img" alt="Frame" src="/pn.svg" />
              <div className="text-wrapper-3">Airport</div>
            </div>
          </div>
          <div className="buttons">
            <div className="contact-text-and-2">
              <img className="img" alt="Frame" src="/pn.svg" />
              <div className="text-wrapper-3">Kempegowda Metro Station</div>
            </div>
          </div>
          <div className="buttons">
            <div className="contact-text-and-2">
              <img className="img" alt="Frame" src="/pn.svg" />
              <div className="text-wrapper-3">Sandal soap factory</div>
            </div>
          </div>
          <div className="buttons">
            <div className="contact-text-and-2">
              <img className="img" alt="Frame" src="/pn.svg" />
              <div className="text-wrapper-3">Orion mall</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesNearby;