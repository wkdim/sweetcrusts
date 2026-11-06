import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Sparkles, Wheat, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { useCart } from "../context/CartContext";
import { formatCedi } from "../lib/currency";

function Hero() {
  usePageMeta(
    "Home",
    "Sweet Crusts Bakery in Osu, Accra: fresh tea bread, meat pies, and custom celebration cakes baked daily. Pay with Mobile Money, pickup or delivery across Accra."
  );

  const { addToCart } = useCart();

  const featuredItems = [
    {
      id: "butter-tea-bread",
      name: "Butter Tea Bread",
      price: 25,
      image: "/images/tea-bread.webp",
      badge: "Bestseller",
      desc: "Soft, slightly sweet and pillowy. Perfect with Blue Band and a hot cup of tea.",
    },
    {
      id: "meat-pie",
      name: "Beef Meat Pie",
      price: 20,
      image: "/images/meat-pie.webp",
      badge: "Fresh at 7:00 AM",
      desc: "Flaky buttery crust packed with seasoned minced beef, onions and carrots.",
    },
    {
      id: "ghana-cocoa-chocolate-cake",
      name: "Ghana Cocoa Chocolate Cake",
      price: 520,
      image: "/images/chocolate-cake.webp",
      badge: "Celebration",
      desc: "Rich chocolate sponge made with pure Ghanaian cocoa and silky ganache.",
    },
  ];

  return (
    <div className="home-page-wrap">
      {/* Editorial Artisan Hero */}
      <section id="hero" className="hero-modern">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Narrative Column */}
            <div className="hero-text-col">
              <div className="hero-kicker">
                <span className="kicker-text">OSU, ACCRA · EST. 2012</span>
              </div>

              <h1 className="hero-headline">
                Fresh From the Oven, <br />
                <span className="hero-serif-accent">Baked in Accra</span> Every Morning.
              </h1>

              <p className="hero-subtext">
                Tea bread, sugar bread, meat pies and celebration cakes, made by hand every morning with real butter and Ghana cocoa. Order online, pay with Mobile Money, and pick up in Osu or get it delivered anywhere in Accra.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <Link to="/menu" className="hero-primary-btn">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Fresh Bakes</span>
                </Link>
                <Link to="/custom-cake" className="hero-secondary-btn">
                  <span>Order a Custom Cake</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Verified Quality Proof */}
              <div className="hero-social-proof">
                <div className="star-rating-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="rating-score">4.9 / 5.0</span>
                </div>
                <p className="review-meta">
                  Baked fresh on Oxford Street, Osu · Loved by customers from East Legon to Tema.
                </p>
              </div>
            </div>

            {/* Right Photography Card */}
            <div className="hero-visual-col">
              <div className="hero-card-stack">
                <img
                  src="/images/tea-bread.webp"
                  alt="Fresh butter tea bread loaves"
                  className="hero-main-img"
                />
                <div className="hero-caption-card">
                  <div className="caption-tag">Morning Bake</div>
                  <div className="caption-text">Fresh loaves cooling before the morning rush</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Craftsmanship Pillars */}
      <section className="pillars-section">
        <div className="pillars-container">
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Clock className="w-5 h-5 text-amber-800" />
              </div>
              <h4>Baked Fresh at Dawn</h4>
              <p>Our ovens start at 4:30 AM so your bread is still warm when the shop opens.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Sparkles className="w-5 h-5 text-amber-800" />
              </div>
              <h4>Real Butter, No Shortcuts</h4>
              <p>We bake with real butter and fresh eggs. No artificial preservatives, and nothing left over from yesterday.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Wheat className="w-5 h-5 text-amber-800" />
              </div>
              <h4>Proudly Local Ingredients</h4>
              <p>Cocoa from Ashanti farms, coconut from the Western Region, and fresh fruit from Makola Market.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Truck className="w-5 h-5 text-amber-800" />
              </div>
              <h4>Same-Day Delivery in Accra</h4>
              <p>Our riders deliver fresh across Accra and Tema. Pay with MTN MoMo, Telecel Cash or AT Money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hearth Specials */}
      <section className="specials-section">
        <div className="specials-container">
          <div className="specials-header">
            <div>
              <span className="specials-kicker">Today at the Counter</span>
              <h2>Fresh Out of the Oven</h2>
            </div>
            <Link to="/menu" className="specials-view-all">
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="specials-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="special-card">
                <div className="special-img-wrap">
                  <img src={item.image} alt={item.name} className="special-img" loading="lazy" />
                  <span className="special-tag">{item.badge}</span>
                </div>
                <div className="special-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="special-footer">
                    <span className="special-price">{formatCedi(item.price)}</span>
                    <button
                      type="button"
                      className="special-add-btn"
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image }, 1)}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Basket</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
