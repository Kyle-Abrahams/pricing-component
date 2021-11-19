import React from "react";

const PriceToggle = ({ setIsMonthly, isMonthly }) => {
  const translateString = isMonthly ? "0" : "-17";
  return (
    <div className="toggle">
      <h3 className="toggle-heading">Our Pricing</h3>
      <div className="toggle-container">
        <p>Annually</p>
        <div className="toggle-btn" onClick={() => setIsMonthly(!isMonthly)}>
          <div
            className="circle"
            style={{ transform: `translateX(${translateString}px)` }}
          ></div>
        </div>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default PriceToggle;
