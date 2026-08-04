import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { WhoLivesHereEmbed } from "../../modules/WhoLivesHereEmbed";

export default function WhoLivesHerePage() {
  return (
    <>
      <SiteHeader activeSection="Now" />

      <main className="wlh-page">
        <nav className="wlh-chapter-nav" aria-label="Who lives here chapter navigation">
          <Link href="/#now">← Now</Link>
          <span>02 / Now · Who lives here</span>
          <Link href="/">My neighbourhood</Link>
        </nav>

        <section className="wlh-frame" aria-label="Who lives here, an interactive portrait of the neighbourhood">
          <WhoLivesHereEmbed />
        </section>
      </main>
    </>
  );
}
