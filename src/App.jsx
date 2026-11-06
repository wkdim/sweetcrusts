import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import CustomCakeBuilder from "./components/CustomCakeBuilder";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import PhotoCredits from "./components/PhotoCredits";
import ErrorBoundary from "./components/ErrorBoundary";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import { CartProvider } from "./context/CartContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <CartProvider>
      <Router>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ErrorBoundary>
          <Navbar />
          <main id="main-content" style={{ minHeight: "calc(100vh - 80px)" }}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/custom-cake" element={<CustomCakeBuilder />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/credits" element={<PhotoCredits />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <CartDrawer />
          <CheckoutModal />
          <Footer />
        </ErrorBoundary>
        <Analytics />
      </Router>
    </CartProvider>
  );
}

export default App;
