export type HistorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  imageSlot?: {
    title: string;
    description: string;
    src: string;
    alt: string;
    format?: "portrait" | "map";
  };
};

export const historyPage = {
  title: "The Ring That Was Nearly a Canal",
  eyebrow: "03 / Keep · History and urban development",
  dek: "Six square kilometres of inner Pest, and the decisions that made its streets, blocks and public life.",
  openingSlot: {
    title: "Nyugati interior",
    description: "Iron-and-glass train hall, opened in 1877.",
    src: "/media/history/nyugati-interior.webp",
    alt: "The iron-and-glass train shed inside Nyugati station, with its roof structure and platforms.",
  },
  sections: [
    {
      id: "1865",
      title: "1865",
      paragraphs: [
        "This page is about six square kilometres of inner Pest, the flat side of Budapest, running from Garam utca in the north to the inner edge of Ferencváros. It asks one question about that ground: why does it look like this?",
        "Begin in 1865, when the engineer Ferenc Reitter proposed a navigable canal through Pest. It would curve around the back of the built city and return to the Danube farther south. It would carry boats and help address the low, wet and awkward ground beyond the compact city. It was a serious proposal from a serious man, and it was not built.",
        "The canal did not survive as a canal, but the planning question did. In 1868, another proposal imagined a semicircular boulevard along approximately the same low-lying corridor. By 1869, Reitter himself had incorporated the boulevard alternative into his thinking. In 1871, the Grand Boulevard appeared among the city’s adopted planning objectives.",
        "Today it is among the most permanent-looking things in Budapest.",
        "Hold that for a moment. The Grand Boulevard was not inevitable. It was one answer to a question about flood protection, movement, commerce and urban form. There had been another answer on the table.",
      ],
      imageSlot: {
        title: "Reitter’s 1865 plan",
        description: "Reitter’s 1865 plan imagined a navigable canal around Pest, broadly following the corridor later chosen for the Grand Boulevard. (Hungaricana)",
        src: "/media/history/reitter-canal-map.webp",
        alt: "Ferenc Reitter's 1865 plan for a navigable canal around Pest",
        format: "map" as const,
      },
    },
    {
      id: "what-we-assume",
      title: "What we assume",
      paragraphs: [
        "A reasonable person walking these streets today assumes a few things without ever forming them into sentences.",
        "That the street is a road. That the middle of it is for driving and its edges are for keeping cars. That this arrangement is what a street in a European city is, and always broadly was. That the buildings came first and are old, while the traffic came later and is modern, but that both have settled into an order which is more or less how cities work.",
        "None of that is unreasonable. It is what the surface of the city currently says.",
        "The streets are old. The dominance of moving and parked private cars within them is comparatively recent.",
      ],
    },
    {
      id: "before-the-plan",
      title: "Before the plan",
      paragraphs: [
        "Begin with what was here before the plan, because the plan is where most accounts start.",
        "The flat Pest side was floodplain. It contained gardens, storage yards, timber, workshops and the working edge of a river that was not yet controlled. Falk Miksa utca, now one of the most composed streets in Lipótváros, carries an earlier name in the City Archives: Új úti védgát. A flood-defence embankment.",
        "Before it was a street, it was a dyke. It was a dyke because the water came.",
        "In March 1838, the water came badly. Municipal records count 2,281 houses destroyed in Pest, another 827 seriously damaged and only 1,146 left intact. Between fifty and sixty thousand people were made homeless in a city that was a fraction of its present size.",
        "It is worth resisting the modern instinct to file this only under natural disaster. Contemporary responses concerned construction standards, embankments, drainage and coordinated public works. Safety and sanitation were not technical footnotes to nineteenth-century planning. They were among its principal motives.",
        "A comprehensive plan for Pest had already been prepared in 1805 and was associated with János Hild. It was an early attempt to organise roads, public works and the regulated expansion of the city. Pest was becoming a consciously planned commercial centre before it became a capital.",
      ],
    },
    {
      id: "the-deliberate-city",
      title: "The deliberate city",
      paragraphs: [
        "Then comes the part that matters most for everything else on this site.",
        "In 1870, the Public Works Council was established to coordinate the transformation of the capital. In 1873, Buda, Pest and Óbuda were legally united. Between 1870 and 1900, Budapest’s population grew from roughly 270,000 to more than 700,000.",
        "Note what that means. Much of the inner city a person walks through today was designed and built within a single generation, by named institutions, under a deliberate programme, in the service of explicit ideas about what a capital city required.",
        "The names are on the record. Imre Steindl designed Parliament, built between 1885 and 1902. Miklós Ybl designed the Opera, opened in 1884, and worked on the Basilica, whose construction extended across fifty-five years and three architects. Auguste de Serres and the Eiffel Company created Nyugati station, opened in 1877. Samu Pecz designed the Great Market Hall, opened in 1897. Ödön Lechner designed the Museum of Applied Arts and the Royal Postal Savings Bank.",
        "These are usually presented as monuments. They are better understood as components.",
        "Parliament is statehood. The Opera is culture. Nyugati is mobility. The Market Hall is public health and food logistics assembled inside an iron building. They were installed into the city as parts of a system, and the boulevards and radial roads were its wiring.",
        "The system also moved people. Horse trams began running in 1866. Experimental electric tram operation began in 1887. The Millennium Underground opened in 1896.",
        "Before private cars became a mass mode of urban transport, Budapest already had a working answer to the question of how a dense population crosses itself.",
      ],
      imageSlot: {
        title: "Nyugati Station",
        description: "Infrastructure and architecture, assembled as one public system.",
        src: "/media/history/nyugati-exterior.webp",
        alt: "Nyugati Station's iron-and-glass hall and brick towers viewed from the square.",
      },
    },
    {
      id: "the-perimeter-block-as-a-machine",
      title: "The perimeter block as a machine",
      paragraphs: [
        "The housing was designed too, and it was designed as an instrument rather than only as a style.",
        "The inner-Pest perimeter block commonly placed shops, trades and workshops along the street, with apartments arranged around one or more internal courtyards. Larger and more prestigious apartments typically faced the street, while smaller and cheaper units often faced the courtyard.",
        "A single address could hold merchants, clerks, artisans and domestic servants, together with commercial and workshop uses. Differences in rent and status were expressed horizontally, vertically and between street and courtyard.",
        "Street widths were established through public planning. Within those dimensions, building regulations, plot sizes and rental economics shaped the depth, density and courtyard form of the blocks. These were not purely aesthetic choices. They were the result of calculations about light, air, land value, rent and how many households could be accommodated on a given frontage.",
        "Ground floors commonly did work. Bread, repairs, deliveries, workshops, entrances and trade. The street was the building’s working surface, not merely its forecourt.",
      ],
      imageSlot: {
        title: "Főnix House",
        description: "A perimeter block organised around a working courtyard.",
        src: "/media/history/fonix-house.webp",
        alt: "Aerial view of Főnix House showing its complete perimeter block and planted courtyard.",
        format: "portrait" as const,
      },
    },
    {
      id: "between-waterway-and-railway",
      title: "Between waterway and railway",
      paragraphs: [
        "Industry is usually said to have followed the river. That is half right, and the half that is wrong matters.",
        "Hungary’s first railway opened between Pest and Vác in 1846, with its Pest terminus near where Nyugati stands today. From then on, the places that attracted factories, mills and warehouses were those that offered a package: river access, railway connections, flat and relatively inexpensive land, process water, labour within walking distance, and the political possibility of placing noisy or dirty activities away from elite residential quarters.",
        "Two important industrial belts formed on the Pest side. A northern one around Lipótváros, Váci út and the Újpest direction. A southern one around Ferencváros, the railway yards and later Csepel.",
        "The more accurate phrase is therefore between waterway and railway. It names two conditions instead of one.",
        "The polygon forms a north-south section through the inner ends of both belts. Its northern end contained substantial industrial and storage uses before acquiring its present residential and office character. Its southern end brought together trade, railways, markets and the infrastructure of the working city.",
        "What now appears to be a continuous historic district is, in fact, a section cut through several different urban economies.",
      ],
    },
    {
      id: "interruptions",
      title: "Interruptions",
      paragraphs: [
        "Then the city was broken, and the breaking was done to people at named addresses.",
        "Four different geographies existed in and around this area during 1944 and 1945, and they are routinely collapsed into one. They should not be.",
        "The historic Jewish quarter was a residential, commercial, religious and institutional district that had developed gradually from the late eighteenth century outside the old Pest walls.",
        "The yellow-star houses were compulsory residences dispersed across Budapest. The final June 1944 list designated 1,944 buildings. They were imposed by the Hungarian authorities as instruments of forced concentration and dispossession.",
        "The enclosed Pest ghetto was something else. Decreed on 29 November 1944 and sealed in December, it was a fenced and territorially bounded area inside the historic Jewish quarter. By its liberation in January 1945, roughly 70,000 people were confined within an area of about 0.3 square kilometres. Approximately 3,000 bodies were awaiting burial.",
        "The international ghetto was different again. From November 1944, neutral legations and humanitarian organisations claimed protection over a cluster of apartment houses around Pozsonyi út and Szent István Park. The authorities initially planned accommodation for 15,600 protected Jews in buildings that had previously housed 3,969 residents. Actual occupancy was far higher. Raoul Wallenberg estimated that approximately 33,000 people were there by 8 December.",
        "A compulsory residence and a protected house were not the same thing. Protection also failed often enough that the distinction must be stated rather than assumed.",
        "One address will stand for the rest. The pharmaceutical industrialist Gedeon Richter was taken from Katona József utca 21 by Arrow Cross men on 30 December 1944 and murdered. A plaque marks the door.",
        "The siege that followed destroyed bridges, housing, transport and monumental buildings across the city. But there is a reason to begin with one doorway. Aggregate figures let a reader look at a district. A plaque makes them look at a house.",
      ],
    },
    {
      id: "after-1945",
      title: "After 1945",
      paragraphs: [
        "On 1 January 1950, Greater Budapest incorporated seven towns and sixteen surrounding municipalities. The city’s area increased from 207 to 525 square kilometres, and approximately 531,000 people were added to an existing population of roughly 1.058 million.",
        "This was not simply growth outward from a centre. It was the political integration of a settlement pattern that already existed.",
        "Inside the polygon, what followed was addition and neglect at the same time. The metro, tram and bus systems expanded. Housing estates were built, mostly farther out. Roads were widened and private cars were increasingly accommodated. State-controlled housing in the old perimeter blocks was maintained under chronic constraint, while much of the nineteenth-century fabric aged without sufficient investment.",
        "At the city scale, the direction changed again after 1989. Industrial land fell from about 8.6 per cent of Budapest in 1986 to roughly 4 to 4.5 per cent by 2000. Váci út became an office and investment corridor. Post-1989 condominium privatisation fragmented ownership and made coordinated building renewal more complex.",
        "The municipal population, which exceeded two million around 1970 and stood at 2,059,226 in 1980, had fallen to approximately 1,685,000 by 2025. The wider metropolitan system remained considerably larger than the municipality alone.",
        "Each of these changes came from decisions, or from the accumulated residue of many decisions. None was entirely natural.",
      ],
      imageSlot: {
        title: "Dunapark Houses",
        description: "An interwar metropolitan corner assembled as city, not monument.",
        src: "/media/history/dunapark-houses.webp",
        alt: "Dunapark Houses at the corner of Szent István Park, with terraces, street life and the park.",
      },
    },
    {
      id: "when-the-kerb-changed-use",
      title: "When the kerb changed use",
      paragraphs: [
        "The basic street plan and perimeter blocks of this polygon were largely established before mass car ownership. Its courtyards, ground-floor commerce and principal tram corridors belong to an older urban system.",
        "Continuous kerbside parking is therefore a later operational layer. It is not the organising principle around which this fabric was built.",
        "The change did not occur on one identifiable day.",
        "Hungary’s first unified traffic code took effect in 1930. Successive codes regulated where vehicles could stop and wait, and how these uses could be prohibited or restricted. The KRESZ adopted in 1975 made the default spatial rule explicit: unless another rule or sign applied, vehicles could stop at the edge of the carriageway, parallel to it and in one row. The same legal framework governed longer-term waiting.",
        "This did not assign every kerb to parking, and it did not create continuous parking overnight. It made stopping and waiting at the kerb lawful wherever they were not prohibited. Traffic signs, local orders and engineering decisions then restricted, organised or priced that use street by street.",
        "Motorisation supplied the pressure. Hungary had little more than 30,000 passenger cars in 1960 and more than one million by 1980. Budapest’s first parking meter appeared at Vörösmarty tér in 1974. By 1979, the city had 3,826 paid public parking spaces.",
        "No single founding decision assigning the kerb to parked cars has been identified in the sources reviewed for this project. But that should not be mistaken for an unwritten change.",
        "The transformation was cumulative. It arrived through national traffic law, signs, local traffic orders, engineering practice and the repeated accommodation of a rapidly growing vehicle fleet. It is difficult to place on one date because it was distributed across thousands of decisions.",
        "The present record is similarly fragmented. In 2024, Budapest Közút stated that its statutory road register does not record the number of public waiting spaces and that the law does not require such a count. This establishes the absence of a complete inventory within that register. It does not establish that parking was never authorised, planned or managed.",
        "The historical point is therefore quieter and stronger.",
        "A street system built for a dense, mixed city gradually acquired a new default use at its edges. Because that change came through many rules and repeated local choices, it can now appear older and more inevitable than it is.",
      ],
    },
    {
      id: "contingency",
      title: "Contingency",
      paragraphs: [
        "Return to 1865.",
        "Reitter’s canal was a real proposal about a real strip of low ground. The city did not simply reject it and walk away. The planning question evolved, other proposals entered the discussion, and Reitter himself incorporated the boulevard alternative.",
        "What we walk on today is the result of that shift. It has had a century and a half to look like the only possibility.",
        "That is what settled decisions do. They stop resembling decisions.",
        "The point of the history is not that the past was better. It was not. The Pest that built these blocks also contained overcrowding, poor sanitation and inequality inside many of the same buildings we now protect.",
        "The point is narrower and harder.",
        "This city has reassigned its own ground before, deliberately and under changing conditions. The same low-lying corridor could be imagined first as a canal and then as a boulevard. A dyke could become a street of galleries. A floodplain could become Lipótváros. An industrial edge could become Újlipótváros.",
        "History does not determine what the kerb should become next. It shows that its present use is neither original nor inevitable, and that another deliberate choice is possible.",
        "What was assigned can be reassigned.",
        "That is not a promise. It is a precedent.",
      ],
    },
  ],
  sources: [
    "Budapest City Archives records and research concerning the 1838 Pest flood, Ferenc Reitter’s canal and boulevard proposals, the Public Works Council and the creation of Greater Budapest.",
    "Ferenc Reitter, Dunaszabályozás Buda és Pest között. Pesti hajózható csatorna, 1865.",
    "Ágnes Németh, Egy mérnök két terve: Reitter Ferenc és a csatornázási reform, Parts 1 and 2, Budapest City Archives, 2025.",
    "KSH historical population series, Statistical Yearbooks and long-term motor-vehicle records.",
    "BKV transport-history records covering the horse tram, electric tramway and Millennium Underground.",
    "Garay and Benkő, Between Waterway and Railway: Industry along the Danube Riverside in Budapest.",
    "OSA Archivum’s Yellow-Star Houses database, decrees and historical documentation.",
    "Laura Csonka, A nemzetközi gettó létrehozásának sajátosságai, together with the project’s protected-house and local-history evidence.",
    "Records concerning the liberation of the Pest ghetto and the Gedeon Richter memorial history.",
    "The 1/1975 KPM–BM joint decree on road traffic rules, particularly Sections 40 and 41, together with predecessor traffic regulations.",
    "Budapest Közút’s 2024 response concerning the contents of its statutory road register, and the project’s parking evidence register.",
  ],
  limits: "Reitter’s canal and the Grand Boulevard belonged to an evolving planning process and followed broadly the same low-lying corridor. This page does not claim that the boulevard was the canal. The 1944 figures distinguish designated capacity, estimated actual occupancy and bodies awaiting burial. The absence of a single founding parking decision is bounded to the sources reviewed. Parking and waiting were nevertheless governed by national law and local traffic decisions. The absence of a complete space count in one statutory register is not evidence that the city never authorised, planned or managed parking.",
};
