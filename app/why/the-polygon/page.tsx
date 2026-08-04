"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

type Mode = "parking" | "life";
type Point = [number, number];

type Zone = {
  id: string;
  name: string;
  anchor: string;
  identity: string;
  portrait: string[];
  coordinates: Point[];
  parking: string[];
  life: string[];
  rhythm: string[];
  nested?: boolean;
};

const times = ["00:00–06:00", "06:00–12:00", "12:00–18:00", "18:00–24:00"];
const timeNames = ["Night", "Morning", "Daytime", "Evening"];

const zones: Zone[] = [
  {
    id: "P1", name: "Park Republic", anchor: "Garam utca and Szent István Park",
    identity: "A calm interwar apartment neighbourhood where park life and local routines give central density a domestic rhythm.",
    portrait: [
      "This is where I would begin in the morning. The park, schools, bakeries and small errands make a dense part of Pest feel recognisably neighbourly.",
      "The streets are never empty, but their pace is local. Children, older residents, dog walkers and people carrying shopping give the public realm its character.",
    ],
    coordinates: [[19.0524545,47.5224675],[19.0510812,47.5206417],[19.0496436,47.5186274],[19.0482745,47.5167001],[19.058188,47.5135118],[19.0589991,47.5146566],[19.0594712,47.5156566],[19.0602866,47.5176275],[19.0615526,47.5203809]],
    parking: ["Difficult","Difficult","Moderate","Difficult"], life: ["Quiet","Local","Local","Local"],
    rhythm: ["Late homecomings and a quiet park edge","School runs, bakeries and dog walkers","Park use, errands and local services","Terraces, park walks and neighbours"],
  },
  {
    id: "P2", name: "River Hinge", anchor: "Jászai Mari tér and southern Újlipótváros",
    identity: "A tram-and-river gateway that remains Újlipótváros's social front room, with cafés and local life around the movement.",
    portrait: [
      "Jászai Mari tér is both a threshold and a meeting place. Trams, bridge traffic and the river bring the wider city through a space that residents also use as their front room.",
      "Move a few streets north and the metropolitan rush softens quickly into cafés, groceries, doorways and familiar daily routines.",
    ],
    coordinates: [[19.0482745,47.5167001],[19.0464936,47.5136857],[19.0555916,47.5104682],[19.058188,47.5135118]],
    parking: ["Moderate","Difficult","Difficult","Very difficult"], life: ["Quiet","Citywide","Mixed","Mixed"],
    rhythm: ["Late bridge crossings and taxis","Tram interchange, breakfast and commuting","Park meetings, river movement and local errands","Dinner, terraces and the river promenade"],
  },
  {
    id: "P3", name: "The State Room", anchor: "Parliament and Szabadság tér",
    identity: "Budapest's civic and institutional core, grand by day but markedly under-lived after offices and galleries close.",
    portrait: [
      "Around Parliament and Szabadság tér, the city presents its formal face. Monumental buildings, institutions, visitors and security shape how the streets are used.",
      "The working day brings appointments, offices and deliveries. In the evening the architecture remains magnificent, but much of the everyday street population drains away.",
    ],
    coordinates: [[19.0464936,47.5136857],[19.0462038,47.5125553],[19.0459142,47.5113523],[19.0453992,47.5090768],[19.0446482,47.5058155],[19.0455708,47.5017423],[19.0549264,47.502641],[19.0555916,47.5104682]],
    parking: ["Easy","Very difficult","Very difficult","Easy"], life: ["Quiet","Citywide","Citywide","Quiet"],
    rhythm: ["Quiet institutional streets and hotel return","Government, law, Parliament and office arrivals","Appointments, galleries, visitors and deliveries","Office exit, selective dining and a sharp fall in activity"],
  },
  {
    id: "P4", name: "The Grand Room", anchor: "Basilica, Deák and the ceremonial centre",
    identity: "The most concentrated piece of central Pest, where monuments, hotels, shopping, offices and apartment entrances overlap.",
    portrait: [
      "This is the Budapest many visitors arrive expecting to see. The Basilica, Deák tér and the ceremonial streets pull tourism, commerce, work and culture into a remarkably compact area.",
      "Yet people also live above the restaurants and behind the hotel entrances. The tension between destination and neighbourhood is visible on almost every block.",
    ],
    coordinates: [[19.0455708,47.5017423],[19.0472553,47.4976035],[19.0510533,47.4917173],[19.0597866,47.4944285],[19.0590141,47.4958203],[19.0548299,47.4977484],[19.0549264,47.502641]],
    parking: ["Moderate","Very difficult","Very difficult","Difficult"], life: ["Mixed","Citywide","Citywide","Citywide"],
    rhythm: ["Hotels, cleaning and late visitor movement","Sightseeing, offices and shops opening","Maximum retail, visitor and café intensity","Dining, culture and the illuminated centre"],
  },
  {
    id: "P5", name: "The Inner Weave", anchor: "Váci, Ferenciek and Károlyi Garden",
    identity: "A layered mesh of visitor routes, older homes and local streets where one block can be crowded and the next quietly domestic.",
    portrait: [
      "The Inner Weave is best understood by turning corners. A busy walking route can give way, within one block, to a garden edge, a school entrance or a quiet residential doorway.",
      "Its atmosphere comes from overlap rather than one dominant use: visitors pass through, residents stay, and small institutions keep the inner streets useful throughout the day.",
    ],
    coordinates: [[19.0510533,47.4917173],[19.0565465,47.4865699],[19.0600012,47.4882084],[19.0607736,47.4887159],[19.0614817,47.4890784],[19.0618251,47.4896004],[19.0615247,47.4911373],[19.0609453,47.4924857],[19.0597866,47.4944285]],
    parking: ["Difficult","Difficult","Difficult","Very difficult"], life: ["Quiet","Mixed","Mixed","Mixed"],
    rhythm: ["Residents, hotel returns and a quieter inner grid","Coffee, school, services and visitor walking","Shopping, garden use and cross-city walking","Dinner streets and homeward residents"],
  },
  {
    id: "P6", name: "The Daily City", anchor: "Market Hall, Kálvin and inner Ferencváros",
    identity: "The practical central city, shaped by food, universities, transit and the exchange between the centre and inner Ferencváros.",
    portrait: [
      "The Daily City gets to work early. Market logistics, university timetables, trams, buses and food businesses make its streets purposeful rather than ceremonial.",
      "It connects the historic centre to inner Ferencváros, so local life and citywide movement continually share the same pavements and kerbs.",
    ],
    coordinates: [[19.0565465,47.4865699],[19.0569971,47.4861929],[19.0582416,47.4851198],[19.0607093,47.4833362],[19.0650866,47.4800589],[19.0659235,47.4802474],[19.0669105,47.4807405],[19.0680049,47.481422],[19.0698502,47.4859029],[19.0618251,47.4896004],[19.0614817,47.4890784],[19.0607736,47.4887159],[19.0600012,47.4882084]],
    parking: ["Moderate","Very difficult","Difficult","Difficult"], life: ["Quiet","Citywide","Citywide","Mixed"],
    rhythm: ["Market logistics and early service work","Market trade, students and commuter arrivals","University, lunch, transit and food economy","Ráday dining and journeys home"],
  },
  {
    id: "P7", name: "The Courtyard Quarter", anchor: "Inner Erzsébet, memory and residential city",
    identity: "A dense, lived-in quarter of memory, institutions, courtyards and everyday services, with visitor pressure but not defined by nightlife alone.",
    portrait: [
      "Behind the street façades is a second city of courtyards, institutions and homes. This is a lived-in district first, even where visitor routes and cultural destinations pass through it.",
      "Its streets carry memory as well as daily commerce. The challenge is to make room for ordinary residential life without freezing the quarter in the past.",
    ],
    coordinates: [[19.0618251,47.4896004],[19.0615247,47.4911373],[19.0609453,47.4924857],[19.0597866,47.4944285],[19.0626898,47.4948126],[19.0652218,47.4954505],[19.0701142,47.4970162],[19.0703717,47.4962624],[19.0706721,47.4948416],[19.0707579,47.4936237],[19.070715,47.4922899],[19.0703288,47.490086],[19.0700713,47.4879111],[19.0698502,47.4859029]],
    parking: ["Difficult","Difficult","Difficult","Difficult"], life: ["Quiet","Local","Mixed","Mixed"],
    rhythm: ["Quiet residential blocks and late returns","Institutions, coffee and local errands","Culture, food and everyday residential use","Local dining and visitor activity"],
  },
  {
    id: "P8", name: "The Switchboard", anchor: "Nyugati, Oktogon and the theatre belt",
    identity: "Budapest's metropolitan distributor, where station arrivals, boulevards, theatre, offices, hotels and side-street life meet.",
    portrait: [
      "Nyugati and Oktogon distribute people across Budapest. Rail passengers, office workers, shoppers and theatre audiences arrive in different waves, keeping the area in almost constant transition.",
      "The boulevards feel metropolitan, but the side streets quickly return to apartment houses, small businesses and the compromises of everyday central-city living.",
    ],
    coordinates: [[19.0555916,47.5104682],[19.0549264,47.502641],[19.0548299,47.4977484],[19.0590141,47.4958203],[19.0597866,47.4944285],[19.0626898,47.4948126],[19.0652218,47.4954505],[19.0701142,47.4970162],[19.0689194,47.4998893],[19.0672457,47.5017738],[19.0651428,47.5035713],[19.0634262,47.5050208],[19.0619242,47.5060355],[19.0597784,47.5076589],[19.0577614,47.5089634]],
    parking: ["Moderate","Very difficult","Very difficult","Difficult"], life: ["Mixed","Citywide","Citywide","Citywide"],
    rhythm: ["Late station arrivals and hotel movement","Rail commuters, office peak and shop opening","Retail, offices, theatre district and transfers","Theatre audiences, dinner and return journeys"],
  },
  {
    id: "P9", name: "The Night Quarter", anchor: "Király, Gozsdu and Kazinczy-side core",
    identity: "The compact late-night engine inside P8, where bars, restaurants, taxis, workers and residents negotiate the same narrow streets.",
    portrait: [
      "P9 is not extra territory. It is a night-time layer inside the Switchboard, included separately because its rhythm is so different after dark.",
      "Restaurants, bars, workers, taxis, waste collection and residents returning home all need the same narrow space. The argument here is not whether life should happen, but how many lives can coexist well.",
    ],
    coordinates: [[19.0553692,47.4975895],[19.057118,47.4967922],[19.0578905,47.4964152],[19.0585127,47.4961035],[19.0588131,47.4959803],[19.0598753,47.4970169],[19.0607658,47.4978142],[19.0617528,47.4986913],[19.0608516,47.4993292],[19.0602615,47.499909],[19.0599826,47.5001627],[19.0590063,47.4995466],[19.0571609,47.4985826]],
    parking: ["Very difficult","Difficult","Difficult","Very difficult"], life: ["Nightlife","Local","Mixed","Nightlife"],
    rhythm: ["Club exits, taxis, night workers and residents trying to get home","Clean-up, coffee and re-opening","Courtyard visitors, food and small commerce","Bars, restaurants, queues and the strongest late-night street life"], nested: true,
  },
];

