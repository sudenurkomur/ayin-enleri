import React from "react";
import "../styles/awards.css";

const TopKaizenCard = ({ topawardTitle, name, description, value }) => {
  return (
    <div className="top-kaizen-card">
      <img src="/images/trophy.png" alt="" className="trophy-icon-mini" />

      <h2 className="kaizen-title">{topawardTitle}</h2>
      
      <p className="kaizen-name">{name}</p>
      <p className="kaizen-desc">{description}</p>
      <p className="kaizen-value">{value}</p>
    </div>
  );
};

export default TopKaizenCard;
