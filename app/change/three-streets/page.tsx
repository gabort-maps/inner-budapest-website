import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Three streets I know | My neighbourhood",
  description:
    "Three short Inner Budapest streets used as lived tests for returning kerb space to neighbourhood life.",
};

const streets = [
  {
    id: "falk-miksa",
    number: "01",
    name: "Falk Miksa utca",
    proposition: "Bring daily life back",
    image: "/media/change/falk-miksa-vision.webp",
    imageAlt:
      "Illustrative evening vision of a green, pedestrian-priority Falk Miksa utca with galleries and everyday street life",
    body:
      "I was born here, when Falk still felt primarily residential. Its antiques trade now gives the street a distinctive cultural identity, but parts of it become remarkably quiet outside business hours. The proposal is to strengthen the cultural street while restoring ordinary daily life around it.",
  },
  {
    id: "pozsonyi",
    number: "02",
    name: "Pozsonyi út",
    proposition: "Make room for what already works",
    image: "/media/change/pozsonyi-vision.webp",
    imageAlt:
      "Illustrative evening vision of Pozsonyi út with trolleybus, local shops, trees, terraces and people walking",
    body:
      "Pozsonyi already has residents, everyday shops, cafés, mature trees, a major park and public transport. Its problem is not a lack of activity. The proposal is one of restraint: retain the trolleybuses and necessary access, then give more room to the life already there.",
  },
  {
    id: "katona",
    number: "03",
    name: "Katona József utca",
    proposition: "Make a connection",
    image: "/media/change/katona-vision.webp",
    imageAlt:
      "Illustrative daytime vision of Katona József utca as a green walking and cycling street with a small neighbourhood shuttle",
    body:
      "Katona could become a calmer walking and cycling line between Nyugati, Újlipótváros and the Danube. At the river, that practical street idea meets a deliberate dream: a pedestrian and cycling bridge to Margaret Island. Its technical feasibility is not assumed here.",
  },
] as const;

