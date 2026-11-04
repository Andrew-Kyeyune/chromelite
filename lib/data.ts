// All website content, drawn from the Chromelite Company Profile 2026/27 and Brand Guidelines v1.0.

export type Offering = { title: string; text: string; image: string };
export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  icon: string;
  image: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  lead: string;
  intro: string;
  offerings: Offering[];
  feature: { title: string; text: string; bullets: string[]; sideTitle: string; side: string[]; image: string };
  serve: string[];
  gains: string[];
  faqs: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: "it-solutions",
    num: "01",
    name: "IT Solutions & Managed Services",
    short: "Business systems, websites and e-commerce, mobile apps, cloud email, networks, CCTV, managed IT support and EFRIS-ready accounting.",
    icon: "it",
    image: "server_rack",
    seoTitle: "IT Solutions & Managed IT Support Kampala",
    metaDescription:
      "Business systems, websites with MTN MoMo and Airtel Money, apps, Microsoft 365, networks, CCTV, managed IT support and EFRIS integration in Kampala.",
    keywords: ["IT solutions Uganda", "managed IT support Kampala", "website design Kampala", "EFRIS integration", "school management system Uganda", "SACCO software Uganda", "CCTV installation Kampala"],
    lead:
      "Dependable technology that runs the business, built for Ugandan realities: mobile money, EFRIS compliance, intermittent power and teams spread across regions.",
    intro:
      "We design, build, secure and support the systems our clients depend on every day, and we stay with them after go-live so that technology keeps working as the organisation grows. Every build starts with a short discovery of how your team actually works; we then design, test and launch in stages, train your staff, and provide support afterwards.",
    offerings: [
      { title: "Custom business systems", text: "Purpose-built software for the way you work: school management, SACCO loan tracking, inventory, point-of-sale, HR and payroll. Designed around your processes, cloud or on site, with staff training.", image: "app_phone" },
      { title: "Websites & e-commerce", text: "Fast, mobile-friendly corporate websites and online shops with MTN MoMo and Airtel Money payments built in. We handle domain, hosting, content and search basics so customers can find, trust and pay you.", image: "website_devices" },
      { title: "Mobile applications", text: "Android-first apps for field sales, customer loyalty, service requests and data collection, working offline where connectivity is patchy and syncing automatically when it returns.", image: "dashboard_mobile" },
      { title: "Cloud & collaboration", text: "Microsoft 365 or Google Workspace with professional email on your own domain, shared drives, video meetings and automatic backups, migrated without disrupting daily work.", image: "office_meeting" },
      { title: "Networks & security systems", text: "Structured cabling, office LAN and Wi-Fi, CCTV, access control and solar-backed power for critical IT equipment, documented and labelled for easy future changes.", image: "cctv" },
      { title: "Managed IT support", text: "A monthly retainer covering helpdesk, preventive maintenance, licensing, patching and quarterly health checks: the benefits of an IT department at a predictable cost.", image: "server_rack" },
      { title: "Cybersecurity & data protection", text: "Security audits, access policies, staff awareness training and backup testing, helping you meet your obligations under Uganda's Data Protection and Privacy Act, 2019.", image: "inspection" },
      { title: "ERP, accounting & EFRIS", text: "QuickBooks, Sage or Odoo set up and integrated with URA's EFRIS e-invoicing, so invoices, stock and tax records stay consistent and audit-ready without double entry.", image: "dashboard_dark" },
    ],
    feature: {
      title: "Predictable IT support for one monthly fee",
      text: "Most small and medium enterprises cannot justify a full IT department. Our managed support retainer gives them one, sized to their team and budget. Each retainer begins with an audit of devices, licences, network and backups; management then receives a short quarterly report on system health, risks found and work completed.",
      bullets: ["Helpdesk by phone, WhatsApp and email", "Scheduled on-site visits and preventive maintenance", "Software licensing, updates and security patching", "Backups tested and verified every month", "Quarterly IT health report for management"],
      sideTitle: "Support tiers",
      side: ["Essential — teams of up to 10 users", "Business — 10 to 50 users, with on-site visits", "Enterprise — multi-branch, with service-level agreements"],
      image: "office_meeting",
    },
    serve: ["SMEs", "Schools", "SACCOs", "Clinics", "NGOs", "Law firms", "Government MDAs"],
    gains: ["Reliable systems that scale with you", "Predictable monthly IT costs", "Compliance with URA and data protection rules"],
    faqs: [
      { q: "Can you integrate our accounting system with URA EFRIS?", a: "Yes. We set up QuickBooks, Sage or Odoo and integrate it with EFRIS e-invoicing so that invoices, stock and tax records stay consistent without double entry." },
      { q: "Do your websites accept mobile money payments?", a: "Yes. Our e-commerce websites can accept MTN MoMo and Airtel Money payments, alongside card payments where required." },
      { q: "What does managed IT support include?", a: "A monthly retainer covering helpdesk by phone, WhatsApp and email, scheduled on-site maintenance, licensing and patching, monthly backup checks and a quarterly IT health report." },
      { q: "Do you work outside Kampala?", a: "Yes. We support organisations across Uganda and design systems for teams spread across several districts and branches." },
    ],
  },
  {
    slug: "data-analytics-business-intelligence",
    num: "02",
    name: "Data Analytics & Business Intelligence",
    short: "Power BI dashboards, data cleaning, sales and customer analytics, forecasting, M&E systems and practical analytics training.",
    icon: "data",
    image: "dashboard_dark",
    seoTitle: "Data Analytics & Power BI Dashboards Uganda",
    metaDescription:
      "Power BI dashboards, data cleaning, sales analytics, forecasting, M&E systems and analytics training for businesses, SACCOs, NGOs and government in Uganda.",
    keywords: ["data analytics Uganda", "Power BI dashboards Kampala", "business intelligence Uganda", "monitoring and evaluation systems", "Power BI training Kampala", "data analytics training Uganda"],
    lead:
      "Most organisations already hold the answers in mobile money statements, POS records, invoices, EFRIS data and spreadsheets. We bring that data together and turn it into clear dashboards and confident decisions.",
    intro:
      "We start with the decisions you need to make, then work backwards to the data required, so dashboards stay focused on what matters. Our team combines industry practice with academic depth in business intelligence and big data analytics, so solutions are rigorous yet practical for everyday users.",
    offerings: [
      { title: "BI dashboards", text: "Interactive Power BI, Looker Studio or Metabase dashboards connected to your live data, so managers see sales, costs and performance today rather than at month-end.", image: "dashboard" },
      { title: "Data audit & cleaning", text: "We consolidate scattered Excel files and exports, remove duplicates, fix inconsistencies and define clear rules, giving you one reliable source of truth.", image: "strategy" },
      { title: "Sales & customer analytics", text: "Segmentation, branch and agent performance, product mix, churn and basket analysis that show which customers, products and locations drive profit.", image: "bld_retail" },
      { title: "Forecasting & prediction", text: "Demand, cash-flow and loan-default models built in R and Python and explained in plain language, so you can plan stock, staffing and borrowing.", image: "dashboard_mobile" },
      { title: "Monitoring & evaluation", text: "Field data collection with KoboToolbox or ODK linked to indicator dashboards and donor-ready reports, without manual compilation.", image: "bld_community" },
      { title: "Public sector reporting", text: "Programme dashboards aligned to the Parish Development Model and NDP IV indicators for ministries and local governments.", image: "bld_government" },
      { title: "Data warehousing", text: "Central cloud data stores combining POS, accounting, EFRIS and mobile money data, structured for fast reporting with proper access controls.", image: "server_rack" },
      { title: "Analytics training", text: "Hands-on Excel, Power BI and R courses for corporate and public sector teams, using real Ugandan business data.", image: "training" },
    ],
    feature: {
      title: "Three questions every director should answer in seconds",
      text: "A Chromelite dashboard puts the numbers that matter on one screen, refreshed automatically and readable in five minutes every Monday morning. We map your data sources, clean and connect them, build a first dashboard with your team, refine it based on real use, then hand over ownership with training.",
      bullets: ["Which products, branches or agents earned the most profit last month?", "Where are stock-outs, arrears or risks building up?", "What will cash flow look like over the next 90 days?", "How did our marketing spend translate into sales?"],
      sideTitle: "Data sources we connect",
      side: ["Mobile money: MTN MoMo, Airtel Money", "POS, accounting and EFRIS records", "Excel, Google Sheets and field survey tools"],
      image: "dashboard_dark",
    },
    serve: ["Retail chains", "Microfinance", "SACCOs", "Hospitals", "Cooperatives", "NGOs", "Local governments"],
    gains: ["Decisions based on evidence, not instinct", "Early warning on stock, cash and risk", "Reports ready for boards, regulators and donors"],
    faqs: [
      { q: "How long does a dashboard project take?", a: "Typical projects run in four to eight weeks: mapping data sources, cleaning and connecting them, building a first version with your team, and refining it before handover." },
      { q: "Which tools do you use?", a: "Mainly Microsoft Power BI, Looker Studio and Metabase for dashboards, with R and Python for forecasting and advanced analytics." },
      { q: "Do you offer Power BI training?", a: "Yes. We run practical Excel, Power BI and R courses as public cohorts in Kampala, in-house sessions for organisations, or blended online and classroom programmes." },
      { q: "Can you help NGOs with monitoring and evaluation?", a: "Yes. We set up field data collection with KoboToolbox or ODK and link it to indicator dashboards and donor-ready reports." },
    ],
  },
  {
    slug: "multimedia-graphic-design",
    num: "03",
    name: "Multimedia & Graphic Design",
    short: "Brand identity, corporate print, video production, motion graphics, photography, UI/UX, packaging and 3D visualisation.",
    icon: "design",
    image: "design_studio",
    seoTitle: "Graphic Design, Branding & Video in Kampala",
    metaDescription:
      "Logo and brand identity design, company profiles, video production, motion graphics, photography, UI/UX, packaging and 3D signage renders in Kampala.",
    keywords: ["graphic design Kampala", "logo design Uganda", "brand identity Uganda", "video production Kampala", "company profile design", "packaging design Uganda", "3D signage design"],
    lead:
      "Every signboard, billboard and screen begins as a design. Our studio creates identities and content that look world-class across print, video, web and physical spaces.",
    intro:
      "Because the same team also builds the signage and runs the campaigns, every design is created with real production in mind: colours that print true, layouts that work on a billboard, and files ready for fabrication. We provide clear brand guidelines and organised master files so everything stays consistent.",
    offerings: [
      { title: "Brand identity", text: "Logos, colour palettes, typography and complete brand guideline manuals, researched so your identity is distinctive, practical and easy to apply consistently.", image: "brand_board" },
      { title: "Corporate print", text: "Company profiles, brochures, annual reports, calendars, diaries and stationery, designed and print-managed with colour checks before every run.", image: "print_flatlay" },
      { title: "Video production", text: "Corporate documentaries, TV adverts, event coverage, testimonials and training videos, from script and filming to editing and subtitles.", image: "video_shoot" },
      { title: "Motion graphics", text: "Animated explainers, logo animations and short social reels that explain complex services simply and capture attention.", image: "motion" },
      { title: "Photography", text: "Product, corporate portrait, real estate and event photography, retouched and organised into easy-to-use image libraries.", image: "photo_studio" },
      { title: "UI / UX design", text: "Interfaces and clickable prototypes for websites and apps, tested with real users before development.", image: "uiux" },
      { title: "Packaging & labels", text: "Labels and packaging that stand out on the shelf, prepared with UNBS requirements in mind for local manufacturers.", image: "packaging" },
      { title: "3D visualisation", text: "Realistic renders of signage, kiosks, exhibition stands and shopfronts so clients approve exactly what will be built.", image: "render3d" },
    ],
    feature: {
      title: "Design that is ready for production",
      text: "From a product label to a 3D render of a new branch, our studio connects creative ideas to what can actually be printed, coded or fabricated. Showing clients a realistic render before fabrication shortens approvals and removes costly rework.",
      bullets: ["Research-led brand identities", "Print-managed collateral with colour proofs", "Video and motion content for every channel", "3D renders approved before fabrication", "Brand guidelines and organised master files"],
      sideTitle: "Typical deliverables",
      side: ["Logo suite and brand guidelines", "Company profile and brochure", "Corporate video and social reels"],
      image: "brand_board",
    },
    serve: ["Start-ups", "Corporates", "Manufacturers", "Hotels", "Universities", "Churches", "Agencies"],
    gains: ["A consistent, memorable brand everywhere", "Faster approvals with 3D previews", "Content ready for every channel"],
    faqs: [
      { q: "Do you design brand guidelines?", a: "Yes. Every identity project can include a full brand guideline manual covering logo use, colours, typography, imagery, stationery and applications." },
      { q: "Can you print what you design?", a: "Yes. We print-manage brochures, company profiles, stationery and large-format work, with colour checks before every run, and fabricate signage in our own workshop." },
      { q: "Do you produce corporate videos?", a: "Yes: corporate documentaries, adverts, event coverage, testimonials and training videos, from scripting and filming through to editing." },
    ],
  },
  {
    slug: "marketing-strategy-campaigns",
    num: "04",
    name: "Marketing Strategy & Campaigns",
    short: "Marketing strategy, social media, paid digital ads, local SEO, WhatsApp marketing, activations, outdoor and campaign analytics.",
    icon: "mkt",
    image: "activation",
    seoTitle: "Digital Marketing & Brand Activations Uganda",
    metaDescription:
      "Marketing strategy, social media, Meta, Google and TikTok ads, local SEO, WhatsApp marketing, brand activations and billboards across Uganda.",
    keywords: ["digital marketing agency Uganda", "social media management Kampala", "brand activations Uganda", "billboard advertising Kampala", "local SEO Uganda", "WhatsApp Business marketing", "Google Ads Uganda"],
    lead:
      "We connect brands with customers on WhatsApp, TikTok, Facebook, X and LinkedIn, and on the street, in markets and on billboards upcountry.",
    intro:
      "Digital and physical channels are planned together, produced by one team and measured on one dashboard, so every shilling of marketing spend can be traced to reach, enquiries and sales. We plan around business goals, not vanity metrics, with agreed targets and tracking from day one.",
    offerings: [
      { title: "Strategy & brand audits", text: "Market research, competitor analysis, customer insight, positioning and annual marketing plans with clear budgets and targets.", image: "strategy" },
      { title: "Social media management", text: "Monthly content calendars, design, copywriting, posting, community management and performance reports on the platforms your customers use.", image: "social_phone" },
      { title: "Paid digital advertising", text: "Meta, Google, TikTok and LinkedIn campaigns with precise targeting, conversion tracking and weekly optimisation.", image: "dashboard_mobile" },
      { title: "Local SEO & Google Business", text: "Optimised Google Business Profiles and local search, so customers in Kampala, Entebbe, Mbarara, Gulu and beyond find you on Google Maps.", image: "map_pins" },
      { title: "WhatsApp Business marketing", text: "Catalogues, broadcast lists, quick replies and chatbots that turn Uganda's favourite messaging app into a sales channel.", image: "whatsapp" },
      { title: "Activations & events", text: "Roadshows, school tours, market storms, product sampling and exhibition stands with trained brand ambassadors.", image: "activation" },
      { title: "Outdoor campaigns", text: "Billboards, street pole banners, vehicle and wall branding in trading centres, designed, fabricated and installed by Chromelite.", image: "billboard" },
      { title: "Campaign analytics", text: "Dashboards linking marketing spend to reach, leads, sales and footfall, so you know what works and what to stop.", image: "dashboard" },
    ],
    feature: {
      title: "One campaign. Every channel. One dashboard.",
      text: "Because strategy, creative, media, fabrication and analytics sit in one team, campaigns launch faster and stay consistent. Billboards, posts and activation materials share one look, and results from every channel flow into a single report.",
      bullets: ["Strategy and creative concept developed together", "Social media and paid ads drive online reach", "Billboards, vehicle and wall branding fabricated in-house", "Activation teams engage customers face to face", "A live dashboard tracks reach, leads and sales"],
      sideTitle: "Channels we combine",
      side: ["Digital: WhatsApp, Facebook, Instagram, TikTok, X, LinkedIn, Google", "Physical: billboards, walls, vehicles, roadshows", "Media: radio, TV and press"],
      image: "billboard",
    },
    serve: ["FMCG", "Telecoms", "Banks", "Real estate", "Universities", "Public agencies"],
    gains: ["Campaigns that reach city and upcountry", "Clear return on every shilling spent", "One team from idea to results"],
    faqs: [
      { q: "Do you manage social media accounts?", a: "Yes. We plan monthly content calendars, design and write posts, publish them, manage community responses and report on performance." },
      { q: "Can you help my business appear on Google Maps?", a: "Yes. We set up and optimise your Google Business Profile and local search presence so nearby customers can find you." },
      { q: "Do you handle billboards and brand activations?", a: "Yes. We design, fabricate and install billboards, wall and vehicle branding, and run roadshows, sampling and exhibitions." },
    ],
  },
  {
    slug: "branding-signage-fabrication",
    num: "05",
    name: "Branding, Signage & Fabrication",
    short: "Indoor, outdoor and digital signage, rebranding rollouts, vehicle branding, kiosks and structural steel supply.",
    icon: "sign",
    image: "pylon_night",
    seoTitle: "Signage, Branding & Steel Fabrication Kampala",
    metaDescription:
      "Illuminated signage, LED screens, rebranding rollouts, vehicle and wall branding, kiosks, pylons and structural steel supply from Kampala, Uganda.",
    keywords: ["signage company Kampala", "signage Uganda", "illuminated signs Kampala", "corporate rebranding Uganda", "vehicle branding Kampala", "structural steel supply Uganda", "pylon signs Uganda"],
    lead:
      "Our founding strength. We design, fabricate and install the physical face of brands, and supply structural steel to construction and infrastructure projects.",
    intro:
      "From a single shop sign to branch-wide rebranding programmes, every job is backed by quality checks in our workshop, trained installation crews and complete documentation for audit and handover. Our experience with government contracts and cross-border supply means we understand specifications, inspections and paperwork as well as we understand steel.",
    offerings: [
      { title: "Indoor & outdoor signage", text: "Fascia, pylon, illuminated, directional and wayfinding signs built from durable materials suited to Uganda's sun and rain, with energy-efficient LED lighting.", image: "shop_after" },
      { title: "Digital signage & LED", text: "LED screens, digital menu boards and queue display systems with simple content management for remote updates.", image: "led_screen" },
      { title: "Corporate rebranding rollouts", text: "New identities applied consistently across branches, vehicles and assets nationwide, with site surveys, schedules and photographic completion reports.", image: "office_exterior" },
      { title: "Vehicle & wall branding", text: "Fleet wraps, wall murals and trading-centre wall branding that turn vehicles and buildings into advertisements.", image: "vehicle_wrap" },
      { title: "Kiosks, stands & pylons", text: "Mobile money kiosks, exhibition stands and solar-lit signs, designed in 3D and fabricated in our workshop.", image: "kiosk" },
      { title: "Structural steel supply", text: "Universal beams, channels, angles, plates and fabricated sections for construction and energy projects, with invoices, packing lists and logistics handled.", image: "steel_stack" },
      { title: "Asset & branch mapping", text: "GIS records of every sign, billboard and branch with photographs and condition data in a dashboard.", image: "map_pins" },
      { title: "Project documentation", text: "Progress photography, drone footage and detailed completion reports for clients, auditors and funders.", image: "drone_site" },
    ],
    feature: {
      title: "From 3D render to finished installation",
      text: "After a site survey we produce a realistic 3D render for approval. The approved design is built in our workshop with quality checks on welding, finishing, wiring and colour, installed by trained crews on a scheduled date, then tested, photographed and handed over with a completion report and maintenance plan.",
      bullets: ["Site survey and 3D render for approval", "In-house fabrication with stage-by-stage quality checks", "Safe, scheduled installation by trained crews", "Completion report and maintenance plan", "Compliance with KCCA and district outdoor advertising rules"],
      sideTitle: "Proven delivery",
      side: ["Government rebranding works (MAAIF)", "Structural steel for a hydropower project in Burundi", "Bids under the PPDA framework"],
      image: "workshop",
    },
    serve: ["Ministries", "Banks", "Telecoms", "Fuel stations", "Hospitals", "Contractors"],
    gains: ["Durable, compliant installations", "Branch-wide consistency at scale", "Full documentation for audits and handover"],
    faqs: [
      { q: "Do you fabricate signage in-house?", a: "Yes. Signs, kiosks, stands and pylons are built in our own workshop, giving tighter quality control and faster turnaround." },
      { q: "Can you handle a nationwide rebranding?", a: "Yes. We survey each site, schedule installations across branches, and provide photographic completion reports for every location." },
      { q: "Do you supply structural steel?", a: "Yes. We supply beams, channels, angles, plates and fabricated sections for construction and energy projects, including cross-border supply with full commercial documentation." },
    ],
  },
];

