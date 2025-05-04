import React from "react";
import "./MenuPage.css";

const MenuPage = () => {
  return (
<div className="menu-page fade-in">
  <div className="menu-page">
        <h1 className="menu-title">bhan cafe &#9829;</h1>
        <h1 className="menu-name">MENU</h1>
        <h5 className="price-desc">Every item is paid in kisses (Ҝ). Lattes are made with skim milk. </h5>

        <div className="menu-sections">

  {/* Latte List */ }
          <div className="menu-section">
            <h2>LATTE DRINKS</h2>
            <ul>
              <li>Cookie Butter Latte <span>Ҝ5</span></li>
              <li>Honey Cinnamon Latte <span>Ҝ5</span></li>
              <li>Mocha <span>Ҝ6</span></li>
              <li>Caramel Mocha <span>Ҝ6</span></li>
              <li>Bounty Mocha <span>Ҝ7</span></li>
            </ul>
          </div>

  {/* Toppings List */ }
          <div className = "menu-section">
            <h3>LATTE TOPPINGS</h3>
            <ul>
              <li>Vanilla Cold Foam <span>Ҝ2</span></li>
              <li>Vanilla Whipped Cream <span>Ҝ2</span></li>
              <li>Add Chocolate to Topping <span>+Ҝ1</span></li>
              <li>Chips Ahoy Crumble <span>Ҝ1</span></li>
            </ul>
          </div>
          
          <div className="menu-section">
            <h2>FOOD</h2>
            <ul>
              <li>Bagel and Cream Cheese <span>Ҝ4</span></li>
              <li>Add Smoked Turkey <span>Ҝ2</span></li>
              <li>Add Avocado <span>Ҝ2</span></li>
              <li>Caramelized Croissant <span>Ҝ3</span></li>
              <li>Waffles with Cookie Butter <span>Ҝ4</span></li>
            </ul>
          </div>
        </div>

        <footer>
          <p>BHAN CAFE</p>
          <p>2115 30th Rd., Astoria, NY 11102</p>
          <p>bhancafe.com</p>
        </footer>
  </div>
</div>
  );
};

export default MenuPage;