const parkingValue: Record<string, number> = { Easy: 0, Moderate: 1, Difficult: 2, "Very difficult": 3 };
const lifeValue: Record<string, number> = { Quiet: 0, Local: 1, Mixed: 2, Citywide: 3, Nightlife: 3 };
const palette = ["#dce8e4", "#b6d0ca", "#729a95", "#244c51"];

function project([lon, lat]: Point) {
  return [80 + (lon - 19.0446482) * 20000, 650 - (lat - 47.4800589) * 13000];
}

function pathFor(coordinates: Point[]) {
  return `${coordinates.map((point, index) => {
    const [x, y] = project(point);
    return `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ")} Z`;
}

function centroid(coordinates: Point[]) {
  const points = coordinates.map(project);
  const total = points.reduce(([sx, sy], [x, y]) => [sx + x, sy + y], [0, 0]);
  return [total[0] / points.length, total[1] / points.length];
}

/* Legacy Polygon page retained below temporarily for source recovery.
function LegacyPolygonPage() {
  const [mode, setMode] = useState<Mode>("parking");
  const [timeIndex, setTimeIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("P1");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setTimeIndex((value) => (value + 1) % times.length), 1400);
    return () => window.clearInterval(timer);
  }, [playing]);

  const selected = useMemo(() => zones.find((zone) => zone.id === selectedId) ?? zones[0], [selectedId]);
  const fillFor = (zone: Zone) => {
    if (mode === "life" && zone.life[timeIndex] === "Nightlife") return "#a34e39";
    const value = mode === "parking" ? parkingValue[zone.parking[timeIndex]] : lifeValue[zone.life[timeIndex]];
    return palette[value];
  };

  return (
    <>
      <SiteHeader activeSection="Why" />

      <main className="polygon-page">
        <nav className="chapter-nav" aria-label="On this page">
          <Link href="/#why">01 / Why</Link>
          <span>Essay 02 of 03</span>
          <div>
            <a href="#boundary">Boundary</a>
            <a href="#nine-cities">Nine cities</a>
            <a href="#rhythm">Daily rhythm</a>
            <a href="#walk">Walk with me</a>
          </div>
        </nav>

        <header className="polygon-hero" id="boundary">
          <div className="polygon-hero-copy">
            <p className="eyebrow">The polygon</p>
            <h1>One Inner Pest.<br />Nine different cities.</h1>
            <p className="polygon-lead">
              This is the place I call my neighbourhood: a narrow, six-square-kilometre piece of central Pest that crosses district borders but works as one connected urban life.
            </p>
            <p className="polygon-thesis">
              It is unusually walkable already, and unusually short of space. That is why every parked car, delivery, tree, café chair, bench and pair of walking feet becomes part of the same argument.
            </p>
          </div>

          <figure className="boundary-figure">
            <img
              className="boundary-identity"
              src="/polygon-logo-evidence.svg"
              alt="Evidence-led identity mark showing the eight-part Inner Pest study polygon"
            />
            <figcaption>
              <span>Polygon identity</span>
              Eight measured parts, one connected neighbourhood. The geometry follows the project master boundary.
            </figcaption>
          </figure>

          <div className="polygon-facts" aria-label="Scale of the study area">
            <div><strong>6.06 km²</strong><span>fixed study area</span></div>
            <div><strong>≈95,000</strong><span>residents</span></div>
            <div><strong>4.72 km</strong><span>north to south</span></div>
            <div><strong>≈25 km</strong><span>mapped walking streets</span></div>
          </div>
          <p className="figure-source">SOURCE: fixed project KML and polygon facts register. Page figures are rounded. The 24.8 km walking-street measure remains subject to the project&apos;s stated definition caveat.</p>
        </header>

        <section className="scale-story" aria-labelledby="scale-title">
          <div>
            <p className="eyebrow">A useful mental map</p>
            <h2 id="scale-title">One neighbourhood. Many characters.</h2>
          </div>
          <div className="scale-copy">
            <p>This is not an administrative district. It is a piece of the city that makes sense on foot: large enough for the atmosphere to change several times, but connected enough to experience as one neighbourhood.</p>
            <p>A west-to-east crossing takes roughly 30 to 35 minutes. Walking from Garam utca to the southern edge takes 70 to 80 minutes, a proper city traverse rather than a short stroll.</p>
            <p>Along the way the river gateway becomes a civic centre, a visitor city, a market city, a courtyard city and a night city. Their needs are different, but they all compete for the same finite street space.</p>
            <Link className="text-link" href="/#the-place">Continue into the place evidence →</Link>
          </div>
        </section>

        <section className="rhythm-section" id="nine-cities" aria-labelledby="rhythm-title">
          <header className="rhythm-heading" id="rhythm">
            <div>
              <p className="eyebrow">Explore the nine areas</p>
              <h2 id="rhythm-title">Who is the street serving right now?</h2>
            </div>
            <p>The same street can feel full, empty, domestic or metropolitan within a few hours. Choose a time, switch the reading, then select an area.</p>
          </header>

          <div className="rhythm-tool">
            <div className="rhythm-controls">
              <div className="zone-switch" aria-label="Choose an area">
                {zones.map((zone) => (
                  <button type="button" key={zone.id} className={selectedId === zone.id ? "active" : ""} aria-pressed={selectedId === zone.id} onClick={() => setSelectedId(zone.id)}>
                    <span>{zone.id}</span>{zone.name}
                  </button>
                ))}
              </div>
              <div className="reading-controls">
                <div className="mode-switch" aria-label="Map reading">
                  <button type="button" className={mode === "parking" ? "active" : ""} aria-pressed={mode === "parking"} onClick={() => setMode("parking")}>Parking pressure</button>
                  <button type="button" className={mode === "life" ? "active" : ""} aria-pressed={mode === "life"} onClick={() => setMode("life")}>Street life</button>
                </div>
                <div className="time-switch" aria-label="Weekday time pocket">
                  {times.map((time, index) => (
                    <button key={time} type="button" className={timeIndex === index ? "active" : ""} aria-pressed={timeIndex === index} onClick={() => { setTimeIndex(index); setPlaying(false); }}>
                      <span>{timeNames[index]}</span>{time}
                    </button>
                  ))}
                </div>
                <button type="button" className="play-day" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? "Pause day" : "Play the day"}</button>
              </div>
            </div>

            <div className="rhythm-layout">
              <figure className="rhythm-map">
                <svg viewBox="0 0 720 700" role="img" aria-label={`${mode === "parking" ? "Parking pressure" : "Street life"} in Inner Pest, ${times[timeIndex]}`}>
                  <rect width="720" height="700" fill="#eee7da" />
                  {zones.map((zone) => (
                    <path
                      key={zone.id}
                      d={pathFor(zone.coordinates)}
                      fill={fillFor(zone)}
                      fillOpacity={zone.nested ? .72 : 1}
                      stroke={selectedId === zone.id ? "#102f31" : "#f7f2e8"}
                      strokeWidth={selectedId === zone.id ? 5 : zone.nested ? 3 : 2.5}
                      strokeDasharray={zone.nested ? "9 6" : undefined}
                      className="rhythm-area"
                      role="button"
                      tabIndex={0}
                      aria-label={`${zone.id}, ${zone.name}. ${mode === "parking" ? zone.parking[timeIndex] : zone.life[timeIndex]}`}
                      onClick={() => setSelectedId(zone.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedId(zone.id);
                        }
                      }}
                    />
                  ))}
                  {zones.map((zone) => {
                    const [x, y] = centroid(zone.coordinates);
                    return <text key={zone.id} x={x} y={y} textAnchor="middle" className="rhythm-zone-label" aria-hidden="true">{zone.id}</text>;
                  })}
                </svg>
                <figcaption>{mode === "parking" ? "Estimated relative legal on-street parking pressure" : "Estimated normal weekday street-life intensity"}, {times[timeIndex]}.</figcaption>
              </figure>

              <aside className="zone-detail" aria-live="polite">
                <div className="zone-detail-topline">
                  <span>{selected.id}</span>
                  <span>{selected.nested ? "Nested in P8" : "Primary area"}</span>
                </div>
                <h3>{selected.name}</h3>
                <p className="zone-anchor">{selected.anchor}</p>
                <p className="zone-deck">{selected.identity}</p>
                <div className="zone-portrait">
                  {selected.portrait.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <dl>
                  <div><dt>{timeNames[timeIndex]} street life</dt><dd>{selected.life[timeIndex]}</dd></div>
                  <div><dt>{timeNames[timeIndex]} parking</dt><dd>{selected.parking[timeIndex]}</dd></div>
                </dl>
                <p className="zone-rhythm">“{selected.rhythm[timeIndex]}.”</p>
              </aside>
            </div>

            <div className="map-legend" aria-label="Map legend">
              {mode === "parking" ? ["Easy", "Moderate", "Difficult", "Very difficult"].map((label, index) => <span key={label}><i style={{ background: palette[index] }} />{label}</span>) : ["Quiet", "Local", "Mixed", "Citywide", "Nightlife"].map((label, index) => <span key={label}><i style={{ background: label === "Nightlife" ? "#a34e39" : palette[Math.min(index, 3)] }} />{label}</span>)}
            </div>
            <p className="figure-source">GEOMETRY: observed project KML. RHYTHM: estimated normal weekday conditions. This is not live parking availability, measured occupancy or an administrative boundary.</p>
          </div>
        </section>

        <section className="shift-story" aria-labelledby="shift-title">
          <header>
            <p className="eyebrow">The clearest reversal</p>
            <h2 id="shift-title">The buildings stay. The street population changes.</h2>
          </header>
          <article>
            <div className="editorial-placeholder">
              <span>Image needed</span>
              <p>One fixed Szabadság tér viewpoint, photographed during the working-day peak and again after 18:00.</p>
            </div>
            <p className="shift-label">P3 / The State Room</p>
            <h3>Busy by day, released by evening.</h3>
            <p>Szabadság tér shows the institutional rhythm clearly. Offices, appointments, visitors and deliveries create strong daytime pressure. After work, demand falls sharply and the district loses much of its street life with it.</p>
          </article>
          <article>
            <div className="editorial-placeholder night">
              <span>Image needed</span>
              <p>One fixed Night Quarter viewpoint, photographed in late afternoon and after 22:00.</p>
            </div>
            <p className="shift-label">P9 / The Night Quarter</p>
            <h3>Quiet by day, contested after dark.</h3>
            <p>Here the pattern reverses. Evening and overnight demand sits on top of resident parking, while queues, taxis, deliveries, waste and people returning home compete for the same narrow street.</p>
          </article>
        </section>

        <section className="walk-section" id="walk" aria-labelledby="walk-title">
          <header className="walk-heading">
            <div>
              <p className="eyebrow">If you came with me</p>
              <h2 id="walk-title">I would introduce the polygon as a walk, not a boundary.</h2>
            </div>
            <div className="walk-lead">
              <p>I would begin where people live their ordinary morning, then cross the formal city, the visitor city and the practical city before ending where Budapest changes after dark.</p>
              <p>The point is not to collect landmarks. It is to notice how quickly the same neighbourhood changes its voice, and how every part asks something different from its streets.</p>
            </div>
          </header>

          <div className="walk-grid">
            <article>
              <span>01 / Morning</span>
              <h3>Szent István Park</h3>
              <p>Start with the neighbourhood at its most domestic: school runs, dogs, groceries, trees and familiar faces.</p>
            </article>
            <article>
              <span>02 / Working day</span>
              <h3>Szabadság tér</h3>
              <p>Walk into the formal city, where institutions and monumental space create a very different daily rhythm.</p>
            </article>
            <article>
              <span>03 / Late afternoon</span>
              <h3>The Market Hall</h3>
              <p>See the practical city at work, where food, transit, universities, deliveries and daily errands meet.</p>
            </article>
            <article>
              <span>04 / After dark</span>
              <h3>The Night Quarter</h3>
              <p>Finish where the pavement becomes most contested, and residents, visitors, workers and taxis share one narrow room.</p>
            </article>
          </div>

          <details className="evidence-note">
            <summary>How to read the evidence on this page</summary>
            <div>
              <p><strong>Observed:</strong> the fixed 6.060794 km² boundary, the P1–P8 partition and P9 nested inside P8 come from the project geometry.</p>
              <p><strong>Estimated:</strong> parking pressure and street-life states describe a normal weekday. They are directional, not measured occupancy or live availability.</p>
              <p><strong>Still open:</strong> the walking-street comparison remains conditional until the polygon and Budapest totals use exactly the same street definition.</p>
              <a className="data-link" href="https://drive.google.com/file/d/1QlF29iHPcjfe8_SmV9sNoX9TK8q4---h/view" target="_blank" rel="noreferrer">Open the underlying geometry ↗</a>
            </div>
          </details>
        </section>

        <nav className="chapter-footer" aria-label="Continue reading">
          <Link href="/#manifesto-opening"><span>Previous essay</span><strong>← Manifesto</strong></Link>
          <Link className="chapter-home" href="/#why"><span>Back to</span><strong>01 / Why</strong></Link>
          <Link className="next" href="/#how-to-read-the-numbers"><span>Next essay</span><strong>How to read the numbers →</strong></Link>
        </nav>
      </main>
    </>
  );
}
*/

