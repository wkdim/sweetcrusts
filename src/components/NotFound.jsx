import React from "react";
import { Link } from "react-router-dom";
import { Wheat, ShoppingBag, ArrowRight, Home } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

function NotFound() {
  usePageMeta(
    "Page Not Found",
    "The page you are looking for does not exist at Sweet Crusts Bakery."
  );

  return (
    <div className="notfound-modern">
      <div className="notfound-card">
        <div className="notfound-icon-wrap">
          <Wheat className="w-12 h-12 text-amber-700" />
        </div>
        <span className="notfound-badge">404 Error</span>
        <h1>This Crumb Rolled Away</h1>
        <p>
          The page or recipe you are looking for seems to have vanished from our bakery counter. Do not worry, we have plenty of fresh bakes ready for you.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-primary-btn">
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link to="/menu" className="notfound-secondary-btn">
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Today's Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
