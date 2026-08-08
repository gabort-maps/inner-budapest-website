import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const [packageDirectoryArgument] = process.argv.slice(2);

if (!packageDirectoryArgument) {
  throw new Error(
    "Usage: node scripts/build-pozsonyi-source.mjs <pozsonyi-builder-package-directory>",
  );
}

const packageDirectory = path.resolve(packageDirectoryArgument);
const assetDirectory = path.join(packageDirectory, "assets");
const outputDirectory = path.resolve("public/media/change/pozsonyi");
const falkReferencePath = path.resolve("public/media/change/falk-miksa/page.html");

const rasterAssets = [
  ["01_opening_park_edge_hero.png", "opening-park-edge-hero.webp"],
  ["02_slider_today.png", "slider-today.webp"],
  ["03_slider_concept.png", "slider-concept.webp"],
  ["04_southern_blue_hour_unbranded.png", "southern-blue-hour.webp"],
  ["05_southern_cargo_delivery.jpg", "southern-cargo-delivery.webp"],
  ["06_park_dunapark_trolleybus_route75.png", "park-dunapark-trolleybus.webp"],
  ["07_park_to_sarki_fuszeres_corrected.png", "park-to-sarki-fuszeres.webp"],
  ["08_northern_residential_church.png", "northern-residential-church.webp"],
  ["09_northern_service_delivery.jpg", "northern-service-delivery.webp"],
  ["10_northern_waste.png", "northern-waste.webp"],
];

await fs.mkdir(outputDirectory, { recursive: true });

for (const [sourceName, outputName] of rasterAssets) {
  await sharp(path.join(assetDirectory, sourceName))
    .rotate()
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(path.join(outputDirectory, outputName));
}

await fs.copyFile(
  path.join(assetDirectory, "11_corridor_editorial_rail.svg"),
  path.join(outputDirectory, "corridor-editorial-rail.svg"),
);

await sharp(path.join(assetDirectory, "01_opening_park_edge_hero.png"))
  .rotate()
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 92, effort: 6, smartSubsample: true })
  .toFile(path.join(outputDirectory, "thumbnail.webp"));

const falkReference = await fs.readFile(falkReferencePath, "utf8");
const styleMatch = falkReference.match(/<style>([\s\S]*?)<\/style>/);

if (!styleMatch) {
  throw new Error("The frozen Falk reference does not contain its expected style block.");
}

