import React, { useState } from "react";
import "./TagKeys.css";

export const TagKeys = () => {

  const [buttonState, setButtonState] = useState("default");


  const handleButtonClick = (newState) => {

    setButtonState(newState);

    // Perform any other actions here, such as navigation or API calls
  };

  return (
    <>
      <div className="tag-keys">
        <div className="frame">
          <button className="buttons-2" ><b>OverView</b></button>
          <button className="buttons-2" ><b>Owner Details</b></button>
          <button className="buttons-2" ><b>Recommendations</b></button>
          <button className="buttons-2" ><b>Articles</b></button>
        </div>
        <div style={{ width: "1395px" }} className="line"></div>
        {/* <img className="line" alt="Line" src="/line-10.svg" /> */}
      </div>
    </>
  );
};

export default TagKeys;
