import React from "react";
import { Link } from "react-router-dom";
import { Wheat, Clock, Heart, Sparkles, ChefHat, ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

function About() {
  usePageMeta(
    "Our Story",
    "The story of Sweet Crusts Bakery: from a small kiosk in Osu in 2012 to one of Accra\u2019s favourite bakeries for bread, pies and celebration cakes."
  );

  const pillars = [
    {
      icon: Clock,
      title: "Baked Fresh Before Dawn",
      desc: "Our ovens are on by 4:30 AM every day. Bread that is not sold today is given to a local children's home, never sold tomorrow.",
    },
    {
      icon: Wheat,
      title: "Proudly Ghanaian Ingredients",
      desc: "Pure cocoa from Ashanti farms, coconut from the Western Region, eggs from Dodowa poultry farms, and fresh fruit from Makola Market.",
    },
    {
      icon: Sparkles,
      title: "Real Butter, Real Eggs",
      desc: "No margarine shortcuts in our pies and cakes, and no artificial preservatives in anything we bake.",
    },
    {
      icon: Heart,
      title: "Baked for Every Occasion",
      desc: "From a morning loaf of tea bread to the cake for your wedding, naming ceremony or outdooring, we bake for the moments that matter.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "A Small Kiosk in Osu",
      detail: "Auntie Efua starts baking tea bread and meat pies in a single oven, selling from a kiosk near Danquah Circle.",
    },
    {
      year: "2015",
      title: "Our First Wedding Cake",
      detail: "Word spreads, and Sweet Crusts begins baking celebration cakes for birthdays, weddings and engagements across Accra.",
    },
    {
      year: "2018",
      title: "The Oxford Street Bakery",
      detail: "We move into our bakery and shop on Oxford Street, Osu, with bigger ovens and a proper cake studio.",
    },
    {
      year: "2021",
      title: "Rider Delivery Across Accra",
      detail: "Our own team of riders starts delivering fresh bread and cakes to homes and offices from East Legon to Tema.",
    },
    {
      year: "2024",
      title: "Order Online, Pay with MoMo",
      detail: "Customers can now order online and pay with MTN MoMo, Telecel Cash, AT Money or card, for pickup or delivery.",
    },
  ];

  const teamMembers = [
    {
      name: "Efua Mensah",
      role: "Founder & Head Baker",
      experience: "14 Years Experience",
      specialty: "Tea bread, sugar bread & coconut bread",
      bio: "Efua learnt to bake from her grandmother in Cape Coast. She still mixes the first batch of dough herself every morning.",
    },
    {
      name: "Kwabena Owusu",
      role: "Head Cake Designer",
      experience: "10 Years Experience",
      specialty: "Wedding cakes & Kente-inspired designs",
      bio: "Trained in Kumasi, Kwabena designs our celebration cakes and is known across Accra for his Kente-pattern fondant work.",
    },
    {
      name: "Abena Asante",
      role: "Pastry Lead",
      experience: "7 Years Experience",
      specialty: "Meat pies, chicken pies & sausage rolls",
      bio: "Abena runs the pastry section and makes sure every pie leaves the oven golden, flaky and well filled.",
    },
    {
      name: "Kofi Boateng",
      role: "Customer Service & Deliveries",
      experience: "5 Years Experience",
      specialty: "Orders, MoMo payments & rider dispatch",
      bio: "Kofi answers your calls and WhatsApp messages and makes sure every order reaches you fresh and on time.",
    },
  ];

  const pressQuotes = [
    {
      quote: "Their tea bread tastes exactly like the one I grew up with. I pass by every morning on my way to work.",
      publication: "Ama K., Osu",
    },
    {
      quote: "Sweet Crusts did our wedding cake with a Kente band in our colours. Our guests are still talking about it.",
      publication: "Yaw & Esi, East Legon",
    },
    {
      quote: "We order meat pies and sobolo for every office meeting. Always on time, always fresh, and paying with MoMo is easy.",
      publication: "Office Manager, Airport City",
    },
  ];

  return (
    <div className="about-page-wrap">
      {/* Editorial Hero Header */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-kicker">
            <span className="kicker-text">OUR STORY</span>
          </div>
          <h1 className="about-hero-title">
            Baked in Accra, <br />
            <span className="hero-serif-accent">With Love Since 2012</span>
          </h1>
          <p className="about-hero-lead">
            Sweet Crusts started as a small kiosk in Osu with one oven and a grandmother\u2019s tea bread recipe. Today we bake for families, offices, churches and celebrations across Accra, but every loaf is still made by hand each morning.
          </p>
        </div>
      </section>

      {/* Narrative Story Section */}
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-grid">
            <div className="about-story-visual">
              <div className="story-img-frame">
                <img
                  src="/images/bakery.webp"
                  alt="Baker shaping dough in a Ghanaian bakery"
                  className="story-main-img"
                  loading="lazy"
                />
                <div className="story-experience-badge">
                  <span className="badge-number">14</span>
                  <span className="badge-text">Years of Daily Baking</span>
                </div>
              </div>
            </div>

            <div className="about-story-content">
              <span className="story-kicker">Our Origins</span>
              <h2>From a Kiosk in Osu to a Bakery Accra Loves</h2>
              <p>
                In 2012, Efua Mensah began baking tea bread and meat pies in a single oven, selling them from a small kiosk near Danquah Circle in Osu. She used the recipes her grandmother taught her in Cape Coast, and the bread was sold out before 9 AM most mornings.
              </p>
              <p>
                What began as a family kiosk grew into a bakery on Oxford Street with a cake studio and our own delivery riders. Our team has grown and our menu has too, but our promise is the same: everything is mixed, shaped and baked fresh by hand, every single day.
              </p>
              <div className="story-quote-card">
                <p className="story-quote-text">
                  "Good bread should taste like home. If it is not good enough for my own children\u2019s breakfast, it does not leave this bakery."
                </p>
                <div className="story-quote-author">
                  <strong>Efua Mensah</strong> · Founder & Head Baker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Pillars */}
      <section className="about-pillars-section">
        <div className="about-pillars-container">
          <div className="section-title-wrap">
            <span className="section-kicker">Our Philosophy</span>
            <h2>What We Stand For</h2>
            <p className="section-subtitle">
              No shortcuts. Here is how we keep every bake fresh and tasty.
            </p>
          </div>

          <div className="pillars-cards-grid">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="about-pillar-card">
                  <div className="pillar-icon-circle">
                    <Icon className="w-5 h-5 text-amber-800" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Timeline of Milestones */}
      <section className="about-timeline-section">
        <div className="about-timeline-container">
          <div className="section-title-wrap">
            <span className="section-kicker">Our Journey</span>
            <h2>How We Grew</h2>
            <p className="section-subtitle">
              Key moments from our kiosk days to today.
            </p>
          </div>

          <div className="timeline-flow">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year-badge">{item.year}</div>
                <div className="timeline-content-card">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Bakers Team Grid */}
      <section className="about-team-section">
        <div className="about-team-container">
          <div className="section-title-wrap">
            <span className="section-kicker">Our Team</span>
            <h2>Meet the People Behind the Oven</h2>
            <p className="section-subtitle">
              The bakers, cake designers and friendly faces who start work before the sun comes up.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-card-header">
                  <div className="team-avatar-placeholder">
                    <ChefHat className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="team-name">{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
                <div className="team-meta-row">
                  <span className="team-exp-tag">{member.experience}</span>
                </div>
                <div className="team-specialty">
                  <strong>Specialty:</strong> {member.specialty}
                </div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Accolades */}
      <section className="about-press-section">
        <div className="about-press-container">
          <div className="section-title-wrap">
            <span className="section-kicker">Testimonials</span>
            <h2>What Our Customers Say</h2>
          </div>

          <div className="press-grid">
            {pressQuotes.map((item, idx) => (
              <div key={idx} className="press-card">
                <div className="press-quote-mark">“</div>
                <p className="press-quote-text">{item.quote}</p>
                <div className="press-source">{item.publication}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <div className="about-cta-box">
            <h2>Taste the Sweet Crusts Difference</h2>
            <p>
              Visit us in Osu for warm bread and pies, or order online for pickup or delivery anywhere in Accra.
            </p>
            <div className="about-cta-buttons">
              <Link to="/menu" className="about-primary-btn">
                <span>View Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/custom-cake" className="about-secondary-btn">
                <span>Order a Custom Cake</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
