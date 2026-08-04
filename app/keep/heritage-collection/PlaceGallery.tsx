"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { heritagePlaces } from "./data";
import { heritageGalleries } from "./galleries";

type PlaceGalleryProps = {
  placeId: string;
};

export function PlaceGallery({ placeId }: PlaceGalleryProps) {
  const placeIndex = heritagePlaces.findIndex((candidate) => candidate.id === placeId);
  const place = heritagePlaces[placeIndex];
  const plates = heritageGalleries[placeId] ?? [];
  const previousPlace = placeIndex > 0 ? heritagePlaces[placeIndex - 1] : null;
  const nextPlace = placeIndex < heritagePlaces.length - 1 ? heritagePlaces[placeIndex + 1] : null;
  const filmstripRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!place || plates.length === 0) {
    throw new Error(`Missing heritage place or gallery: ${placeId}`);
  }

  const placeRoute = (id: string) => `/keep/heritage-collection/${id}`;

  const moveFilmstrip = (direction: -1 | 1) => {
    const track = filmstripRef.current;
    if (!track) return;

    const nextSlide = Math.max(0, Math.min(plates.length - 1, currentSlide + direction));
    const target = track.children[nextSlide] as HTMLElement | undefined;
    if (!target) return;

    const paddingLeft = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: target.offsetLeft - paddingLeft, behavior: "smooth" });
    setCurrentSlide(nextSlide);
  };

  const syncCurrentSlide = () => {
    const track = filmstripRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const paddingLeft = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const nextSlide = Array.from(track.children).reduce(
      (nearest, child, index) => {
        const distance = Math.abs(child.getBoundingClientRect().left - trackLeft - paddingLeft);
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;

    if (nextSlide !== currentSlide) setCurrentSlide(nextSlide);
  };

  const handleFilmstripKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveFilmstrip(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveFilmstrip(1);
    }
  };

  return (
    <>
      <SiteHeader activeSection="Keep" />

      <main className={`heritage-page heritage-place-page ${place.plusOne ? "heritage-plus-one-page" : ""}`}>
        <nav className="heritage-chapter-nav" aria-label={`${place.title} navigation`}>
          <a href="/keep/heritage-collection">← Collection index</a>
          <span>{String(placeIndex + 1).padStart(2, "0")} / 15 · {place.title}</span>
          <div>
            {previousPlace && <a href={placeRoute(previousPlace.id)}>← Previous</a>}
            <a href={nextPlace ? placeRoute(nextPlace.id) : "/#change"}>
              {nextPlace ? "Next place →" : "Next: Change →"}
            </a>
          </div>
        </nav>

        <header className="heritage-place-intro">
          <div className="heritage-place-title">
            <p className="heritage-place-meta">{place.meta}</p>
            <h1
              className={`${place.title.length > 17 ? "is-long" : ""} ${placeId === "savings" ? "is-compound" : ""}`.trim() || undefined}
              lang="hu"
            >
              {placeId === "savings" ? <>Postatakarék<wbr />pénztár</> : place.title}
            </h1>
            <p className="heritage-place-lede">{place.lede}</p>
          </div>

          <div className="heritage-place-body">
            {place.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <aside className="heritage-personal-note">
            <span>A personal note</span>
            <p>Reserved for Gábor’s memory of this place, and why it belongs in the collection.</p>
          </aside>
        </header>

        <section className="heritage-filmstrip" aria-labelledby={`${placeId}-filmstrip-title`}>
          <h2 id={`${placeId}-filmstrip-title`} className="sr-only">{place.title} image gallery</h2>

          <button
            type="button"
            className={`heritage-filmstrip-arrow previous ${currentSlide > 0 ? "is-available" : ""}`}
            onClick={() => moveFilmstrip(-1)}
            disabled={currentSlide === 0}
            aria-label={`Previous ${place.title} image`}
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className={`heritage-filmstrip-arrow next ${currentSlide < plates.length - 1 ? "is-available" : ""}`}
            onClick={() => moveFilmstrip(1)}
            disabled={currentSlide === plates.length - 1}
            aria-label={`Next ${place.title} image`}
          >
            <span aria-hidden="true">→</span>
          </button>

          <div
            className="heritage-filmstrip-track"
            ref={filmstripRef}
            tabIndex={0}
            onKeyDown={handleFilmstripKey}
            onScroll={syncCurrentSlide}
            aria-label={`${place.title} architectural plates`}
          >
            {plates.map((plate, index) => (
              <figure className="heritage-filmstrip-card" key={plate.image}>
                <img
                  src={plate.image}
                  alt={`${place.title} architectural plate ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")} / {String(plates.length).padStart(2, "0")}</span>
                  {plate.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className="heritage-place-footer">
          {previousPlace ? (
            <a href={placeRoute(previousPlace.id)}>← Previous: {previousPlace.title}</a>
          ) : (
            <span>Start of the collection</span>
          )}
          <a href="/keep/heritage-collection">All fifteen places</a>
          <a href={nextPlace ? placeRoute(nextPlace.id) : "/#change"}>
            {nextPlace ? `Next: ${nextPlace.title} →` : "Continue to Change →"}
          </a>
        </footer>
      </main>
    </>
  );
}
