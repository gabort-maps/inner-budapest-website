// Canonical content from Google Drive: change_three_streets_landing_mockup_v0_2(2).html
// The source page is static. The five embedded PNGs are delivered as optimized WebP assets in public/media/change.
export const threeStreetsOpeningMarkup = String.raw`
  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <p class="eyebrow">04 / What I am changing</p>
          <h1>Three streets<br>I know</h1>
          <p class="dek">These streets do not need to be rebuilt. They need to be reconsidered, metre by metre, while preserving the architecture and everyday life that make them worth changing.</p>
        </div>
        <aside class="hero-note">
          <strong>A personal selection.</strong>
          I chose these three streets for a thoroughly unscientific reason: I have lived on all of them. Long enough to know their corners early in the morning and late at night, when the shops open, when the offices empty, where the shade falls and where the parked cars never move.
          <div class="rule"></div>
          There could have been other streets. These are mine.
        </aside>
      </div>
    </section>

    <div class="metric-rail">
      <div class="wrap metrics">
        <div class="metric"><b>3</b><span>lived streets, not a ranked sample</span></div>
        <div class="metric"><b>≈2.2 km</b><span>combined length, end to end</span></div>
        <div class="metric"><b>9</b><span>distinct local characters</span></div>
        <div class="metric"><b>1</b><span>shared test: what if parking moved?</span></div>
      </div>
    </div>

    <section class="map-section" id="map">
      <div class="wrap">
        <div class="map-intro">
          <div><p class="eyebrow">A small sample, on purpose</p><h2>Corner by corner.</h2></div>
          <p class="lead">Together, Falk Miksa utca, Katona József utca and Pozsonyi út cover only a small part of Inner Budapest. They are short enough to understand in detail, but varied enough to show that removing parking does not produce one standard answer.</p>
        </div>
        <figure class="map-frame">
          <div class="map-image-wrap">
            <img src="/media/change/three-streets-map-future-bridge-v0-2.webp" alt="Context map of Falk Miksa utca, Katona József utca and Pozsonyi út, divided into nine street sections, with a future bridge concept from Katona to Margaret Island">
            <span class="map-prompt">Click a street to open its story</span>
            <a class="map-hotspot map-falk" href="#falk" aria-label="Jump to Falk Miksa utca"><span>Falk Miksa</span></a>
            <a class="map-hotspot map-pozsonyi" href="#pozsonyi" aria-label="Jump to Pozsonyi út"><span>Pozsonyi út</span></a>
            <a class="map-hotspot map-katona" href="#katona" aria-label="Jump to Katona József utca"><span>Katona József</span></a>
          </div>
          <figcaption class="map-caption"><b>Three observed streets, nine interpretive street sections.</b><span>Route geometry is verified from OpenStreetMap. The dotted bridge is a future concept, not an engineered proposal.</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="shared">
      <div class="wrap">
        <div class="shared-head">
          <div><p class="eyebrow">Similar enough to compare</p><h2>The same contradiction.</h2><p class="lead">These are not arterial motor routes, yet a striking share of their valuable public width is still assigned to moving and storing cars.</p></div>
          <div class="shared-table" aria-label="Shared street conditions">
            <div class="shared-row"><b>Street role</b><span>Local urban streets, not essential through-routes for general motor traffic.</span></div>
            <div class="shared-row"><b>Access</b><span>Excellent public-transport access around all three. Pozsonyi also carries trolleybuses along the street.</span></div>
            <div class="shared-row"><b>Movement</b><span>Predominantly one-way or locally filtered traffic arrangements, with necessary access retained.</span></div>
            <div class="shared-row"><b>Parking</b><span>Extensive kerb parking, commonly on both sides and often diagonal.</span></div>
            <div class="shared-row"><b>Width</b><span>Approximately 15 to 20 metres building to building, subject to detailed survey.</span></div>
            <div class="shared-row"><b>Public life</b><span>Usable pavements, but little surplus room for staying, terraces, planting or easy social life.</span></div>
          </div>
        </div>
        <div class="section-sketch">
          <div class="topline"><span>Indicative wide-street condition</span><span>20 m building to building</span></div>
          <img class="street-section-art" src="/media/change/existing-20m-street-section.webp" alt="Indicative transverse section of a 20 metre one-way street with two 2.5 metre sidewalks, two 5.5 metre bands of 60-degree parking and a 4 metre carriageway">
          <div class="vehicle-bracket">15.0 m / 75% is used for movement and car storage in this indicative wide condition</div>
          <div class="sketch-note"><span>This drawing tests a 20 m wide condition. It is indicative and not a surveyed cross-section of any one location.</span><span>The challenge is not whether space exists. It is what the ground is reserved for.</span></div>
        </div>
      </div>
    </section>

    <section class="street-index">
      <div class="wrap">
        <div class="index-head"><div><p class="eyebrow light">Different enough to require different answers</p><h2>One rule.<br>Three edits.</h2></div><p class="lead">Change should grow out of what each street already is. Falk is not Pozsonyi, and Katona is not a quieter version of either. The inherited city remains. The use of its ground changes.</p></div>
        <div class="index-list">
          <a class="index-item" href="#falk"><span class="no">01 / 450 m</span><strong>Falk Miksa utca</strong><span>Bring daily life back ↓</span></a>
          <a class="index-item" href="#pozsonyi"><span class="no">02 / ≈1 km</span><strong>Pozsonyi út</strong><span>Make room for what works ↓</span></a>
          <a class="index-item" href="#katona"><span class="no">03 / 760 m</span><strong>Katona József utca</strong><span>Make a connection ↓</span></a>
        </div>
      </div>
    </section>

    <section class="street" id="falk">
      <div class="street-grid">
        <div class="street-copy">
          <div class="street-no">Street 01 / Lipótváros / 450 m</div>
          <h3>Falk Miksa utca</h3>
          <p class="proposition">BRING DAILY LIFE BACK</p>
          <p class="personal">I was born here, when Falk still felt primarily residential. It had ordinary shops and local services. Parking was the frustration, not the street’s main identity.</p>
          <p>Today, its antiques trade gives Falk an extraordinary cultural role, but parts of it become remarkably quiet outside business hours. The change is to strengthen the street as an elegant cultural salon while making space again for ordinary, daily life.</p>
          <div class="zones"><span class="zone">Local Living</span><span class="zone">Antiques High Street</span><span class="zone">Northern Connection</span></div>
          <a class="street-link" href="Falk_Miksa_utca_subpage_v01.html" title="Planned detailed street page">Explore the street study</a>
        </div>
        <div class="street-visual">
          <img src="/media/change/falk-miksa-vision.webp" alt="Illustrative evening vision for a calmer Falk Miksa utca with galleries, trees and people">
          <span class="label vision-label">Illustrative vision, AI-generated</span>
          <div class="trace-note">The inherited façades stay. Gallery light, planting and evening life claim the released ground.</div><span class="trace-line" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <section class="street reverse" id="pozsonyi">
      <div class="street-grid">
        <div class="street-copy">
          <div class="street-no">Street 02 / Újlipótváros / ≈1 km</div>
          <h3>Pozsonyi út</h3>
          <p class="proposition">MAKE ROOM FOR WHAT ALREADY WORKS</p>
          <p class="personal">Pozsonyi already has the things planners normally try to create: residents, cafés, everyday shops, mature trees, a major park and public transport.</p>
          <p>Its problem is not a lack of life. Existing life is compressed onto the pavements while stored vehicles occupy much of the wider street. The change is restrained: keep the trolleybuses and necessary access, then give more room to what is already here.</p>
          <div class="zones"><span class="zone">Northern Residential</span><span class="zone">Szent István Park</span><span class="zone">Southern High Street</span></div>
          <a class="street-link" href="Pozsonyi_ut_subpage_v01.html" title="Planned detailed street page">Explore the street study</a>
        </div>
        <div class="street-visual">
          <img src="/media/change/pozsonyi-vision.webp" alt="Illustrative evening vision for Pozsonyi út with local shops, public transport, walking and cycling">
          <span class="label vision-label">Illustrative vision, AI-generated</span>
          <div class="trace-note">The trolleybus stays. The park edge and shopfront life are allowed to meet.</div><span class="trace-line" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <section class="street" id="katona">
      <div class="street-grid">
        <div class="street-copy">
          <div class="street-no">Street 03 / Újlipótváros / 760 m</div>
          <h3>Katona József utca</h3>
          <p class="proposition">MAKE A CONNECTION</p>
          <p class="personal">Katona is the most ordinary of the three, and perhaps the most revealing. It runs between the pressure of Nyugati and the quiet promise of the Danube.</p>
          <p>Today, much of it still reads as a parking and shortcut corridor. The change is to make it a calmer walking and cycling connection across Újlipótváros. At the river, that practical street idea can lean towards a larger dream, without pretending that the bridge has already been engineered.</p>
          <div class="zones"><span class="zone">Station Gateway</span><span class="zone">Residential Core</span><span class="zone">Danube Approach</span></div>
          <a class="street-link" href="Katona_Jozsef_utca_subpage_v02_masterskin.html" title="Planned detailed street page">Explore the street study</a>
        </div>
        <div class="street-visual">
          <img src="/media/change/katona-vision.webp" alt="Illustrative daytime vision for Katona József utca as a calm walking and cycling connection with local access">
          <span class="label vision-label">Illustrative vision, AI-generated</span>
          <div class="trace-note">Movement remains. Storage gives way to a continuous neighbourhood connection.</div><span class="trace-line" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <section class="common">
      <div class="wrap common-grid">
        <div><p class="eyebrow light">The common rule</p><h2>Parking-free is not access-free.</h2><p class="lead">A street still has to work on an ordinary Tuesday morning. The change removes routine private-car storage as the default use of both kerbs, not the practical functions of urban life.</p></div>
        <div class="ops">
          <div class="ops-col"><b>Stays</b><span>Public transport</span><span>Emergency access</span><span>Deliveries</span><span>Waste collection</span><span>Removals</span><span>Disabled access</span><span>Pick-up and drop-off</span><span>Property access</span><span>Cycling</span></div>
          <div class="ops-col goes"><b>Goes</b><span>Routine kerb storage</span><span>Two continuous parking rows</span><span>Diagonal parking as default</span><span>Pavement as leftover space</span></div>
        </div>
      </div>
    </section>

    <section class="nine">
      <div class="wrap nine-grid">
        <div><p class="eyebrow">Three streets, nine places</p><h2>A short street is not one place.</h2></div>
        <div class="nine-list">
          <div class="nine-street"><b>Falk Miksa</b><p>From Parliament and local living, through the antiques heart, to a northern end that has lost its connection.</p></div>
          <div class="nine-street"><b>Pozsonyi</b><p>From the quieter north, through the park, to the busier southern high street and Grand Boulevard.</p></div>
          <div class="nine-street"><b>Katona József</b><p>From Nyugati’s station pressure, through an inhabited residential core, to the Danube approach.</p></div>
        </div>
      </div>
    </section>

    <section class="honesty" id="honesty">
      <div class="wrap">
        <div class="honesty-card">
          <p class="eyebrow">Honest limits</p>
          <h2>Examples, not a plan for Budapest.</h2>
          <p>The widths are approximate, the future images are illustrative, and the bridge is an idea rather than an engineering proposal. The streets were not selected because a model ranked them first. They were selected because I know them well enough to imagine them differently.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap inner"><p><strong>INNER BUDAPEST</strong><br>Change chapter, standalone visual mock-up v0.2</p><a class="back-top" href="#top">Back to the top ↑</a></div>
  </footer>
`;

