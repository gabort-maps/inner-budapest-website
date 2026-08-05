"use client";

import { useState } from "react";

type SliderProps = {
  id: string;
  observed: string;
  concept: string;
  observedAlt: string;
  conceptAlt: string;
};

function SceneSlider({ id, observed, concept, observedAlt, conceptAlt }: SliderProps) {
  const [split, setSplit] = useState(50);

  return (
    <div className="falk-slider" style={{ "--split": `${split}%` } as React.CSSProperties}>
      <div className="falk-slider-stage">
        <img src={observed} alt={observedAlt} />
        <div className="falk-slider-concept">
          <img src={concept} alt={conceptAlt} />
        </div>
        <span className="falk-slider-divider" aria-hidden="true"><i /></span>
      </div>
      <div className="falk-slider-controls">
        <button type="button" aria-label={`Show more of the observed ${id} view`} onClick={() => setSplit(Math.max(0, split - 10))}>‹</button>
        <label>
          <span>Observed</span>
          <input
            type="range"
            min="0"
            max="100"
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            aria-label={`Compare observed and illustrative concept for ${id}`}
          />
          <span>Concept</span>
        </label>
        <button type="button" aria-label={`Show more of the illustrative ${id} concept`} onClick={() => setSplit(Math.min(100, split + 10))}>›</button>
      </div>
    </div>
  );
}

const sections = [
  {
    number: "01",
    title: "Local living",
    range: "Szalay utca – Markó utca",
    statement: "A civic address can still be a lived-in street.",
    body: "At the southern end, Falk Miksa is part of Lipótváros’s everyday fabric. The task is not to make it louder. It is to give its residents, visitors and ground-floor life more room than the parked cars receive today.",
    observed: "/media/change/falk-miksa/local-observed.webp",
    concept: "/media/change/falk-miksa/local-concept.webp",
    observedAlt: "Falk Miksa utca as observed today near Szalay utca, with parked cars at the kerb.",
    conceptAlt: "Illustrative concept for the southern section of Falk Miksa utca, with more room for walking, planting and local access.",
  },
  {
    number: "02",
    title: "Antiques high street",
    range: "Markó utca – Balaton utca",
    statement: "The galleries stay. Their street gets to work harder for them.",
    body: "Falk’s antiques and gallery trade is one of the street’s rarest assets. The middle section can become a more generous cultural high street: useful for deliveries and access, but designed first for browsing, meeting, stopping and the everyday theatre of shopfronts.",
    observed: "/media/change/falk-miksa/antiques-observed.webp",
    concept: "/media/change/falk-miksa/antiques-concept.webp",
    observedAlt: "Falk Miksa utca as observed today in its antiques and gallery section.",
    conceptAlt: "Illustrative concept for the antiques high street section of Falk Miksa utca, with a wider public realm.",
  },
  {
    number: "03",
    title: "Northern connection",
    range: "Balaton utca – Szent István körút",
    statement: "A short corridor should arrive somewhere, not dissolve into parking.",
    body: "The northern end joins the Grand Boulevard, tram connections and a much wider neighbourhood. Its role is movement and orientation, with local access retained, but the space can be calmer, greener and more legible for people arriving on foot, by bike or by public transport.",
    observed: "/media/change/falk-miksa/north-observed.webp",
    concept: "/media/change/falk-miksa/north-concept.webp",
    observedAlt: "Falk Miksa utca as observed today near its northern connection.",
    conceptAlt: "Illustrative concept for the northern connection of Falk Miksa utca, with clearer walking and cycling space.",
  },
];

export function FalkMiksaChapter() {
  return (
    <main className="falk-page" id="top">
      <section className="falk-hero" aria-labelledby="falk-title">
        <img src="/media/change/falk-miksa/hero.webp" alt="Illustrative daytime view of Falk Miksa utca with galleries, mature trees and local life." />
        <div className="falk-hero-copy">
          <p className="falk-kicker">04 / Change · 03</p>
          <h1 id="falk-title">Falk Miksa utca</h1>
          <p>One corridor, three roles, no general parking.</p>
        </div>
      </section>

      <section className="falk-intro">
        <div>
          <p className="falk-kicker">A street I know</p>
          <h2>Local life and antiques commerce before car storage.</h2>
        </div>
        <div className="falk-intro-copy">
          <p>Falk Miksa utca runs north from Parliament towards the Grand Boulevard. It is neither one uniform street nor a traffic corridor in waiting. It has three distinct roles, each worth strengthening in its own way.</p>
          <dl>
            <div><dt>≈464 m</dt><dd>one continuous south-to-north corridor</dd></div>
            <div><dt>3 roles</dt><dd>local living, antiques high street and northern connection</dd></div>
            <div><dt>1 change</dt><dd>routine private-car storage no longer sets the street’s terms</dd></div>
          </dl>
        </div>
      </section>

      <section className="falk-principle" aria-label="Street proposition">
        <p>Parking-free is not access-free.</p>
        <span>Emergency access, deliveries, waste collection, disabled access, pick-up and drop-off, cycling and property access remain part of the street.</span>
      </section>

      <section className="falk-sections" aria-label="Three sections of Falk Miksa utca">
        {sections.map((section, index) => (
          <article className={`falk-section ${index % 2 ? "falk-section-reverse" : ""}`} key={section.number}>
            <div className="falk-section-copy">
              <p className="falk-kicker">{section.number} / {section.range}</p>
              <h2>{section.title}</h2>
              <p className="falk-statement">{section.statement}</p>
              <p>{section.body}</p>
            </div>
            <div className="falk-section-visual">
              <SceneSlider id={section.title} observed={section.observed} concept={section.concept} observedAlt={section.observedAlt} conceptAlt={section.conceptAlt} />
            </div>
          </article>
        ))}
      </section>

      <section className="falk-evening">
        <div className="falk-evening-copy">
          <p className="falk-kicker">After the shops close</p>
          <h2>A street with a second shift.</h2>
          <p>Falk should not turn its back on the evening. Gallery windows, the tram at the boulevard and a calmer public realm can make the walk home as present as the daytime trade.</p>
        </div>
        <figure>
          <img src="/media/change/falk-miksa/evening-tram.webp" alt="Illustrative evening view of Falk Miksa utca approaching the Grand Boulevard and tram network." />
        </figure>
        <figure>
          <img src="/media/change/falk-miksa/evening-square.webp" alt="Illustrative evening public space at the northern end of Falk Miksa utca." />
        </figure>
      </section>

      <section className="falk-honesty">
        <p className="falk-kicker">Honest limits</p>
        <h2>A street study, not a construction plan.</h2>
        <p>The existing street, its buildings and its local roles are the starting point. The future images show an illustrative public-realm direction. Exact dimensions, servicing arrangements and delivery operations would require a surveyed design and public process.</p>
        <a href="#top">Back to the top ↑</a>
      </section>
    </main>
  );
}
