import React from "react";
import Card from "../components/Card";
import imgPhoto from "../assets/login-cup.jpeg";
import "./HomePage.css";

const HomePage = () => {
  const cardData = [
    {
      photo: imgPhoto,
      title: "Coffee",
      desc: "A rich and aromatic beverage made from roasted coffee beans.",
    },
    {
      photo: imgPhoto,
      title: "Black Coffee",
      desc: "Pure and bold coffee brewed without any additives.",
    },
    {
      photo: imgPhoto,
      title: "Strong Coffee",
      desc: "An intense and potent coffee with a higher caffeine kick.",
    },
    {
      photo: imgPhoto,
      title: "Tea",
      desc: "A versatile beverage made by steeping leaves, herbs, or spices.",
    },
    {
      photo: imgPhoto,
      title: "Strong Tea",
      desc: "A bold and concentrated infusion with a richer flavor.",
    },
    {
      photo: imgPhoto,
      title: "Water",
      desc: "A pure and refreshing essential drink for hydration.",
    },
  ];

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Pantry Beverage Delivery</h1>
        <p>Delivering your favorite beverages right to your desk</p>
      </header>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            photo={card.photo}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
