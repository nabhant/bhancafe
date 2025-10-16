import React from "react";
import "./MenuPage.css";

const MenuPage = () => {
  return (
<div className="menu-page fade-in">
  <div className="menu-page">
        <h1 className="menu-title">biha cafe &#9829;</h1>
        <h1 className="menu-name">MENU</h1>
        <div className="menu-sections">

  {/* Latte List */ }
          <div className="menu-section">
            <h2>LATTE DRINKS</h2>
            <ul>
              <li>Cookie Butter Latte </li>
              <li>Honey Cinnamon Latte </li>
              <li>Mocha </li>
              <li>Caramel Mocha </li>
              <li>Bounty Mocha </li>
            </ul>
          </div>

  {/* Toppings List */ }
          <div className = "menu-section">
            <h3>LATTE TOPPINGS</h3>
            <ul>
              <li>Vanilla Cold Foam </li>
              <li>Vanilla Whipped Cream </li>
              <li>Add Chocolate to Topping </li>
              <li>Chips Ahoy Crumble </li>
            </ul>
          </div>
          
          <div className="menu-section">
            <h2>FOOD</h2>
            <ul>
              <li>Bagel and Cream Cheese </li>
              <li>Add Smoked Turkey </li>
              <li>Add Avocado </li>
              <li>Caramelized Croissant </li>
              <li>Waffles with Cookie Butter </li>
            </ul>
          </div>
        </div>

        <footer>
          <p>BIHA CAFE</p>
        </footer>
  </div>
</div>
  );
};

export default MenuPage;