export const VALUES = [
  { title: "Integrity", text: "We deliver what we promise, on time and within budget, and price and document our work transparently." },
  { title: "Excellence", text: "Every system, design, campaign and signboard is held to a professional, inspected standard." },
  { title: "Innovation", text: "We apply modern tools, from cloud platforms to 3D visualisation, to solve real local problems." },
  { title: "Client partnership", text: "We measure our success by our clients' results and stay involved long after delivery." },
  { title: "Accountability", text: "One team owns the whole engagement; responsibility always stays with Chromelite." },
];

export const STEPS = [
  { title: "Discover", text: "We listen, visit your site, review your systems, data and brand, and agree clear, measurable goals and a budget." },
  { title: "Design", text: "We propose the solution: system architecture, creative concepts, campaign plans and 3D previews for approval." },
  { title: "Build", text: "Development, content production and fabrication run in parallel, with updates at agreed milestones." },
  { title: "Launch", text: "Installation, go-live, staff training and campaign launch happen on schedule, with minimal disruption." },
  { title: "Measure", text: "Dashboards and review meetings track results, so we improve what works and fix what does not." },
];

export const INDUSTRIES = [
  { title: "Financial services & SACCOs", challenge: "Manual records and audit pressure", text: "A secure loan management system replaces spreadsheets, with a portfolio-at-risk dashboard for management. Members receive SMS and WhatsApp updates, and branches get consistent branding that builds trust.", image: "bld_bank" },
  { title: "Schools & universities", challenge: "Fees tracking and enrolment", text: "A school management system tracks fees, results and attendance, while online admissions and targeted enrolment campaigns fill places. Campus wayfinding signage helps parents and visitors.", image: "bld_school" },
  { title: "Hospitals & clinics", challenge: "Patient records and visibility", text: "A clinic management system organises records and billing, wayfinding signage reduces confusion, and local SEO helps patients find the facility.", image: "bld_hospital" },
  { title: "Retail & hospitality", challenge: "Sales visibility and footfall", text: "E-commerce with mobile money opens a new channel, POS analytics show which products and branches perform, and an eye-catching shopfront brings customers in.", image: "bld_retail" },
  { title: "Manufacturing & distribution", challenge: "Regional sales and EFRIS", text: "ERP and EFRIS integration keeps invoices and stock aligned, distributor dashboards show sales by region, and new packaging and fleet branding lift locally made products.", image: "bld_factory" },
  { title: "Agriculture & cooperatives", challenge: "Collection data and payments", text: "Member and collection systems record deliveries and payments accurately, while price and yield analytics guide decisions and farmer materials support training.", image: "bld_farm" },
  { title: "NGOs & development partners", challenge: "Donor reporting", text: "Field data collection feeds indicator dashboards and donor-ready reports, while documentaries and IEC materials tell the programme story.", image: "bld_community" },
  { title: "Ministries & local governments", challenge: "Reporting and public communication", text: "Programme dashboards track delivery against national indicators, ICT supply is delivered under PPDA, and rebranding and sensitisation campaigns help institutions reach citizens.", image: "bld_government" },
];

