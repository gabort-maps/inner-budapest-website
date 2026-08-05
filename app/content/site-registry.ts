export type Section = "Why" | "Now" | "Keep" | "Change" | "Build";

export type ChapterCard = {
  id: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
  number?: string;
};

export const facts = [
  ["95,000", "residents inside the study area"],
  ["6 km²", "one compact inner-Budapest neighbourhood"],
  ["11,000–25,000", "estimated parking spaces across the area"],
  ["2035", "the horizon for a parking-free neighbourhood"],
] as const;

export const whyCards: ChapterCard[] = [
  { id: "manifesto-opening", number: "01", title: "Manifesto", description: "A personal case for a neighbourhood that gives more of its shared space back to everyday life.", href: "/why/manifesto" },
  { id: "the-polygon-introduction", number: "02", title: "The polygon", description: "The boundary of the study, why these streets belong together, and what this six-square-kilometre area contains.", href: "/why/the-polygon" },
  { id: "how-to-read-the-numbers", number: "03", title: "How to read the numbers", description: "A clear guide to estimates, ranges and confidence, so every figure can be read with the right degree of certainty." },
];

export const nowCards: ChapterCard[] = [
  { id: "the-place", title: "The place", description: "The six-square-kilometre polygon at the centre of this neighbourhood study." },
  { id: "the-streets", title: "The streets", description: "How the street network divides space between movement, parking and everyday life." },
  { id: "what-is-close", title: "What is close", description: "The daily destinations residents can already reach within a short walk." },
  { id: "who-lives-here", title: "Who lives here", description: "A portrait of the people, households and generations that share the neighbourhood.", href: "/now/who-lives-here", image: "/media/now/who-lives-here/charts/P02_S4_01_age_tree_v1_1.svg" },
  { id: "what-replaces-it", title: "What replaces it", description: "The mobility choices that can replace private parking without reducing access." },
  { id: "evidence-maps", title: "Evidence maps", description: "Nine layers of proximity, access and parking, drawn on one measured street network.", href: "/now/evidence-maps", image: "/media/evidence-maps-polygon-thumbnail.webp" },
  { id: "can-a-family-afford-to-arrive", title: "Can a family afford to arrive?", description: "A practical test of whether changing mobility remains fair and financially realistic." },
  { id: "international-comparisons", title: "International comparisons", description: "What comparable European neighbourhoods reveal about the choices available here." },
];

export const keepCards: ChapterCard[] = [
  { id: "city-history-and-urban-development", title: "History and urban development", description: "How Budapest’s growth shaped the streets, blocks and everyday life of this neighbourhood.", image: "/media/keep/history-and-urban-development.webp", href: "/keep/history-and-urban-development" },
  { id: "heritage-collection", title: "My Heritage collection", description: "An illustrated archive of façades, details and places worth carrying into the future.", image: "/media/keep/my-heritage-collection.webp", href: "/keep/heritage-collection" },
];

export const changeCards: ChapterCard[] = [
  { id: "three-streets-opening", title: "Three streets I know", description: "A lived selection, one shared public-space question and three distinctly different answers.", href: "/change/three-streets", image: "/media/change/three-streets-map-future-bridge-v0-2.webp" },
  { id: "katona-jozsef-utca", title: "Katona József utca", description: "A neighbourhood street with a clear opportunity to do more than store cars." },
  { id: "falk-miksa-utca", title: "Falk Miksa utca", description: "A civic street, where a more generous public realm can reinforce its cultural life." },
  { id: "pozsonyi-ut", title: "Pozsonyi út", description: "A mature local high street, ready for a quieter and more useful kerb." },
];

export const navigation: Array<{ label: Section; href: string; items: Array<{ label: string; href: string }> }> = [
  {
    label: "Why",
    href: "/#why",
    items: [
      { label: "Manifesto", href: "/why/manifesto" },
      { label: "The polygon", href: "/why/the-polygon" },
      { label: "How to read the numbers", href: "/#how-to-read-the-numbers" },
    ],
  },
  {
    label: "Now",
    href: "/#now",
    items: [
      { label: "The place", href: "/#the-place" },
      { label: "The streets", href: "/#the-streets" },
      { label: "What is close", href: "/#what-is-close" },
      { label: "Who lives here", href: "/now/who-lives-here" },
      { label: "What replaces it", href: "/#what-replaces-it" },
      { label: "Evidence maps", href: "/now/evidence-maps" },
      { label: "Can a family afford to arrive?", href: "/#can-a-family-afford-to-arrive" },
      { label: "International comparisons", href: "/#international-comparisons" },
    ],
  },
  {
    label: "Keep",
    href: "/#keep",
    items: [
      { label: "History and urban development", href: "/keep/history-and-urban-development" },
      { label: "My Heritage collection", href: "/keep/heritage-collection" },
    ],
  },
  {
    label: "Change",
    href: "/#change",
    items: [
      { label: "Three streets I know", href: "/change/three-streets" },
      { label: "Katona József utca", href: "/#katona-jozsef-utca" },
      { label: "Falk Miksa utca", href: "/#falk-miksa-utca" },
      { label: "Pozsonyi út", href: "/#pozsonyi-ut" },
    ],
  },
  { label: "Build", href: "/#build", items: [] },
];
