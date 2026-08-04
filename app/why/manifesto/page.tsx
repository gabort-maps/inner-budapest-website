import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

const ledgers = [
  {
    key: "cost",
    number: "01",
    label: "The cost we do not see",
    quote: "Results confirm that motorists underestimate the full private costs of car ownership, while policy makers and planners underestimate social costs.",
    attribution: "Gössling, Kees and Litman, 2022",
    reflection: "Most of what a car costs is fixed and paid once a year, so at the moment you decide to drive, you only feel the fuel. The car looks cheap every single time you use it. And a third or more of what it truly costs is never paid by the owner at all.",
    portraitName: "Todd Litman",
    portraitNote: "representative face, 2022 paper",
    portraitAlt: "Todd Litman, representative face of the jointly authored 2022 paper by Gössling, Kees and Litman",
  },
  {
    key: "parking",
    number: "02",
    label: "The price hidden elsewhere",
    quote: "Parking is free, however, only because everything else is more expensive.",
    attribution: "Donald Shoup",
    reflection: "The land is free at the street, and hidden in the rent, the shop price and the restaurant bill everywhere else. You pay for parking all day long and you are never once shown a bill.",
    portraitName: "Donald Shoup",
    portraitNote: "parking",
    portraitAlt: "Donald Shoup",
  },
  {
    key: "time",
    number: "03",
    label: "The hours already spent",
    quote: "The quality of urban life is inversely proportional to the amount of time invested in transportation.",
    attribution: "Carlos Moreno",
    reflection: "Every kilometre a city spreads out is time taken from the people who live in it. That was decided decades ago, in the zoning, and nobody was asked. It was billed in hours.",
    portraitName: "Carlos Moreno",
    portraitNote: "proximity",
    portraitAlt: "Carlos Moreno",
  },
  {
    key: "public",
    number: "04",
    label: "The public balance",
    quote: "Mobility is an enabler of economic activity and a burden on the environment and on public finances at the same time, while it is also perceived as a necessity for almost everyone in modern societies. These opposing forces raise fundamental questions: How should we travel? How much should we travel? And how much should we invest in others' travel?",
    attribution: "Daniel Hörcher",
    reflection: "Good movement comes back as wages, as shops, as people staying. It never comes back as fares. Two books, and only one of them is read at budget time.",
    portraitName: "Daniel Hörcher",
    portraitNote: "public value",
    portraitAlt: "Daniel Hörcher",
  },
];

