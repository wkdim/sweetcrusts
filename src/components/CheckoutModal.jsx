import React, { useState } from "react";
import { X, CheckCircle, Clock, ShieldCheck, CreditCard, Smartphone, Banknote, MapPin, Calendar, HeartHandshake } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCedi, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "../lib/currency";

export default function CheckoutModal() {
  const {
    items,
    subtotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
  } = useCart();

  const [step, setStep] = useState("form"); // 'form' | 'success'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    orderType: "pickup", // 'pickup' | 'delivery'
    address: "",
    pickupTime: "Today between 2:00 PM - 4:00 PM",
    paymentMethod: "momo", // 'card' | 'momo' | 'cash'
    specialInstructions: "",
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const deliveryFee = form.orderType === "delivery" ? (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE) : 0;
  const grandTotal = subtotal + deliveryFee;

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.email.trim()) errs.email = "Email address is required";
    if (form.orderType === "delivery" && !form.address.trim()) {
      errs.address = "Delivery address is required for rider delivery";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOrderNumber = `SC-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderReceipt({
        orderNumber: generatedOrderNumber,
        createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        items: [...items],
        total: grandTotal,
        customer: { ...form },
      });
      clearCart();
      setIsSubmitting(false);
      setStep("success");
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep("form");
  };

  return (
    <div className="checkout-backdrop" onClick={handleClose}>
      <div
        className="checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Bakery Checkout"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="checkout-close-btn"
          onClick={handleClose}
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="checkout-header">
              <h2>Complete Your Fresh Bakery Order</h2>
              <p>Baked fresh every morning in Osu, Accra.</p>
            </div>

            <form onSubmit={handleSubmit} className="checkout-form" noValidate>
              {/* Order Fulfillment Choice */}
              <div className="checkout-section">
                <label className="section-label">1. Order Method</label>
                <div className="fulfillment-grid">
                  <label
                    className={`fulfillment-card ${form.orderType === "pickup" ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="pickup"
                      checked={form.orderType === "pickup"}
                      onChange={(e) => setForm({ ...form, orderType: e.target.value })}
                    />
                    <div className="card-info">
                      <div className="card-title">Bakery Pickup</div>
                      <div className="card-sub">Ready in 45 mins at our Osu bakery, Oxford Street</div>
                      <span className="free-tag">Free</span>
                    </div>
                  </label>

                  <label
                    className={`fulfillment-card ${form.orderType === "delivery" ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="delivery"
                      checked={form.orderType === "delivery"}
                      onChange={(e) => setForm({ ...form, orderType: e.target.value })}
                    />
                    <div className="card-info">
                      <div className="card-title">Rider Delivery Across Accra</div>
                      <div className="card-sub">Delivered fresh by our riders in insulated bags</div>
                      <span className="fee-tag">{deliveryFee === 0 ? `Free (${formatCedi(FREE_DELIVERY_THRESHOLD, 0)}+)` : formatCedi(DELIVERY_FEE)}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="checkout-section">
                <label className="section-label">2. Contact Information</label>
                <div className="input-grid">
                  <div className="field-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ama Mensah"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className={errors.fullName ? "input-error" : ""}
                    />
                    {errors.fullName && <span className="field-err">{errors.fullName}</span>}
                  </div>

                  <div className="field-group">
                    <label>Phone Number (for pickup/delivery alerts) *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 055 175 9722"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && <span className="field-err">{errors.phone}</span>}
                  </div>

                  <div className="field-group full-width">
                    <label>Email Address (for receipt & order tracking) *</label>
                    <input
                      type="email"
                      placeholder="e.g. customer@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <span className="field-err">{errors.email}</span>}
                  </div>
                </div>
              </div>

              {/* Schedule or Delivery Address */}
              <div className="checkout-section">
                <label className="section-label">
                  {form.orderType === "delivery" ? "3. Delivery Address" : "3. Preferred Pickup Slot"}
                </label>
                {form.orderType === "delivery" ? (
                  <div className="field-group">
                    <input
                      type="text"
                      placeholder="Apartment, Street address, Landmark (e.g. East Legon, near Shell)"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className={errors.address ? "input-error" : ""}
                    />
                    {errors.address && <span className="field-err">{errors.address}</span>}
                  </div>
                ) : (
                  <div className="field-group">
                    <select
                      value={form.pickupTime}
                      onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                    >
                      <option>Today between 1:00 PM - 3:00 PM</option>
                      <option>Today between 3:00 PM - 5:00 PM</option>
                      <option>Today between 5:00 PM - 7:00 PM</option>
                      <option>Tomorrow Morning (8:00 AM - 10:00 AM)</option>
                      <option>Tomorrow Afternoon (12:00 PM - 2:00 PM)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="checkout-section">
                <label className="section-label">4. Payment Method</label>
                <div className="payment-options">
                  <label className={`pay-card ${form.paymentMethod === "momo" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="momo"
                      checked={form.paymentMethod === "momo"}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                    />
                    <Smartphone className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="font-semibold">Mobile Money (MTN / Telecel / AT)</div>
                      <div className="text-xs text-slate-500">Instant MoMo approval prompt on submit</div>
                    </div>
                  </label>

                  <label className={`pay-card ${form.paymentMethod === "card" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={form.paymentMethod === "card"}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                    />
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="font-semibold">Credit / Debit Card</div>
                      <div className="text-xs text-slate-500">Secure Visa and Mastercard payments</div>
                    </div>
                  </label>

                  <label className={`pay-card ${form.paymentMethod === "cash" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={form.paymentMethod === "cash"}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                    />
                    <Banknote className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold">Cash on Pickup</div>
                      <div className="text-xs text-slate-500">Pay at the counter when you collect your bake</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="checkout-section">
                <label className="section-label">5. Special Instructions & Allergies</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Please warm before pickup; nut allergy warning; add birthday card..."
                  value={form.specialInstructions}
                  onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
                />
              </div>

              {/* Total & Submit */}
              <div className="checkout-action-box">
                <div className="checkout-total-calc">
                  <div className="calc-row">
                    <span>Subtotal:</span>
                    <span>{formatCedi(subtotal)}</span>
                  </div>
                  <div className="calc-row">
                    <span>Fulfillment:</span>
                    <span>{deliveryFee === 0 ? "Free" : `${formatCedi(deliveryFee)}`}</span>
                  </div>
                  <div className="calc-row grand">
                    <span>Final Amount:</span>
                    <span>{formatCedi(grandTotal)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="checkout-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Confirming Order...</span>
                  ) : (
                    <span>Place Order · {formatCedi(grandTotal)}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="order-success-screen">
            <div className="success-icon-wrap">
              <CheckCircle className="w-16 h-16 text-emerald-500" />
            </div>
            <h2>Order Confirmed!</h2>
            <p className="order-id-badge">Order Reference: {orderReceipt?.orderNumber}</p>
            <p className="order-congrats">
              Thank you, <strong>{orderReceipt?.customer.fullName}</strong>. Our bakers have received your order and are preparing your fresh treats.
            </p>

            <div className="order-summary-card">
              <div className="summary-item">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>
                  {orderReceipt?.customer.orderType === "delivery"
                    ? `Estimated Delivery: Today in 45-60 mins`
                    : `Pickup Slot: ${orderReceipt?.customer.pickupTime}`}
                </span>
              </div>
              <div className="summary-item">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>
                  {orderReceipt?.customer.orderType === "delivery"
                    ? `Destination: ${orderReceipt?.customer.address}`
                    : `Bakery Counter: Sweet Crusts Bakery, Oxford Street, Osu, Accra`}
                </span>
              </div>
              <div className="summary-item">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>A confirmation SMS & email have been dispatched to {orderReceipt?.customer.phone}.</span>
              </div>
            </div>

            <button type="button" onClick={handleClose} className="success-done-btn">
              Back to Bakery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