const pozsonyiOverrides = `
    /* Pozsonyi content follows the frozen Falk component system. */
    .pozsonyi-page .hero { min-height: 100svh; }
    .pozsonyi-page .hero-media::after {
      background: linear-gradient(0deg, rgba(9,20,22,.78) 0%, rgba(9,20,22,.35) 32%, transparent 70%);
    }
    .pozsonyi-page .hero-bottom { justify-content: flex-end; }
    .pozsonyi-page .personal-copy p { color: var(--ink-soft); }
    .pozsonyi-page .personal-copy .lead { color: var(--ink); }
    .pozsonyi-page .comparison-section { padding: clamp(32px, 5vh, 54px) 0; }
    .pozsonyi-page .comparison-head { max-width: 1180px; margin-bottom: clamp(20px, 3vh, 30px); }
    .pozsonyi-page .comparison-head h2 { font-size: clamp(40px, 4.8vw, 66px); }
    .pozsonyi-page .comparison-head .lead { max-width: 980px; margin-bottom: 0; }
    .pozsonyi-page .comparison-card { width: min(800px, calc(100% - 16px)); min-height: 0; padding: 0; }
    .pozsonyi-page .comparison-slider-experiment { width: min(800px, calc(100% - 16px)); min-height: 0; padding: 0; }
    .pozsonyi-page .comparison-slider-experiment .compare {
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
    }
    .pozsonyi-page .route-intro-grid { align-items: center; }
    .pozsonyi-page .route-copy p { max-width: 34ch; }
    .pozsonyi-page .route-rail {
      margin: 0;
      padding: clamp(5px, .55vw, 8px);
      background: var(--paper-dark);
      border: 1px solid rgba(255,255,255,.18);
    }
    .pozsonyi-page .route-rail img {
      width: 100%;
      max-height: min(76svh, 860px);
      object-fit: contain;
    }
    .pozsonyi-page .identity-head-copy p { margin-bottom: 18px; }
    .pozsonyi-page .identity-head-copy p:last-child { margin-bottom: 0; }
    .pozsonyi-page .single-scene {
      width: fit-content;
      max-width: 100%;
      margin: 0 auto;
      padding: clamp(5px, .55vw, 8px);
      background: var(--paper-dark);
      border: 1px solid var(--line);
    }
    .pozsonyi-page .single-scene img {
      width: auto;
      max-width: 100%;
      height: min(68svh, 590px);
      max-height: min(68svh, 590px);
      object-fit: contain;
      filter: none;
      opacity: 1;
    }
    .pozsonyi-page .single-scene figcaption {
      margin: 0;
      padding: 10px 4px 2px;
      color: var(--ink-soft);
      font-size: 12px;
      line-height: 1.45;
    }
    .pozsonyi-page .southern-high-street { color: #fff; background: var(--night); }
    .pozsonyi-page .southern-high-street .identity-head p { color: rgba(255,255,255,.7); }
    .pozsonyi-page .southern-high-street .identity-number { color: var(--gold); }
    .pozsonyi-page .southern-high-street .single-scene {
      background: #102c30;
      border-color: rgba(255,255,255,.16);
    }
    .pozsonyi-page .southern-high-street .single-scene figcaption { color: rgba(255,255,255,.68); }
    .pozsonyi-page .operational-section { background: var(--paper-dark); }
    .pozsonyi-page .operational-note {
      width: min(900px, calc(100% - 48px));
      margin: 28px auto 0;
      padding: 22px 0 0;
      color: var(--ink-soft);
      border-top: 1px solid var(--line);
    }
    .pozsonyi-page .history-closing {
      max-width: 760px;
      margin: 38px 0 0 auto;
      color: var(--ink);
      font: 500 20px/1.55 var(--serif);
    }
    .pozsonyi-page .film { width: 100%; margin-inline: 0; }
    .pozsonyi-page .film-bar,
    .pozsonyi-page .film-stage { width: min(964px, 100%); margin-inline: auto; }
    .pozsonyi-page .film-slide { flex: 0 0 auto; max-width: calc(100vw - 128px); }
    .pozsonyi-page .film-slide img {
      width: auto;
      max-width: 100%;
      height: min(68svh, calc(100svh - 260px));
      max-height: none;
      aspect-ratio: auto;
      object-fit: contain;
    }
    .pozsonyi-page .film-slide figcaption { width: 0; min-width: 100%; }
    @media (min-width: 901px) and (min-height: 760px) {
      .pozsonyi-page .comparison-card,
      .pozsonyi-page .comparison-slider-experiment { min-height: 0; padding: 0; }
      .pozsonyi-page .comparison-slider-experiment .compare { height: auto; aspect-ratio: 4 / 3; }
      .pozsonyi-page .identity { min-height: calc(100svh - var(--head)); }
    }
    @media (max-width: 900px) {
      .pozsonyi-page .route-intro-grid { grid-template-columns: 1fr; }
      .pozsonyi-page .route-copy p { max-width: none; }
    }
    @media (max-width: 680px) {
      .pozsonyi-page .comparison-card,
      .pozsonyi-page .comparison-slider-experiment { width: 100%; }
      .pozsonyi-page .film-slide { flex-basis: calc(100vw - 30px); max-width: calc(100vw - 30px); }
      .pozsonyi-page .film-slide img { width: 100%; height: auto; max-height: min(62svh, 560px); }
      .pozsonyi-page .single-scene { width: 100%; }
      .pozsonyi-page .single-scene img { width: 100%; height: auto; max-height: none; }
      .pozsonyi-page .operational-note { width: min(100% - 30px, 900px); }
    }
`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta name="inner-budapest-source" content="POZSONYI_SUBPAGE_BUILDER_PACKAGE_v1_1">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Pozsonyi út, a working neighbourhood high street with more room for everyday life.">
  <title>Pozsonyi út | Make room for what works</title>
  <style>${styleMatch[1]}${pozsonyiOverrides}</style>
