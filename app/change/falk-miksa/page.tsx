import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Falk Miksa utca | Inner Budapest",
  description:
    "Falk Miksa utca, one short Budapest street with three different identities and a proposal to bring daily life back.",
};

export default function FalkMiksaPage() {
  return (
    <>
      <SiteHeader activeSection="Change" />
      <main className="falk-source-page">
        <iframe
          className="falk-source-frame"
          src="/media/change/falk-miksa/page.html"
          title="Falk Miksa utca, Bring daily life back"
        />
      </main>
    </>
  );
}
