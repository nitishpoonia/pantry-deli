import React from "react";
import "./Card.css";

const Card = ({ title, photo, desc }) => {
  return (
    <div>
      <div className="card">
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
