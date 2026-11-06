import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import credits from "../data/photoCredits.json";

function PhotoCredits() {
  usePageMeta("Photo Credits", "Credits and licences for the photos used on the Sweet Crusts Bakery website.");

  return (
    <div className="contact-page-wrap">
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <h1 className="contact-headline">Photo Credits</h1>
          <p className="contact-subtext">
            Photos on this site come from Wikimedia Commons and are used under their Creative Commons or public domain licences. Some images have been resized.
          </p>
          <ul className="photo-credits-list">
            {credits.map((c) => (
              <li key={c.name}>
                <a href={c.source} target="_blank" rel="noopener noreferrer">{c.title.replace(/\.\w+$/, "")}</a>
                {" by "}{c.author}{", "}{c.license}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PhotoCredits;
