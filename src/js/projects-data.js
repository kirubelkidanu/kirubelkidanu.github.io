/**
 * Kirubel Kidanu - Portfolio Projects Data Store
 * All project images reference verified local WebP assets in src/assets/projects/
 * Verified technical stacks, descriptions, and feature sets.
 */

export const projectsData = [
  {
    id: "construction-erp",
    number: "01",
    title: "Construction ERP & Inventory Management",
    shortTitle: "Construction ERP",
    category: "Enterprise Business Systems",
    badge: "Featured System Architecture",
    featured: true,
    year: "2026",
    role: "Full-Stack System Developer",
    client: "Enterprise Construction Operations",
    shortDescription:
      "A business inventory and construction materials management system designed to support multi-store operations, authoritative SKU tracking, ledger balance verification, and structured voucher workflows.",
    overview:
      "Engineered to replace disjointed spreadsheets across large-scale construction sites with an authoritative, audit-ready materials management platform. It centralizes 1,420+ registered construction SKUs across regional project warehouses with real-time stock velocity monitoring.",
    problem:
      "Large-scale construction contractors routinely face severe material leakages, untracked store dispatches, and discrepancies between physical warehouse storage and ledger balance reporting across distributed job sites.",
    solution:
      "Built a unified inventory tracking system with structured voucher workflows (GRV, SIV, ISTV, ISTRV, SRV), stock movement ledgers, and an executive operations dashboard displaying ledger balance health status.",
    contribution:
      "Designed and developed the full application interface and backend integration layer, established the database schema and voucher models, implemented Excel SKU bulk import parsers, and created the responsive operational analytics views.",
    features: [
      {
        title: "Executive Operations Dashboard",
        desc: "Live visibility into registered SKUs (1,420+), operating warehouses, in-transit batches, and ledger health balance status."
      },
      {
        title: "Item Master Catalog & SKU Management",
        desc: "Authoritative database of registered items across concrete, cement, steel, and electricals with Excel bulk import and unit conversions."
      },
      {
        title: "Immediate Voucher Launchpad",
        desc: "Structured workflows for Goods Receiving (GRV), Store Issuing (SIV), Store Transfers (ISTV/ISTRV), and Stock Adjustments."
      },
      {
        title: "Multi-Warehouse Routing",
        desc: "Real-time dispatch and receipt tracking between regional stores including Nekemt, Goro ICT Park, Chaka, Kazanchis, and Kality."
      },
      {
        title: "Stock Trial Balance & Movement Ledger",
        desc: "Chronological physical movement auditing with signed quantities, running balance snapshots, and valuation reports."
      }
    ],
    techStack: ["Python", "Supabase", "JavaScript", "HTML5", "CSS3"],
    previewImage: "src/assets/projects/construction-erp/preview.webp",
    thumbnailImage: "src/assets/projects/construction-erp/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/construction-erp/dashboard.webp",
        title: "Executive Operations Dashboard",
        caption: "Real-time inventory overview, ledger health balance status, and voucher launchpad."
      },
      {
        src: "src/assets/projects/construction-erp/item-master.webp",
        title: "Item Master Catalog",
        caption: "Authoritative SKU definitions, bulk Excel import, category filters, and unit tracking."
      },
      {
        src: "src/assets/projects/construction-erp/transactions.webp",
        title: "Transaction Ledger & Vouchers",
        caption: "Audit trail of inventory voucher transactions across regional store warehouses."
      },
      {
        src: "src/assets/projects/construction-erp/stock-ledger.webp",
        title: "Stock Trial Balance & Movement Ledger",
        caption: "Chronological movement auditing with signed quantities, running balances, and valuation data."
      }
    ],
    liveUrl: null,
    liveLink: null,
    isInternal: true
  },
  {
    id: "right-choice-website",
    number: "02",
    title: "Right Choice Kids Therapy Website",
    shortTitle: "Right Choice Therapy",
    category: "Healthcare & Clinic Web",
    badge: "Clinical Web Experience",
    featured: true,
    year: "2026",
    role: "Web Designer & Developer",
    client: "Right Choice Kids Therapy Clinic",
    shortDescription:
      "A compassionate, professional web experience presenting pediatric speech and language therapy services, clinic philosophies, founder vision, and parent consultation booking.",
    overview:
      "Right Choice Kids Therapy is a specialized speech and language therapy clinic in Addis Ababa. The website was created to help families recognize early developmental speech challenges, learn about certified therapy modalities, and schedule personalized consultations.",
    problem:
      "Parents of children facing developmental speech delays often struggle to find trustworthy, local therapy guidance. The clinic needed a clear, accessible digital presence to communicate clinical expertise and streamline intake inquiries.",
    solution:
      "Designed and developed a warm, accessible website featuring evidence-based therapy breakdowns, clinic values, television broadcast appearances, and a streamlined consultation appointment request flow.",
    contribution:
      "Crafted the visual identity and layout, structured therapy service categories, integrated national media endorsements (EBS TV), optimized page performance, and ensured mobile responsiveness for parents browsing on smartphones.",
    features: [
      {
        title: "Specialized Therapy Modalities",
        desc: "Clear explanations of speech & language delay, articulation therapy, stuttering therapy, and play-based intervention."
      },
      {
        title: "National Media Broadcast Feature",
        desc: "Embedded EBS TV broadcast feature discussing speech therapy awareness, early diagnosis, and developmental growth."
      },
      {
        title: "Founder Vision & Clinical Philosophy",
        desc: "Interactive video message from the clinic founder highlighting evidence-based individualized care plans."
      },
      {
        title: "Consultation Booking & Contact",
        desc: "Integrated consultation inquiry form, clinic operating hours, location details, and direct contact options."
      },
      {
        title: "Accessible Child-Focused Design",
        desc: "Warm color palette, clean typography, and fast-loading media designed for stressed parents seeking clinical help."
      }
    ],
    techStack: ["WordPress", "Astra", "Spectra", "Custom CSS", "Responsive UI"],
    previewImage: "src/assets/projects/right-choice-website/preview.webp",
    thumbnailImage: "src/assets/projects/right-choice-website/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/right-choice-website/homepage.webp",
        title: "Clinic Marketing Landing Page",
        caption: "Full homepage featuring child therapy overview, EBS TV broadcast, and consultation form."
      },
      {
        src: "src/assets/projects/right-choice-website/services.webp",
        title: "Our Therapy Services",
        caption: "Specialized pediatric modalities, therapy activity gallery, and individualized care roadmap."
      },
      {
        src: "src/assets/projects/right-choice-website/about.webp",
        title: "About Us & Founder Message",
        caption: "Founder video message, core values (Compassion, Integrity, Collaboration, Growth), and clinic team."
      }
    ],
    liveUrl: "https://rightchoicespeechtherapy.com/",
    liveLink: "https://rightchoicespeechtherapy.com/",
    isInternal: false
  },
  {
    id: "furniture-ecommerce",
    number: "03",
    title: "Modern Home Furniture & POS",
    shortTitle: "Modern Home Furniture",
    category: "Furniture eCommerce & POS",
    badge: "Omnichannel Retail",
    featured: true,
    year: "2026",
    role: "eCommerce & POS Developer",
    client: "Modern Home Furniture Retail",
    shortDescription:
      "An omnichannel furniture shopping experience combining a warm Scandinavian eCommerce storefront with physical showroom point-of-sale inventory synchronization and streamlined checkout.",
    overview:
      "Modern Home Furniture delivers a high-end furniture retail experience. The platform showcases living room, bedroom, dining, and storage collections online while syncing sales and inventory with the in-store physical showroom via OpenPOS.",
    problem:
      "Managing furniture inventory across both a physical retail showroom and an online store typically causes stock-level discrepancies, double-selling, and disjointed customer order handling.",
    solution:
      "Implemented a cohesive WooCommerce solution paired with OpenPOS for real-time inventory synchronization, paired with a custom minimalist aesthetic tailored for luxury home furnishings.",
    contribution:
      "Developed the custom Elementor theme templates, configured WooCommerce catalog attributes and variations, integrated OpenPOS for in-store transactions, and optimized product imagery for fast browsing.",
    features: [
      {
        title: "Scandinavian-Inspired Visual Showcase",
        desc: "Warm minimalist aesthetic featuring high-resolution furniture photography and curated interior spaces."
      },
      {
        title: "Room-Based Category Navigation",
        desc: "Interactive filtering for Living Room, Bedroom, Tables, Chairs, Sofas, and Storage units."
      },
      {
        title: "24-Item Comprehensive Product Catalog",
        desc: "Detailed product cards with local Ethiopian Birr (Br) pricing, dimensions, and materials specifications."
      },
      {
        title: "Integrated Showroom POS",
        desc: "Unified inventory synchronization between brick-and-mortar showroom registers and web store checkout."
      },
      {
        title: "Frictionless Localized Checkout",
        desc: "Streamlined single-page checkout supporting Cash on Delivery (COD) and direct Ethiopian bank transfers."
      }
    ],
    techStack: ["WordPress", "WooCommerce", "Elementor", "OpenPOS", "PHP"],
    previewImage: "src/assets/projects/furniture-ecommerce/preview.webp",
    thumbnailImage: "src/assets/projects/furniture-ecommerce/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/furniture-ecommerce/homepage.webp",
        title: "Storefront Homepage",
        caption: "Minimalist Scandinavian hero banner, Shop by Room categories, and featured collections."
      },
      {
        src: "src/assets/projects/furniture-ecommerce/shop.webp",
        title: "Furniture Catalog Grid",
        caption: "24-item product grid highlighting sofas, dining chairs, tables, and cabinets with local pricing."
      },
      {
        src: "src/assets/projects/furniture-ecommerce/checkout.webp",
        title: "Streamlined Order Checkout",
        caption: "Clean single-page order form with Cash on Delivery and instant order summary."
      }
    ],
    liveUrl: null,
    liveLink: null,
    isInternal: false
  },
  {
    id: "kira-store",
    number: "04",
    title: "Kira Store WooCommerce",
    shortTitle: "Kira Store",
    category: "Tech & Electronics eCommerce",
    badge: "Consumer Tech Storefront",
    featured: false,
    year: "2026",
    role: "eCommerce Developer",
    client: "Kira Electronics Store",
    shortDescription:
      "A high-energy consumer electronics storefront featuring dynamic promotional hero grids, multi-attribute faceted product filtering, flash deal timers, and localized checkout.",
    overview:
      "Kira Store is a modern digital marketplace built for gaming laptops, flagship smartphones, audio gear, and tech accessories. It delivers a fast, search-first shopping experience with Ethiopian Birr pricing.",
    problem:
      "Electronics buyers require detailed multi-faceted filtering (RAM, processor, GPU, color, price range) and dynamic stock visibility, which standard basic storefronts fail to deliver effectively.",
    solution:
      "Built a high-performance storefront with Blocksy and WooCommerce, implementing an extensive left-hand faceted search engine, category pill quick links, and automated order notifications.",
    contribution:
      "Engineered the full catalog taxonomy, customized the neon/tech aesthetic, set up dynamic flash deal countdowns, built responsive filtering widgets, and integrated customer checkout flows.",
    features: [
      {
        title: "Dynamic Promotional Grid",
        desc: "High-contrast hero banners spotlighting limited-time deals on laptops, smartphones, and gaming essentials."
      },
      {
        title: "Faceted Attribute Filtering",
        desc: "Multi-parameter sidebar search with price sliders, category tags, brand filters, and color swatches."
      },
      {
        title: "Interactive Category Carousel",
        desc: "Visual circular icon carousel for instant department hopping across Laptops, Phones, Watches, and Audio."
      },
      {
        title: "Flash Deals & Countdown Timers",
        desc: "Scarcity-driven deal cards featuring live countdowns and quick 'Add to Cart' actions."
      },
      {
        title: "One-Page Checkout Funnel",
        desc: "Frictionless checkout supporting guest checkout, direct bank transfer, and cash on delivery."
      }
    ],
    techStack: ["WordPress", "WooCommerce", "Blocksy", "PHP", "JavaScript"],
    previewImage: "src/assets/projects/kira-store/preview.webp",
    thumbnailImage: "src/assets/projects/kira-store/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/kira-store/homepage.webp",
        title: "Promotional Electronics Storefront",
        caption: "Category pills, promotional hero grids, best-selling products, and flash deal countdowns."
      },
      {
        src: "src/assets/projects/kira-store/products.webp",
        title: "Faceted Product Catalog",
        caption: "Comprehensive shop catalog with faceted sidebar filters (price, categories, colors, ratings)."
      },
      {
        src: "src/assets/projects/kira-store/checkout.webp",
        title: "One-Page Conversion Checkout",
        caption: "Streamlined order form with Ethiopian shipping details and bank transfer / COD payment options."
      }
    ],
    liveUrl: "https://kirastore.moderngebeya.com/",
    liveLink: "https://kirastore.moderngebeya.com/",
    isInternal: false
  },
  {
    id: "right-choice-crm",
    number: "05",
    title: "Right Choice Clinic CRM",
    shortTitle: "Right Choice CRM",
    category: "Healthcare Operations SaaS",
    badge: "Clinical Operations Hub",
    featured: false,
    year: "2026",
    role: "Full-Stack Software Developer",
    client: "Right Choice Kids Therapy Internal",
    shortDescription:
      "A clinical management application supporting student records, session appointment scheduling, invoice tracking, and revenue analytics in a high-contrast dark-mode interface.",
    overview:
      "Engineered as a private clinical operations hub for Right Choice Kids Therapy. It centralizes therapist caseloads, weekly therapy session schedules, billing statuses, and financial metrics to replace manual administrative tasks.",
    problem:
      "Tracking recurring therapy sessions, therapist workloads, unpaid family balances, and schedule overlaps on paper caused scheduling friction and delayed invoice collections.",
    solution:
      "Developed a custom operational dashboard featuring a weekly interactive calendar, real-time student roster, therapist workload and revenue tables, and outstanding invoice monitors.",
    contribution:
      "Engineered the full frontend interface and backend database models using Python, Supabase, and JavaScript. Designed the interactive scheduler calendar and created visual revenue analytics charts.",
    features: [
      {
        title: "Clinic Operations Dashboard",
        desc: "KPI summary tiles for active students (8), scheduled sessions (2), unpaid invoices, and monthly revenue."
      },
      {
        title: "Weekly Session Scheduler",
        desc: "Interactive time-slot calendar mapping therapist appointments across speech, behavioral, and occupational therapy."
      },
      {
        title: "Student Patient Roster",
        desc: "Searchable records table managing student family associations, dates of birth, and enrollment statuses."
      },
      {
        title: "Financial & Invoice Tracking",
        desc: "Real-time ledger tracking overdue, partially paid, and sent invoices with ETB billing totals."
      },
      {
        title: "Therapist Workload & Analytics",
        desc: "Visual charts for monthly revenue, session status distribution (completed vs. scheduled), and therapist workload revenue tracking."
      }
    ],
    techStack: ["Python", "Supabase", "JavaScript", "HTML5", "CSS3"],
    previewImage: "src/assets/projects/right-choice-crm/preview.webp",
    thumbnailImage: "src/assets/projects/right-choice-crm/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/right-choice-crm/dashboard.webp",
        title: "Clinic Operations Hub & Calendar",
        caption: "Main dashboard displaying KPI cards, weekly schedule calendar, and session rosters."
      },
      {
        src: "src/assets/projects/right-choice-crm/analytics.webp",
        title: "Clinic Analytics & Reports",
        caption: "Monthly revenue bar charts, session status donut charts, and therapist workload performance table."
      },
      {
        src: "src/assets/projects/right-choice-crm/students.webp",
        title: "Anonymized Student & Patient Management",
        caption: "Clean student records roster managing family IDs, birth dates, and active therapy statuses."
      }
    ],
    liveUrl: null,
    liveLink: null,
    isInternal: true
  },
  {
    id: "hotel-booking",
    number: "06",
    title: "Hotel Booking Platform",
    shortTitle: "Hotel Booking",
    category: "Hospitality & Reservations",
    badge: "Hospitality Web Engine",
    featured: false,
    year: "2026",
    role: "Web & Booking Engine Developer",
    client: "Luxury Hospitality Client",
    shortDescription:
      "A luxury hotel reservation platform featuring date-based multi-room availability search, room tier catalogs, and automated Telegram guest booking notifications.",
    overview:
      "Created for boutique hotel operations, this hospitality platform combines editorial resort photography with an interactive multi-step booking engine. It allows travelers to check dates, pick multiple rooms, and confirm stays effortlessly.",
    problem:
      "Boutique hotels frequently lose direct bookings to OTA aggregators due to clunky reservation engines and delayed reservation notices to front desk staff.",
    solution:
      "Integrated VikBooking on WordPress with custom luxury styling, multi-room rate selection in ETB, and automated Telegram webhook alerts dispatched instantly to hotel management.",
    contribution:
      "Designed the luxury user interface, structured accommodations catalogs, configured seasonal room tier pricing, and developed webhook integrations for instant Telegram reservation alerts.",
    features: [
      {
        title: "Above-the-Fold Reservation Search",
        desc: "Instant date pickers (check-in/check-out) and room/guest counters for rapid availability lookups."
      },
      {
        title: "Multi-Step Booking Workflow",
        desc: "Step-by-step reservation UX: Dates → Rooms → Options → Confirmation with transparent ETB pricing."
      },
      {
        title: "Accommodations & Suites Showcase",
        desc: "Detailed room tier cards for Double Deluxe, Double Club, Standard, Executive, Grand, and Presidential suites."
      },
      {
        title: "Resort Amenities & Social Proof",
        desc: "Visual sections highlighting infinity pools, wellness spas, fine dining, and guest testimonial reviews."
      },
      {
        title: "Telegram Notification Webhook",
        desc: "Instant automated alerts sent directly to hotel desk staff smartphones upon new guest booking submission."
      }
    ],
    techStack: ["WordPress", "Elementor", "VikBooking", "PHP", "Telegram API"],
    previewImage: "src/assets/projects/hotel-booking/preview.webp",
    thumbnailImage: "src/assets/projects/hotel-booking/preview-thumb.webp",
    gallery: [
      {
        src: "src/assets/projects/hotel-booking/homepage.webp",
        title: "Luxury Hotel Landing Page",
        caption: "Resort hero with check-in search bar, amenities showcase, room gallery, and guest reviews."
      },
      {
        src: "src/assets/projects/hotel-booking/rooms.webp",
        title: "Accommodations & Suites Catalog",
        caption: "Grid of room tiers (Deluxe, Club, Executive, Presidential) with high-res photography."
      },
      {
        src: "src/assets/projects/hotel-booking/booking-flow.webp",
        title: "Multi-Room Step Reservation Engine",
        caption: "Step-by-step reservation workflow showing multi-room selections, amenity icons, and ETB pricing."
      }
    ],
    liveUrl: "https://hotel.moderngebeya.com/",
    liveLink: "https://hotel.moderngebeya.com/",
    isInternal: false
  }
];
