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
      'Architectural design for homes, apartments and commercial buildings in Pune — concept planning, elevations, working drawings and Vastu-aware layouts.',
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
      'Photorealistic 3D elevations, interior and exterior renders and walkthroughs for projects in Pune. See your building before you build it.',
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
      'Sanction drawings for PMC, PCMC and PMRDA in Pune — zoning and FSI checks, submission, NOC coordination and follow-up until approval.',
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
      'Vastu consultation built into architectural planning in Pune — orientation, entrance, room placement and corrections for existing homes.',
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
      'Civil construction in Pune — excavation, RCC structure, masonry, plaster, waterproofing and MEP, with supervised execution and stage billing.',
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
      'Interior design and landscaping in Pune — space planning, modular kitchens, wardrobes, false ceilings, lighting, paving and garden design.',
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
  {
    slug: 'renovation-remodeling',
    name: 'Renovation & Remodeling',
    title: 'Home & Office Renovation and Remodeling in Pune',
    metaTitle: 'Home Renovation & Remodeling Services in Pune',
    metaDescription:
      'Renovation and remodeling of homes, flats and offices in Pune — structural assessment, space replanning, kitchens, bathrooms and finishing.',
    tagline: 'Make an existing space work properly again — without rebuilding from scratch.',
    image: '/awhalwadi.jpeg',
    imageAlt: 'Renovated residential building project in Pune',
    intro: [
      'Renovation is harder than new construction. You are working around an existing structure, unknown service routes, and often a family still living in the house. Done carelessly, it turns into open-ended disruption and a bill that keeps growing.',
      'We handle renovation and remodeling for independent houses, flats and commercial spaces across Pune — from replanning a single kitchen to reworking an entire floor plan.',
    ],
    whatsIncluded: [
      { title: 'Condition and structural assessment', text: 'What can safely be altered, which walls are structural, and the real condition of existing plumbing and wiring.' },
      { title: 'Space replanning', text: 'Reworking layouts to improve circulation, storage and light without unnecessary structural change.' },
      { title: 'Kitchen and bathroom remodeling', text: 'The two rooms with the highest impact and the most plumbing and waterproofing risk.' },
      { title: 'Electrical and plumbing upgrade', text: 'Rewiring and repiping to current loads and standards — usually the real reason an older home feels tired.' },
      { title: 'Waterproofing and repairs', text: 'Seepage, dampness and terrace treatment addressed before finishes go back on.' },
      { title: 'Finishes and joinery', text: 'Flooring, painting, false ceiling, doors, windows and carpentry.' },
    ],
    process: [
      { step: 'Site inspection', text: 'We assess the existing structure, services and what is realistically changeable.' },
      { step: 'Scope and estimate', text: 'A defined scope so the cost does not drift once walls open up.' },
      { step: 'Design and approvals', text: 'Revised layouts, and society or authority permissions where required.' },
      { step: 'Phased execution', text: 'Sequenced to limit disruption, especially in occupied homes.' },
      { step: 'Finishing and handover', text: 'Snagging, cleaning and handover.' },
    ],
    faqs: [
      { q: 'Can we live in the house during renovation?', a: 'Often yes, for partial renovations, by phasing work room by room with dust screening. Full-house structural work is usually faster and safer with the property vacant.' },
      { q: 'Do I need society or municipal permission?', a: 'Flats almost always need housing society permission, and any structural change or change to the external elevation may need municipal approval. We advise on this before work begins.' },
      { q: 'Why do renovation costs change mid-project?', a: 'Because conditions hidden behind walls and floors only become visible once opened. We reduce this with a proper upfront assessment, and flag any change in writing before proceeding.' },
    ],
    relatedSlugs: ['interior-landscaping', 'architectural-design', 'civil-construction'],
  },
  {
    slug: 'project-planning-estimation',
    name: 'Project Planning & Estimation',
    title: 'Construction Cost Estimation & BOQ Preparation',
    metaTitle: 'Construction Cost Estimation & BOQ Services in Pune',
    metaDescription:
      'Detailed construction cost estimation, BOQ preparation, quantity take-off and project scheduling in Pune. Know what your project will cost before you commit.',
    tagline: 'Know the real number before you start — not halfway through.',
    image: '/services/ganesh-kale-elevation.jpeg',
    imageAlt: 'Architectural elevation used for construction cost estimation and planning',
    intro: [
      'Most construction disputes trace back to a vague estimate. A number quoted without a specification attached is a guess, and guesses get corrected upward once work is underway.',
      'We prepare detailed estimates and bills of quantities so you can budget accurately, compare contractor quotations fairly, and hold execution to an agreed scope.',
    ],
    whatsIncluded: [
      { title: 'Quantity take-off', text: 'Measured quantities of excavation, concrete, steel, masonry, plaster, flooring and finishes from the drawings.' },
      { title: 'Bill of Quantities (BOQ)', text: 'An itemised BOQ with specifications, so every line is priced against a defined standard.' },
      { title: 'Detailed cost estimate', text: 'Material, labour, plant and overhead broken down by stage rather than a single lump sum.' },
      { title: 'Project scheduling', text: 'A stage-wise programme showing sequence, dependencies and realistic durations.' },
      { title: 'Cash-flow planning', text: 'When money will actually be required, mapped against construction stages.' },
      { title: 'Tender comparison', text: 'Objective comparison of contractor quotations on a like-for-like basis.' },
    ],
    process: [
      { step: 'Drawings and specification', text: 'We work from your drawings and agreed specification level.' },
      { step: 'Take-off and rate analysis', text: 'Quantities measured and priced against current market rates.' },
      { step: 'BOQ and estimate', text: 'The itemised document you can build, tender and bill against.' },
      { step: 'Schedule and cash flow', text: 'Programme and payment planning aligned to the estimate.' },
      { step: 'Review', text: 'We walk you through the assumptions and where the cost risk sits.' },
    ],
    faqs: [
      { q: 'Why is one contractor much cheaper than another?', a: 'Almost always a lower specification or a smaller scope, not better value. A BOQ makes the comparison like-for-like and exposes what has been left out.' },
      { q: 'Can you estimate for a project you are not building?', a: 'Yes. Estimation and BOQ preparation is offered as a standalone service, including for owners who want an independent check on a quotation.' },
    ],
    relatedSlugs: ['civil-construction', 'labour-rate-construction', 'lock-and-key-projects'],
  },
  {
    slug: 'mep-work',
    name: 'MEP Work',
    title: 'MEP Services — Electrical, Plumbing & HVAC',
    metaTitle: 'MEP Contractors in Pune — Electrical, Plumbing & HVAC',
    metaDescription:
      'MEP services in Pune — electrical, plumbing, drainage, HVAC and fire safety systems, designed and installed with proper coordination.',
    tagline: 'The systems behind the walls — where shortcuts cause the most expensive problems.',
    image: '/Kharadi.jpeg',
    imageAlt: 'Commercial building requiring coordinated MEP services in Kharadi, Pune',
    intro: [
      'Mechanical, electrical and plumbing work is invisible once the building is finished, which is exactly why it is where corners get cut. It is also the most disruptive and expensive thing to fix later — repairing a leaking concealed line means breaking finished work.',
      'We design and execute MEP for residential and commercial projects, coordinated with the architecture and structure so services do not clash on site.',
    ],
    whatsIncluded: [
      { title: 'Electrical systems', text: 'Load assessment, distribution, wiring, DB and earthing, lighting circuits, and provision for backup and EV charging.' },
      { title: 'Plumbing and water supply', text: 'Supply lines, storage and pumping, pressure planning, and fixtures installed to spec.' },
      { title: 'Drainage and sanitation', text: 'Soil, waste and rainwater lines with correct slopes, venting and access for maintenance.' },
      { title: 'HVAC', text: 'Ventilation and air-conditioning strategy, ducting routes and equipment placement coordinated with ceilings and structure.' },
      { title: 'Fire safety systems', text: 'Detection, sprinklers and hydrants where the building type and height require them.' },
      { title: 'Testing and commissioning', text: 'Pressure testing, load testing and documented commissioning before handover.' },
    ],
    process: [
      { step: 'Requirement and load study', text: 'Actual usage, appliance loads and future capacity established.' },
      { step: 'MEP design and coordination', text: 'Services laid out against the architectural and structural drawings to avoid clashes.' },
      { step: 'First fix', text: 'Conduiting and piping installed before plaster and finishes.' },
      { step: 'Second fix', text: 'Fixtures, fittings, switchgear and equipment installed.' },
      { step: 'Testing and handover', text: 'Systems tested, commissioned and documented with as-built layouts.' },
    ],
    faqs: [
      { q: 'Why does MEP need designing at all — cannot the electrician decide on site?', a: 'On-site improvisation is exactly what produces clashes, inadequate capacity and lines that nobody can trace later. A coordinated layout costs very little and prevents the most expensive category of rework.' },
      { q: 'Do you provide as-built service drawings?', a: 'Yes. You should insist on them from any contractor — without them, future maintenance means guessing where lines run.' },
    ],
    relatedSlugs: ['civil-construction', 'lock-and-key-projects', 'project-planning-estimation'],
  },
  {
    slug: 'labour-rate-construction',
    name: 'Labour Rate Construction',
    title: 'Labour Rate Construction Contractors in Pune',
    metaTitle: 'Labour Rate Construction Contractors in Pune',
    metaDescription:
      'Labour-rate construction in Pune — you supply materials, we provide skilled manpower, supervision and project management with staged billing.',
    tagline: 'You buy the materials. We bring the skilled team and the supervision.',
    image: '/dhanori.jpeg',
    imageAlt: 'Residential construction project executed on labour rate contract in Pune',
    intro: [
      'Some owners prefer to purchase materials themselves — to control quality, use trade contacts, or manage cash flow their own way. Labour rate contracting suits exactly that: you supply materials, we supply skilled labour, supervision and project management.',
      'It gives you more control and visibility over material spend. It also means material planning and its consequences sit with you, so it works best for owners who can stay involved.',
    ],
    whatsIncluded: [
      { title: 'Skilled manpower', text: 'Masons, bar benders, carpenters, plasterers, plumbers, electricians and helpers as each stage requires.' },
      { title: 'Site supervision', text: 'A supervisor responsible for line, level, workmanship and sequence — not just bodies on site.' },
      { title: 'Work scheduling', text: 'Stage planning so trades follow in the right order and labour is not idle.' },
      { title: 'Material requirement planning', text: 'We tell you what to procure and when, so deliveries match the programme.' },
      { title: 'Quality checks', text: 'Stage-wise checks on RCC, masonry, plaster and finishing.' },
      { title: 'Transparent measurement', text: 'Work measured and billed against completed quantities.' },
    ],
    process: [
      { step: 'Scope and rate agreement', text: 'Labour rates agreed per unit of work, with scope clearly defined.' },
      { step: 'Programme and material schedule', text: 'You receive a procurement schedule aligned to the work plan.' },
      { step: 'Execution', text: 'Work carried out stage by stage under supervision.' },
      { step: 'Measurement and billing', text: 'Billing against measured, completed work.' },
    ],
    faqs: [
      { q: 'Is labour rate cheaper than a full contract?', a: 'It can reduce the material margin, but you take on procurement, storage, wastage and delivery timing. It saves money for owners who can genuinely manage that; it costs money for those who cannot.' },
      { q: 'Who is responsible if material quality is poor?', a: 'Material quality remains the owner’s responsibility under a labour contract. We will flag anything we consider substandard before it is used, in writing.' },
      { q: 'Can I switch to a full contract later?', a: 'Yes, by mutual agreement, with the scope and pricing revised accordingly.' },
    ],
    relatedSlugs: ['civil-construction', 'project-planning-estimation', 'lock-and-key-projects'],
  },
  {
    slug: 'demarcation-mojni',
    name: 'Demarcation (Mojni)',
    title: 'Land Demarcation & Mojni Survey Services',
    metaTitle: 'Land Demarcation (Mojni) & Survey Services in Pune',
    metaDescription:
      'Land demarcation and Mojni survey services in Pune — establishing accurate plot boundaries, area verification and survey coordination before you buy or build.',
    tagline: 'Know exactly where your boundary is — before you buy, build or build a wall.',
    image: '/Satara.jpeg',
    imageAlt: 'Land plot survey and demarcation for a construction project near Pune',
    intro: [
      'Boundary disputes are among the most damaging problems in property, and they usually surface at the worst possible moment — during construction, or during a sale. Most are avoidable with a proper demarcation before work begins.',
      'We assist with land demarcation (Mojni) and survey coordination so your plot boundaries, area and encroachment position are established on record.',
    ],
    whatsIncluded: [
      { title: 'Document verification', text: 'Review of 7/12 extract, property card, layout plan and sale deed against what is on the ground.' },
      { title: 'Mojni application', text: 'Assistance with the demarcation application to the concerned land records office.' },
      { title: 'Survey coordination', text: 'Coordinating the official survey visit and being present on site during measurement.' },
      { title: 'Boundary marking', text: 'Physical marking of corners and boundaries once the survey is completed.' },
      { title: 'Area verification', text: 'Confirming actual area against the area stated in your documents.' },
      { title: 'Encroachment check', text: 'Identifying any encroachment onto or from adjoining plots or roads.' },
    ],
    process: [
      { step: 'Document review', text: 'We check what your records say the plot is.' },
      { step: 'Application', text: 'Demarcation applied for with the concerned office.' },
      { step: 'Survey', text: 'Official measurement carried out on site.' },
      { step: 'Marking and report', text: 'Boundaries marked and findings shared with you.' },
    ],
    faqs: [
      { q: 'When should I get demarcation done?', a: 'Before purchasing a plot, before starting construction, and before building a compound wall. Doing it after the wall is up is how disputes start.' },
      { q: 'What if the actual area is less than my documents state?', a: 'It happens more often than people expect. The survey record gives you a factual basis to raise it with the seller or the authority — which is precisely why doing it before purchase matters.' },
    ],
    relatedSlugs: ['noc-liaisoning', 'sanction-drawings', 'architectural-design'],
  },
  {
    slug: 'airforce-noc',
    name: 'Airforce / AAI Height NOC',
    title: 'Airforce & AAI Height Clearance NOC in Pune',
    metaTitle: 'Airforce & AAI Height NOC for Pune Airport Zone',
    metaDescription:
      'Airforce and AAI height clearance NOC for plots near Pune airport — Lohegaon, Dhanori and Viman Nagar. Know your permissible height first.',
    tagline: 'Near Pune airport, your permissible height is decided before your design is.',
    image: '/Lohegaon Row House.jpeg',
    imageAlt: 'Residential project in the Lohegaon airport zone requiring height clearance NOC',
    intro: [
      'If your plot is anywhere near Pune International Airport or the adjoining air force station, height is not simply a matter of FSI. Buildings within the airport’s vicinity fall under height restrictions, and a No Objection Certificate from the Airports Authority of India — and in some cases defence clearance — may be required before your building height can be sanctioned.',
      'This affects a large part of Lohegaon, Dhanori, Viman Nagar and Vadgaon Sheri. It is also the single most common reason a design in this belt has to be reworked, because owners discover it only after planning for an extra floor.',
    ],
    whatsIncluded: [
      { title: 'Zone and height assessment', text: 'Determining whether your plot falls within the restricted zone and what height is likely permissible.' },
      { title: 'Site coordinates and elevation', text: 'Establishing the latitude, longitude and site elevation the application requires.' },
      { title: 'NOC application', text: 'Preparation and submission of the height clearance application with supporting documents and drawings.' },
      { title: 'Defence clearance coordination', text: 'Where the air force station is involved, coordinating that clearance alongside.' },
      { title: 'Follow-up', text: 'Tracking the application and responding to queries until the NOC is issued.' },
      { title: 'Design alignment', text: 'Ensuring the sanctioned design stays within the cleared height.' },
    ],
    process: [
      { step: 'Plot location check', text: 'We establish your position relative to the runway and the applicable restriction.' },
      { step: 'Feasibility advice', text: 'You learn what height is realistic before design money is spent.' },
      { step: 'Application', text: 'Documents, coordinates and drawings prepared and filed.' },
      { step: 'Follow-up to issue', text: 'Queries handled until the NOC is granted.' },
    ],
    faqs: [
      { q: 'Does every plot in Lohegaon need this?', a: 'Not every plot, but a significant number do. It depends on distance from the runway, direction and site elevation. The check itself is quick and worth doing before you finalise any design.' },
      { q: 'What happens if I build without it where it was required?', a: 'The building height may not be sanctioned, and you risk your approval and completion certificate. It is not a step to skip.' },
      { q: 'How long does the NOC take?', a: 'It is decided entirely by the issuing authority. What we can control is submitting a complete, correct application so it is not delayed by avoidable queries.' },
    ],
    relatedSlugs: ['sanction-drawings', 'noc-liaisoning', 'architectural-design'],
  },
  {
    slug: 'noc-liaisoning',
    name: 'NOC & Liaisoning',
    title: 'NOC, Tax Clearance & PMC / PCMC / PMRDA Liaisoning',
    metaTitle: 'NOC & PMC / PCMC / PMRDA Liaisoning Services in Pune',
    metaDescription:
      'PMC, PCMC and PMRDA liaisoning in Pune — tax NOC, clearances, fire NOC, completion and occupancy certificates, with follow-up handled.',
    tagline: 'The paperwork and the follow-up, handled by people who do it every week.',
    image: '/Manjiri.jpeg',
    imageAlt: 'Completed residential project in Pune with statutory approvals in place',
    intro: [
      'Approvals in Pune are less about difficulty and more about persistence: the right documents, in the right format, submitted to the right desk, followed up until they move. For an owner doing it once, that is a frustrating and time-consuming process.',
      'We handle liaisoning with PMC, PCMC and PMRDA on behalf of our clients — from tax clearances and NOCs through to completion and occupancy certificates.',
    ],
    whatsIncluded: [
      { title: 'Tax NOC and clearances', text: 'Property tax clearance and the associated no-objection documentation.' },
      { title: 'PMC / PCMC / PMRDA liaisoning', text: 'Submission, scrutiny follow-up and query resolution with the concerned authority.' },
      { title: 'Fire NOC coordination', text: 'Coordinating fire department requirements and approval where the building type or height requires it.' },
      { title: 'Utility connections', text: 'Assistance with water, drainage and electricity connection applications.' },
      { title: 'Completion and occupancy certificate', text: 'Documentation and follow-up for completion and occupancy certificates.' },
      { title: 'Document compilation', text: 'Assembling the full set of documents each application requires, correctly.' },
    ],
    process: [
      { step: 'Requirement mapping', text: 'We identify exactly which approvals your project needs.' },
      { step: 'Document compilation', text: 'The complete set is assembled and checked before submission.' },
      { step: 'Submission', text: 'Filed with the concerned authority, with fees worked out.' },
      { step: 'Follow-up', text: 'Queries answered and progress tracked until issue.' },
      { step: 'Handover of approvals', text: 'You receive the approved documents for your records.' },
    ],
    faqs: [
      { q: 'Can you guarantee approval?', a: 'No, and you should be cautious of anyone who does. Approval rests entirely with the authority. What we ensure is that your file is complete and correct, which is what avoids most delays.' },
      { q: 'Are government fees included?', a: 'No. Statutory fees, development charges and premiums are payable to the authority and are separate from our professional fees.' },
      { q: 'Why does the occupancy certificate matter?', a: 'It is required for legitimate occupation, and it affects utility connections, resale and loan eligibility. Skipping it creates problems years later.' },
    ],
    relatedSlugs: ['sanction-drawings', 'airforce-noc', 'demarcation-mojni'],
  },
]

export function getAllServices(): ServiceDetail[] {
  return SERVICES
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
