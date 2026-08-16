// Service definitions. Each entry powers a dedicated, SEO-optimised service
// page at /services/<slug>, the header dropdown and the footer links.
//
// Images are the firm's own project renders and photographs (no stock/licensing
// concerns), served through next/image so they are resized and converted.

export interface ServiceDetail {
  slug: string
  name: string // short label used in nav/footer
  title: string // H1 on the page
  metaTitle: string
  metaDescription: string
  tagline: string
  image: string
  imageAlt: string
  intro: string[]
  whatsIncluded: { title: string; text: string }[]
  process: { step: string; text: string }[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'architectural-design',
    name: 'Architectural Design',
    title: 'Architectural Design Services in Pune',
    metaTitle: 'Architectural Design Services in Pune',
    metaDescription:
      'Architectural design for homes, apartments and commercial buildings in Pune. Concept planning, elevations, working drawings and Vastu-aware layouts by Devansh Constro & Architect, Lohegaon.',
    tagline:
      'Considered, buildable design — from first concept to the working drawings your site team can actually build from.',
    image: '/services/sahyadri-villa-render.jpeg',
    imageAlt:
      'Modern three-storey villa architectural design with wooden louvers and stone cladding, designed by Devansh Constro & Architect, Pune',
    intro: [
      'Good architecture is not just an attractive elevation. It is a plan that uses every square foot well, brings in light and ventilation, respects your budget, and can be sanctioned and built without constant rework.',
      'We design residential and commercial buildings across Pune — independent houses and villas, apartment buildings, row houses, and commercial and mixed-use projects. Every design starts with your plot, your brief and the regulations that apply, not with a template.',
    ],
    whatsIncluded: [
      {
        title: 'Site study and feasibility',
        text: 'Plot analysis, zoning and FSI check, permissible height, setbacks and orientation, so you know what you can build before design begins.',
      },
      {
        title: 'Concept design and space planning',
        text: 'Layout options developed around how you actually live or operate, with attention to circulation, natural light, ventilation and future flexibility.',
      },
      {
        title: 'Elevation and material design',
        text: 'Exterior treatment, material palette and detailing that suit the climate and your maintenance appetite, not just the render.',
      },
      {
        title: 'Working and structural drawings',
        text: 'Dimensioned floor plans, sections, structural coordination and detail drawings your contractor can build from without guesswork.',
      },
      {
        title: 'MEP coordination',
        text: 'Electrical, plumbing and drainage layouts coordinated with the architecture so services do not clash on site.',
      },
      {
        title: 'Vastu-aware planning',
        text: 'Where it matters to you, layouts are planned to respect Vastu principles without compromising the practical quality of the plan.',
      },
    ],
    process: [
      { step: 'Consultation and site visit', text: 'We understand your brief, budget and plot, and flag constraints early.' },
      { step: 'Concept and options', text: 'Initial layouts and massing, reviewed with you and refined.' },
      { step: '3D views and design freeze', text: 'You see the design realistically before anything is finalised.' },
      { step: 'Sanction drawings', text: 'Drawings prepared and submitted to the concerned authority.' },
      { step: 'Working drawings', text: 'The detailed set that execution runs on.' },
    ],
    faqs: [
      {
        q: 'Do you take on small plots and individual houses?',
        a: 'Yes. A large part of our work is independent houses, villas and row houses on individual plots, alongside apartment and commercial projects.',
      },
      {
        q: 'Can you design only, without executing the construction?',
        a: 'Yes. We offer design-only engagements as well as design-and-build. Many clients start with design and sanction drawings and decide on execution later.',
      },
      {
        q: 'How long does the design stage take?',
        a: 'Concept to design freeze typically takes a few weeks, and is driven mostly by how quickly review decisions are made. Sanction timelines depend on the authority.',
      },
    ],
    relatedSlugs: ['3d-visualization', 'sanction-drawings', 'vastu-consultation'],
  },
  {
    slug: '3d-visualization',
    name: '3D Design & Visualization',
    title: '3D Architectural Visualization & Walkthroughs',
    metaTitle: '3D Architectural Design & Visualization in Pune',
    metaDescription:
      'Photorealistic 3D elevations, exterior and interior renders and walkthroughs for residential and commercial projects in Pune. See your building before you build it.',
    tagline: 'See exactly what you are building — before a single brick is laid.',
    image: '/services/apartment-elevation-render.jpeg',
    imageAlt:
      'Photorealistic 3D render of a modern apartment building elevation with balconies and planters, Pune',
    intro: [
      'Drawings are precise, but most clients cannot read them the way an architect does. A realistic 3D view closes that gap. It is the difference between approving a plan you hope you understood and approving a design you can actually see.',
      'We produce 3D elevations, exterior and interior views and walkthroughs for our design clients, and as a standalone service for owners, builders and developers who need to visualise or market a project.',
    ],
    whatsIncluded: [
      {
        title: '3D exterior elevations',
        text: 'Photorealistic views of your elevation with accurate materials, lighting and landscaping context.',
      },
      {
        title: 'Interior visualisation',
        text: 'Room-level views to finalise layouts, finishes, furniture placement and lighting before you commit.',
      },
      {
        title: 'Material and finish options',
        text: 'Compare cladding, paint, stone and joinery options side by side rather than imagining them.',
      },
      {
        title: 'Walkthroughs',
        text: 'Moving views through the project, useful for larger schemes and for marketing to buyers or tenants.',
      },
      {
        title: 'Marketing-ready imagery',
        text: 'High-resolution renders suitable for brochures, hoardings, listings and social media.',
      },
    ],
    process: [
      { step: 'Share drawings or brief', text: 'We work from your plans, or from ours if we are also doing the design.' },
      { step: 'Base 3D model', text: 'The massing and geometry are built and checked against the drawings.' },
      { step: 'Materials and lighting', text: 'Finishes, textures, landscaping and lighting are applied.' },
      { step: 'Review and revisions', text: 'You review and we refine within the agreed revision rounds.' },
      { step: 'Final delivery', text: 'High-resolution images or walkthrough files delivered.' },
    ],
    faqs: [
      {
        q: 'Will the finished building look like the render?',
        a: 'Renders are close but they are artistic impressions. Actual appearance varies with material batches, site conditions, natural light and the finishes finally selected.',
      },
      {
        q: 'Can you make 3D views from drawings made by another architect?',
        a: 'Yes, we take on visualisation as a standalone service provided you have the right to share the drawings with us.',
      },
    ],
    relatedSlugs: ['architectural-design', 'interior-landscaping', 'sanction-drawings'],
  },
  {
    slug: 'sanction-drawings',
    name: 'PMC / PCMC / PMRDA Sanction Drawings',
    title: 'Sanction Drawings & Building Approvals in Pune',
    metaTitle: 'PMC, PCMC & PMRDA Sanction Drawings in Pune',
    metaDescription:
      'Preparation and submission of sanction drawings for PMC, PCMC and PMRDA in Pune. Zoning and FSI checks, liaison, NOCs and approval follow-up by Devansh Constro & Architect.',
    tagline: 'Drawings prepared correctly the first time, so your file moves instead of bouncing back.',
    image: '/services/ganesh-kale-elevation.jpeg',
    imageAlt: 'Architectural elevation design prepared for municipal sanction approval, Pune',
    intro: [
      'Approvals are where projects quietly lose months. Most delays are not caused by the authority being slow — they are caused by files submitted with incorrect area statements, missing NOCs or drawings that do not match the regulations.',
      'We prepare and submit sanction drawings to PMC, PCMC and PMRDA, and handle the follow-up until the file is cleared. Our office is in Lohegaon, and we work regularly with plots across east Pune and the surrounding fringe areas.',
    ],
    whatsIncluded: [
      {
        title: 'Zoning, FSI and feasibility check',
        text: 'Confirming what your plot permits — use, FSI, permissible height, setbacks, access road width and any reservation affecting the plot.',
      },
      {
        title: 'Complete drawing set',
        text: 'Site and layout plan, floor plans, elevations, sections, area and FSI statement, parking and sanitation details as required.',
      },
      {
        title: 'Submission and liaison',
        text: 'Filing with the concerned authority and following up through scrutiny and queries.',
      },
      {
        title: 'NOC coordination',
        text: 'Assistance with the NOCs your project needs — including AAI height clearance for plots near Pune airport, and fire NOC where applicable.',
      },
      {
        title: 'Revised and completion drawings',
        text: 'Revisions during construction and drawings required at the completion or occupancy stage.',
      },
    ],
    process: [
      { step: 'Document check', text: 'Title, 7/12 or property card, NA status and existing approvals are verified.' },
      { step: 'Feasibility report', text: 'You get a clear picture of what is permissible before design is finalised.' },
      { step: 'Drawing preparation', text: 'The full statutory set is prepared to the authority’s format.' },
      { step: 'Submission', text: 'The file is submitted and fees and charges are worked out.' },
      { step: 'Follow-up to sanction', text: 'We respond to queries until the approval is granted.' },
    ],
    faqs: [
      {
        q: 'How long does sanction take?',
        a: 'It varies with the authority, the project type and how complete the file is. We cannot guarantee a timeline because approval rests entirely with the authority, but a clean, correctly prepared file avoids the repeated queries that cause most delays.',
      },
      {
        q: 'My plot is near Pune airport. Does that change anything?',
        a: 'Yes. Plots near the airport, including much of Lohegaon, fall within a height-restriction zone and may require a No Objection Certificate from the Airports Authority of India. This should be established before design, as it can determine how many floors are viable.',
      },
      {
        q: 'Are government fees included in your charges?',
        a: 'No. Development charges, premiums, scrutiny fees and other statutory levies are payable to the authority and are separate from our professional fees.',
      },
    ],
    relatedSlugs: ['architectural-design', 'civil-construction', 'vastu-consultation'],
  },
  {
    slug: 'vastu-consultation',
    name: 'Vastu Consultation',
    title: 'Vastu Consultation for Homes & Commercial Spaces',
    metaTitle: 'Vastu Consultation for Homes & Offices in Pune',
    metaDescription:
      'Practical Vastu consultation integrated into architectural planning — orientation, entrance, room placement and layout corrections for homes and commercial spaces in Pune.',
    tagline: 'Vastu handled at the planning stage, where it can be resolved properly.',
    image: '/Manjiri.jpeg',
    imageAlt: 'Vastu-planned residential project with landscaped surroundings in Pune',
    intro: [
      'For many families, Vastu is not negotiable. The problem is that it is often raised after the plan is finalised, when the only remaining options are awkward compromises or expensive changes.',
      'We treat Vastu as a planning input from day one. When it is considered alongside orientation, plot shape, light and ventilation, it is usually possible to satisfy Vastu principles and still get a genuinely good plan.',
    ],
    whatsIncluded: [
      {
        title: 'Plot and orientation analysis',
        text: 'Assessment of plot shape, road position, slope and cardinal orientation before layout begins.',
      },
      {
        title: 'Entrance and zoning guidance',
        text: 'Placement of the main entrance, and zoning of kitchen, master bedroom, pooja space, staircase and toilets.',
      },
      {
        title: 'Layout integration',
        text: 'Vastu direction integrated into the architectural plan rather than applied as an afterthought.',
      },
      {
        title: 'Remedies for existing buildings',
        text: 'Practical, low-disruption corrections for homes and offices already built, where full replanning is not an option.',
      },
      {
        title: 'Commercial Vastu',
        text: 'Guidance on reception, cabin, workstation, cash and storage placement for shops and offices.',
      },
    ],
    process: [
      { step: 'Discussion of your requirements', text: 'We establish how strictly Vastu should govern the plan.' },
      { step: 'Site and orientation study', text: 'Directions and plot characteristics are recorded.' },
      { step: 'Vastu-aligned layout', text: 'The plan is developed to satisfy both Vastu and practical planning.' },
      { step: 'Review and finalisation', text: 'Adjustments are made where principles conflict, with the trade-offs explained.' },
    ],
    faqs: [
      {
        q: 'Will following Vastu compromise the design?',
        a: 'Rarely, if it is considered from the start. Conflicts mostly arise when Vastu is introduced after the layout is frozen. Where a genuine conflict exists, we explain the trade-off and let you decide.',
      },
      {
        q: 'Can you help with a house that is already built?',
        a: 'Yes. We suggest practical corrections that can be made without major structural change wherever possible.',
      },
    ],
    relatedSlugs: ['architectural-design', 'sanction-drawings', 'interior-landscaping'],
  },
  {
    slug: 'civil-construction',
    name: 'Civil Construction',
    title: 'Civil Construction Contractors in Pune',
    metaTitle: 'Civil Construction Contractors in Pune',
    metaDescription:
      'End-to-end civil construction in Pune — excavation, RCC structure, masonry, plaster, waterproofing and MEP. Quality materials, supervised execution and transparent billing.',
    tagline: 'Structure built properly — the part of the project you cannot redo later.',
    image: '/dhanori.jpeg',
    imageAlt: 'Residential tower construction project by Devansh Constro & Architect in Dhanori, Pune',
    intro: [
      'Finishes can be replaced. Structure cannot. Civil work is where quality either gets built in or quietly gets compromised, and it is almost impossible to correct after the fact.',
      'We execute civil construction for residential and commercial projects across Pune, with our own supervision on site, defined material specifications and billing you can actually follow.',
    ],
    whatsIncluded: [
      {
        title: 'Excavation and foundation',
        text: 'Site levelling, excavation, soil-appropriate foundation work, and retaining structures where the plot requires them.',
      },
      {
        title: 'RCC structure',
        text: 'Footings, columns, beams, slabs and staircases executed to the structural design, with steel and concrete as specified.',
      },
      {
        title: 'Masonry and plaster',
        text: 'Blockwork or brickwork, internal and external plaster, and the line-and-level discipline that determines how good the finishes can be.',
      },
      {
        title: 'Waterproofing',
        text: 'Terrace, bathroom, sunken slab and basement waterproofing — the most common source of long-term complaints when skipped.',
      },
      {
        title: 'MEP first fix',
        text: 'Electrical conduiting, plumbing and drainage lines laid and coordinated before finishing begins.',
      },
      {
        title: 'Compound, paving and external works',
        text: 'Compound wall, gate, parking, paving and external drainage, planned in rather than added as an afterthought.',
      },
    ],
    process: [
      { step: 'Scope and specification', text: 'Materials, brands and specifications are fixed in writing before work starts.' },
      { step: 'Schedule and mobilisation', text: 'Programme agreed, site set up, labour and material planned.' },
      { step: 'Structure', text: 'Excavation through RCC frame, with stage-wise checks.' },
      { step: 'Masonry and services', text: 'Walls, plaster, waterproofing and first-fix services.' },
      { step: 'Stage billing and handover', text: 'Billing against completed milestones, with a documented handover.' },
    ],
    faqs: [
      {
        q: 'Do you work on a per-square-foot rate?',
        a: 'A rate per square foot is only meaningful when it is attached to a specification. We quote against a defined scope and specification so you know exactly what the number includes.',
      },
      {
        q: 'Can I supply some materials myself?',
        a: 'Yes, that can be arranged. It needs to be agreed in the contract, since it affects responsibility for quality, timelines and any defect liability on those items.',
      },
      {
        q: 'How do you handle the monsoon?',
        a: 'The programme accounts for it. Excavation, RCC curing schedules and external plaster and paint are the activities most affected, and we sequence work to keep progress going on protected areas.',
      },
    ],
    relatedSlugs: ['lock-and-key-projects', 'sanction-drawings', 'architectural-design'],
  },
  {
    slug: 'lock-and-key-projects',
    name: 'Lock & Key (Turnkey) Projects',
    title: 'Turnkey Lock & Key Construction Projects',
    metaTitle: 'Turnkey Lock & Key Construction Projects in Pune',
    metaDescription:
      'Complete turnkey construction in Pune — design, approvals, structure, finishing and handover under one contract. One team accountable from drawing to keys.',
    tagline: 'One team, one contract, from empty plot to the day you get the keys.',
    image: '/Lohegaon Row House.jpeg',
    imageAlt: 'Completed row house turnkey project in Lohegaon, Pune',
    intro: [
      'Managing an architect, a contractor, a plumber, an electrician and a carpenter separately works — until something goes wrong and each blames the other. Turnkey removes that gap: one contract, one point of accountability, one team answerable for the finished result.',
      'Our lock and key projects cover everything from design and approvals through structure, finishing and final handover. You get a defined scope, a defined cost and a single team responsible for delivering it.',
    ],
    whatsIncluded: [
      {
        title: 'Design and approvals',
        text: 'Architectural design, 3D views, structural design and sanction drawings, all handled in-house.',
      },
      {
        title: 'Complete civil work',
        text: 'Excavation through RCC, masonry, plaster and waterproofing.',
      },
      {
        title: 'Full MEP',
        text: 'Electrical, plumbing, drainage and fittings, from first fix to final fix and testing.',
      },
      {
        title: 'Finishing',
        text: 'Flooring, tiling, painting, doors, windows, railings and joinery to the agreed specification.',
      },
      {
        title: 'Kitchen, wardrobes and interiors',
        text: 'Modular kitchen, wardrobes and interior work where included in scope.',
      },
      {
        title: 'External works and handover',
        text: 'Compound, gate, paving, landscaping, cleaning, and a documented handover with drawings and warranties.',
      },
    ],
    process: [
      { step: 'Brief and budget', text: 'We establish what you want and what it needs to cost.' },
      { step: 'Design and specification freeze', text: 'Design, materials and finishes are locked so the price is real.' },
      { step: 'Single agreement', text: 'One contract covering scope, cost, schedule and payment milestones.' },
      { step: 'Execution with updates', text: 'Construction with regular progress updates and stage billing.' },
      { step: 'Snagging and handover', text: 'Snag list closed, cleaning done, keys and documentation handed over.' },
    ],
    faqs: [
      {
        q: 'Is turnkey more expensive than hiring separately?',
        a: 'Not usually, once you account for coordination and rework. What it reliably reduces is your management effort and the number of disputes about who is responsible for a problem.',
      },
      {
        q: 'Can I choose my own tiles, fittings and finishes?',
        a: 'Yes. Selections are made against a budget allowance. Choosing above the allowance simply adjusts the contract value, agreed in writing before purchase.',
      },
      {
        q: 'What do I get at handover?',
        a: 'The completed property, a closed snag list, as-built and service drawings, and available warranty documents for major items.',
      },
    ],
    relatedSlugs: ['civil-construction', 'interior-landscaping', 'architectural-design'],
  },
  {
    slug: 'interior-landscaping',
    name: 'Interiors & Landscaping',
    title: 'Interior Design & Exterior Landscaping',
    metaTitle: 'Interior Design & Landscaping Services in Pune',
    metaDescription:
      'Interior design and exterior landscaping for homes and commercial spaces in Pune — space planning, modular kitchens, wardrobes, false ceilings, lighting, paving and garden design.',
    tagline: 'The finishing layer that decides how the space actually feels to use.',
    image: '/Junnar.jpeg',
    imageAlt: 'Residential project with landscaped exterior in Pune',
    intro: [
      'A well-built structure can still feel wrong if the interiors are poorly planned — bad storage, harsh lighting, awkward circulation. Interiors and landscaping are where a building becomes usable and pleasant.',
      'We handle interior fit-out and exterior landscaping for homes and commercial spaces, either as part of a turnkey project or as a standalone engagement.',
    ],
    whatsIncluded: [
      {
        title: 'Interior space planning',
        text: 'Furniture layouts, circulation and storage planning room by room.',
      },
      {
        title: 'Modular kitchen and wardrobes',
        text: 'Designed around how you cook and store, with hardware chosen for daily use.',
      },
      {
        title: 'False ceiling and lighting',
        text: 'Ceiling design coordinated with lighting layers — ambient, task and accent.',
      },
      {
        title: 'Finishes and joinery',
        text: 'Flooring, wall finishes, panelling and custom carpentry.',
      },
      {
        title: 'Exterior landscaping',
        text: 'Garden layout, planting, paving, pathways, seating and outdoor lighting.',
      },
      {
        title: 'Commercial fit-out',
        text: 'Reception, workstations, cabins and meeting rooms for offices and retail.',
      },
    ],
    process: [
      { step: 'Requirement and budget', text: 'Room-by-room needs and a realistic budget allocation.' },
      { step: 'Design and 3D views', text: 'Layouts and visualisation so you can see it before committing.' },
      { step: 'Material selection', text: 'Finishes, hardware and fixtures selected against the budget.' },
      { step: 'Execution', text: 'Site work with supervision and quality checks.' },
      { step: 'Styling and handover', text: 'Final touches, cleaning and handover.' },
    ],
    faqs: [
      {
        q: 'Can you do interiors for a property you did not build?',
        a: 'Yes. Interior and landscaping work is regularly taken up as a standalone project.',
      },
      {
        q: 'Do you provide 3D views of interiors?',
        a: 'Yes. We strongly recommend it — it is far easier to change a render than a finished ceiling.',
      },
    ],
    relatedSlugs: ['lock-and-key-projects', '3d-visualization', 'architectural-design'],
  },
]

export function getAllServices(): ServiceDetail[] {
  return SERVICES
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
