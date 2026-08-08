import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Pozsonyi út | Inner Budapest",
  description:
    "Pozsonyi út, a working neighbourhood high street with more room for walking, access, deliveries, transit and everyday life.",
};

export default function PozsonyiPage() {
  return (
    <>
      <SiteHeader activeSection="Change" />
      <main className="pozsonyi-source-page">
        <iframe
          className="pozsonyi-source-frame"
          src="/media/change/pozsonyi/page.html"
          title="Pozsonyi út, Make room for what works"
        />
      </main>
    </>
  );
}