export default function ManifestoPage() {
  return (
    <>
      <SiteHeader activeSection="Why" />

      <main className="manifesto-page">
        <nav className="manifesto-chapter-nav" aria-label="On this page">
          <Link href="/#why">01 / Why</Link>
          <span>Essay 01 of 03</span>
          <div>
            <a href="#four-ledgers">Four ledgers</a>
            <a href="#what-i-add">What I add</a>
            <a href="#2035">2035</a>
          </div>
        </nav>

        <header className="manifesto-opening" id="top">
          <div className="manifesto-opening-title">
            <p className="eyebrow">01 / Why · Essay 01</p>
            <h1>I count because I cannot love a street I cannot account for.</h1>
            <p className="manifesto-opening-deck">A personal case for returning shared space to the life already here.</p>
          </div>

          <blockquote className="manifesto-epigraph">
            <p>“either streets or houses, no need of sidewalks.”</p>
            <cite>David H. Keller, 1928</cite>
          </blockquote>

          <div className="manifesto-opening-copy">
            <p>I have lived in the middle of five European cities. Old Town Square in Prague. W1 in London. The centre of Vienna. The centre of Miskolc. And Budapest.</p>
            <p>So I know how a dense core works from the inside of five of them, and not from a survey.</p>
            <p>Budapest is the one I chose.</p>
            <p>I have also spent my working life counting how people move and what it costs. Fuel, streets, charging, fleets. Counting is my trade. This is the first time I have pointed it at my own address.</p>
            <p>What follows is a picture of my own streets, thought through the way I think. There is nobody here I want to convince. Nothing in it asks to be adopted.</p>
          </div>
        </header>

        <section className="manifesto-ledgers" id="four-ledgers" aria-labelledby="ledgers-title">
          <header className="manifesto-section-heading">
            <div>
              <p className="eyebrow">Four ledgers</p>
              <h2 id="ledgers-title">Four people taught me how to count this.</h2>
            </div>
            <p>Each found a different bill that nobody pays.</p>
          </header>

          <div className="manifesto-ledger-grid">
            {ledgers.map((ledger) => (
              <article className={"manifesto-ledger manifesto-ledger-" + ledger.key} key={ledger.key}>
                <figure className="manifesto-expert-portrait">
                  <div className={"manifesto-expert-photo portrait-" + ledger.key} role="img" aria-label={ledger.portraitAlt} />
                  <figcaption>
                    <span>{ledger.portraitName}</span>
                    <small>{ledger.portraitNote}</small>
                  </figcaption>
                </figure>
                <div className="manifesto-ledger-copy">
                  <p className="manifesto-ledger-index"><span>{ledger.number}</span>{ledger.label}</p>
                  <blockquote>
                    <p>“{ledger.quote}”</p>
                    <cite>{ledger.attribution}</cite>
                  </blockquote>
                  <p className="manifesto-ledger-reflection">{ledger.reflection}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="manifesto-ledger-conclusion">
            <p>Four ledgers. One car. Not one of them on the driver&apos;s bill.</p>
            <p>So the honest question is not whether people love their cars. It is what anyone would choose if they were ever shown the invoice.</p>
          </div>
        </section>

        <section className="manifesto-prose-section manifesto-where-they-stop" aria-labelledby="where-title">
          <header>
            <p className="eyebrow">Where they stop</p>
            <h2 id="where-title">Every one of them removes a cost.</h2>
          </header>
          <div className="manifesto-prose">
            <p>Not one of them replaces what the car actually does for the person who needs it.</p>
            <p>And there is a second thing missing, quieter than the first. A neighbourhood can pass every test for what is near and still be a place nobody walks in. Access is the precondition. Delight is the motive. We do not walk to reach things. We walk to see, to enjoy the walk, to arrive.</p>
          </div>
        </section>

        <section className="manifesto-keller" aria-labelledby="keller-title">
          <div className="manifesto-keller-intro">
            <div>
              <p className="eyebrow">1935 / An aside</p>
              <h2 id="keller-title">A novelist saw this car before we named it.</h2>
            </div>
            <p>You speak your destination into it. It drives itself. It obeys the signals and it slows at the schools. And this is who he built it for.</p>
          </div>
          <div className="manifesto-keller-body">
            <blockquote className="manifesto-keller-quote">
              <p>“There are still millions of people who want to drive but who lack the elemental courage. For example, the blind, the aged, timid women, cripples, little children too young to secure permits to drive.”</p>
              <cite>David H. Keller, 1935</cite>
            </blockquote>
            <aside className="manifesto-keller-archive" aria-label="Archival illustrations accompanying the David H. Keller discussion">
              <figure>
                <img src="/media/manifesto/keller-traffic-chaos.webp" alt="Black-and-white archival illustration of a chaotic urban traffic collision" />
                <figcaption>Traffic imagined</figcaption>
              </figure>
              <figure>
                <img src="/media/manifesto/keller-street-future.webp" alt="Black-and-white archival illustration of an imagined future city street" />
                <figcaption>Street imagined</figcaption>
              </figure>
            </aside>
          </div>
          <p className="manifesto-keller-after">Ninety years early, and almost word for word the thing we describe today.</p>
        </section>

        <section className="manifesto-credo" id="what-i-add" aria-labelledby="credo-title">
          <div>
            <p className="eyebrow">What I add</p>
            <h2 id="credo-title">Movement is a need.<br />Storage is a habit.</h2>
          </div>
          <div className="manifesto-credo-copy">
            <p>The mobility is not defining the city. The city should be defined, and the mobility should support that way of living.</p>
            <p className="manifesto-credo-line">A vehicle you can summon is a vehicle you do not have to store.</p>
            <p>That last sentence is the whole of it. A car that comes when it is wanted does not need a place to sleep. The cost stops being owned. The land stops being storage. Being close becomes a choice instead of a rule.</p>
          </div>
        </section>

        <section className="manifesto-prose-section manifesto-size" aria-labelledby="size-title">
          <div className="manifesto-size-heading">
            <header>
              <p className="eyebrow">The size of the claim</p>
              <h2 id="size-title">I am not describing a country.</h2>
            </header>
            <img src="/inner-budapest-polygon-v1-0-mono-ink.svg" alt="The Inner Budapest study polygon" />
          </div>
          <div className="manifesto-prose">
            <p>I am describing about six square kilometres.</p>
            <p>Dense, old, already well served. The best connected square of this city. And Europe already knows how to draw a line around a piece of a city and treat what happens inside it differently. Low emission zones do it. Congestion zones do it. Barcelona does it.</p>
            <p>Inside that line I am asking for one thing, and only one.</p>
            <p className="manifesto-storage-line">Drive in if you need to. Do not use the street for storage. Parking is not a right.</p>
          </div>
        </section>

        <section className="manifesto-against" aria-labelledby="against-title">
          <div>
            <p className="eyebrow">Against myself</p>
            <h2 id="against-title">Everything in this neighbourhood is already close. And families leave anyway.</h2>
          </div>
          <div className="manifesto-prose">
            <p>That matters more than it looks, because shared movement needs households that share. A person living alone has nothing to pool. So the finding is not only a sadness about the place. It is a risk to my own idea.</p>
            <p>I put it here, at the front, where you can see it.</p>
            <p>And I am not thinking of everybody. There will be needs I have missed, and lives that do not fit the picture I am drawing. I know that.</p>
            <p>But I am not a mayor. I do not have to win an election in four years. Nobody has to vote for this, and nothing here has to survive a committee.</p>
          </div>
        </section>

        <footer className="manifesto-closing" id="2035">
          <div>
            <p className="eyebrow">2035</p>
            <h2>Ten years.<br />One hundred years after Keller.</h2>
          </div>
          <div>
            <p>It may be early. I picked a number because a wish without a date is only a mood.</p>
            <p className="manifesto-closing-line">Walk with me from now, through the numbers and the proof maps, to the future. This is my part of Budapest in 2035.</p>
            <p className="manifesto-closing-coda">What follows is not a promise for a country. It is an account of one small place, made clear enough to choose what comes next.</p>
            <Link href="/why/the-polygon">Continue to The Polygon <span aria-hidden="true">→</span></Link>
          </div>
        </footer>
      </main>
    </>
  );
}
