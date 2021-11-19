import React from "react";

const PriceCards = ({ isMonthly }) => {
  return (
    <div className="cards-container">
      <article className="card basic">
        <h4 className="card-name">Basic</h4>
        <h2 className="card-price">
          <span className="dollar">$</span>
          {`${isMonthly ? "19.99" : "199.99"}`}
        </h2>
        <div className="features">
          <p className="feature first">500 GB Storage</p>
          <p className="feature">2 Users Allowed</p>
          <p className="feature">Send up to 3 GB</p>
        </div>
        <div className="learn-btn">Learn More</div>
      </article>

      <article className="card bold">
        <h4 className="card-name">Professional</h4>
        <h2 className="card-price">
          <span className="dollar">$</span>
          {`${isMonthly ? "24.99" : "249.99"}`}
        </h2>
        <div className="features">
          <p className="feature first">1 TB Storage</p>
          <p className="feature">5 Users Allowed</p>
          <p className="feature">Send up to 10 GB</p>
        </div>
        <div className="learn-btn">Learn More</div>
      </article>

      <article className="card master">
        <h4 className="card-name">Master</h4>
        <h2 className="card-price">
          <span className="dollar">$</span>
          {`${isMonthly ? "39.99" : "399.99"}`}
        </h2>
        <div className="features">
          <p className="feature first">2 TB Storage</p>
          <p className="feature">10 Users Allowed</p>
          <p className="feature">Send up to 20 GB</p>
        </div>
        <div className="learn-btn">Learn More</div>
      </article>
    </div>
  );
};

export default PriceCards;
