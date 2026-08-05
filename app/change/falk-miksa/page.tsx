import type { Metadata } from "next";
import { FalkMiksaChapter } from "./FalkMiksaChapter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Falk Miksa utca | Inner Budapest",
  description:
    "A street study for Falk Miksa utca, from local living and antiques commerce to its northern connection.",
};

export default function FalkMiksaPage() {
  return (
    <>
      <SiteHeader activeSection="Change" />
      <FalkMiksaChapter />
    </>
  );
}