export default function ThreeStreetsPage() {
  return (
    <>
      <SiteHeader activeSection="Change" />

      <main className="three-streets-page">
        <nav className="three-streets-nav" aria-label="Three streets chapter navigation">
          <Link href="/#change">04 / Change</Link>
          <span>Three streets I know</span>
          <div>
            <a href="#shared-condition">Shared condition</a>
            <a href="#three-answers">Three answers</a>
            <a href="#shared-rule">Shared rule</a>
          </div>
        </nav>

        <section className="change-story-panel change-story-opening" id="three-streets-opening" aria-labelledby="three-streets-title">
          <div className="change-opening-copy">
            <p className="change-story-kicker">The city under revision</p>
            <h1 id="three-streets-title">Three streets I know</h1>
            <p className="change-story-standfirst">
              I chose these streets for a thoroughly personal reason: I have lived on all of them, long enough to know their corners early in the morning and late at night.
            </p>
            <p className="change-story-body">
              They are not a representative sample, nor the streets a model ranked first. There could have been others. These are mine.
            </p>

            <dl className="change-opening-facts" aria-label="Scale of the three-street study">
              <div><dt>3</dt><dd>streets</dd></div>
              <div><dt>≈ 2.2 km</dt><dd>combined length</dd></div>
              <div><dt>10</dt><dd>design sections, including the bridge concept</dd></div>
            </dl>
          </div>

          <figure className="change-map-figure">
            <div className="change-map-frame">
              <img
                src="/media/change/three-streets-map-future-bridge-v0-2.webp"
                alt="Tilted map of Inner Budapest showing Falk Miksa utca, Katona József utca, Pozsonyi út and a dotted future bridge concept"
              />
              <span className="change-map-prompt">Select a street</span>
              <a className="change-map-hotspot map-falk" href="#falk-miksa" aria-label="Go to Falk Miksa utca"><span>Falk Miksa</span></a>
              <a className="change-map-hotspot map-pozsonyi" href="#pozsonyi" aria-label="Go to Pozsonyi út"><span>Pozsonyi</span></a>
              <a className="change-map-hotspot map-katona" href="#katona" aria-label="Go to Katona József utca"><span>Katona József</span></a>
            </div>
            <figcaption>
              <strong>Connection map</strong>
              <span>Verified route geometry. Section boundaries are interpretive. The dotted bridge is a concept.</span>
            </figcaption>
          </figure>
        </section>

        <section className="change-story-panel change-shared-panel" id="shared-condition" aria-labelledby="shared-condition-title">
          <div className="change-shared-copy">
            <p className="change-story-kicker">Similar enough to compare</p>
            <h2 id="shared-condition-title">The space exists. The allocation is the question.</h2>
            <p>
              None of the three is an arterial motor route. All are exceptionally well connected to public transport, although only Pozsonyi carries public transport directly along the street.
            </p>
            <p>
              Their pavements work, but leave little room for staying. Meanwhile, parking commonly occupies both kerbs, including long stretches of diagonal parking on the wider streets.
            </p>
            <aside>
              This 20 metre section represents the broad Falk and Pozsonyi condition. Katona is narrower and requires a different street-by-street section.
            </aside>
          </div>

          <figure className="change-section-figure">
            <img
              src="/media/change/existing-20m-street-section.webp"
              alt="Indicative transverse section of a 20 metre one-way street with 2.5 metre pavements, two 5.5 metre bands of 60 degree parking and a 4 metre carriageway"
            />
            <figcaption>
              <span><b>20 m</b> building to building</span>
              <span><b>15 m</b> movement and car storage</span>
              <span><b>75%</b> of the indicative width</span>
            </figcaption>
          </figure>
        </section>

        <section className="change-story-panel change-answers-panel" id="three-answers" aria-labelledby="three-answers-title">
          <header className="change-panel-heading">
            <div>
              <p className="change-story-kicker">Different enough to require different answers</p>
              <h2 id="three-answers-title">Three streets. Three different edits.</h2>
            </div>
            <p>A short street can still contain several neighbourhoods. The proposals work section by section, not from one standard template.</p>
          </header>

          <div className="change-street-cards" aria-label="The three selected streets">
            {streets.map((street) => (
              <article className={`change-street-card street-${street.id}`} id={street.id} key={street.id}>
                <figure>
                  <img src={street.image} alt={street.imageAlt} />
                  <span>{street.number}</span>
                  <figcaption>Illustrative vision, AI-generated</figcaption>
                </figure>
                <div>
                  <p>{street.proposition}</p>
                  <h3>{street.name}</h3>
                  <p>{street.body}</p>
                  <small>Detailed street chapter follows next</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="change-story-panel change-rule-section" id="shared-rule" aria-labelledby="shared-rule-title">
          <div className="change-rule-main">
            <p className="change-story-kicker">One principle shared by all three</p>
            <h2 id="shared-rule-title">Parking-free is not access-free.</h2>
            <p className="change-rule-lede">
              The practical functions of a street remain. What changes is the assumption that both kerbs should be continuously occupied by stored private vehicles.
            </p>

            <div className="change-rule-columns">
              <div>
                <h3>Stays</h3>
                <p>Public transport, emergency access, waste collection, deliveries, removals, disabled access, passenger pick-up and drop-off, property access and cycling.</p>
              </div>
              <div>
                <h3>Changes</h3>
                <p>Routine private-car storage stops being the default use of both kerbs. Each released metre receives a street-specific purpose.</p>
              </div>
            </div>
          </div>

          <aside className="change-bridge-note">
            <p className="change-story-kicker">Future horizon</p>
            <h3>The bridge stays a dream here.</h3>
            <p>
              It appears on the map because it completes Katona&apos;s imagined connection to Margaret Island. This page makes no engineering claim. Feasibility, navigation clearance, gradients and cost belong to the later bridge chapter.
            </p>
            <a href="#katona">Return to Katona ↑</a>
          </aside>

          <footer className="change-honesty-note">
            <p>
              <strong>Honest limits.</strong> These are imagined examples, not construction plans. Widths are approximate, future images are illustrative, and the bridge is a concept rather than an engineering proposal.
            </p>
            <nav aria-label="Return to a street">
              <a href="#falk-miksa">Falk Miksa</a>
              <a href="#pozsonyi">Pozsonyi</a>
              <a href="#katona">Katona József</a>
            </nav>
          </footer>
        </section>
      </main>
    </>
  );
}
