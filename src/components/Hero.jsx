import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero-modern" style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
      <div className="hero-overlay" style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
        <div style={{width: '100vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h1 style={{color: '#fff', fontWeight: 800, fontSize: '3em', marginBottom: '0.5em'}}>Sweet Crusts Bakery</h1>
          <p style={{color: '#fff', fontSize: '1.3em', marginBottom: '1.5em'}}>
            Experience the finest selection of freshly baked goods, crafted with passion and quality ingredients.
          </p>
          <a href="/menu" className="hero-cta" style={{display: 'inline-block', background: '#fff', color: '#e67e22', fontWeight: 700, fontSize: '1.2em', padding: '0.7em 2em', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textDecoration: 'none', transition: 'background 0.2s, color 0.2s'}}>Explore Our Menu</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
