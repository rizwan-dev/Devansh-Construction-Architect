// Blog content. Kept in code so posts are statically rendered (fast + fully
// indexable). Each post's `content` is a list of blocks rendered by the
// blog post page.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; title: string; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** Search-result description. Kept <=160 chars; the excerpt is the longer
      on-page intro and is too long for a meta description. */
  metaDescription: string
  date: string // ISO date
  readTime: string
  category: string
  area: string
  image: string
  imageAlt: string
  content: Block[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-a-house-in-lohegaon-pune-guide',
    metaDescription:
      'Building a house in Lohegaon, Pune: plot checks, airport height restrictions, sanction drawings, realistic timelines and what actually drives cost.',
    title: 'Building a House in Lohegaon, Pune: Approvals, Costs and Timelines',
    excerpt:
      'A practical guide to constructing a home in Lohegaon — from checking your plot and airport height restrictions to sanction drawings, realistic timelines and the cost factors that actually matter.',
    date: '2026-07-28',
    readTime: '8 min read',
    category: 'Residential Construction',
    area: 'Lohegaon',
    image: '/Lohegaon Row House.jpeg',
    imageAlt: 'Row house construction project in Lohegaon, Pune',
    content: [
      {
        type: 'p',
        text: 'Lohegaon has changed quickly. What was once a quiet stretch on the north-east edge of Pune is now one of the city’s most active residential pockets, helped along by proximity to Pune International Airport, Viman Nagar and the Kharadi IT belt. If you own a plot here and are planning to build, the good news is that the area still offers plot sizes and pricing that are hard to find closer to the centre. The catch is that Lohegaon comes with a few local considerations that catch first-time builders off guard.',
      },
      {
        type: 'p',
        text: 'This guide walks through what actually matters when you build a house in Lohegaon: verifying the plot, the approvals you will need, the airport rule that is unique to this area, realistic timelines, and where your budget really goes.',
      },
      { type: 'h2', text: 'Step 1: Verify the plot before you design anything' },
      {
        type: 'p',
        text: 'Plenty of time and money is lost by designing first and checking the paperwork later. Before an architect draws a single line, confirm the following:',
      },
      {
        type: 'ul',
        items: [
          'Clear and marketable title, with the 7/12 extract or property card in the current owner’s name',
          'Whether the land is converted to non-agricultural (NA) use — critical on the outskirts, and still an issue in parts of Lohegaon',
          'Which authority governs your plot: PMC, PCMC or PMRDA. Lohegaon largely falls under PMC, but jurisdiction near the fringes is worth confirming',
          'Zoning and permissible FSI for your plot, including any TDR you may be able to load',
          'Access road width — this directly affects the FSI and height you are allowed',
          'Any reservation, road-widening line or nala setback affecting the plot',
        ],
      },
      {
        type: 'callout',
        title: 'The Lohegaon-specific one: airport height restrictions',
        text: 'Because Lohegaon sits next to Pune International Airport and the adjoining air force station, plots in the vicinity fall within the airport’s height-restriction zone. Depending on your distance from the runway and your plot’s elevation, you may need a No Objection Certificate from the Airports Authority of India before your building height can be sanctioned. This is the single most common surprise for people building in Lohegaon. Establish your permissible height at the very beginning — not after the design is finalised.',
      },
      { type: 'h2', text: 'Step 2: Design and sanction drawings' },
      {
        type: 'p',
        text: 'Once the plot position is clear, the design stage runs in two parallel tracks: the design you care about (layout, elevation, light, ventilation, Vastu if that matters to you), and the drawings the authority cares about (setbacks, FSI computation, parking, sanitation, fire access where applicable).',
      },
      {
        type: 'p',
        text: 'A typical drawing set for a residential plot includes the site and layout plan, floor plans, elevations and sections, an area and FSI statement, structural drawings, and the plumbing and electrical layouts. Sanction drawings are submitted to the concerned authority, and approval is granted subject to their scrutiny, payment of development charges and any conditions they impose.',
      },
      {
        type: 'p',
        text: 'A realistic expectation: the drawing preparation is on your architect, but the sanction timeline is not. Approvals depend on the authority’s queue and on how cleanly your file is prepared. A well-prepared file with correct area statements and NOCs in place moves considerably faster than one that invites repeated queries.',
      },
      { type: 'h2', text: 'Step 3: A realistic timeline' },
      {
        type: 'p',
        text: 'For an independent house or a small row-house cluster in Lohegaon, a workable planning assumption looks like this:',
      },
      {
        type: 'ul',
        items: [
          'Plot verification and feasibility: 1–3 weeks',
          'Concept design, 3D views and design freeze: 3–6 weeks, largely driven by how quickly decisions are made',
          'Sanction drawings and approval: highly variable, and dependent on the authority and any NOCs required',
          'Excavation, foundation and RCC frame: the bulk of the structural period',
          'Masonry, plaster, waterproofing and services: overlapping trades once the frame is up',
          'Flooring, joinery, painting and finishing: the stage where client decisions most often cause delay',
        ],
      },
      {
        type: 'p',
        text: 'Two things reliably extend a Pune build: the monsoon, which slows excavation, RCC curing schedules and external plaster and painting; and late changes to finishes. If you want to protect your timeline, finalise tile, sanitaryware and joinery selections before the structure is complete, not after.',
      },
      { type: 'h2', text: 'Step 4: Where the budget actually goes' },
      {
        type: 'p',
        text: 'Rather than quoting a rate per square foot — which is close to meaningless without a specification attached — it is more useful to understand what moves your cost. Two houses of identical area in Lohegaon can differ substantially in price because of:',
      },
      {
        type: 'ul',
        items: [
          'Soil condition and the resulting foundation design, plus any retaining or levelling work',
          'Structural design: spans, cantilevers and column-free spaces all cost more in steel and concrete',
          'Specification level of finishes — flooring, joinery, sanitaryware and hardware account for a large share of variation',
          'Elevation treatment, external cladding and railing details',
          'MEP scope: extent of electrical points, home automation, solar, plumbing fixtures and drainage',
          'Compound wall, gate, parking, paving and landscaping, which are often left out of early estimates',
          'Statutory charges, development fees and GST, which sit outside the construction cost',
        ],
      },
      {
        type: 'p',
        text: 'When comparing quotations, compare specifications line by line. A lower quotation is usually a lower specification, a smaller scope, or an estimate that quietly excludes items you will have to pay for later.',
      },
      { type: 'h2', text: 'Practical advice specific to Lohegaon' },
      {
        type: 'ul',
        items: [
          'Confirm your permissible height and any AAI requirement before design, given the airport proximity',
          'Check the approach road width carefully — several interior lanes in Lohegaon are narrower than they appear, which affects both FSI and the movement of ready-mix concrete and material trucks',
          'Plan material deliveries around airport-area and school-hour traffic to avoid idle labour',
          'Verify water availability and the borewell position early; it affects both the build and daily living afterwards',
          'If you are building row houses or a small scheme, resolve common amenities, drainage and parking at the layout stage, not later',
        ],
      },
      { type: 'h2', text: 'Building in Lohegaon with Devansh Constro & Architect' },
      {
        type: 'p',
        text: 'Our office is in Santnagar, Lohegaon, and a good part of our work is within a few kilometres of it — including row houses and independent homes in and around the area. That local familiarity matters: we know the approach roads, the approval patterns and the practical constraints of building here.',
      },
      {
        type: 'p',
        text: 'If you own a plot in Lohegaon and want an honest read on what you can build, what it will take to get sanctioned, and what it will realistically cost, get in touch for a consultation and a site visit.',
      },
    ],
  },
  {
    slug: 'commercial-construction-kharadi-pune-guide',
    metaDescription:
      'Commercial construction in Kharadi, Pune: designing for your occupier, MEP planning, fire and parking compliance, and building in a live IT corridor.',
    title: 'Commercial Construction in Kharadi: What Businesses Should Plan For',
    excerpt:
      'Kharadi is Pune’s busiest commercial corridor. Here is what actually determines the success of an office, retail or mixed-use build here — from fit-out standards and MEP planning to fire compliance and phasing work around a live IT belt.',
    date: '2026-08-05',
    readTime: '9 min read',
    category: 'Commercial Construction',
    area: 'Kharadi',
    image: '/Kharadi.jpeg',
    imageAlt: 'Commercial building project in Kharadi, Pune',
    content: [
      {
        type: 'p',
        text: 'Kharadi has become the reference point for commercial development in eastern Pune. The IT and business park cluster around EON, the steady supply of corporate tenants, hotels and retail, and the connectivity to the airport and Nagar Road have made it the address businesses ask for by name. That demand shapes how you should approach a build here.',
      },
      {
        type: 'p',
        text: 'Commercial construction in Kharadi is less about raw square footage and more about what your space can support: power, cooling, fire compliance, parking, and how quickly a tenant can move in. Here is what to plan for.',
      },
      { type: 'h2', text: 'Know your occupier before you finalise the design' },
      {
        type: 'p',
        text: 'The single biggest determinant of a commercial project’s cost and layout is who will occupy it. An IT office, a clinic, a showroom, a restaurant and a co-working floor have materially different requirements, and retrofitting later is expensive.',
      },
      {
        type: 'ul',
        items: [
          'IT and corporate offices: high power density, redundancy, server and UPS rooms, structured cabling, and an efficient floor plate with minimal columns',
          'Retail and showrooms: frontage and visibility, display lighting, customer circulation, and signage rights',
          'Food and beverage: kitchen exhaust and ducting routes, grease traps, gas safety, water supply and heavier drainage',
          'Clinics and diagnostics: specific plumbing, waste segregation, privacy planning and equipment loads',
          'Co-working and managed offices: flexible partitioning, dense washrooms, meeting-room acoustics and higher HVAC turnover',
        ],
      },
      {
        type: 'callout',
        title: 'Design for the tenant you want, not the cheapest shell',
        text: 'In a competitive corridor like Kharadi, buildings that already provide adequate power, lift capacity, washroom counts and parking get leased faster and at better rates. Shells built purely to minimise cost tend to sit vacant or attract tenants who then demand expensive modifications.',
      },
      { type: 'h2', text: 'MEP is where commercial projects are won or lost' },
      {
        type: 'p',
        text: 'On residential projects, mechanical, electrical and plumbing work is important. On commercial projects it is decisive, and it should be designed alongside the architecture rather than after it.',
      },
      {
        type: 'ul',
        items: [
          'Electrical load assessment and sanctioned load from MSEDCL, plus provision for DG backup and, increasingly, EV charging',
          'HVAC strategy chosen early — VRF versus chiller changes your shaft sizes, terrace loading and ceiling heights',
          'Adequate service shafts and risers. Undersized shafts are one of the most common and least fixable mistakes',
          'False ceiling coordination between ducting, sprinklers, lighting, cable trays and structural beams',
          'Plumbing designed for peak office occupancy, not average, with adequate water storage and pumping',
          'Structured cabling, network rooms and provision for future capacity',
        ],
      },
      {
        type: 'p',
        text: 'Getting this coordination right before work begins prevents the most expensive category of site problem: services that clash and have to be rerouted after the ceiling grid is installed.',
      },
      { type: 'h2', text: 'Compliance and approvals' },
      {
        type: 'p',
        text: 'Commercial buildings attract a heavier compliance load than residential ones, and the requirements scale with height and occupancy type. Depending on your project, plan for:',
      },
      {
        type: 'ul',
        items: [
          'Sanction from the concerned authority, with commercial-use zoning confirmed for the plot',
          'Fire NOC, with the associated design implications — staircase widths, refuge areas, sprinklers, hydrants, detection and fire lift provisions',
          'Parking provision as per the applicable norms, which is frequently the binding constraint on a Kharadi plot',
          'Environmental clearance for larger projects that cross the prescribed thresholds',
          'Lift and electrical inspectorate approvals, and signage permissions where applicable',
          'Occupancy certificate before the space can be legitimately handed over and occupied',
        ],
      },
      {
        type: 'p',
        text: 'These are not formalities to be handled at the end. Fire and parking requirements in particular reshape the plan, and discovering them late is what forces redesign.',
      },
      { type: 'h2', text: 'Building in a live, congested corridor' },
      {
        type: 'p',
        text: 'Kharadi is busy. That has real consequences for execution, and a contractor who has not worked in the area tends to underestimate them.',
      },
      {
        type: 'ul',
        items: [
          'Material delivery and ready-mix concrete pours need to be scheduled around peak IT-corridor traffic, often early morning or late evening',
          'Limited site space for storage and stacking means just-in-time material planning',
          'Noise and dust discipline where neighbouring offices are already occupied, including hoarding, screening and controlled working hours',
          'Phasing when part of a building is operational — access, safety segregation and shared services must be planned so tenants keep functioning',
          'Coordination with adjoining site works, which are frequent in an area developing this fast',
        ],
      },
      { type: 'h2', text: 'Fit-out standards and handover' },
      {
        type: 'p',
        text: 'Commercial handovers are judged on details that residential clients rarely notice: consistent ceiling heights, aligned grids, clean junction detailing, working BMS points, tested fire systems and a complete documentation set.',
      },
      {
        type: 'p',
        text: 'Insist on as-built drawings, service layouts, warranty documents for major equipment, and a testing and commissioning record. A tenant’s technical team will ask for these, and a project that cannot produce them looks unfinished regardless of how good it looks.',
      },
      { type: 'h2', text: 'Planning a commercial project in Kharadi?' },
      {
        type: 'p',
        text: 'We have delivered commercial work in the Kharadi belt, including flexible workspace and business-hub projects, and we work across the full path — feasibility, design, sanction drawings, MEP coordination and execution.',
      },
      {
        type: 'p',
        text: 'If you are evaluating a plot or planning a commercial build in Kharadi, contact us for a consultation. We will give you a clear view of what the plot supports, what compliance will require, and what the project realistically involves.',
      },
    ],
  },
  {
    slug: 'lohegaon-vs-kharadi-where-to-build-pune',
    metaDescription:
      'Lohegaon or Kharadi? Comparing plot availability, connectivity, what each area suits and the construction constraints unique to both.',
    title: 'Lohegaon or Kharadi: Choosing the Right Area for Your Pune Project',
    excerpt:
      'Two of east Pune’s fastest-growing areas, with very different characters. A side-by-side look at plot availability, connectivity, what each area suits, and the construction constraints unique to both.',
    date: '2026-08-12',
    readTime: '6 min read',
    category: 'Area Guide',
    area: 'Lohegaon & Kharadi',
    image: '/dhanori.jpeg',
    imageAlt: 'Residential and commercial development in east Pune',
    content: [
      {
        type: 'p',
        text: 'Clients who are still deciding where to buy or build in east Pune usually end up comparing the same two areas: Lohegaon and Kharadi. They sit close to each other, they have both grown fast, and they suit quite different projects. Here is an honest comparison from a builder’s point of view.',
      },
      { type: 'h2', text: 'Character and what each area suits' },
      {
        type: 'p',
        text: 'Lohegaon is primarily residential. It offers independent plots, row houses and mid-rise residential development, with pricing that is generally more accessible than the commercial corridor next door. It appeals to families building a long-term home, and to smaller residential schemes.',
      },
      {
        type: 'p',
        text: 'Kharadi is commercial-first. The IT and business park cluster drives demand for offices, retail, hospitality and premium residential aimed at people working in the corridor. Land is at a premium and projects are typically denser and more compliance-heavy.',
      },
      { type: 'h2', text: 'Connectivity' },
      {
        type: 'ul',
        items: [
          'Lohegaon: adjacent to Pune International Airport, with access to Viman Nagar, Dhanori and the Nagar Road corridor. Interior lanes vary in width and can be congested',
          'Kharadi: strong connectivity along Nagar Road and to the eastern bypass, well connected to Viman Nagar, Wagholi and Hadapsar, with heavy weekday IT-corridor traffic',
        ],
      },
      { type: 'h2', text: 'Construction constraints to weigh' },
      {
        type: 'p',
        text: 'Each area has a constraint that shapes what you can build.',
      },
      {
        type: 'callout',
        title: 'Lohegaon: height restrictions',
        text: 'Airport proximity means height limits and, in many cases, an AAI No Objection Certificate. This must be established before design, because it can decide whether your project is viable at the number of floors you were assuming.',
      },
      {
        type: 'callout',
        title: 'Kharadi: parking, fire and land cost',
        text: 'Commercial norms for parking and fire safety are demanding and often become the binding constraint on a plot. Combined with higher land values, this makes early feasibility work essential before you commit.',
      },
      { type: 'h2', text: 'A simple way to decide' },
      {
        type: 'ul',
        items: [
          'Building a family home or a small residential scheme with better value per square foot: Lohegaon is usually the stronger choice',
          'Building offices, retail or a commercial asset aimed at the IT workforce: Kharadi, despite the higher entry cost',
          'Buying to rent to corporate tenants: Kharadi and its immediate surroundings offer the deeper tenant pool',
          'Prioritising space, quieter surroundings and airport access: Lohegaon',
        ],
      },
      { type: 'h2', text: 'Get a feasibility read before you buy' },
      {
        type: 'p',
        text: 'The most useful thing you can do before purchasing a plot in either area is a feasibility check: what the zoning and FSI allow, what height is permissible, what approvals will be required, and what the plot realistically supports. It is a short exercise that regularly saves clients from an expensive mistake.',
      },
      {
        type: 'p',
        text: 'We work across both areas — our office is in Lohegaon and we have delivered projects in the Kharadi belt. If you are weighing up a plot, contact us and we will give you a straight assessment before you commit.',
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
