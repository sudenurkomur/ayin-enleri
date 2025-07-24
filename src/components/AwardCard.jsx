import React from "react";
import "../styles/awards.css";

const AwardCard = ({ title, name, className }) => {
  return (
    <div className={`award-card ${className}`}>
            <img src="/images/trophy.png" alt="" className="trophy-icon-mini" />

      <h3 className="award-title">{title}</h3>
      <p className="award-name">{name}</p>
    </div>
  );
};



export default AwardCard;
