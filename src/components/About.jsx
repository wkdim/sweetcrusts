import React from "react";

function About() {
  return (
    <section id="about" className="about-modern" style={{width: '100vw', minHeight: '80vh', background: 'linear-gradient(120deg, #fff 60%, #e67e22 100%)', padding: '0'}}>
      <div style={{width: '100vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2em', justifyContent: 'center', alignItems: 'start', padding: '3em 2em 2em 2em', background: 'none'}}>
        {/* Story Section - split into two cards for balance */}
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
       
          <h1 style={{textAlign: 'center', color: '#e67e22', fontWeight: 800, fontSize: '2em', margin: '1em 0 0.5em 0'}}>Our Story</h1>
          <p style={{textAlign: 'center', fontSize: '1.1em', color: '#888', marginBottom: '1em'}}>
            Sweet Crusts began as a small family bakery in 1998, founded by the passionate baker Maria and her two children.
          </p>
          <p style={{textAlign: 'center', fontSize: '1em', color: '#555', marginBottom: '1em'}}>
            With a single oven and a dream to share the joy of fresh bread and pastries, Maria spent early mornings perfecting her recipes and late nights serving the local community.
          </p>
        </div>
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center', color: '#e67e22', fontWeight: 700, fontSize: '1.2em'}}>Growth & Values</h2>
          <p style={{textAlign: 'center', fontSize: '1em', color: '#555', marginBottom: '1em'}}>
            Over the years, Sweet Crusts grew from a humble storefront into a beloved neighborhood destination. Our secret? A commitment to quality, tradition, and a sprinkle of love in every batch.
          </p>
          <p style={{textAlign: 'center', fontSize: '1em', color: '#555', marginBottom: '1em'}}>
            From artisan breads to custom cakes, every item is crafted with care and the finest ingredients.
          </p>
        </div>
        {/* Milestones Section */}
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center', color: '#e67e22', fontWeight: 700, fontSize: '1.2em'}}>Milestones</h2>
          <ul style={{listStyle: 'none', padding: 0, color: '#555', fontSize: '1em', textAlign: 'left', marginTop: '1em'}}>
            <li><strong>1998:</strong> Sweet Crusts opens its doors.</li>
            <li><strong>2005:</strong> Introduced our famous chocolate croissant.</li>
            <li><strong>2012:</strong> Expanded to offer custom cakes and catering.</li>
            <li><strong>2018:</strong> Won "Best Bakery" in Pastry City.</li>
            <li><strong>2023:</strong> Launched our online ordering platform.</li>
          </ul>
        </div>
        {/* Meet the Team Section */}
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center', color: '#e67e22', fontWeight: 700, fontSize: '1.2em'}}>Meet the Team</h2>
          <ul style={{listStyle: 'none', padding: 0, color: '#555', fontSize: '1em', textAlign: 'left', marginTop: '1em'}}>
            <li><strong>Maria:</strong> Founder & Master Baker</li>
            <li><strong>Lucas:</strong> Cake Artist</li>
            <li><strong>Sophia:</strong> Pastry Chef</li>
            <li><strong>James:</strong> Customer Experience Lead</li>
          </ul>
        </div>
        {/* Awards Section */}
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center', color: '#e67e22', fontWeight: 700, fontSize: '1.2em'}}>Awards & Recognition</h2>
          <ul style={{listStyle: 'none', padding: 0, color: '#555', fontSize: '1em', textAlign: 'left', marginTop: '1em'}}>
            <li>🏆 Best Bakery in Pastry City (2018, 2022)</li>
            <li>🥇 Top Rated on FoodieFinder</li>
            <li>🎂 Community Choice Award for Custom Cakes</li>
          </ul>
        </div>
      </div>
     
    </section>
  );
}

export default About;