export default function PolygonPage() {
  const [mode, setMode] = useState<Mode>("parking");
  const [timeIndex, setTimeIndex] = useState(1);
  const [selectedId, setSelectedId] = useState("P1");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setTimeIndex((value) => (value + 1) % times.length), 1400);
    return () => window.clearInterval(timer);
  }, [playing]);

  const selected = useMemo(() => zones.find((zone) => zone.id === selectedId) ?? zones[0], [selectedId]);
  const fillFor = (zone: Zone) => {
    if (mode === "life" && zone.life[timeIndex] === "Nightlife") return "#a34e39";
    const value = mode === "parking" ? parkingValue[zone.parking[timeIndex]] : lifeValue[zone.life[timeIndex]];
    return palette[value];
  };
  const setPocket = (index: number) => { setTimeIndex(index); setPlaying(false); };

  return (
    <>
      <SiteHeader activeSection="Why" />
      <main className="polygon-rebuild">
        <nav className="chapter-nav" aria-label="On this page">
          <Link href="/#why">01 / Why</Link>
          <span>Essay 02 of 03</span>
          <div>
            <a href="#where-we-are">Where we are</a>
            <a href="#nine-cities">Nine cities</a>
            <a href="#four-hours">Four hours</a>
          </div>
        </nav>

        <header className="polygon-opening" id="where-we-are">
          <div className="opening-title">
            <p className="eyebrow">01 / Why · Essay 02</p>
            <h1>Six Square<br />Kilometres</h1>
            <p className="opening-note">A walking account of a bounded piece of Inner Pest.</p>
          </div>
          <div className="opening-copy">
            <h2>Where we are</h2>
            <p>When somebody comes to visit, I do not start with a building.</p>
            <p>I start with the shape.</p>
            <p>We walk to the river first, because the river is the one edge nobody argues about. Then we turn and walk away from it, east, until the street gets wide and loud and full of trams. That is the other edge. The railway closes the top. Between those lines is the piece of city this whole thing is about.</p>
            <p>About six square kilometres. About 95,000 people. It crosses six districts, V, VI, VII, VIII, IX and XIII, and nobody who lives here thinks about that. I cross three of them before lunch and never notice.</p>
          </div>
          <figure className="opening-boundary">
            <img src="/polygon-logo-evidence.svg?v=3" alt="The approved eight-part Inner Budapest Polygon identity mark" />
            <figcaption><span>Inner Budapest Polygon</span>The exact six-square-kilometre study shape, read from the city rather than drawn around a preference.</figcaption>
          </figure>
        </header>

        <section className="essay-section narrow" id="edge">
          <h2>The edge is not mine</h2>
          <p>I should say this early, because I got it wrong myself once.</p>
          <p>The boundary is not drawn around the part of Budapest I happen to use. That would be an easy thing to say, and it would be charming, and it would not be true.</p>
          <p>The edge is the river and the arterial roads. That is all it is. And those roads were not put there for traffic.</p>
        </section>

        <section className="essay-section feature-section">
          <div className="feature-heading"><p className="eyebrow">The city remembered in its streets</p><h2>The roads are dates</h2></div>
          <div className="feature-copy">
            <p>Pest grew outward in rings, and it did it on purpose.</p>
            <p>The first ring is a wall. The small boulevard, the Kiskörút, runs on the line of the city wall of Pest, built between 1443 and 1479 and pulled down between 1787 and 1808. The three big roads leaving it are the three roads that left the three gates. Váci út went to Vác. Rákóczi út went to Hatvan. Üllői út went to Kecskemét. They are medieval, and you still sit in traffic on them.</p>
            <p>The second ring is a decision. The Grand Boulevard became law on 10 June 1871 and was handed over to the city on 31 August 1896. Twenty-five years. Two hundred and fifty-one buildings came down and two hundred and fifty-three went up. It was laid along a strip of low wet ground at the edge of what was built, in the bed of an old branch of the Danube, where the water had stood two metres deep in the flood of 1838. The old ditch kept its name on a street sign until 1874.</p>
            <p>So the roads around us are not traffic. They are dates. Each one is where the city stopped at a particular moment, and somebody drew a line, and then everybody built up to it.</p>
            <p>I did not invent this shape. I read it back.</p>
          </div>
        </section>

        <section className="essay-section split-story">
          <div><h2>The station that was built around itself</h2><p>The top edge is the railway, and there is one thing about it I like too much to leave out.</p><p>When the boulevard was drawn, the railway terminus of 1846 was standing in its way. The station did not move. The street had the law behind it. So in 1874 the old building was condemned for the boulevard, and the new hall went up on the same ground, built over and around the old one while the trains kept running. They only knocked the old station out from underneath once the new one was standing.</p><p>The street had priority. The railway rebuilt itself to fit.</p><p>That is what I mean when I say these edges were decided.</p></div>
          <figure className="nyugati-construction">
            <img src="/media/nyugati-construction-1877.webp" alt="Nyugati station's iron train shed, its structural detail and construction" />
            <figcaption><span>Nyugati, 1877</span><p>The hall, its structure and the building site, rather than the façade.</p></figcaption>
          </figure>
        </section>

        <section className="essay-section narrow river-story">
          <h2>Even the river was decided</h2>
          <p>The river looks like the natural edge. It is the least natural of the four.</p>
          <p>Pozsonyi út is two blocks inland. Until 1903 its official name was Felső rakpart. Upper Quay. A street two blocks from the water carried the river&apos;s name because the river used to be there. The land west of it was made, around 1900 to 1903, when the northern quay was built.</p>
          <p>So the natural edge is a decision too. Just an older one.</p>
          <p>And one line here is younger than everything around it. Szent István körút became a district border on 1 January 1950, fifty-four years after the boulevard opened. The street was there first. The border was fitted to it.</p>
        </section>

        <section className="essay-section scale-section">
          <div><p className="eyebrow">The size of it</p><h2>Long and narrow, not compact.</h2></div>
          <div>
            <p>About six square kilometres. About 95,000 residents. About 15,700 people to the square kilometre.</p>
            <p>It is long and narrow, not compact. About 4.7 kilometres from the top to the bottom, about two across at the widest. Half an hour to walk it west to east. An hour and a quarter from Garam utca to the southern edge, and that is a walk, not a stroll.</p>
            <p>For scale: the historic centre of Florence is 532 hectares. This is about fourteen percent larger. The historic centre of Vienna is 371 hectares. This is more than half as large again.</p>
            <p className="scale-line-copy">A Florence-sized piece of city, stretched into a north-south walk.</p>
          </div>
        </section>

        <section className="areas-section" id="nine-cities">
          <header className="areas-intro"><p className="eyebrow">Nine different cities inside it</p><h2>Names for how each part behaves.</h2><p>Inside those edges I read nine places. The names are mine. They are working names for how each part behaves, not official neighbourhoods.</p></header>
          <div className="area-entries">
            <p><strong>P1, Park Republic.</strong> The northern end of Újlipótváros, up to Garam utca. Apartment doors, school runs, groceries, and a park doing the work of a shared garden.</p>
            <p><strong>P2, River Hinge.</strong> Jászai Mari tér and the start of Pozsonyi út. Trams, the bridge, the river. One turn off it and you are back among apartment doors.</p>
            <p><strong>P3, The State Room.</strong> Parliament, the ministries, and the antique-and-gallery grain of Falk Miksa utca. Grand at eleven in the morning. Thin at nine at night.</p>
            <p><strong>P4, The Grand Room.</strong> Basilica, Deák, the streets a visitor recognises first. Monuments, hotels and apartment entrances on the same block.</p>
            <p><strong>P5, The Inner Weave.</strong> The Váci and Ferenciek side, with Károlyi Garden inside it. One street is crowded and the next one is somebody&apos;s quiet address.</p>
            <p><strong>P6, The Daily City.</strong> Kálvin, Fővám, the Market Hall, the university streets. Where the city provisions itself.</p>
            <p><strong>P7, The Courtyard Quarter.</strong> Inner Erzsébetváros. Narrow streets, small plots, courtyards, and a great deal of memory. A residential quarter, and it should be read as one.</p>
            <p><strong>P8, The Switchboard.</strong> Nyugati, the Grand Boulevard, Oktogon, the theatre belt. The part that sorts everybody and sends them on.</p>
            <p><strong>P9, The Night Quarter.</strong> The Király, Gozsdu and Kazinczy field. It sits inside P8, not beside it. The name describes what happens there after ten at night, not the quarter, which is older than its bars by a long way and is other things all day. Its numbers are never added to P8 and never added to the totals on this page.</p>
          </div>

          <div className="polygon-map-tool" aria-label="Interactive map of the nine Inner Pest areas">
            <header><div><p className="eyebrow">Interactive map</p><h3>Find the place in the shape.</h3></div><p>Choose an area. P9 is a nested overlay inside P8, not additional area or population.</p></header>
            <div className="map-controls">
              <div className="zone-switch" aria-label="Choose an area">{zones.map((zone) => <button type="button" key={zone.id} className={selectedId === zone.id ? "active" : ""} aria-pressed={selectedId === zone.id} onClick={() => setSelectedId(zone.id)}><span>{zone.id}</span>{zone.name}</button>)}</div>
              <div className="reading-controls"><div className="mode-switch" aria-label="Map reading"><button type="button" className={mode === "parking" ? "active" : ""} aria-pressed={mode === "parking"} onClick={() => setMode("parking")}>Parking pressure</button><button type="button" className={mode === "life" ? "active" : ""} aria-pressed={mode === "life"} onClick={() => setMode("life")}>Street life</button></div><div className="time-switch" aria-label="Weekday time pocket">{times.map((time, index) => <button key={time} type="button" className={timeIndex === index ? "active" : ""} aria-pressed={timeIndex === index} onClick={() => setPocket(index)}><span>{timeNames[index]}</span>{time}</button>)}</div><button type="button" className="play-day" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? "Pause day" : "Play the day"}</button></div>
            </div>
            <div className="map-layout"><figure className="rhythm-map"><svg viewBox="0 0 720 700" role="img" aria-label={`${mode === "parking" ? "Parking pressure" : "Street life"} in Inner Pest, ${times[timeIndex]}`}><rect width="720" height="700" fill="#eee7da" />{zones.map((zone) => <path key={zone.id} d={pathFor(zone.coordinates)} fill={fillFor(zone)} fillOpacity={zone.nested ? .72 : 1} stroke={selectedId === zone.id ? "#102f31" : "#f7f2e8"} strokeWidth={selectedId === zone.id ? 5 : zone.nested ? 3 : 2.5} strokeDasharray={zone.nested ? "9 6" : undefined} className="rhythm-area" role="button" tabIndex={0} aria-label={`${zone.id}, ${zone.name}. ${mode === "parking" ? zone.parking[timeIndex] : zone.life[timeIndex]}`} onClick={() => setSelectedId(zone.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedId(zone.id); } }} />)}{zones.map((zone) => { const [x, y] = centroid(zone.coordinates); return <text key={zone.id} x={x} y={y} textAnchor="middle" className="rhythm-zone-label" aria-hidden="true">{zone.id}</text>; })}</svg><figcaption>{mode === "parking" ? "Estimated relative legal on-street parking pressure" : "Estimated normal weekday street-life intensity"}, {times[timeIndex]}.</figcaption></figure>
              <aside className="zone-detail" aria-live="polite"><div className="zone-detail-topline"><span>{selected.id}</span><span>{selected.nested ? "Nested in P8" : "Primary area"}</span></div><h3>{selected.name}</h3><p className="zone-anchor">{selected.anchor}</p><p className="zone-deck">{selected.identity}</p><div className="zone-portrait">{selected.portrait.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><dl><div><dt>{timeNames[timeIndex]} street life</dt><dd>{selected.life[timeIndex]}</dd></div><div><dt>{timeNames[timeIndex]} parking</dt><dd>{selected.parking[timeIndex]}</dd></div></dl><p className="zone-rhythm">“{selected.rhythm[timeIndex]}.”</p></aside>
            </div>
            <div className="map-legend" aria-label="Map legend">{mode === "parking" ? ["Easy", "Moderate", "Difficult", "Very difficult"].map((label, index) => <span key={label}><i style={{ background: palette[index] }} />{label}</span>) : ["Quiet", "Local", "Mixed", "Citywide", "Nightlife"].map((label, index) => <span key={label}><i style={{ background: label === "Nightlife" ? "#a34e39" : palette[Math.min(index, 3)] }} />{label}</span>)}</div>
            <p className="map-honesty">The street-life and parking states are estimated normal weekday rhythms, not measured occupancy and not live availability.</p>
          </div>
        </section>

        <section className="four-hours" id="four-hours">
          <div><p className="eyebrow">The same place at four different hours</p><h2>Now set the map running.</h2></div>
          <div className="four-hours-copy">
            <p>At eight in the morning P1 is school runs and bakeries. P2 is the tram peak. P3 is offices filling up. P6 is market deliveries and students. P8 is rail commuting. P9, a few hundred metres from P8&apos;s own centre, is being cleaned.</p>
            <p>At eight in the evening the order has changed. P1 is terraces and a lap around the park. P3 has emptied. P4 is dinner and lit streets. P9 is starting its actual working day.</p>
            <p>That is the same six square kilometres, twelve hours apart. Nothing was built and nothing was demolished. The population has changed and the buildings have stayed where they are.</p>
            <p>The kerb moves with it. On Falk Miksa utca parking is very difficult from nine to five and noticeably easier after six. P9 runs the opposite way: its hardest hours are late evening and early morning, when the people arriving for the night sit on top of the residents who never left. P1 is a third pattern again. It is difficult at almost every hour, because the cars there mostly belong to people who live there, and those cars do not go anywhere.</p>
            <p>Three patterns, three neighbouring areas, one weekday. Ask any of them what parking is like here and you get three different answers, and all three are right.</p>
            <p>One thing has to be said plainly. These time pockets are estimated normal weekday rhythms. They are not measured occupancy and they are not live availability. They tell you what kind of hour it is. They do not tell you whether there is a space on the block tonight.</p>
          </div>
        </section>

        <section className="essay-close">
          <p className="eyebrow">Why it is small on purpose</p>
          <h2>I am not describing Budapest. I am describing six square kilometres of it.</h2>
          <div><p>This is the densest, oldest, best connected square of the city, and about a fifth of its streets are already given over to walking. Across Budapest the figure is about one in a hundred. In Barcelona, Paris, Madrid, Rotterdam and Valencia it is four to eight percent.</p><p>So this place already has most of what the idea needs. That is exactly why I chose it, and exactly why I am not claiming anything about anywhere else.</p><p>Four hard edges, ninety-five thousand people, and every one of those edges was drawn by somebody. It is a small sandbox. I happen to live in it.</p><Link href="/#why" className="quiet-next">Back to 01 / Why</Link></div>
        </section>
      </main>
    </>
  );
}
