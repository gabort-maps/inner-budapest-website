"use client";

import { PointerEvent, useRef, useState } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { changeCards, facts, keepCards, nowCards, whyCards } from "./content/site-registry";

const MIN_GAP = 8;

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [splitA, setSplitA] = useState(33);
  const [splitB, setSplitB] = useState(67);
  const [active, setActive] = useState<"a" | "b" | null>(null);
  const [interacted, setInteracted] = useState(false);
  const [columboSplit, setColumboSplit] = useState(50);

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

  const pointerPercent = (event: PointerEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    return clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
  };

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>, handle = active) => {
    const value = pointerPercent(event);
    if (handle === "a") setSplitA(clamp(value, 3, splitB - MIN_GAP));
    if (handle === "b") setSplitB(clamp(value, splitA + MIN_GAP, 97));
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const value = pointerPercent(event);
    const handle = Math.abs(value - splitA) <= Math.abs(value - splitB) ? "a" : "b";
    setActive(handle);
    setInteracted(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event, handle);
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    setActive(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const centres = [splitA / 2, (splitA + splitB) / 2, (splitB + 100) / 2];
  const widths = [splitA, splitB - splitA, 100 - splitB];

  return (
    <>
      <SiteHeader />

      <main id="top" className="opening">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">Inner Budapest, a neighbourhood manifesto</p>
          <div className="intro-line">
            <h1 id="page-title">It&apos;s not car-free. It&apos;s parking-free.</h1>
            <p>A personal case for returning public space to everyday neighbourhood life by 2035.</p>
          </div>
        </section>

        <section className="hero" aria-label="Katona József utca, three development stages">
          <div
            ref={stageRef}
            className={`stage ${active ? "dragging" : ""} ${interacted ? "interacted" : ""}`}
            style={{ "--split-a": `${splitA}%`, "--split-b": `${splitB}%` } as React.CSSProperties}
            onPointerDown={startDrag}
            onPointerMove={(event) => active && updateFromPointer(event)}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
          >
            <div className="layer layer-1" aria-hidden="true" />
            <div className="layer layer-2" aria-hidden="true" />
            <div className="layer layer-3" aria-hidden="true" />

            {["Original", "Redesigned street", "Street + bridge"].map((label, index) => (
              <div
                className="stage-label"
                key={label}
                style={{ left: `${centres[index]}%`, opacity: widths[index] < 12 ? 0 : 1 }}
              >
                <span>{index + 1}</span> {label}
              </div>
            ))}

            <div className="divider divider-a" aria-hidden="true">
              <div className="handle"><span>‹</span><b>1|2</b><span>›</span></div>
            </div>
            <div className="divider divider-b" aria-hidden="true">
              <div className="handle"><span>‹</span><b>2|3</b><span>›</span></div>
            </div>
            <div className="drag-hint">Drag either divider</div>
          </div>
        </section>

        <section className="facts" aria-label="Four facts about the neighbourhood">
          {facts.map(([number, label]) => (
            <article className="fact" key={number}>
              <strong>{number}</strong>
              <p>{label}</p>
            </article>
          ))}
        </section>
      </main>

      <section className="why-section" id="why" aria-labelledby="why-title">
        <header className="why-heading">
          <p className="eyebrow">01 / Why</p>
          <h2 id="why-title">Personal manifesto</h2>
        </header>

        <div className="why-list" aria-label="Explore the Why section">
          {whyCards.map((card) => {
            const cardContent = (
              <>
              <div className={`why-image-placeholder ${card.id === "the-polygon-introduction" ? "polygon-thumbnail-wrap" : card.id === "manifesto-opening" ? "manifesto-thumbnail-wrap" : ""}`} aria-label={card.id === "the-polygon-introduction" ? "Inner Pest polygon identity" : card.id === "manifesto-opening" ? "Movement is a need. Storage is a habit." : `Image placeholder for ${card.title}`}>
                {card.id === "the-polygon-introduction" ? (
                  <img
                    className="polygon-card-thumbnail"
                    src="/polygon-logo-evidence.svg"
                    alt="Evidence-led identity mark of the eight-part Inner Pest polygon"
                  />
                ) : card.id === "manifesto-opening" ? (
                  <img
                    className="manifesto-card-thumbnail"
                    src="/manifesto-thumbnail.svg"
                    alt="Movement is a need. Storage is a habit."
                  />
                ) : (
                  <small>In preparation</small>
                )}
                <span>{card.number}</span>
              </div>
              <div className="why-card-copy">
                <p className="why-card-label">Essay {card.number}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="why-card-link" aria-hidden="true">{card.href ? "Read the chapter →" : "In preparation"}</span>
              </div>
              </>
            );
            return card.href ? (
              <a className="why-card" id={card.id} href={card.href} key={card.id}>{cardContent}</a>
            ) : (
              <article className="why-card is-coming-soon" id={card.id} key={card.id}>{cardContent}</article>
            );
          })}
        </div>
      </section>

      <section className="now-section" id="now" aria-labelledby="now-title">
        <header className="now-heading">
          <p className="eyebrow">02 / Now</p>
          <h2 id="now-title">What is here now.</h2>
        </header>

        <div className="now-grid" aria-label="Explore the Now section">
          {nowCards.map((card, index) => {
            const cardContent = (
              <>
              <div className="now-image-placeholder" aria-label={`Image placeholder for ${card.title}`}>
                {card.image ? (
                  <img
                    className="now-card-thumbnail"
                    src={card.image}
                    alt="Map of the Inner Budapest study polygon and its transport network"
                  />
                ) : (
                  <small>In preparation</small>
                )}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="now-card-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              </>
            );
            return card.href ? (
              <a className="now-card" id={card.id} href={card.href} key={card.id}>{cardContent}</a>
            ) : (
              <article className="now-card is-coming-soon" id={card.id} key={card.id}>{cardContent}</article>
            );
          })}
        </div>
      </section>

      <section className="keep-section" id="keep" aria-labelledby="keep-title">
        <header className="keep-heading">
          <p className="eyebrow">03 / Keep</p>
          <h2 id="keep-title">What should definitely stay!</h2>
        </header>

        <div className="keep-hero">
          <img
            src="/media/keep-hero.webp"
            alt="Illustrated aerial portrait of Budapest, highlighting the Danube and landmark buildings"
          />
        </div>

        <div className="keep-grid" aria-label="Explore the Keep section">
          {keepCards.map((card, index) => {
            const cardContent = (
              <>
              <div className="keep-card-image">
                <img src={card.image} alt={`Architectural view for ${card.title}`} />
                <span className="keep-card-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="keep-card-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span className="keep-card-arrow" aria-hidden="true">{card.href ? "→" : "In preparation"}</span>
              </>
            );
            return card.href ? (
              <a className="keep-card" id={card.id} href={card.href} key={card.id}>{cardContent}</a>
            ) : (
              <article className="keep-card is-coming-soon" id={card.id} key={card.id}>{cardContent}</article>
            );
          })}
        </div>
      </section>

      <section className="change-section" id="change" aria-labelledby="change-title">
        <header className="change-heading">
          <p className="eyebrow">04 / Change</p>
          <h2 id="change-title">What I am changing</h2>
        </header>

        <div className="change-heroes">
          <figure className="change-hero">
            <img
              src="/media/keep-bridge.webp"
              alt="Illustrated map of three Inner Budapest streets and a future bridge concept"
            />
          </figure>
          <figure
            className="change-hero columbo-slider"
            style={{ "--columbo-split": `${columboSplit}%` } as React.CSSProperties}
          >
            <img
              className="columbo-before"
              src="/media/columbo-before.webp"
              alt="Falk Miksa utca and the Columbo statue today"
            />
            <img
              className="columbo-after"
              src="/media/columbo-after.webp"
              alt="Illustrative proposal showing Columbo with a larger pedestrian street"
            />
            <span className="columbo-label columbo-label-before">Observed</span>
            <span className="columbo-label columbo-label-after">Concept</span>
            <span className="columbo-divider" aria-hidden="true">
              <b>‹ ›</b>
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={columboSplit}
              onChange={(event) => setColumboSplit(Number(event.target.value))}
              aria-label="Compare the observed and proposed Columbo streetscape"
            />
          </figure>
        </div>

        <div className="change-grid" aria-label="Explore the Change section">
          {changeCards.map((card, index) => {
            const cardContent = (
              <>
              <div className="change-card-image" aria-label={`Image placeholder for ${card.title}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {card.image ? (
                  <img src={card.image} alt="Illustrated portrait of the three Change street chapters" />
                ) : (
                  <small>In preparation</small>
                )}
              </div>
              <div className="change-card-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              </>
            );
            return card.href ? (
              <a className="change-card" id={card.id} href={card.href} key={card.id}>{cardContent}</a>
            ) : (
              <article className="change-card is-coming-soon" id={card.id} key={card.id}>{cardContent}</article>
            );
          })}
        </div>
      </section>

      <section className="build-section" id="build" aria-labelledby="build-title">
        <p className="eyebrow">05 / Build</p>
        <h2 id="build-title">How the neighbourhood gets there.</h2>
        <p>
          The next chapters will turn the street ideas into practical choices, sequencing, costs and measures that can be tested in public.
        </p>
        <span>In preparation</span>
      </section>
    </>
  );
}