</head>
<body id="top" class="pozsonyi-page">
  <main>
    <section class="hero" aria-labelledby="page-title">
      <figure class="hero-media">
        <img src="/media/change/pozsonyi/opening-park-edge-hero.webp" alt="Illustrative golden-hour view of Pozsonyi út beside Szent István Park, with mature trees, a red trolleybus, cyclists and people on a pedestrian-priority street.">
      </figure>
      <div class="hero-copy">
        <p class="eyebrow light">Street 02 · Budapest XIII</p>
        <h1 id="page-title">Pozsonyi út</h1>
        <p class="proposition">Make room for what works.</p>
        <div class="hero-bottom"><span class="scroll-cue">Scroll the street ↓</span></div>
      </div>
    </section>

    <section class="personal" aria-labelledby="personal-title">
      <div class="wrap personal-grid">
        <div>
          <p class="eyebrow">Author's note</p>
          <h2 id="personal-title">Pozsonyi út is the street I like best, and find hardest to walk down.</h2>
        </div>
        <div class="personal-copy">
          <p class="lead">Both of those are true at the same time, and they are related.</p>
          <p>It already has the things you cannot design into a street. A bakery. A grocer. Cafés with people actually sitting outside them. Trees old enough to close over the road. A park in the middle. Trolleybuses that turn up. It is a working high street.</p>
          <p>Along approximately 911 metres of the project corridor, routine parking occupies much of the space between the frontages and the movement route. It is diagonal in the south, so the shopfronts sit behind a wall of bonnets. It is more often parallel around the park and farther north. The pavement is whatever is left once the cars have been dealt with.</p>
          <div class="personal-note">This is not a construction plan. It is a visual proposition: move routine car storage elsewhere, then check that the trolleybus still runs, deliveries still reach the door, waste is still collected and residents can still get home.</div>
        </div>
      </div>
    </section>

    <section class="comparison-section" aria-labelledby="comparison-title">
      <div class="wrap">
        <div class="comparison-head">
          <p class="eyebrow">The corner at Katona József utca</p>
          <h2 id="comparison-title">The same street, with storage removed.</h2>
          <p class="lead">The observed photograph and concept view use the same corner and a closely registered camera position. The photograph was taken on 27 July 2026. The future view is an illustrative reconstruction, not a surveyed design.</p>
        </div>
        <article class="comparison-card comparison-slider-experiment">
          <figure>
            <div class="compare" data-compare>
              <img src="/media/change/pozsonyi/slider-concept.webp" alt="Illustrative reconstruction of the same Pozsonyi út corner without routine parking, showing a shared movement spine, active shopfronts, walking and cycling.">
              <img class="today" src="/media/change/pozsonyi/slider-today.webp" alt="Observed view of Pozsonyi út at Katona József utca, with diagonal parking occupying both sides of the carriageway.">
              <span class="compare-divider" aria-hidden="true"></span>
              <label class="sr-only" for="compare-pozsonyi">Reveal today and concept views</label>
              <input id="compare-pozsonyi" type="range" min="0" max="100" value="50" aria-label="Compare today's Pozsonyi út with the illustrative concept">
            </div>
            <figcaption class="compare-labels"><span>Today</span><span>Concept</span></figcaption>
          </figure>
        </article>
      </div>
    </section>

    <section class="identity-intro" aria-labelledby="identity-title">
      <div class="wide identity-intro-grid route-intro-grid">
        <div class="route-copy">
          <p class="eyebrow light">The corridor, north to south</p>
          <h2 id="identity-title">One short street.<br>Three different roles.</h2>
          <p>The corridor changes as you walk south. Not because three unrelated designs are applied to it, but because the church, the front doors, the park, the shops and the buildings already ask for different things.</p>
        </div>
        <figure class="route-rail">
          <img src="/media/change/pozsonyi/corridor-editorial-rail.svg" alt="Simplified north-to-south Pozsonyi út corridor graphic showing Northern residential, Szent István Park and Southern high street between Garam utca and Szent István körút.">
        </figure>
      </div>
    </section>

    <section class="identity" id="northern-residential" aria-labelledby="northern-title">
      <div class="wide">
        <div class="identity-head">
          <div>
            <p class="identity-number">01 · Northern residential · Garam utca to Victor Hugo utca</p>
            <h2 id="northern-title">The quieter end</h2>
          </div>
          <div class="identity-head-copy">
            <p>Fewer shops, more front doors. The Hálaadás Reformed Church, Ruttkai Éva Park and mature tree canopy give this section a quieter, more residential character. It should not be turned into another entertainment destination.</p>
            <p>The objective is simpler: more room for walking, sitting, bicycle and cargo-bike parking, accessible arrival and short residential servicing. The church and park thresholds remain clear. Temporary access is managed, rather than converted back into permanent parking.</p>
          </div>
        </div>
        <figure class="single-scene">
          <img src="/media/change/pozsonyi/northern-residential-church.webp" alt="Illustrative view of northern Pozsonyi út with the Hálaadás Reformed Church, mature trees, residential front doors, a trolleybus and bicycle parking.">
          <figcaption>A calm residential street, with the mature canopy, church, trolleybus and front doors retained.</figcaption>
        </figure>
      </div>
    </section>

    <section class="identity" id="szent-istvan-park" aria-labelledby="park-title">
      <div class="wide">
        <div class="identity-head">
          <div>
            <p class="identity-number">02 · Szent István Park · Victor Hugo utca to Radnóti Miklós utca</p>
            <h2 id="park-title">The civic centre</h2>
          </div>
          <div class="identity-head-copy">
            <p>Szent István Park on one side, the Dunapark ensemble on the other, and trolleybus stops between them. This part of the street already has a strong identity. The design strategy is restraint.</p>
            <p>The park gates, stops and front doors should connect directly. General parking, loading and visible waste infrastructure should not occupy the principal park threshold. Necessary functions move to positions beyond the main desire lines.</p>
            <p>Sarki Fűszeres remains at Pozsonyi út 53–55, a neighbourhood destination at the park's northern edge. What this place needs is space to arrive on foot or by bicycle, and room to stand outside without blocking the walking route.</p>
          </div>
        </div>
        <div class="film" data-film>
          <div class="film-bar"><span class="film-count" aria-live="polite">Frame 1 of 2</span></div>
          <div class="film-stage">
            <button class="film-arrow" type="button" data-prev aria-label="Previous image">←</button>
            <div class="film-track" tabindex="0" aria-label="Szent István Park image sequence">
              <figure class="film-slide"><img src="/media/change/pozsonyi/park-dunapark-trolleybus.webp" alt="Illustrative view of Szent István Park beside Pozsonyi út, with mature canopy, a route 75 trolleybus, cycling and everyday park use."><figcaption>The trolleybus remains the public-transport backbone, while the park edge becomes easier to cross and inhabit.</figcaption></figure>
              <figure class="film-slide"><img src="/media/change/pozsonyi/park-to-sarki-fuszeres.webp" alt="Illustrative view toward Sarki Fűszeres at the northern edge of Szent István Park, with walking, cycling and a trolleybus in the distance."><figcaption>A recognised neighbourhood destination remains part of the street's ordinary daily life.</figcaption></figure>
            </div>
            <button class="film-arrow" type="button" data-next aria-label="Next image">→</button>
          </div>
        </div>
      </div>
    </section>

    <section class="identity southern-high-street" id="southern-high-street" aria-labelledby="southern-title">
      <div class="wide">
        <div class="identity-head">
          <div>
            <p class="identity-number">03 · Southern high street · Radnóti Miklós utca to Szent István körút</p>
            <h2 id="southern-title">The busiest part</h2>
          </div>
          <div class="identity-head-copy">
            <p>This is where Pozsonyi út is busiest and where diagonal parking creates the strongest barrier. Cafés, food shops, specialist retail, residential entrances, deliveries, walking and the trolleybus all compete inside a narrow street.</p>
            <p>Removing routine parking gives the frontages room to work. Terraces can move out of the clear walking route. People can reach shops and entrances without passing between parked cars. The movement spine remains open for trolleybuses, cycling, deliveries, emergency access, pick-up and drop-off and necessary local traffic.</p>
          </div>
        </div>
        <figure class="single-scene">
          <img src="/media/change/pozsonyi/southern-blue-hour.webp" alt="Illustrative blue-hour view of southern Pozsonyi út with lit shops and cafés, cyclists, a route 75 trolleybus and a compact shared shuttle.">
          <figcaption>The high street remains busy after dark, with shops, cafés, walking, cycling and the trolleybus sharing one inhabited street.</figcaption>
        </figure>
        <p class="history-closing">The objective is not to give Pozsonyi út a new identity. It is to let its existing neighbourhood life occupy more of the street.</p>
      </div>
    </section>

    <section class="identity operational-section" aria-labelledby="operations-title">
      <div class="wide">
        <div class="identity-head">
          <div>
            <p class="identity-number">The practical test</p>
            <h2 id="operations-title">Yes, but where does the fridge go?</h2>
          </div>
          <p>To the door. Removing general parking does not remove access. A street that cannot accept a delivery, collect its waste, reach a resident with limited mobility or keep its trolleybus moving is not a better street.</p>
        </div>
        <div class="film" data-film>
          <div class="film-bar"><span class="film-count" aria-live="polite">Frame 1 of 3</span></div>
          <div class="film-stage">
            <button class="film-arrow" type="button" data-prev aria-label="Previous image">←</button>
            <div class="film-track" tabindex="0" aria-label="Pozsonyi út servicing image sequence">
              <figure class="film-slide"><img src="/media/change/pozsonyi/northern-service-delivery.webp" alt="Illustrative bulky delivery from a temporary service pocket to a residential entrance on northern Pozsonyi út."><figcaption>A service vehicle uses a temporary pocket while a bulky item is moved directly to a residential entrance. The vehicle leaves when the task is complete. Exact locations and operating rules require a street survey and agreement with residents, businesses, BKK and service operators.</figcaption></figure>
              <figure class="film-slide"><img src="/media/change/pozsonyi/southern-cargo-delivery.webp" alt="Illustrative cargo-bike delivery outside a hospitality frontage on a parking-free Pozsonyi út."><figcaption>Small and frequent consignments can arrive by cargo bike, reducing the need for vans to wait in the shared movement spine.</figcaption></figure>
              <figure class="film-slide"><img src="/media/change/pozsonyi/northern-waste.webp" alt="Illustrative waste collection point on northern Pozsonyi út, positioned outside the clear walking and movement routes."><figcaption>Each residential catchment needs a workable collection solution. Container type, capacity, walking distance and the collection path must be tested before any location is fixed.</figcaption></figure>
            </div>
            <button class="film-arrow" type="button" data-next aria-label="Next image">→</button>
          </div>
        </div>
        <p class="operational-note">Trolleybuses remain central to the street. Routes 75 and 76 serve the southern and park sections, while route 75 continues through the northern section. Stop positions, boarding space and swept paths require field verification. The concept requires cyclists and local vehicles to wait behind a stopped trolleybus rather than pass between the vehicle and boarding passengers.</p>
      </div>
    </section>

    <section class="history" aria-labelledby="history-title">
      <div class="wrap">
        <div class="history-head">
          <div>
            <p class="eyebrow">History</p>
            <h2 id="history-title">From Upper Quay to neighbourhood high street</h2>
          </div>
          <p>Pozsonyi út was shaped by Danube regulation, land reclamation, metropolitan housing, park planning and one of Budapest's most consequential wartime geographies. Its identity is architectural, social and memorial at the same time.</p>
        </div>
        <div class="timeline">
          <article class="timeline-row"><time>1903</time><strong>Felső rakpart</strong><p>Pozsonyi út received its present name on 7 April, replacing Felső rakpart, or Upper Quay.</p></article>
          <article class="timeline-row"><time>1911</time><strong>Palatinus Houses</strong><p>Emil Vidor's Palatinus Houses established the southern gateway.</p></article>
          <article class="timeline-row"><time>1928–1933</time><strong>Szent István Park</strong><p>Szent István Park was planned in 1928, with the final area plan approved in 1933. The park and surrounding apartment buildings formed a coordinated urban environment.</p></article>
          <article class="timeline-row"><time>1930s</time><strong>Interwar modern Újlipótváros</strong><p>Much of the corridor's interwar residential fabric was completed. It is more accurately described as interwar modern Újlipótváros than as a uniform Bauhaus district.</p></article>
          <article class="timeline-row"><time>1935–1936</time><strong>Dunapark Houses</strong><p>The Dunapark Houses combined modern rental housing, high-quality materials, services, roof terraces and commercial frontage beside the park.</p></article>
          <article class="timeline-row"><time>1936–1940</time><strong>Hálaadás Reformed Church</strong><p>The Hálaadás Reformed Church added a distinct hybrid interwar civic landmark in the northern section.</p></article>
          <article class="timeline-row"><time>1944</time><strong>The international ghetto</strong><p>Pozsonyi út and the surrounding streets became central to the international ghetto, a dispersed cluster of nominally protected houses. The area was not the fenced Pest ghetto. Protection was unstable, the buildings were severely overcrowded and residents remained exposed to Arrow Cross violence.</p></article>
        </div>
        <p class="history-closing">Pozsonyi út is not an architectural museum and does not need an imported identity. Its buildings, shops, park, transit and remembered lives already make it one of Budapest's strongest neighbourhood streets. The proposal is to give those existing strengths more room.</p>
      </div>
    </section>

    <aside class="disclosure" aria-labelledby="disclosure-title">
      <div class="wrap disclosure-grid">
        <h2 id="disclosure-title">What is observed, and what is illustrative</h2>
        <p>The current-condition slider uses an observed photograph taken on 27 July 2026. The future street views are illustrative concept images. The controlled project scope is approximately 910.8 metres, and the typical building-to-building width is estimated at 18 to 20 metres. The proposal is not a surveyed engineering design, traffic order or construction plan. Exact trolleybus geometry, access, loading, waste, accessibility, utilities and street dimensions require field survey and operator consultation.</p>
      </div>
    </aside>

    <footer class="chapter-links">
      <div class="wrap chapter-links-grid">
        <a href="/change/falk-miksa"><small>Street 01</small><strong>Falk Miksa utca</strong></a>
        <a href="/#katona-jozsef-utca"><small>Street 03</small><strong>Katona József utca</strong></a>
        <a href="/change/three-streets"><small>Back to opening</small><strong>Three Streets</strong></a>
      </div>
    </footer>
  </main>

  <script>
    (() => {
      document.querySelectorAll('[data-compare]').forEach((compare) => {
        const input = compare.querySelector('input[type="range"]');
        const update = () => compare.style.setProperty('--position', input.value + '%');
        input.addEventListener('input', update);
        update();
      });

      document.querySelectorAll('[data-film]').forEach((film) => {
        const track = film.querySelector('.film-track');
        const slides = [...film.querySelectorAll('.film-slide')];
        const count = film.querySelector('.film-count');
        const prev = film.querySelector('[data-prev]');
        const next = film.querySelector('[data-next]');
        const activeIndex = () => {
          const trackLeft = track.getBoundingClientRect().left;
          const paddingLeft = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
          return slides.reduce((nearest, slide, index) => {
            const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft - paddingLeft);
            return distance < nearest.distance ? { index, distance } : nearest;
          }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
        };
        const update = () => {
          const index = activeIndex();
          count.textContent = 'Frame ' + (index + 1) + ' of ' + slides.length;
          prev.disabled = index === 0;
          next.disabled = index === slides.length - 1;
        };
        const move = (delta) => {
          const index = Math.max(0, Math.min(slides.length - 1, activeIndex() + delta));
          const paddingLeft = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
          track.scrollTo({
            left: slides[index].offsetLeft - paddingLeft,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          });
        };
        prev.addEventListener('click', () => move(-1));
        next.addEventListener('click', () => move(1));
        track.addEventListener('scroll', update, { passive: true });
        track.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        });
        window.addEventListener('resize', update, { passive: true });
        update();
      });
    })();
  </script>
</body>
</html>`;

await fs.writeFile(path.join(outputDirectory, "page.html"), html, "utf8");

console.log(
  JSON.stringify({
    source: path.basename(packageDirectory),
    assets: rasterAssets.length + 1,
    page: path.join(outputDirectory, "page.html"),
    thumbnail: path.join(outputDirectory, "thumbnail.webp"),
  }),
);
