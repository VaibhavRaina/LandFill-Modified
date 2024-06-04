import React from "react";
import "./OwnerDetails.css";
import EnquiryForm from "./EnquiryForm";

const OwnerDetails = () => {
  return (
    <>
      <div className="owner-details">
        <div className="owner">
          <div className="text-wrapper-3">Owner Details</div>
          <div className="owner-photo-and">
            <img className="rectangle" alt="Rectangle" src="/rectangle-9.png" />
            <div className="name-and-ownership">
              <div className="text-wrapper-4">Deepak Jakatra</div>
              <div className="text-wrapper-5">Owner</div>
            </div>
            <div className="no-of-properties-and">
              <div className="no-of-properties">No. of properties listed:&nbsp;&nbsp;&nbsp;&nbsp;4</div>
              <p className="localities-north">
                Localities:&nbsp;&nbsp;&nbsp;&nbsp;North Banglore, matikere, whitefield, kormangla
              </p>
            </div>

          </div>

        </div>
        <div className="EnquiryForm"> <EnquiryForm /></div>
      </div>

    </>
  );
};

export default OwnerDetails;