export const PROJECTS = [
  {
    title: "Government rebranding works",
    client: "Ministry of Agriculture, Animal Industry and Fisheries (MAAIF)",
    scope: "Rebranding and signage",
    text: "Chromelite delivered rebranding works for MAAIF, applying the ministry's identity to signage and assets under a public procurement contract. The assignment required careful interpretation of brand standards, accurate fabrication to specification and coordinated installation, documented with photographs and a formal completion report.",
    results: ["Design, fabrication and installation of branded signage", "Delivery under the PPDA procurement framework", "Completion report with photographic records"],
    image: "office_exterior",
  },
  {
    title: "Structural steel for hydropower",
    client: "International energy client, Burundi",
    scope: "Structural steel supply",
    text: "Chromelite supplied structural steel for a hydropower project in Burundi, covering steel bridge and powerhouse requirements. Beyond sourcing to specification, we prepared commercial invoices, packing lists, weight schedules and HS code documentation and coordinated transport from Uganda to Burundi.",
    results: ["Steel sections supplied to project specification", "Commercial invoices and packing lists for cross-border delivery", "Transport coordinated from Uganda to Burundi"],
    image: "steel_stack",
  },
];

export const WHY = [
  { title: "One partner, end to end", text: "Strategy, systems, creative, fabrication and analytics under one roof and one contract, with a single project manager." },
  { title: "Results you can measure", text: "Every system and campaign ships with reporting that shows the return on your investment." },
  { title: "Proven with demanding clients", text: "Government rebranding contracts, PPDA tenders and cross-border steel supply." },
  { title: "Deep, current expertise", text: "Leadership with nine-plus years of industry experience and university-level expertise in software, cloud, big data and BI." },
  { title: "Built for local realities", text: "Mobile money, EFRIS, intermittent power, patchy connectivity and teams across many districts." },
  { title: "In-house fabrication", text: "Our own workshop gives tighter quality control, faster turnaround and better prices on physical work." },
];

