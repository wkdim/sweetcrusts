import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, X, ShoppingBag, Eye, ZoomIn, ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { useCart } from "../context/CartContext";
import { formatCedi } from "../lib/currency";

const galleryItems = [
  {
    id: "gal-tea-bread-1",
    src: "/images/tea-bread.webp",
    alt: "Fresh butter tea bread loaves",
    title: "Butter Tea Bread",
    category: "breads",
    badge: "Morning Classic",
    specs: ["Real Butter", "Soft & Pillowy Crumb", "Baked at 5:30 AM"],
    notes: "Mixed by hand before dawn and baked in small batches so every loaf leaves the counter still warm and soft.",
    pairing: "Blue Band and fried eggs, groundnut paste, or a hot cup of Lipton.",
    price: 25,
  },
  {
    id: "gal-meat-pie-1",
    src: "/images/meat-pie.webp",
    alt: "Golden beef meat pies",
    title: "Beef Meat Pie",
    category: "pastries",
    badge: "House Signature",
    specs: ["Buttery Shortcrust", "Seasoned Minced Beef", "Onions & Carrots"],
    notes: "Our most-ordered snack. Rolled, filled and crimped by hand, then baked until the crust is golden and flaky.",
    pairing: "A cold bottle of sobolo or a chilled malt drink.",
    price: 20,
  },
  {
    id: "gal-cake-1",
    src: "/images/birthday-cake.webp",
    alt: "Decorated celebration cake",
    title: "Birthday Celebration Cake",
    category: "cakes",
    badge: "Custom Studio",
    specs: ["Vanilla or Ghana Cocoa Sponge", "Whipped Buttercream", "Your Colours & Message"],
    notes: "Designed in our cake studio for weddings, engagements, birthdays and outdoorings, with colours to match your occasion.",
    pairing: "Fresh pineapple juice or chilled asaana for the guests.",
    price: 550,
  },
  {
    id: "gal-coconut-bread-1",
    src: "/images/coconut-bread.webp",
    alt: "Coconut bread fresh from the oven",
    title: "Coconut Bread",
    category: "breads",
    badge: "Crowd Favourite",
    specs: ["Fresh Grated Coconut", "Coconut Milk", "Lightly Sweet"],
    notes: "Made with coconuts from the Western Region for a fragrant, soft loaf that disappears fast every morning.",
    pairing: "Hot Ghana cocoa or a cup of tea.",
    price: 35,
  },
  {
    id: "gal-sausage-roll-1",
    src: "/images/sausage-roll.webp",
    alt: "Crisp sausage rolls",
    title: "Sausage Roll",
    category: "pastries",
    badge: "Snack Time",
    specs: ["Puff Pastry", "Lightly Spiced Sausage", "Baked Crisp"],
    notes: "A lunch-break favourite. Puff pastry wrapped around juicy sausage and baked until crisp and golden.",
    pairing: "Fresh ginger drink or a cold bottle of sobolo.",
    price: 15,
  },
  {
    id: "gal-fruit-cake-1",
    src: "/images/fruit-cake.webp",
    alt: "Traditional fruit cake",
    title: "Traditional Fruit Cake",
    category: "cakes",
    badge: "Weddings",
    specs: ["Rich Dried Fruit", "Warm Spices", "Serves 15 to 20"],
    notes: "The traditional choice for weddings and engagements. Baked slowly and finished with smooth icing or fondant.",
    pairing: "Perfect with tea at the reception.",
    price: 650,
  },
];

const categories = [
  { id: "all", label: "Everything" },
  { id: "breads", label: "Breads" },
  { id: "pastries", label: "Pies & Pastries" },
  { id: "cakes", label: "Celebration Cakes" },
];

function Gallery() {
  usePageMeta(
    "Gallery",
    "See fresh tea bread, meat pies, and custom celebration cakes from Sweet Crusts Bakery in Osu, Accra."
  );

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleAddAndClose = (item) => {
    addToCart({ id: item.id, name: item.title, price: item.price, image: item.src }, 1);
    setSelectedItem(null);
  };

  return (
    <div className="gallery-page-wrap">
      {/* Header */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-container">
          <div className="gallery-kicker">
            <span className="kicker-text">FROM OUR OVEN</span>
          </div>
          <h1 className="gallery-headline">
            Fresh From the <br />
            <span className="hero-serif-accent">Sweet Crusts Oven</span>
          </h1>
          <p className="gallery-subtext">
            A look at our morning breads, pies and pastries, and the celebration cakes we make for birthdays, weddings and outdoorings across Accra.
          </p>

          {/* Filter Pills */}
          <div className="gallery-filters" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-grid-container">
          <div className="gallery-items-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => setSelectedItem(item)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
              >
                <div className="gallery-img-container">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-item-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-btn">
                      <ZoomIn className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                  <span className="gallery-badge-tag">{item.badge}</span>
                </div>

                <div className="gallery-item-details">
                  <div className="gallery-item-title-row">
                    <h3>{item.title}</h3>
                    <span className="gallery-item-price">{formatCedi(item.price)}</span>
                  </div>

                  <p className="gallery-item-notes">{item.notes}</p>

                  <div className="gallery-specs-chips">
                    {item.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox / Inspection Modal */}
      {selectedItem && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="lightbox-grid">
              <div className="lightbox-image-wrap">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-info">
                <div className="lightbox-tag-pill">{selectedItem.badge}</div>
                <h2>{selectedItem.title}</h2>
                <div className="lightbox-price-tag">{formatCedi(selectedItem.price)}</div>

                <div className="lightbox-section">
                  <h4>From the Baker</h4>
                  <p>{selectedItem.notes}</p>
                </div>

                <div className="lightbox-section">
                  <h4>What Makes It Special</h4>
                  <ul className="lightbox-specs-list">
                    {selectedItem.specs.map((spec, sIdx) => (
                      <li key={sIdx}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="lightbox-section">
                  <h4>Best Enjoyed With</h4>
                  <p className="lightbox-pairing-note">{selectedItem.pairing}</p>
                </div>

                <div className="lightbox-actions">
                  <button
                    type="button"
                    className="lightbox-add-btn"
                    onClick={() => handleAddAndClose(selectedItem)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket · {formatCedi(selectedItem.price)}</span>
                  </button>
                  <Link
                    to="/custom-cake"
                    className="lightbox-custom-link"
                    onClick={() => setSelectedItem(null)}
                  >
                    <span>Custom Cake Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
