import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { historyPage } from "../../content/history-and-urban-development";

function HistoryImage({
  title,
  description,
  src,
  alt,
  format,
  opening = false,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;
  format?: "portrait" | "map";
  opening?: boolean;
}) {
  return (
    <figure className={`history-image-slot ${opening ? "history-opening-slot" : ""} ${format === "portrait" ? "history-image-portrait" : ""} ${format === "map" ? "history-image-map" : ""}`}>
      <div className="history-image-frame">
        <img
          className="history-image"
          src={src}
          alt={alt}
          loading={opening ? "eager" : "lazy"}
          fetchPriority={opening ? "high" : "auto"}
        />
      </div>
      <figcaption>
        {format !== "map" && <strong>{title}</strong>}
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}

export default function HistoryAndUrbanDevelopmentPage() {
  const [opening, ...sections] = historyPage.sections;

  return (
    <>
      <SiteHeader activeSection="Keep" />

      <main className="history-page">
        <nav className="history-chapter-nav" aria-label="History and urban development navigation">
          <Link href="/#keep">← 03 / Keep</Link>
          <span>History and urban development</span>
          <div>
            <a href="#sources">Sources and limits</a>
            <Link href="/keep/heritage-collection">My Heritage collection →</Link>
          </div>
        </nav>

        <header className="history-hero">
          <div className="history-hero-copy">
            <p className="eyebrow">{historyPage.eyebrow}</p>
            <h1>{historyPage.title}</h1>
            <p>{historyPage.dek}</p>
          </div>
          <HistoryImage {...historyPage.openingSlot} opening />
        </header>

        <article className="history-essay">
          <section className="history-section history-opening history-section-1865" id={opening.id} aria-labelledby={`${opening.id}-title`}>
            <div className="history-section-index"><span>01</span><i /></div>
            <div className="history-section-copy">
              <h2 id={`${opening.id}-title`}>{opening.title}</h2>
              {opening.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {opening.imageSlot && <HistoryImage {...opening.imageSlot} />}
            </div>
          </section>

          {sections.map((section, index) => (
            <section className={`history-section ${section.id === "when-the-kerb-changed-use" ? "history-kerb" : ""} ${section.id === "contingency" ? "history-contingency" : ""}`} id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
              <div className="history-section-index"><span>{String(index + 2).padStart(2, "0")}</span><i /></div>
              <div className="history-section-copy">
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.imageSlot && <HistoryImage {...section.imageSlot} />}
              </div>
            </section>
          ))}
        </article>

        <section className="history-sources" id="sources">
          <details>
            <summary>Sources and limits <span>+</span></summary>
            <div>
              <p>This page is based on the project&apos;s urban-history and architecture evidence register, with the following primary reference groups.</p>
              <ul>
                {historyPage.sources.map((source) => <li key={source}>{source}</li>)}
              </ul>
              <p className="history-limit"><strong>Evidence boundary.</strong> {historyPage.limits}</p>
            </div>
          </details>
        </section>

        <footer className="history-footer">
          <Link href="/#keep">← Back to Keep</Link>
          <Link href="/keep/heritage-collection">Continue to My Heritage collection →</Link>
        </footer>
      </main>
    </>
  );
}
