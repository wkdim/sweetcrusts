import React, { useState } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Store, Truck, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCedi, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "../lib/currency";

export default function CartDrawer() {
  const {
    items,
    totalUnits,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen,
  } = useCart();

  const [fulfillmentType, setFulfillmentType] = useState("pickup"); // 'pickup' | 'delivery'

  if (!isCartOpen) return null;

  const deliveryThreshold = FREE_DELIVERY_THRESHOLD;
  const deliveryFee = fulfillmentType === "delivery" ? (subtotal >= deliveryThreshold ? 0 : DELIVERY_FEE) : 0;
  const grandTotal = subtotal + deliveryFee;
  const progressToFreeDelivery = Math.min(100, Math.round((subtotal / deliveryThreshold) * 100));

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}>
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Your Bakery Basket"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag className="cart-icon" />
            <div>
              <h3>Your Bakery Basket</h3>
              <p className="cart-counter">
                {totalUnits} {totalUnits === 1 ? "delight" : "delights"} selected
              </p>
            </div>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close basket"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fulfillment Method Selector */}
        {items.length > 0 && (
          <div className="cart-fulfillment-box">
            <div className="cart-fulfillment-toggle">
              <button
                type="button"
                className={`fulfillment-opt ${fulfillmentType === "pickup" ? "active" : ""}`}
                onClick={() => setFulfillmentType("pickup")}
              >
                <Store className="w-4 h-4" />
                <span>Bakery Pickup (Free)</span>
              </button>
              <button
                type="button"
                className={`fulfillment-opt ${fulfillmentType === "delivery" ? "active" : ""}`}
                onClick={() => setFulfillmentType("delivery")}
              >
                <Truck className="w-4 h-4" />
                <span>Delivery in Accra</span>
              </button>
            </div>

            {fulfillmentType === "delivery" && (
              <div className="delivery-progress-wrap">
                {subtotal >= deliveryThreshold ? (
                  <div className="free-delivery-badge">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>You unlocked free delivery within Accra!</span>
                  </div>
                ) : (
                  <div>
                    <div className="delivery-progress-text">
                      Add <strong>{formatCedi((deliveryThreshold - subtotal))}</strong> more for free delivery within Accra!
                    </div>
                    <div className="delivery-bar">
                      <div
                        className="delivery-fill"
                        style={{ width: `${progressToFreeDelivery}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Drawer Body - Items List */}
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🥐</div>
              <h4>Your basket is hungry</h4>
              <p>Explore our fresh tea bread, meat pies, and celebration cakes.</p>
              <button
                type="button"
                className="cart-browse-btn"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Our Fresh Bakes
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.cartItemId} className="cart-item-card">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  ) : (
                    <div className="cart-item-fallback">
                      {item.category === "drinks" ? "☕" : item.category === "cakes" ? "🎂" : "🥖"}
                    </div>
                  )}

                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <button
                        type="button"
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.cartItemId)}
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.options && (
                      <div className="cart-item-options">
                        {item.options.size && <span>Size: {item.options.size}</span>}
                        {item.options.sponge && <span>Sponge: {item.options.sponge}</span>}
                        {item.options.inscription && (
                          <span className="cart-item-inscription">
                            "{item.options.inscription}"
                          </span>
                        )}
                      </div>
                    )}

                    <div className="cart-item-footer">
                      <div className="cart-qty-controls">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="cart-item-price">
                        {formatCedi((item.price * item.quantity))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="cart-clear-wrap">
                <button type="button" onClick={clearCart} className="cart-clear-btn">
                  Clear entire basket
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Items Subtotal</span>
              <span className="font-semibold">{formatCedi(subtotal)}</span>
            </div>

            {fulfillmentType === "delivery" && (
              <div className="cart-summary-row">
                <span>Rider Delivery</span>
                <span>{deliveryFee === 0 ? "FREE" : `${formatCedi(deliveryFee)}`}</span>
              </div>
            )}

            <div className="cart-total-row">
              <div>
                <span className="cart-total-label">Total to Pay</span>
                <span className="cart-tax-note">(Taxes included)</span>
              </div>
              <span className="cart-total-amount">{formatCedi(grandTotal)}</span>
            </div>

            <button
              type="button"
              className="cart-checkout-btn"
              onClick={handleProceedCheckout}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
