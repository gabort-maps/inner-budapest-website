import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { EvidenceMapEmbed } from "../../modules/EvidenceMapEmbed";

export default function EvidenceMapsPage() {
  return (
    <>
      <SiteHeader activeSection="Now" />

      <main className="evidence-page">
        <nav className="evidence-chapter-nav" aria-label="Evidence maps chapter navigation">
          <Link href="/#now">← Now</Link>
          <span>02 / Now · 06 / Evidence maps</span>
          <Link href="/">My neighbourhood</Link>
        </nav>

        <div className="evidence-page-grid">
          <section className="evidence-map-frame" aria-label="Interactive Budapest evidence maps version 1.6">
            <EvidenceMapEmbed />
          </section>

          <aside className="evidence-intro">
            <div>
              <p className="evidence-kicker">02 / Now · Evidence maps</p>
              <h1>Nine Layers, One Neighbourhood</h1>
              <p>
                Nine layers, one map, all drawn on the same measured street network — 120 kilometres of it, not a guess.
                Walking distance to food, school, a doctor, a park. The public-transport network. Where the parking actually
                sits, on street and off.
              </p>
              <p>
                Where a number is counted, this map says so. Where it&apos;s modelled or estimated instead, it says that too.
                Nothing here is decoration. Every figure can be checked, and every gap is stated honestly rather than
                papered over.
              </p>
              <p className="evidence-question">
                Do you really need a personal car, if you mostly stay within the polygon?
              </p>
            </div>

            <div className="evidence-intro-footer">
              <p>Choose a layer above the map, then adjust its evidence and distance controls in the narrow left rail.</p>
              <div>
                <Link href="/why/the-polygon">← The polygon</Link>
                <Link href="/#now">Explore Now →</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
