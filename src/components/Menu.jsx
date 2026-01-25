import React from "react";

const items = [
  {
    icon: "🥖",
    title: "Fresh Breads",
    description: "Artisan breads baked daily with premium ingredients.",
  },
  {
    icon: "🍰",
    title: "Cakes & Pastries",
    description: "A variety of cakes and pastries, perfect for any occasion.",
  },
  {
    icon: "☕",
    title: "Coffee & Drinks",
    description: "Specialty coffees and refreshing beverages to complement your treat.",
  },
];

function Menu() {
  return (
    <section id="menu" className="menu-modern">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <p>Discover our selection of freshly made delights.</p>
        <div className="menu-grid">
          {items.map((item, idx) => (
            <div key={idx} className="menu-card">
              <div className="menu-icon">{item.icon}</div>
              <h5 className="menu-title">{item.title}</h5>
              <p className="menu-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
