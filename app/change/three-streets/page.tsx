import type { Metadata } from "next";
import { threeStreetsOpeningMarkup } from "./three-streets-opening-markup";

export const metadata: Metadata = {
  title: "Three streets I know | Inner Budapest",
  description:
    "A personal selection of three Inner Budapest streets, reconsidered metre by metre while preserving their architecture and everyday life.",
};

export default function ThreeStreetsPage() {
  return (
    <div
      className="change-prototype"
      id="top"
      dangerouslySetInnerHTML={{ __html: threeStreetsOpeningMarkup }}
    />
  );
}
