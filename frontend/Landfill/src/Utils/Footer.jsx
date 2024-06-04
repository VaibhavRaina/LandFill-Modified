
import PropTypes from "prop-types";
import React from "react";
import { LogoPlaceholder } from "../LogoPlaceholder";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-frame-holder">
        <div className="logo-and-copyright">
          <LogoPlaceholder />
          <p className="div">© All the copyright is reserved and the trademarks are registered</p>
        </div>
        <div className="link-section-frame">
          <div className="link-section-frame-2">
            <div className={`text-wrapper-2 `}>LandFill</div>
            <div className="div-2">
              <div className={`text-wrapper-3 verride}`}>Our Services</div>
              <div className={`text-wrapper-4 `}>Post Your Property</div>
              <div className={`text-wrapper-4 `}>Our Services</div>
              <div className={`text-wrapper-4 `}>Our Services</div>
              <div className={`text-wrapper-4 `}>Our Services</div>
              <div className={`text-wrapper-4 `}>Our Services</div>
            </div>
          </div>
          <div className="link-section-frame-3">
            <div className={`text-wrapper-2 `}>LandFill</div>
            <div className="div-2">
              <div className={`text-wrapper-3 `}>Our Services</div>
              <div className={`text-wrapper-4 `}>Post Your Property</div>
              <div className={`text-wrapper-4`}>Our Services</div>
              <div className={`text-wrapper-4}`}>Our Services</div>
              <div className={`text-wrapper-4}`}>Our Services</div>
              <div className={`text-wrapper-4}`}>Our Services</div>
            </div>
          </div>
          <div className="link-section-frame-4">
            <div className={`text-wrapper-2 `}>LandFill</div>
            <div className="div-2">
              <div className={`text-wrapper-3`}>Our Services</div>
              <div className={`text-wrapper-4`}>Post Your Property</div>
              <div className={`text-wrapper-4`}>Our Services</div>
              <div className={`text-wrapper-4`}>Our Services</div>
              <div className={`text-wrapper-4`}>Our Services</div>
              <div className={`text-wrapper-4`}>Our Services</div>
            </div>
          </div>
          <div className="link-section-frame-5">
            <div className="div-3">
              <div className={`text-wrapper-2`}>Contact Us</div>
              <div className="div-2">
                <div className="text-wrapper-5">Contact No. :9328506454</div>
                <div className="text-wrapper-6">Email - manusmriti31@gmail.com</div>
              </div>
            </div>
            <div className="div-3">
              <div className={`text-wrapper-2`}>Connect with us</div>
              <img className="social-media-logos" alt="Social media logos" src={socialMediaLogos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