export const STATS = [
  { value: "5", label: "integrated service lines under one contract" },
  { value: "9+", label: "years of leadership industry experience" },
  { value: "PPDA", label: "public procurement and tender experience" },
  { value: "2", label: "countries served: Uganda and Burundi" },
];

export const JOURNEY = [
  { stage: "Foundation", title: "Branding & signage", text: "Designing, fabricating and installing signage and brand assets for businesses and institutions." },
  { stage: "Scale", title: "Structural steel supply", text: "Supplying structural steel to construction and energy projects, including a hydropower project in Burundi." },
  { stage: "Public sector", title: "Government contracts", text: "Delivering rebranding works for government, including MAAIF, through PPDA procurement." },
  { stage: "Today", title: "Integrated partner", text: "Adding IT, data and BI, multimedia design and marketing to serve clients end to end." },
];

export const COMPLIANCE = [
  { title: "Public procurement", text: "Bids and contracts delivered in line with the PPDA Act and Regulations." },
  { title: "Tax compliance", text: "Registered taxpayer (TIN 1014153682); systems and invoicing support URA's EFRIS." },
  { title: "Data protection", text: "Systems designed to respect the Data Protection and Privacy Act, 2019." },
  { title: "Product standards", text: "Packaging and labels prepared with UNBS requirements in mind." },
  { title: "Outdoor advertising", text: "Signage follows KCCA and district outdoor advertising rules." },
  { title: "Health & safety", text: "Trained crews, protective equipment and method statements on every site." },
];

export const HOME_FAQS = [
  { q: "What does Chromelite Technologies do?", a: "Chromelite Technologies Limited is a Kampala-based company offering IT solutions, data analytics and business intelligence, multimedia and graphic design, marketing strategy and campaigns, and branding, signage and fabrication, all through one accountable team." },
  { q: "Where is Chromelite Technologies located?", a: "Our office is at Grand City Complex, Naalya, on the Naalya – Namugongo Road in Kampala, Uganda (P.O. Box 8764, Kampala)." },
  { q: "How do I get a quote?", a: "Call +256 392 888 258 or +256 772 591 881, WhatsApp +256 772 591 881, email chromelite@chromelitedigital.co.ug, or send a request through our contact page." },
  { q: "Do you work with government institutions?", a: "Yes. We have delivered government rebranding works and prepare bids under Uganda's PPDA procurement framework." },
];
