import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { heritagePlaces } from "./data";

export default function HeritageCollectionPage() {
  return (
    <>
      <SiteHeader activeSection="Keep" />

      <main className="heritage-page">
        <nav className="heritage-chapter-nav" aria-label="Heritage collection navigation">
          <Link href="/#keep">← 03 / Keep</Link>
          <span>03 / My Heritage collection</span>
          <div>
            <a href="#collection">Collection index</a>
            <Link href="/#change">Next: Change →</Link>
          </div>
        </nav>

        <header className="heritage-collection-intro">
          <div className="heritage-collection-title">
            <p className="eyebrow">A personal walking archive</p>
            <h1>My Heritage <em>collection</em></h1>
          </div>
          <div className="heritage-collection-copy">
            <p>
              Fourteen places on my way home, and one that is not. Some are famous. That is not why they are here.
              Together they show how Budapest repeatedly built extraordinary things to solve ordinary problems.
            </p>
            <p>
              This is the collection index. Each place opens into its own image-led story, with every architectural
              plate kept together in one horizontal sequence.
            </p>
          </div>
        </header>

        <section className="heritage-index-section" id="collection" aria-labelledby="collection-title">
          <header className="heritage-index-heading">
            <div>
              <p className="eyebrow">The cabinet</p>
              <h2 id="collection-title">Fourteen, plus one.</h2>
            </div>
            <p>
              Fifteen places, shown once. Personal notes and the final texts remain reserved for the next editorial pass.
            </p>
          </header>

          <div className="heritage-index" role="list">
            {heritagePlaces.map((place) => {
              const card = (
                <>
                  <span className="heritage-index-number">{place.label}</span>
                  <span className="heritage-index-image">
                    <img src={place.image} alt={`Architectural collage of ${place.title}`} />
                  </span>
                  <span className="heritage-index-copy">
                    <strong>{place.title}</strong>
                    <small>{place.where}</small>
                  </span>
                  <span className="heritage-open-tag">Open the collection →</span>
                  {place.plusOne && <span className="heritage-build-tag">Outside the polygon</span>}
                </>
              );

              return (
                <Link
                  href={`/keep/heritage-collection/${place.id}`}
                  className={`heritage-index-card is-live ${place.plusOne ? "plus-one" : ""}`}
                  key={place.id}
                  role="listitem"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        </section>

        <footer className="heritage-page-footer">
          <div>
            <p className="eyebrow">The collection remains open</p>
            <h2>The documented city first. The personal memory next.</h2>
          </div>
          <p>
            Every place page reserves room for a personal note, while keeping its complete image batch together in one
            horizontal sequence.
          </p>
          <div className="heritage-footer-links">
            <Link href="/#keep">← Back to Keep</Link>
            <Link href="/#change">Continue to Change →</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
