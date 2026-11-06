import React, { useState } from "react";
import { Sparkles, Check, Heart, Cake, ShoppingBag, ArrowRight } from "lucide-react";
import { CAKE_BUILDER_OPTIONS } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { formatCedi } from "../lib/currency";

export default function CustomCakeBuilder() {
  const { addToCart, setIsCartOpen } = useCart();

  const [selectedSize, setSelectedSize] = useState(CAKE_BUILDER_OPTIONS.sizes[0]);
  const [selectedSponge, setSelectedSponge] = useState(CAKE_BUILDER_OPTIONS.sponges[0]);
  const [selectedFilling, setSelectedFilling] = useState(CAKE_BUILDER_OPTIONS.fillings[0]);
  const [selectedToppings, setSelectedToppings] = useState([CAKE_BUILDER_OPTIONS.toppings[0].id]);
  const [inscription, setInscription] = useState("");
  const [addedNotice, setAddedNotice] = useState(false);

  // Compute total price dynamically
  const toppingsPrice = selectedToppings.reduce((sum, tid) => {
    const top = CAKE_BUILDER_OPTIONS.toppings.find((t) => t.id === tid);
    return sum + (top ? top.price : 0);
  }, 0);

  const totalPrice =
    selectedSize.basePrice +
    selectedSponge.extra +
    selectedFilling.extra +
    toppingsPrice;

  const toggleTopping = (toppingId) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  const handleAddToCart = () => {
    const customCakeProduct = {
      id: `custom-cake-${Date.now()}`,
      name: `Custom ${selectedSize.name}`,
      price: totalPrice,
      category: "cakes",
      image: "/images/birthday-cake.webp",
    };

    const cakeOptions = {
      size: selectedSize.name,
      sponge: selectedSponge.name,
      filling: selectedFilling.name,
      toppings: selectedToppings
        .map((id) => CAKE_BUILDER_OPTIONS.toppings.find((t) => t.id === id)?.name)
        .filter(Boolean)
        .join(", "),
      inscription: inscription.trim() || undefined,
    };

    addToCart(customCakeProduct, 1, cakeOptions);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
    setIsCartOpen(true);
  };

  return (
    <section className="cake-builder-section">
      <div className="cake-builder-container">
        {/* Header */}
        <div className="cake-builder-header">
          <div className="badge-pill">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Custom Cake Studio</span>
          </div>
          <h1>Design Your Celebration Cake</h1>
          <p>
            Choose your sponge, filling, and toppings for birthdays, weddings, engagements and outdoorings. Baked and decorated by hand in our Osu bakery.
          </p>
        </div>

        <div className="cake-builder-layout">
          {/* Controls Column */}
          <div className="cake-builder-controls">
            {/* Step 1: Size */}
            <div className="builder-step-card">
              <div className="step-num-title">
                <span className="step-num">1</span>
                <h3>Choose Size & Tiers</h3>
              </div>
              <div className="builder-options-grid">
                {CAKE_BUILDER_OPTIONS.sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`builder-option-btn ${selectedSize.id === s.id ? "active" : ""}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    <div className="option-btn-header">
                      <span className="option-name">{s.name}</span>
                      <span className="option-price">{formatCedi(s.basePrice, 0)}</span>
                    </div>
                    <span className="option-sub">{s.serves}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Sponge */}
            <div className="builder-step-card">
              <div className="step-num-title">
                <span className="step-num">2</span>
                <h3>Select Sponge Base</h3>
              </div>
              <div className="builder-options-grid">
                {CAKE_BUILDER_OPTIONS.sponges.map((sp) => (
                  <button
                    key={sp.id}
                    type="button"
                    className={`builder-option-btn ${selectedSponge.id === sp.id ? "active" : ""}`}
                    onClick={() => setSelectedSponge(sp)}
                  >
                    <div className="option-btn-header">
                      <span className="option-name">{sp.name}</span>
                      {sp.extra > 0 && <span className="option-extra">+{formatCedi(sp.extra, 0)}</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Filling & Frosting */}
            <div className="builder-step-card">
              <div className="step-num-title">
                <span className="step-num">3</span>
                <h3>Filling & Frosting</h3>
              </div>
              <div className="builder-options-grid">
                {CAKE_BUILDER_OPTIONS.fillings.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`builder-option-btn ${selectedFilling.id === f.id ? "active" : ""}`}
                    onClick={() => setSelectedFilling(f)}
                  >
                    <div className="option-btn-header">
                      <span className="option-name">{f.name}</span>
                      {f.extra > 0 && <span className="option-extra">+{formatCedi(f.extra, 0)}</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Toppings */}
            <div className="builder-step-card">
              <div className="step-num-title">
                <span className="step-num">4</span>
                <h3>Toppings & Decorations</h3>
              </div>
              <div className="builder-options-grid">
                {CAKE_BUILDER_OPTIONS.toppings.map((t) => {
                  const isChecked = selectedToppings.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`builder-option-btn ${isChecked ? "active" : ""}`}
                      onClick={() => toggleTopping(t.id)}
                    >
                      <div className="option-btn-header">
                        <span className="option-name">{t.name}</span>
                        <span className="option-extra">+{formatCedi(t.price, 0)}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Custom Piping Inscription */}
            <div className="builder-step-card">
              <div className="step-num-title">
                <span className="step-num">5</span>
                <h3>Custom Cake Inscription</h3>
              </div>
              <input
                type="text"
                maxLength="40"
                placeholder="e.g. Happy 30th Birthday, Akosua!"
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                className="builder-input"
              />
              <span className="char-count">{inscription.length}/40 characters</span>
            </div>
          </div>

          {/* Live Preview Summary Card */}
          <div className="cake-preview-sticky">
            <div className="cake-summary-card">
              <div className="preview-img-wrap">
                <img src="/images/birthday-cake.webp" alt="Custom Cake Preview" className="preview-img" />
                <div className="preview-badge">Custom Bake</div>
              </div>

              <div className="summary-card-body">
                <h3>{selectedSize.name} Custom Cake</h3>
                <div className="summary-price-tag">{formatCedi(totalPrice)}</div>

                <div className="summary-spec-list">
                  <div className="spec-row">
                    <span>Sponge:</span>
                    <strong>{selectedSponge.name}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Frosting:</span>
                    <strong>{selectedFilling.name}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Toppings:</span>
                    <strong>
                      {selectedToppings.length === 0
                        ? "Standard piped finish"
                        : selectedToppings
                            .map((id) => CAKE_BUILDER_OPTIONS.toppings.find((t) => t.id === id)?.name)
                            .join(", ")}
                    </strong>
                  </div>
                  {inscription.trim() && (
                    <div className="spec-row inscription">
                      <span>Piped Message:</span>
                      <em>"{inscription}"</em>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="add-custom-cake-btn"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedNotice ? "Added to Basket!" : "Add Custom Cake to Basket"}</span>
                </button>
                <p className="advance-notice-note">
                  Custom celebration cakes are hand-crafted fresh. Please give us at least 48 hours notice, and 3 days for fruit cakes and 2-tier cakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
