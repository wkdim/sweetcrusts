import React from "react";
import artisanImg from "../assets/artisan.jpeg";
import signatureImg from "../assets/signature.webp";
import pastryImg from "../assets/pastry.webp";

const galleryItems = [
  {
    src: artisanImg,
    alt: "Artisan Bread",
    title: "Artisan Bread",
  },
  {
    src: signatureImg,
    alt: "Signature Cake",
    title: "Signature Cake",
  },
  {
    src: pastryImg,
    alt: "Delicate Pastry",
    title: "Delicate Pastry",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-modern">
      <div className="gallery-container">
        <h2>Our Gallery</h2>
        <p>Explore a selection of our expertly crafted baked goods.</p>
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div className="gallery-card" key={idx}>
              <img src={item.src} alt={item.alt} className="gallery-img" />
              <div className="gallery-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
