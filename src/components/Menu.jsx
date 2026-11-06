import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Plus, Minus, Check, Sparkles, Cake } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { formatCedi } from "../lib/currency";

function Menu() {
  usePageMeta(
    "Menu",
    "Order tea bread, sugar bread, meat pies, celebration cakes and local drinks like sobolo, baked fresh daily at Sweet Crusts Bakery in Osu, Accra."
  );

  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState({});
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQtyChange = (itemId, delta) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [itemId]: next };
    });
  };

  const handleAddItem = (item) => {
    const qty = quantities[item.id] || 1;
    addToCart(item, qty);
    setAddedItemNotice(item.id);
    setTimeout(() => setAddedItemNotice(null), 1800);
  };

  return (
    <section id="menu" className="menu-modern">
      <div className="menu-container">
        {/* Banner Link to Custom Cake Builder */}
        <div className="cake-builder-promo-banner">
          <div className="promo-content">
            <div className="promo-tag">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Special Events & Birthdays</span>
            </div>
            <h3>Looking for a personalised celebration cake?</h3>
            <p>Birthdays, weddings, engagements and outdoorings: choose your size, sponge, filling and message.</p>
          </div>
          <Link to="/custom-cake" className="promo-cta-btn">
            <Cake className="w-4 h-4" />
            <span>Open Cake Studio</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="menu-header-wrap">
          <h2>Fresh From Our Oven</h2>
          <p>Baked every morning in Osu with real butter, Ghana cocoa and fresh local ingredients.</p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="menu-toolbar">
          <div className="menu-search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search tea bread, meat pie, sobolo, cakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="category-tabs">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="menu-empty-results">
            <div className="empty-icon">🔍</div>
            <h3>No bakes found matching "{searchQuery}"</h3>
            <p>Try clearing your search filters or browse the full menu.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="reset-filters-btn"
            >
              View Full Menu
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredItems.map((item) => {
              const currentQty = quantities[item.id] || 1;
              const isJustAdded = addedItemNotice === item.id;

              return (
                <div key={item.id} className="product-card">
                  {/* Card Media */}
                  <div className="product-media-wrap">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="product-media-fallback">
                        {item.category === "drinks" ? "☕" : item.category === "cakes" ? "🎂" : "🥐"}
                      </div>
                    )}

                    {item.badge && <span className="product-badge">{item.badge}</span>}
                  </div>

                  {/* Card Content */}
                  <div className="product-body">
                    <div className="product-dietary-tags">
                      {item.dietary?.map((tag) => (
                        <span key={tag} className="diet-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-desc">{item.description}</p>
                    <span className="product-schedule">{item.prepTime}</span>

                    {/* Footer / Price & Add */}
                    <div className="product-card-footer">
                      <div className="product-price">{formatCedi(item.price)}</div>

                      <div className="product-action-row">
                        <div className="card-qty-picker">
                          <button
                            type="button"
                            onClick={() => handleQtyChange(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span>{currentQty}</span>
                          <button
                            type="button"
                            onClick={() => handleQtyChange(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          className={`add-cart-btn ${isJustAdded ? "added" : ""}`}
                          onClick={() => handleAddItem(item)}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="menu-note-box">
          <p>
            All bakes are prepared daily from scratch without artificial preservatives. For funerals, weddings, church events, office orders, or bulk bread supply, call or WhatsApp our bakery desk directly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
