export const designTokens = {
  heroStyle: "split",
  typography: { heading: "Sora", body: "DM Sans", display: "Outfit" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "dots",
  homeSectionOrder: ["hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"],
};

const siteData = {
  business: {
    name: "The Sharks Logistics",
    legalName: "The Sharks Logistics (Pvt) Ltd",
    tagline: "Fast. Fierce. On Time.",
    description: "Agile logistics and express delivery company specializing in same-day courier, e-commerce fulfilment, and last-mile delivery across Zimbabwe's major cities.",
    phone: "", phoneRaw: "", whatsappNumber: "",
    email: "info@sharkslogistics.co.zw",
    address: "Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.6, ratingRounded: 5, reviewCount: 42,
    established: "2018", yearsExperience: "7+", projectsCompleted: "50000+", employees: "85+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [{ day: "Monday - Friday", time: "6:00 AM - 8:00 PM" }, { day: "Saturday", time: "7:00 AM - 5:00 PM" }, { day: "Sunday", time: "8:00 AM - 2:00 PM" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "sharks-logistics-cookie-consent",
    socialLinks: { facebook: "#", linkedin: "#", instagram: "#" },
  },

  navbar: { logoLine1: "Sharks", logoLine2: "Logistics" },

  hero: {
    badge: "Zimbabwe's Fastest Delivery",
    titleParts: [{ text: "Fast. " }, { text: "Fierce.", highlight: true }, { text: " On Time." }],
    subtitle: "Same-day courier, e-commerce fulfilment, and last-mile delivery that outpaces everyone. When speed matters, Sharks delivers.",
    ctaPrimary: "Ship Now",
    ctaSecondary: "Track a Package",
    trustBadge: "Insured Delivery",
    backgroundImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920",
    backgroundAlt: "Fast delivery van on urban road",
  },

  stats: [
    { number: "50000+", label: "Deliveries Made" },
    { number: "4.6", label: "Rating" },
    { number: "2HR", label: "Express Window" },
    { number: "85+", label: "Team Members" },
  ],

  servicesPreview: [
    { iconName: "PaperPlaneTilt", title: "Express Courier", desc: "Same-day and 2-hour express delivery within Harare and Bulawayo. Real-time tracking from pickup to doorstep." },
    { iconName: "Briefcase", title: "E-Commerce Fulfilment", desc: "Pick, pack, and ship for online stores. API integration with Shopify, WooCommerce, and custom platforms." },
    { iconName: "Car", title: "Last-Mile Delivery", desc: "Final leg delivery for retailers, wholesalers, and distributors. Route-optimized for maximum efficiency." },
    { iconName: "Buildings", title: "Corporate Courier", desc: "Scheduled and on-demand document, parcel, and package delivery for businesses with monthly billing." },
    { iconName: "RoadHorizon", title: "Inter-City Express", desc: "Overnight express delivery between Harare, Bulawayo, Mutare, Masvingo, and Gweru." },
    { iconName: "ChartLineUp", title: "Returns Management", desc: "Reverse logistics for e-commerce returns, exchanges, and warranty claims. Full tracking and reporting." },
  ],

  featuredProjects: [
    { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800", title: "Black Friday Surge", category: "E-Commerce" },
    { image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", title: "Pharmacy Network", category: "Last-Mile" },
    { image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", title: "Document Courier", category: "Corporate" },
  ],

  whyChooseUs: {
    titleParts: [{ text: "The " }, { text: "Fastest", highlight: true }, { text: " in Zimbabwe" }],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",
    imageAlt: "Sharks Logistics delivery fleet on the road",
    experienceYears: "7+",
    experienceLabel: "Years of Speed",
    points: [
      { title: "2-Hour Express", desc: "Order by 2pm, delivered by 4pm. Our express service is the fastest in Harare. Guaranteed." },
      { title: "Real-Time Tracking", desc: "Every package is tracked in real time. Your customers get SMS updates at every stage." },
      { title: "API Integration", desc: "Seamless integration with your e-commerce platform. Automated order import and label generation." },
      { title: "Proof of Delivery", desc: "Photo proof of delivery with GPS coordinates and recipient signature. Full accountability." },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920",
    backgroundAlt: "Delivery operations hub",
    titleParts: [{ text: "Ready to " }, { text: "Ship", highlight: true }, { text: "?" }],
    subtitle: "Whether it is one parcel or a thousand, get your delivery moving in minutes. No contracts, no minimums, just speed.",
    ctaPrimary: "Ship Now",
    whatsappText: "Hello Sharks Logistics, I need a delivery.",
  },

  homeTestimonials: [
    { name: "Tatenda Moyo", role: "Founder, ShopZim Online", text: "Sharks Logistics handles all our e-commerce deliveries. Their Shopify integration is seamless and our customers love the real-time tracking. Delivery complaints dropped 90%.", rating: 5 },
    { name: "Rudo Chirwa", role: "Pharmacy Manager, MedExpress", text: "Same-day pharmaceutical delivery across Harare. Sharks understands the urgency of medical deliveries. Temperature-sensitive packages arrive on time, every time.", rating: 5 },
    { name: "Simba Dube", role: "Office Manager, Deloitte Zimbabwe", text: "Our corporate courier needs are handled brilliantly. Documents, parcels, and packages picked up and delivered the same day. Monthly billing makes it hassle-free.", rating: 4 },
  ],

  about: {
    heroTitle: [{ text: "Born to " }, { text: "Deliver", highlight: true }],
    heroSubtitle: "Since 2018, The Sharks Logistics has been redefining what fast delivery means in Zimbabwe.",
    storyImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",
    storyImageAlt: "Sharks Logistics delivery hub",
    storyProjectCount: "50000+", storyProjectLabel: "Deliveries Completed",
    storyTitle: "From a Motorbike to a Fleet",
    storyParagraphs: [
      "The Sharks Logistics was born in 2018 from a simple frustration: why was it so hard to get a parcel delivered quickly in Harare? The founder started with a single motorbike and a smartphone.",
      "The response was immediate. E-commerce businesses, pharmacies, law firms, and individuals discovered a delivery service that was genuinely fast, trackable, and accountable. Growth was explosive.",
      "Today we operate 40+ delivery vehicles across Harare and Bulawayo, process 50,000+ deliveries annually, and provide e-commerce fulfilment for 100+ online stores. We are not slowing down.",
    ],
    mission: "To make fast, reliable delivery accessible to every business and individual in Zimbabwe through technology, speed, and relentless customer focus.",
    vision: "To be Africa's fastest and most trusted last-mile delivery network, powered by technology and driven by an obsession with speed and service quality.",
    values: [
      { iconName: "ShieldCheck", title: "Speed", desc: "Fast is not fast enough. We are constantly optimizing routes, processes, and technology to deliver faster." },
      { iconName: "Trophy", title: "Reliability", desc: "Every delivery promise is a commitment. We track, we communicate, we deliver. No excuses." },
      { iconName: "Lightbulb", title: "Technology", desc: "Real-time tracking, API integrations, automated dispatch. Technology is our competitive advantage." },
      { iconName: "Handshake", title: "Transparency", desc: "Real-time updates, photo POD, GPS confirmation. You always know where your package is." },
      { iconName: "Heart", title: "Customer Obsession", desc: "Every delivery is someone's important package. We treat every parcel like it is ours." },
      { iconName: "Users", title: "Team Energy", desc: "Our riders and drivers bring energy and hustle to every delivery, every day." },
    ],
    team: [
      { name: "Tongai Sharks", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Mercy Ndlovu", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Kudakwashe Moyo", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Farai Maposa", role: "Head of E-Commerce", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2018", title: "Company Founded", desc: "The Sharks Logistics launches with one motorbike and a dream of faster delivery." },
      { year: "2019", title: "E-Commerce Launch", desc: "Launched e-commerce fulfilment service with Shopify and WooCommerce integration." },
      { year: "2020", title: "Pandemic Growth", desc: "Demand surged during COVID-19 lockdowns. Fleet grew from 5 to 20 vehicles." },
      { year: "2022", title: "Bulawayo Expansion", desc: "Opened second hub in Bulawayo serving Zimbabwe's second city." },
      { year: "2023", title: "API Platform", desc: "Launched developer API for custom e-commerce and ERP integrations." },
      { year: "2025", title: "50,000+ Deliveries", desc: "Surpassed 50,000 annual deliveries with 98.5% on-time rate." },
    ],
    ctaTitle: "Need Something Delivered?",
    ctaSubtitle: "From a single document to a full e-commerce operation, we have got you covered.",
    ctaCta: "Ship Now",
  },

  services: {
    heroTitle: [{ text: "Delivery " }, { text: "Solutions", highlight: true }, { text: " That Move" }],
    heroSubtitle: "Six specialized delivery and logistics services designed for the speed and accountability modern businesses demand.",
    items: [
      { iconName: "PaperPlaneTilt", title: "Express Courier", slug: "express-courier", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900", desc: "Same-day and 2-hour express delivery within Harare and Bulawayo. Real-time tracking, SMS notifications, and photo proof of delivery on every parcel.", features: ["2-hour express delivery within city", "Same-day standard delivery", "Real-time GPS tracking", "SMS notifications at each stage", "Photo proof of delivery", "Signature confirmation option"] },
      { iconName: "Briefcase", title: "E-Commerce Fulfilment", slug: "ecommerce-fulfilment", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900", desc: "End-to-end fulfilment for online stores. We receive your inventory, pick and pack orders, and deliver to your customers with branded packaging options.", features: ["Shopify and WooCommerce integration", "API for custom platforms", "Warehousing and inventory management", "Pick, pack, and ship", "Branded packaging options", "Returns processing included"] },
      { iconName: "Car", title: "Last-Mile Delivery", slug: "last-mile", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900", desc: "Final leg delivery for retailers, wholesalers, and distributors. Route-optimized for maximum efficiency with real-time delivery windows for recipients.", features: ["Route-optimized daily runs", "Delivery window notifications", "Multiple attempts with rescheduling", "Cash-on-delivery option", "Bulk delivery discounts", "Dedicated account management"] },
      { iconName: "Buildings", title: "Corporate Courier", slug: "corporate-courier", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900", desc: "Scheduled and on-demand courier for businesses. Documents, parcels, and packages with monthly billing, reporting, and dedicated account management.", features: ["Scheduled daily pickups", "On-demand dispatch", "Monthly invoicing", "Usage reporting dashboard", "Confidential document handling", "Multi-branch pickup/delivery"] },
      { iconName: "RoadHorizon", title: "Inter-City Express", slug: "intercity-express", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900", desc: "Overnight express delivery between Zimbabwe's major cities. Packages collected today arrive tomorrow morning with tracking throughout.", features: ["Harare-Bulawayo overnight", "Harare-Mutare next morning", "Harare-Masvingo next morning", "Harare-Gweru next morning", "Hub-to-hub tracking", "Saturday delivery available"] },
      { iconName: "ChartLineUp", title: "Returns Management", slug: "returns-management", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900", desc: "Reverse logistics for e-commerce returns, exchanges, and warranty claims. Customer-initiated returns portal with full tracking and automated refund triggers.", features: ["Customer returns portal", "QR code label generation", "Automated pickup scheduling", "Quality inspection on receipt", "Refund trigger notifications", "Returns analytics dashboard"] },
    ],
    ctaTitle: "Need a Custom Delivery Solution?",
    ctaSubtitle: "Whether you ship 10 or 10,000 parcels a month, we will design a solution that scales with you.",
  },

  projects: {
    heroTitle: [{ text: "Deliveries That " }, { text: "Define", highlight: true }, { text: " Us" }],
    heroSubtitle: "From Black Friday surges to daily pharmaceutical deliveries, see how Sharks Logistics moves Zimbabwe.",
    categories: ["All", "E-Commerce", "Last-Mile", "Corporate", "Express", "Inter-City"],
    items: [
      { id: 1, title: "Black Friday 2024 Surge", category: "E-Commerce", location: "Harare & Bulawayo", year: "2024", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800", desc: "Processed 3,500 e-commerce orders in 72 hours for 15 online stores during Black Friday. Zero missed deliveries. All orders tracked and confirmed.", services: ["E-Commerce Fulfilment", "Express Courier"] },
      { id: 2, title: "MedExpress Pharmacy Network", category: "Last-Mile", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "Daily same-day delivery of pharmaceutical products to 25 pharmacy branches and 100+ home delivery patients. Temperature monitoring on all sensitive items.", services: ["Last-Mile Delivery", "Express Courier"] },
      { id: 3, title: "Deloitte Corporate Account", category: "Corporate", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Dedicated daily courier service for document and parcel delivery across 4 Deloitte offices and to client sites. Monthly reporting and invoicing.", services: ["Corporate Courier"] },
      { id: 4, title: "ShopZim E-Commerce Launch", category: "E-Commerce", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800", desc: "Full e-commerce fulfilment setup for Zimbabwe's fastest-growing online marketplace. Shopify integration, warehousing, and nationwide delivery.", services: ["E-Commerce Fulfilment", "Last-Mile Delivery"] },
      { id: 5, title: "Legal Document Express", category: "Express", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "2-hour confidential document delivery for 8 law firms in Harare CBD. Chain-of-custody tracking with recipient signature verification.", services: ["Express Courier", "Corporate Courier"] },
      { id: 6, title: "Harare-Bulawayo Express Route", category: "Inter-City", location: "Harare - Bulawayo", year: "2023", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Established daily overnight express service between Harare and Bulawayo. Next-morning delivery guaranteed by 9am. Now processes 200+ parcels daily.", services: ["Inter-City Express"] },
      { id: 7, title: "Restaurant Meal Delivery", category: "Last-Mile", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800", desc: "Partnered with 30 restaurants for meal delivery service. Average delivery time: 35 minutes from order confirmation.", services: ["Express Courier", "Last-Mile Delivery"] },
      { id: 8, title: "Returns Program: Fashion Retailer", category: "E-Commerce", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "Set up complete returns management system for a national fashion retailer. Customer-initiated returns via QR code, with automated pickup and quality inspection.", services: ["Returns Management", "E-Commerce Fulfilment"] },
      { id: 9, title: "COVID Vaccine Distribution", category: "Last-Mile", location: "Harare Province", year: "2022", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Temperature-controlled delivery of COVID-19 vaccines to 50 vaccination centers across Harare province. Strict cold chain maintained throughout.", services: ["Last-Mile Delivery", "Express Courier"] },
    ],
  },

  reviews: {
    heroTitle: [{ text: "What " }, { text: "Clients Say", highlight: true }],
    heroSubtitle: "Real feedback from businesses and individuals who trust The Sharks Logistics for their delivery needs.",
    ratingBreakdown: { 5: 28, 4: 10, 3: 4, 2: 0, 1: 0 },
    items: [
      { name: "Tatenda Moyo", role: "Founder, ShopZim Online", text: "Sharks Logistics handles all our e-commerce deliveries. Their Shopify integration is seamless and our customers love the real-time tracking. Delivery complaints dropped 90% since we switched.", rating: 5, date: "1 month ago", project: "E-Commerce Fulfilment" },
      { name: "Rudo Chirwa", role: "Pharmacy Manager, MedExpress", text: "Same-day pharmaceutical delivery across Harare. Sharks understands the urgency of medical deliveries. Temperature-sensitive packages arrive on time, every time. Lives depend on it.", rating: 5, date: "2 months ago", project: "Pharmaceutical Delivery" },
      { name: "Simba Dube", role: "Office Manager, Deloitte", text: "Our corporate courier needs are handled brilliantly. Documents, parcels, and packages picked up and delivered the same day. Monthly billing makes it hassle-free for our finance team.", rating: 4, date: "3 months ago", project: "Corporate Courier" },
      { name: "Grace Mapfumo", role: "Online Fashion Store Owner", text: "Returns used to be a nightmare. Sharks set up a QR-code returns system for us that customers actually enjoy using. Returns processing time went from 2 weeks to 3 days.", rating: 5, date: "4 months ago", project: "Returns Management" },
      { name: "Peter Chirenje", role: "Restaurant Owner", text: "35-minute average delivery time for meals. Our customers get hot food and we get happy reviews. The delivery fee is reasonable and the tracking is great for customer experience.", rating: 5, date: "5 months ago", project: "Meal Delivery" },
      { name: "Sandra Nyoni", role: "Lawyer, Diza Attorneys", text: "Confidential legal documents delivered within 2 hours with signature verification. The chain-of-custody tracking gives us the legal assurance we need. Reliable and discreet.", rating: 5, date: "6 months ago", project: "Express Document" },
      { name: "Tinashe Banda", role: "IT Company CEO", text: "We ship hardware to clients across Zimbabwe using Sharks inter-city express. Harare to Bulawayo overnight, Harare to Mutare next morning. Consistently reliable.", rating: 4, date: "7 months ago", project: "Inter-City Express" },
      { name: "Chipo Mukwena", role: "Florist, Bloom Harare", text: "Flower delivery needs to be fast and gentle. Sharks handles our bouquet deliveries with care and speed. Our customers receive fresh flowers within 2 hours of ordering.", rating: 5, date: "8 months ago", project: "Express Delivery" },
      { name: "Maxwell Gumbo", role: "E-commerce Consultant", text: "I recommend Sharks Logistics to all my e-commerce clients. Their API is well-documented, integration is smooth, and their fulfilment accuracy is 99.7%. Best in Zimbabwe.", rating: 5, date: "9 months ago", project: "E-Commerce Integration" },
      { name: "Blessing Moyo", role: "Wholesale Distributor", text: "Sharks handles our last-mile delivery to 60+ retail outlets across Harare. Route optimization means all deliveries are done by 2pm. Efficient and cost-effective.", rating: 4, date: "10 months ago", project: "Distribution" },
      { name: "Nyasha Matimba", role: "Insurance Broker", text: "Policy documents delivered same-day to clients across Harare. The photo proof of delivery is excellent for our compliance records. Professional service every time.", rating: 5, date: "11 months ago", project: "Corporate Courier" },
      { name: "Farai Mhizha", role: "E-commerce Store Owner", text: "During Black Friday, Sharks delivered 500 orders for us in 3 days. Not a single missing package. The pre-event planning call they do really sets them apart.", rating: 5, date: "1 year ago", project: "Black Friday" },
    ],
    ctaTitle: "Ready for Faster Delivery?",
    ctaSubtitle: "Join the businesses and individuals who trust Sharks Logistics for reliable, tracked express delivery.",
    ctaCta: "Ship Now",
    ctaWhatsappText: "Hello, I need to arrange a delivery with Sharks Logistics.",
  },

  contact: {
    heroTitle: [{ text: "Let's Get " }, { text: "Moving", highlight: true }],
    heroSubtitle: "Need a delivery? Want to discuss e-commerce fulfilment? Our team responds in minutes, not hours.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in the form and choose how you'd like to send it.",
  },

  careers: {
    heroTitle: [{ text: "Join the " }, { text: "Pack", highlight: true }],
    heroSubtitle: "We are always looking for fast, reliable, and customer-focused people to join Zimbabwe's fastest delivery team.",
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920",
    cultureTitle: "Why Join Sharks?",
    cultureItems: [
      { iconName: "Users", title: "High Energy Team", desc: "Work with a young, dynamic team that thrives on speed and customer satisfaction." },
      { iconName: "Rocket", title: "Fast Growth", desc: "As we expand to new cities, new roles open up. Grow with us." },
      { iconName: "ShieldCheck", title: "Fair Treatment", desc: "Competitive pay, tips transparency, and genuine respect for every team member." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1400",
    cultureImageAlt: "Sharks Logistics delivery team",
    cultureTagline: "More Than a Job. A Hustle.",
    cultureTaglineDesc: "Every delivery is a chance to make someone's day. Our team brings energy, accountability, and pride to every package.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Base + Tips", desc: "Competitive base salary plus you keep 100% of customer tips." },
      { iconName: "FirstAid", title: "Medical Cover", desc: "Medical aid after 3 months of employment for you and your family." },
      { iconName: "GraduationCap", title: "Licence Support", desc: "We sponsor motorbike and Class 4 licence upgrades for qualifying riders." },
      { iconName: "Car", title: "Vehicle Provided", desc: "Delivery vehicles, fuel, and maintenance all provided. No personal costs." },
      { iconName: "Heart", title: "Flexible Shifts", desc: "Choose morning, afternoon, or full-day shifts that fit your life." },
      { iconName: "ShieldCheck", title: "Safety Gear", desc: "Helmets, reflective vests, and rain gear provided to all riders." },
    ],
    positions: [
      { id: 1, title: "Delivery Rider (Motorbike)", department: "Delivery", type: "Full-Time", location: "Harare", description: "Fast and reliable delivery rider for same-day and express deliveries across Harare.", requirements: ["Valid motorbike licence", "Own smartphone with data", "Knowledge of Harare road network", "Clean driving record", "Customer service mindset"] },
      { id: 2, title: "Delivery Driver (Van)", department: "Delivery", type: "Full-Time", location: "Harare", description: "Driver for larger deliveries including e-commerce fulfilment and inter-city express.", requirements: ["Class 4 driver's licence", "2+ years driving experience", "Clean driving record", "Good English communication", "Physical fitness for loading/unloading"] },
      { id: 3, title: "Warehouse Associate", department: "Fulfilment", type: "Full-Time", location: "Harare", description: "Pick, pack, and prepare orders for delivery in our e-commerce fulfilment center.", requirements: ["Basic computer literacy", "Attention to detail", "Physical fitness", "Ability to work on feet all day", "Team player"] },
      { id: 4, title: "Customer Service Agent", department: "Support", type: "Full-Time", location: "Harare", description: "Handle customer enquiries, track deliveries, and resolve delivery issues via phone, WhatsApp, and email.", requirements: ["Excellent communication skills", "Problem-solving ability", "Computer literate", "WhatsApp Business experience", "Calm under pressure"] },
      { id: 5, title: "Dispatch Coordinator", department: "Operations", type: "Full-Time", location: "Harare", description: "Coordinate daily delivery assignments, route planning, and rider/driver dispatch.", requirements: ["Diploma in logistics preferred", "2+ years dispatch experience", "GPS tracking platform experience", "Strong organizational skills", "Ability to multitask under pressure"] },
    ],
    generalApplicationTitle: "Want to Join the Pack?",
    generalApplicationSubtitle: "We are always looking for fast, reliable people. Send us your details.",
    generalApplicationCta: "Apply Now",
  },

  footer: {
    description: "Fast. Fierce. On Time. Zimbabwe's fastest delivery and logistics company since 2018.",
    copyright: "The Sharks Logistics (Pvt) Ltd",
  },
};

export default siteData;
