export type HeritagePlace = {
  id: string;
  n: number;
  title: string;
  where: string;
  meta: string;
  lede: string;
  body: string[];
  label: string;
  plusOne: boolean;
  rightsGap: boolean;
  image: string;
  caption: string;
};

export const heritagePlaces: HeritagePlace[] = [
  {
    "id": "dunapark",
    "n": 1,
    "title": "Dunapark",
    "where": "Pozsonyi út 38–42",
    "meta": "1935–36 · Béla Hofstätter and Ferenc Domány",
    "lede": "The expensive end of a district everyone calls Bauhaus.",
    "body": [
      "People call this the Bauhaus district. It isn't, quite. Újlipótváros is Secession and Art Deco and new historicism and functionalism, built within about fifteen years by different architects for different clients — and Dunapark is the costly end of it. Marble, lifts, service rooms, roof terraces, a glazed stair, a café on the corner. Not social housing. Metropolitan luxury.",
      "What I like is what it faces. Szent István Park was planned in 1928 on the site of a parquet factory, and these buildings were drawn with the park already in the drawing. The block and the green were one thought.",
      "Nine years after it was finished, this street was the international ghetto."
    ],
    "label": "01",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/dunapark.webp",
    "caption": "The stair. Hofstätter and Domány wrapped it round a tiled well so the light falls the whole way down — and ninety years later it is still the thing everyone photographs."
  },
  {
    "id": "phonix",
    "n": 2,
    "title": "Főnix House",
    "where": "Katona József utca 25–27",
    "meta": "1928–29 · Dávid and Zsigmond Jónás",
    "lede": "An entire city block, built as one thing.",
    "body": [
      "Eight staircases, around 146 apartments, and a garden in the middle you would never guess from the street.",
      "I like it because it isn't trying to be a monument. It is speculative housing at scale, from a decade when that was still possible here, and it solved the block interior by keeping it.",
      "Most of what I want from a street is already inside this building: density, shops at the bottom, and somewhere green that belongs to the people who live above them."
    ],
    "label": "02",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/phonix.webp",
    "caption": "Through the gateway into the garden. Eight staircases open onto this, and from the street you would not know it was here."
  },
  {
    "id": "nyugati",
    "n": 3,
    "title": "Nyugati pályaudvar",
    "where": "Teréz körút",
    "meta": "opened 1877 · Auguste de Serres and the Eiffel Company",
    "lede": "Proof that this city moved seriously, long before the car.",
    "body": [
      "Hungary's first railway left from near here in 1846, for Vác. What replaced that terminus is a glass wall with a station behind it, built by the Eiffel company and set straight onto the new Grand Boulevard.",
      "Horse trams from 1866. Electric trams from 1887. The Millennium Underground in 1896 — the first underground railway on the continent. The street pattern I walk was laid out by people solving movement at scale, with what they had.",
      "Katona József utca runs from here to the Danube. That is the whole of my east–west."
    ],
    "label": "03",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/nyugati.webp",
    "caption": "The glass frontage on the boulevard"
  },
  {
    "id": "falk",
    "n": 4,
    "title": "Falk Miksa utca 4",
    "where": "District V",
    "meta": "1914 · Béla Lukács and Manó Rácz",
    "lede": "A street that began as a flood embankment and has been renamed by every regime since.",
    "body": [
      "It started as Új úti védgát, the new road's dyke. Then Pannónia. Then Nádor. Then Juhász Andor, then Néphadsereg. It has been named after Miksa Falk three separate times: 1910, 1945, 1991. One short street, four political eras, filed in its own name.",
      "Number 4 has a recessed forecourt and shops along the bottom, and it is the façade I stop at. In June 1944 it was one of the yellow-star houses. Testimony from this building describes people sleeping on the carpets in the flats.",
      "The Columbo statue at the körút end is lovely and the genealogy is a myth. The City Archives found nothing connecting Peter Falk to Miksa Falk beyond the surname."
    ],
    "label": "04",
    "plusOne": false,
    "rightsGap": true,
    "image": "/media/heritage/falk.webp",
    "caption": "Falk Miksa utca 4 — forecourt, shopfronts, and the street wall behind"
  },
  {
    "id": "biarritz",
    "n": 5,
    "title": "Biarritz House",
    "where": "Kossuth Lajos tér 18 · Széchenyi rakpart 12 · Balassi Bálint utca 2",
    "meta": "1937–40 · five houses, façades unified by Andor Wellisch",
    "lede": "One palace, or so it looks. It is actually five.",
    "body": [
      "It reads as a single monumental block of pale limestone standing next to Parliament, and it is not one building. Five adjoining rental houses went up between 1937 and 1940, by different architects for different clients, and Andor Wellisch coordinated the exteriors into one composition — the same stone, the same ironwork from the Jungfer workshop, the same marble in the halls. From the square you cannot see the seams.",
      "The best-known section, Kossuth Lajos tér 18, was built for Bauxit Ipari Rt. by a team around Imre Verő, Gábor Preisich and Mihály Vadász. Twin lifts, and a central ventilation system that pulled the stale air and the cigarette smoke out of the flats. In 1938. Verő moved in himself.",
      "The café at the Parliament-facing corner opened on 24 May 1938 and gave the whole block a name it has never lost.",
      "Next door, Széchenyi rakpart 12/B was leased to the U.S. Military Mission around the turn of 1945–46 and bought outright by the United States in January 1948. It stayed in American hands until the property exchange of 2014 — diplomatic apartments, other government functions, and from 1973 the first classroom of the American International School, in a three-bedroom flat. That is why people also call it the American House.",
      "And Balassi Bálint utca 2/B, one of the five, was a yellow-star house in 1944. Same block. Same stone."
    ],
    "label": "05",
    "plusOne": false,
    "rightsGap": true,
    "image": "/media/heritage/biarritz.webp",
    "caption": "The whole run, from the river. Five houses in one unbroken line of limestone, with Parliament at the end of it — this is the view where you can see that it is trying to be one thing."
  },
  {
    "id": "parliament",
    "n": 6,
    "title": "Országház",
    "where": "Kossuth Lajos tér",
    "meta": "1885–1902 · Imre Steindl",
    "lede": "Neo-Gothic on the outside, and startlingly modern underneath.",
    "body": [
      "Steel frame. Lifts. Gas and electric light together, because nobody yet trusted electricity alone. Air cooled by blowing it over ice in the basement. The building looks six hundred years old and was, for its date, a piece of engineering.",
      "Steindl lost his sight before it was finished and died the year it was completed. He never saw the thing whole.",
      "It faces the river rather than the city — the grand front is the one you can only see properly from Buda, or from a boat. I have always found that slightly rude and entirely correct."
    ],
    "label": "06",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/parliament.webp",
    "caption": "The river front, and the dome from the square"
  },
  {
    "id": "szabadsag",
    "n": 7,
    "title": "Szabadság tér",
    "where": "District V",
    "meta": "square laid out 1897–1900 · Antal Palóczi",
    "lede": "The one place near me that is already most of what I want.",
    "body": [
      "This square exists because something was demolished. The Neugebäude — a Habsburg barracks and political prison, the place associated with the executions after 1849 — was pulled down in 1897, and the land was parcelled and sold. A thirty-year tax exemption for anything finished by 1905 did the rest. A financial district built almost all at once, around a garden.",
      "That last part is why it is here. The square works because of the space in the middle, not the façades around it. Take away the lawn and the trees and the fountain and you have six good buildings facing each other across a car park.",
      "It is also the reason my usual question doesn't apply. The core is already green. The cars are on the ring around it, and on the streets that approach it. So what I am looking at here is the edge, not the middle."
    ],
    "label": "07",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/plates/Szabadsag_Ter_Birds_Eye_Architectural_Collage_v01.webp",
    "caption": "The square as a field, not a corridor — green core, built ring, approach streets"
  },
  {
    "id": "maimano",
    "n": 8,
    "title": "Mai Manó House",
    "where": "Nagymező utca 20",
    "meta": "1894 · built for Manó Mai, court photographer",
    "lede": "A building arranged around a lighting condition, on a street that behaves like a room.",
    "body": [
      "A photographer's house, built around daylight. The studio floor is the point of the whole thing — tall windows placed to catch north light, because in 1894 that was the technology. Everything else is organised around it.",
      "It has been several other things since, including a well-known nightclub between the wars, and it is now the Hungarian House of Photography. I like buildings that survive by changing what they are for.",
      "But the reason I keep stopping here is the street. Nagymező utca is Pesti Broadway: the Operetta Theatre directly opposite, Thália next door, Kismező across the way. The street widens at this point into something that is not quite a square — mature trees, café terraces, benches, planted beds, a low stepped granite fountain. It is already a public room, and nobody had to declare it one.",
      "And the road still runs through it. Public transport, deliveries, the ordinary working traffic of a city street. This was never pedestrianised. It simply stopped being only a road. That is the whole thing I am trying to describe, and it already exists, three hundred metres from the Opera."
    ],
    "label": "08",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/maimano.webp",
    "caption": "The street doing what it does before a show. Operetta Theatre on the left, Mai Manó on the right, the stepped fountain between them, and public transport still coming through the middle of it."
  },
  {
    "id": "opera",
    "n": 9,
    "title": "Operaház",
    "where": "Andrássy út 22",
    "meta": "opened 1884 · Miklós Ybl",
    "lede": "The avenue and the building were one drawing.",
    "body": [
      "Ybl was told to keep it smaller than Vienna's. Whether he then made it better is the kind of thing a city says about itself, but the acoustics are not folklore — they are reliably placed among the best in Europe.",
      "What I actually care about is where it stands. Andrássy út and the Opera were conceived together, in the same programme, by the same council. The street was drawn to have this on it. Nobody dropped a cultural building onto a road that already existed.",
      "That is the version of city-building I keep looking for and rarely find: the movement and the reason for moving, designed at the same time."
    ],
    "label": "09",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/opera.webp",
    "caption": "The Andrássy út frontage and the loggia"
  },
  {
    "id": "savings",
    "n": 10,
    "title": "Postatakarékpénztár",
    "where": "Hold utca 4",
    "meta": "1900–01 · Ödön Lechner and Sándor Baumgarten",
    "lede": "Ornament on the roof, where the street cannot see it.",
    "body": [
      "Ceramic flowers, bees climbing towards a hive, folk motifs turned into an architectural language — and Lechner put the best of it on the roofline, above the sightline of anyone walking past. Asked why, he is supposed to have said it was for the birds. Probably apocryphal. Repeated anyway, and I repeat it too.",
      "The budget was ordinary. It is a working office building for a savings bank, and the invention is almost entirely in the surface.",
      "It stands one street behind Szabadság tér, which is how I usually find it — by accident, looking up."
    ],
    "label": "10",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/plates/Royal_Postal_Savings_Bank_Architectural_Collage_v01.webp",
    "caption": "The Hold utca front and the ceramic roofline"
  },
  {
    "id": "basilica",
    "n": 11,
    "title": "Szent István-bazilika",
    "where": "Szent István tér",
    "meta": "1851–1905 · József Hild, Miklós Ybl, József Kauser",
    "lede": "Fifty-four years, three architects, and one collapsed dome.",
    "body": [
      "Hild started it. The dome came down in 1868, before anyone was under it, and Ybl began again. Kauser finished. Half a century for one building, in a city that was otherwise assembling itself in about fifteen years.",
      "It is ninety-six metres high, and so is the Parliament. The number is 896, the traditional date of the Hungarian arrival. Nothing central is allowed to go above it.",
      "I like that the ceiling of this city is a number about a date."
    ],
    "label": "11",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/basilica.webp",
    "caption": "The west front and the dome from the square"
  },
  {
    "id": "dohany",
    "n": 12,
    "title": "Dohány utcai zsinagóga",
    "where": "Dohány utca 2",
    "meta": "1854–59 · Ludwig Förster; sanctuary by Frigyes Feszl",
    "lede": "An architecture invented because the one it needed did not exist.",
    "body": [
      "Förster took a Moorish Revival language partly because he judged that there was no historical Jewish building tradition available to borrow from. So he assembled one. Nearly three thousand seats, an organ, twin towers — a synagogue built to sit in a European capital as an equal.",
      "In the winter of 1944–45 it stood on the edge of the enclosed Pest ghetto. The garden beside it is a cemetery, which a synagogue would not normally have. The people buried there died inside the ghetto.",
      "It is not a place I visit. It is a place I pass, often, and always notice."
    ],
    "label": "12",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/dohany.webp",
    "caption": "The Dohány utca front and the towers"
  },
  {
    "id": "tram2",
    "n": 13,
    "title": "The Danube tram and its viaduct",
    "where": "Pest embankment — the korzó at Vigadó tér",
    "meta": "opened 20 October 1900 · 498 m riveted iron viaduct · railing and lamps attributed to Miklós Ybl",
    "lede": "Most of this city, for the price of one ticket.",
    "body": [
      "Siemens & Halske proposed a tram along the Pest bank in 1884. It took sixteen years to get built. The objections were flood protection, dock space, and a fear that laying rails along the korzó would spoil the one stretch of the city everybody came to look at.",
      "The answer was not to give up the walk. It was to lift the railway off it. Four hundred and ninety-eight metres of riveted iron viaduct on three rows of columns, built in about six months, so the tram runs at the upper level and the promenade underneath stays a promenade. Ferenc Reitter had planned the embankment itself; the visible ironwork was handed to Miklós Ybl, because somebody understood that this thing would be looked at from the other side of the river for as long as it stood.",
      "The iron I love is not actually the structure. The structure is riveted wrought iron, and the accessible sources do not defensibly name who fabricated it. The cast iron is the railing and the lamp standards that grow straight out of it — which is to say that the safety barrier of a tram line was treated as a designed object. Nobody would sign that off now.",
      "It curves the whole way, on a radius of roughly five thousand metres, because it follows a shoreline that had itself just been regulated into a curve. National Geographic put the ride in the world’s ten most beautiful. The Danube riverscape has been UNESCO World Heritage since 1987, and in 2011 the embankments themselves were listed — about twelve kilometres of them, the largest-extent monument in Budapest.",
      "This is the part that matters to me. You can board at Jászai Mari tér, ten minutes from my door, and see the Parliament, the Chain Bridge, the Castle, Gellért Hill and the Market Hall go past the window on one ticket. It is the best-value sightseeing in Europe and it is also just the number 2 — people take it to work.",
      "And underneath it, the argument is being made again in my lifetime. The lower quay is closed to cars every weekend, and since 26 May 2026 on weekday evenings too — from 29 June, five in the afternoon until five in the morning, between Margit híd and Havas utca. The city counted over ten thousand people an evening walking and cycling on a surface that had been a road an hour earlier. The arches that once held the Viadukt restaurant are being opened again, seasonally, as public rooms.",
      "In 1900 they put a tram on iron legs rather than spoil a walk. In 2026 they close the road below it in the evening for exactly the same reason. A hundred and twenty-six years apart, the same instinct — and nobody is calling it radical."
    ],
    "label": "13",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/plates/Danube_Tram_2_Vigado_Ter_Architectural_Collage_v01.webp",
    "caption": "Vigadó tér, looking across to the Castle and the Chain Bridge, with the track, the railing and the lamp standards in the foreground — the view that is the reason the line exists in this form."
  },
  {
    "id": "market",
    "n": 14,
    "title": "Nagyvásárcsarnok",
    "where": "Fővám tér",
    "meta": "1897 · Samu Pecz",
    "lede": "A logistics machine, dressed as a cathedral.",
    "body": [
      "Iron frame, Zsolnay tiles on the roof, rail access at the back and a channel from the Danube underneath so that barges could unload inside the building. It was designed to solve food supply and public health at the same time — cold, drainage, inspection, light.",
      "What gets me is the ambition of the brief. Someone decided that the place where the city buys its onions should have a nave.",
      "It is the southern end of my walk, and the point where the neighbourhood stops being residential and starts being logistics again — which is, roughly, where it began."
    ],
    "label": "14",
    "plusOne": false,
    "rightsGap": false,
    "image": "/media/heritage/market.webp",
    "caption": "The Fővám tér front and the tiled roof"
  },
  {
    "id": "margitsziget",
    "n": 15,
    "title": "Margit-sziget",
    "where": "Outside the polygon — the plus one",
    "meta": "public garden 1908 · free entry 1948 · cars out 1973",
    "lede": "The proof, sitting in the river, that this city already knows how to do it.",
    "body": [
      "It is not in my area, and it is not even really an island. It is three of them — Nyulak-sziget, Fürdő-sziget and Festő-sziget — joined and raised when the Danube was regulated. The English landscape garden is József nádor's, from after 1790. The thermal water was drilled for in 1866. Miklós Ybl built the spa on top of it. None of this is nature. All of it is made.",
      "What I keep coming back to is how long the access took. Margit híd opened in 1876 and you still had to arrive by boat; the spur down onto the island opened on 19 August 1900. It passed into public ownership in 1908 and was declared a public garden — and you still had to pay to walk in. Permanent free entry only from 10 June 1948. Forty years between the city owning it and anyone being able to use it.",
      "Then in 1972 there was a serious proposal to run a road down the middle of it, Margit híd to Árpád híd. On 15 September 1973 general private-car traffic was excluded instead.",
      "So the argument I am making about my own streets was already built, fifty years ago, in the middle of the river. And note what it is not: it is not car-free. Bus 26 still runs, and has since 1932. Taxis come. Deliveries come. Service vehicles come. What went was the storage and the through-traffic. Everything necessary stayed, and it stayed by design.",
      "It is the plus one because it sits outside my polygon and outside my remit. It is on the list because it is the answer."
    ],
    "label": "+1",
    "plusOne": true,
    "rightsGap": false,
    "image": "/media/heritage/margitsziget.webp",
    "caption": "The Grand Hotel terrace and the long clearing of Nagyrét beyond it. Ybl's hotel opened in 1873, the year the city was united, and has been altered ever since — a sanatorium wing in 1926, a floor added in the thirties, war damage, the 1965 flood, restoration in the eighties."
  }
];
