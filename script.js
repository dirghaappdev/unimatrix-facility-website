/**
 * Unimatrix Facility Solutions (OPC) Private Limited
 * Main Interactive Application Script - Visual Edition
 * Features:
 * - Bilingual Engine (English & Marathi) with zero latency
 * - Interactive Smart AMC Cost Estimator
 * - On-Ground Operations Photo Gallery & Filtering
 * - Fullscreen Inspection Lightbox Modal
 * - Quick Quote Modal & Lead Capture
 * - WhatsApp Dispatch Integration (+91 93562 97418)
 * - Mobile Off-Canvas Menu
 * - Toast Notification System
 */

// Bilingual Translation Dictionary
const translations = {
  en: {
    // Header & Navigation
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navGallery: "Work Gallery",
    navTimeline: "Daily Workflow",
    navDuties: "Duties",
    navWhyUs: "Why Us",
    navCalculator: "AMC Estimator",
    navLocations: "Branches",
    navContact: "Contact",
    navGetQuote: "Request a Quote",
    emergencySupport: "24/7 Breakdown Hotline",
    serviceAreasTag: "Shirpur • Dhule • Pune • Nearby Regions",
    langToggleBtn: "मराठी",
    langName: "Marathi",

    // Hero Section
    heroBadge: "Complete Maintenance & Technical Facility Management Services",
    heroTitle: "Total Technical Facility Management & Long-Term Asset Care",
    heroSubtitle: "Delivering reliable operations, preventive maintenance, statutory compliance support, and asset protection through skilled technicians and structured processes.",
    heroCtaPrimary: "Get Free Site Audit & Quote",
    heroCtaSecondary: "Explore Operations Gallery",
    heroCallBtn: "Call Now: +91 93562 97418",
    
    // Hero Highlights / Stats
    stat1Title: "100% Statutory Compliance",
    stat1Desc: "PMC, Fire Dept & Pollution Board rules",
    stat2Title: "24/7 Rapid Emergency",
    stat2Desc: "Instant breakdown response & support",
    stat3Title: "6+ Engineering Verticals",
    stat3Desc: "Electrical, Plumbing, STP, Fire, Lift & PPM",
    stat4Title: "Dual Regional Hubs",
    stat4Desc: "Shirpur (Dhule) & Uruli Devachi (Pune)",

    // Property Verticals
    verticalsTitle: "Specialized Services For Every Property",
    vertical1Name: "Housing Societies & Townships",
    vertical1Desc: "Comprehensive technical upkeep, water management, daily maintenance, and managing committee reporting.",
    vertical2Name: "Commercial Buildings & Offices",
    vertical2Desc: "Zero-downtime electrical power backup, HVAC coordination, fire safety audits, and professional compliance.",
    vertical3Name: "Industrial & Manufacturing Plants",
    vertical3Desc: "Preventive maintenance, HT/LT panels, STP/WTP effluent monitoring, pumps, and asset lifecycle management.",

    // About Us
    aboutTag: "About Us",
    aboutTitle: "Unimatrix Facility Solutions (OPC) Private Limited",
    aboutText1: "Unimatrix Facility Solutions (OPC) Private Limited is a professional facility management company specializing in maintenance and technical services for housing societies, commercial buildings, and industrial properties.",
    aboutText2: "We focus on delivering reliable operations, preventive maintenance, statutory compliance support, and long-term asset protection through skilled technicians and structured processes.",
    aboutPillar1Title: "Skilled Technical Staff",
    aboutPillar1Desc: "Certified electricians, plumbers, STP operators, and facility supervisors.",
    aboutPillar2Title: "Preventive Maintenance",
    aboutPillar2Desc: "Scheduled PPM routines preventing costly equipment breakdowns.",
    aboutPillar3Title: "Statutory Compliance",
    aboutPillar3Desc: "Strict adherence to Fire NOC, PMC bylaws, and environmental regulations.",
    aboutPillar4Title: "Long-Term Asset Care",
    aboutPillar4Desc: "Maximizing the operational lifespan and value of building infrastructure.",

    // Gallery Section
    galleryTag: "On-Ground Operations",
    galleryTitle: "Field Operations & Engineering Photo Gallery",
    gallerySubtitle: "Actual glimpse of our certified engineering and maintenance technicians executing daily checklists and preventive maintenance across Maharashtra.",
    filterAll: "All Photos",
    filterElectrical: "Electrical & DG",
    filterPlumbing: "Plumbing & Pumps",
    filterStp: "STP / WTP Plant",
    filterFire: "Fire Safety",
    filterLift: "Lifts & Structural",

    // Timeline: Day in the Life
    timelineTag: "24-Hour Structured Execution",
    timelineTitle: "A Day in the Life of a Unimatrix Facility Team",
    timelineSubtitle: "Disciplined hourly checklists ensuring zero resident complaints, full equipment safety, and prompt managing committee updates.",

    // Facility Duties Section (Facility Team ची मुख्य कर्तव्ये)
    dutiesTag: "Operational Excellence",
    dutiesTitle: "Key Responsibilities of Our Facility Team",
    dutiesSubtitle: "Comprehensive on-ground management ensuring peace of mind for residents and managing committees.",

    duty1Title: "Daily Maintenance",
    duty1Sub: "Regular inspection of society cleanliness, stairs, lifts, parking, and garden areas. Systematic collection and scientific disposal of waste.",

    duty2Title: "Complaint Handling",
    duty2Sub: "Prompt logging of resident complaints, timely corrective action, and persistent follow-up until total resolution.",

    duty3Title: "Water Supply & Drainage Management",
    duty3Sub: "Smooth, uninterrupted water supply, immediate repair of pipeline leaks and chamber blockages, and periodic hygienic tank cleaning.",

    duty4Title: "Contractor & AMC Coordination",
    duty4Sub: "Active coordination of plumbers, electricians, housekeeping, and lift AMC vendors. Quality oversight and strict tracking of bills and service records.",

    duty5Title: "Electrical Works",
    duty5Sub: "Ensuring flawless common area, street, and parking lights. Meticulous upkeep of meter rooms, generators, and inverters. Instant breakdown repairs.",

    duty6Title: "Common Area & Asset Maintenance",
    duty6Sub: "Building painting, waterproofing, structural maintenance, and regular inspection of roofs, terraces, sheds, and compound walls.",

    duty7Title: "Lift & Fire Safety",
    duty7Sub: "Routine inspections under lift AMC, comprehensive testing of fire fighting systems, extinguishers, alarms, and full cooperation during fire audits.",

    duty8Title: "Coordination with BOM / Managing Committee",
    duty8Sub: "Submitting daily incident and work reports, presenting critical updates in committee meetings, and disciplined execution of BOM decisions.",

    duty9Title: "Security Management",
    duty9Sub: "Monitoring security guard attendance and duty rosters, maintaining visitor entry logs and active CCTV surveillance. Immediate escalation of suspicious matters to BOM.",

    duty10Title: "Statutory & Regulatory Compliance",
    duty10Sub: "Full compliance with PMC, Fire Department, and Pollution Control Board regulations. Keeping all mandatory registers, logbooks, and test reports fully updated.",

    // Services Section
    servicesTag: "Our Capabilities",
    servicesTitle: "Maintenance & Technical Services",
    servicesSubtitle: "Engineered solutions tailored to keep your building systems operating safely, smoothly, and efficiently.",

    srv1Title: "Electrical Maintenance",
    srv1Sub: "Safe, uninterrupted power distribution and critical backup systems management.",
    srv1List: [
      "HT / LT panel operation & maintenance",
      "DG set operation & preventive maintenance",
      "Power backup system management (UPS / Inverter)",
      "Internal & external lighting maintenance",
      "Earthing system inspection & testing",
      "Load balancing & fault rectification",
      "Energy consumption monitoring & optimization"
    ],

    srv2Title: "Plumbing & Water Systems",
    srv2Sub: "End-to-end water flow control, motor servicing, and pipeline reliability.",
    srv2List: [
      "Complete plumbing maintenance & repairs",
      "Overhead & underground tank management",
      "Pump & motor operation, winding check & servicing",
      "Leakage detection & high-pressure pipeline repair",
      "Valve, ball-cock & fitting replacement",
      "Water supply line pressure maintenance"
    ],

    srv3Title: "STP / WTP Operations",
    srv3Sub: "Eco-friendly, compliant water treatment and sewage recycling.",
    srv3List: [
      "Sewage Treatment Plant (STP) operation & maintenance",
      "Water Treatment Plant (WTP) monitoring & RO units",
      "Daily testing & parameter reporting (pH, BOD, COD, TDS)",
      "Chemical dosing & safe sludge handling",
      "Pollution control board (MPCB) compliance support"
    ],

    srv4Title: "Fire Fighting & Safety Systems",
    srv4Sub: "Life safety preservation, statutory compliance, and emergency readiness.",
    srv4List: [
      "Fire alarm system maintenance & smoke detector checks",
      "Hydrant system inspection, hose reels & servicing",
      "Fire pump (Jockey / Diesel / Main) & panel testing",
      "Fire extinguisher refilling coordination & inspection",
      "Fire NOC documentation & renewal support",
      "Fire mock drill coordination for residents & commercial staff"
    ],

    srv5Title: "Lift & Equipment Maintenance",
    srv5Sub: "Safe vertical mobility and multi-vendor coordination.",
    srv5List: [
      "Lift AMC vendor coordination (Otis, Schindler, Kone, Johnson, etc.)",
      "Rapid breakdown handling & emergency rescue coordination",
      "Periodic safety inspections, ARD & sensor verification",
      "Statutory compliance documentation & PWD license tracking"
    ],

    srv6Title: "Preventive & Breakdown Maintenance",
    srv6Sub: "Proactive care that mitigates catastrophic equipment failures.",
    srv6List: [
      "Planned preventive maintenance (PPM) schedules",
      "24/7 Rapid emergency breakdown technical support",
      "Asset lifecycle management & depreciation protection",
      "Maintenance scheduling & digital logbook records",
      "Technical reports & monthly committee dashboards"
    ],

    // Why Choose Us
    whyTag: "The Unimatrix Advantage",
    whyTitle: "Why Choose Unimatrix Facility Solutions?",
    whySubtitle: "We combine engineering rigor, disciplined operations, and transparent reporting to deliver unmatched service quality.",

    why1Title: "Trained & Experienced Technical Staff",
    why1Desc: "Fully vetted, uniformed, and certified electricians, plumbers, and technicians equipped with standard safety gear and tools.",

    why2Title: "Preventive & Breakdown Expertise",
    why2Desc: "Proven ability to solve complex technical breakdowns while running disciplined preventive maintenance calendars.",

    why3Title: "Compliance-Oriented Operations",
    why3Desc: "Strict adherence to local municipal norms (PMC), Fire Safety Standards, and Pollution Control Board regulations.",

    why4Title: "Transparent Service Process",
    why4Desc: "Transparent billing, digital logs, daily maintenance registers, and comprehensive monthly performance summaries.",

    why5Title: "Quick Response Support",
    why5Desc: "Dedicated local presence in Shirpur and Pune guarantees rapid response to emergency electrical, water, or safety failures.",

    why6Title: "Customized AMC Solutions",
    why6Desc: "Tailored AMC contracts crafted specifically around your society's budget, size, equipment count, and specific pain points.",

    // Calculator Section
    calcTag: "Instant Proposal",
    calcTitle: "Interactive Smart AMC Cost Estimator",
    calcSubtitle: "Calculate the recommended facility management package for your housing society or commercial premises in seconds.",
    calcPropertyType: "1. Select Property Type",
    calcPropOption1: "Housing Society / Township",
    calcPropOption2: "Commercial Complex / Offices",
    calcPropOption3: "Industrial / Manufacturing Unit",
    calcScaleLabel: "2. Number of Units / Flats / Size:",
    calcServicesLabel: "3. Choose Services Required:",
    calcEstimateHeader: "Recommended Service Plan & Resources",
    calcStaffRecLabel: "Deployment Recommendation:",
    calcPpmRecLabel: "Maintenance Rhythm:",
    calcComplianceLabel: "Statutory Coverage:",
    calcBtnSendWhatsapp: "Send Configuration via WhatsApp",
    calcBtnBookAudit: "Book Free On-Site Survey",

    // Coverage & Locations
    locTag: "Regional Presence",
    locTitle: "Service Coverage & Branch Offices",
    locSubtitle: "With strong operational hubs in Shirpur (Dhule) and Pune, we provide seamless coverage across Maharashtra.",
    mainBranchTitle: "Main Branch (Shirpur / Dhule)",
    mainBranchAddress: "Shop No. 3, Samarth Complex, Shahada Road, Karwand Naka, Shirpur, Dist. Dhule - 425405",
    branch1Title: "Branch 1 (Pune)",
    branch1Address: "Jadhav Complex, Office No. 01, 1st Floor, Katraj-Saswad Bypass Road, Uruli Devachi, Pune - 412308",
    landmarkPune: "Landmark: Indian Oil Petrol Pump",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
    serviceAreasTitle: "Active Service Areas:",

    // Contact & Modal
    contactTag: "Connect With Us",
    contactTitle: "Ready to Upgrade Your Facility Management?",
    contactSubtitle: "Get in touch with our engineering team today for a free site audit, customized AMC quotation, or emergency support.",
    formName: "Your Full Name *",
    formPhone: "Mobile Number (WhatsApp) *",
    formEmail: "Email Address",
    formProperty: "Society / Commercial Property Name *",
    formCity: "Location / City (Shirpur, Dhule, Pune, etc.) *",
    formService: "Primary Service Required",
    formMsg: "Tell us about your requirements or current challenges",
    formSubmit: "Submit Inquiry & Request Audit",
    formOrWhatsApp: "Chat with Us on WhatsApp",
    
    // Footer
    footerDesc: "Unimatrix Facility Solutions (OPC) Private Limited is your trusted partner for housing societies, commercial buildings, and industrial plants across Maharashtra.",
    footerLinksTitle: "Quick Links",
    footerServicesTitle: "Our Services",
    footerContactTitle: "Corporate Offices",
    copyright: "© 2026 Unimatrix Facility Solutions (OPC) Private Limited. All Rights Reserved."
  },

  mr: {
    // Header & Navigation
    navHome: "मुख्यपृष्ठ",
    navAbout: "आमच्याबद्दल",
    navServices: "सेवा",
    navGallery: "कामाचे फोटो",
    navTimeline: "दैनिक वेळापत्रक",
    navDuties: "कर्तव्ये",
    navWhyUs: "वैशिष्ट्ये",
    navCalculator: "AMC अंदाज",
    navLocations: "शाखा",
    navContact: "संपर्क",
    navGetQuote: "कोटेशन मिळवा",
    emergencySupport: "२४/७ आपत्कालीन हेल्पलाइन",
    serviceAreasTag: "धुळे • शिरपूर • पुणे • आसपासची सर्व क्षेत्रे",
    langToggleBtn: "English",
    langName: "English",

    // Hero Section
    heroBadge: "संपूर्ण देखभाल व तांत्रिक फॅसिलिटी मॅनेजमेंट सेवा",
    heroTitle: "विश्वासार्ह तांत्रिक देखभाल व दीर्घकालीन मालमत्ता संरक्षण",
    heroSubtitle: "कुशल तांत्रिक कर्मचारी, नियोजित मेंटेनन्स प्रक्रिया, कायदेशीर पालन व दीर्घकालीन उपकरण संरक्षणासह हाऊसिंग सोसायट्या, व्यावसायिक व औद्योगिक इमारतींसाठी अव्वल सेवा.",
    heroCtaPrimary: "मोफत साइट ऑडिट व कोटेशन मिळवा",
    heroCtaSecondary: "कामाचे प्रत्यक्ष फोटो पहा",
    heroCallBtn: "कॉल करा: +91 93562 97418",

    // Hero Highlights / Stats
    stat1Title: "१००% कायदेशीर पालन",
    stat1Desc: "PMC, फायर व प्रदूषण नियंत्रण नियम",
    stat2Title: "२४/७ आपत्कालीन मदत",
    stat2Desc: "तातडीचे ब्रेकडाउन निवारण व सपोर्ट",
    stat3Title: "६+ मुख्य तांत्रिक विभाग",
    stat3Desc: "इलेक्ट्रिकल, प्लंबिंग, STP, फायर, लिफ्ट व PPM",
    stat4Title: "२ प्रमुख प्रादेशिक कार्यालये",
    stat4Desc: "शिरपूर (धुळे) व उरुळी देवाची (पुणे)",

    // Property Verticals
    verticalsTitle: "प्रत्येक प्रकारच्या इमारतीसाठी परिपूर्ण सेवा",
    vertical1Name: "हाऊसिंग सोसायट्या व टाउनशिप्स",
    vertical1Desc: "सर्वंकष तांत्रिक देखभाल, पाणीपुरवठा नियोजन, दैनिक स्वच्छता आणि मॅनेजिंग कमिटीला नियमित अहवाल.",
    vertical2Name: "व्यावसायिक संकुले व आयटी पार्क",
    vertical2Desc: "अखंडित वीज पुरवठा, DG सेट बॅकअप, अग्निशमन सुरक्षा ऑडिट आणि सर्व कायदेशीर कागदपत्र पूर्तता.",
    vertical3Name: "औद्योगिक इमारती व कारखाने",
    vertical3Desc: "प्रिव्हेंटिव्ह मेंटेनन्स, HT/LT पॅनल संचलन, STP/WTP प्रक्रिया, पंप देखभाल व दीर्घकालीन उपकरण सुरक्षा.",

    // About Us
    aboutTag: "आमच्याबद्दल",
    aboutTitle: "युनिमॅट्रिक्स फॅसिलिटी सोल्यूशन्स (OPC) प्रायव्हेट लिमिटेड",
    aboutText1: "युनिमॅट्रिक्स फॅसिलिटी सोल्यूशन्स (OPC) प्रायव्हेट लिमिटेड ही हाऊसिंग सोसायटी, व्यावसायिक संकुल व औद्योगिक इमारतींसाठी देखभाल व तांत्रिक सेवा पुरवणारी व्यावसायिक संस्था आहे.",
    aboutText2: "आम्ही कुशल तांत्रिक कर्मचारी, नियोजित मेंटेनन्स प्रक्रिया, कायदेशीर पालन व दीर्घकालीन उपकरण संरक्षण यावर भर देतो.",
    aboutPillar1Title: "प्रशिक्षित व कुशल कर्मचारी",
    aboutPillar1Desc: "प्रमाणित इलेक्ट्रिशियन, प्लंबर, STP ऑपरेटर्स व अनुभवी फॅसिलिटी सुपरवायझर्स.",
    aboutPillar2Title: "नियोजित प्रिव्हेंटिव्ह मेंटेनन्स",
    aboutPillar2Desc: "वेळेवर होणाऱ्या तपासणीमुळे अचानक होणारे मोठे नुकसान व खर्च टाळले जातात.",
    aboutPillar3Title: "कायदेशीर व सरकारी नियमपालन",
    aboutPillar3Desc: "फायर NOC, महापालिका नियम व प्रदूषण नियंत्रण मंडळाच्या निकषांचे १००% पालन.",
    aboutPillar4Title: "दीर्घकालीन मालमत्ता संरक्षण",
    aboutPillar4Desc: "इमारतीतील सर्व तांत्रिक उपकरणांचे कार्यक्षम आयुष्य वाढवणे.",

    // Gallery Section
    galleryTag: "आमचे प्रत्यक्ष काम",
    galleryTitle: "तांत्रिक व फॅसिलिटी ऑपरेशन्स गॅलरी",
    gallerySubtitle: "सोसायटी व व्यावसायिक संकुलांमध्ये विविध तांत्रिक कामे, नियमित तपासणी व आपत्कालीन दुरुस्ती करतानाचे आमचे प्रत्यक्ष फोटो.",
    filterAll: "सर्व फोटो",
    filterElectrical: "विद्युत व DG सेट",
    filterPlumbing: "पाणी व प्लंबिंग",
    filterStp: "STP / WTP प्रकल्प",
    filterFire: "अग्निसुरक्षा",
    filterLift: "लिफ्ट व मालमत्ता",

    // Timeline: Day in the Life
    timelineTag: "२४ तासांचे नियोजन",
    timelineTitle: "Unimatrix Facility Team चे दैनिक वेळापत्रक",
    timelineSubtitle: "दर तासाचे शिस्तबद्ध नियोजन ज्यामुळे इमारतीतील सर्व यंत्रणा सुरळीत चालतात व रहिवाशांना कोणतीही तक्रार राहत नाही.",

    // Facility Duties Section (Facility Team ची मुख्य कर्तव्ये)
    dutiesTag: "दैनिक कार्यपद्धती",
    dutiesTitle: "Facility Team ची मुख्य कर्तव्ये",
    dutiesSubtitle: "सोसायटी रहिवासी व मॅनेजिंग कमिटीच्या मनःशांतीसाठी आमची टीम खालील जबाबदाऱ्या तत्परतेने पार पाडते.",

    duty1Title: "दैनिक देखभाल (Daily Maintenance)",
    duty1Sub: "सोसायटीतील स्वच्छता, जिने, लिफ्ट, पार्किंग, गार्डन यांची नियमित देखरेख. कचरा संकलन व विल्हेवाट योग्य पद्धतीने करणे.",

    duty2Title: "तक्रार निवारण (Complaint Handling)",
    duty2Sub: "रहिवाशांच्या तक्रारी नोंदवणे, वेळेत योग्य कारवाई करणे आणि प्रलंबित तक्रारींचा सातत्यपूर्ण फॉलो-अप घेणे.",

    duty3Title: "पाणीपुरवठा व ड्रेनेज व्यवस्थापन",
    duty3Sub: "पाणीपुरवठा सुरळीत ठेवणे, पाईपलाईन, गळती, चेंबर ब्लॉकेज यांची त्वरित दुरुस्ती करणे व टाक्यांची वेळोवेळी साफसफाई.",

    duty4Title: "ठेकेदार व AMC व्यवस्थापन",
    duty4Sub: "प्लंबर, इलेक्ट्रिशियन, हाउसकीपिंग, लिफ्ट AMC यांचे समन्वय साधणे, कामाच्या गुणवत्तेवर नियंत्रण व बिल व कामाची नोंद ठेवणे.",

    duty5Title: "विद्युत व्यवस्था (Electrical Works)",
    duty5Sub: "कॉमन एरिया लाईट्स, स्ट्रीटलाईट्स, पार्किंग लाईट्स चालू ठेवणे, मीटर रूम, जनरेटर, इन्व्हर्टर यांची देखभाल व विद्युत बिघाड तात्काळ दुरुस्त करणे.",

    duty6Title: "कॉमन एरिया व मालमत्तेची देखभाल",
    duty6Sub: "इमारतीची रंगकाम, वॉटरप्रूफिंग, स्ट्रक्चरल मेंटेनन्स, छप्पर, टेरेस, शेड, कंपाउंड वॉल यांची नियमित देखरेख करणे.",

    duty7Title: "लिफ्ट व फायर सेफ्टीलिफ्ट",
    duty7Sub: "AMC अंतर्गत नियमित तपासणी, फायर फायटिंग सिस्टम, फायर सिलेंडर, अलार्म यांची तपासणी व फायर ऑडिटसाठी पूर्ण सहकार्य.",

    duty8Title: "BOM / मॅनेजिंग कमिटीशी समन्वय",
    duty8Sub: "रोजच्या समस्या व आवश्यक कामांचा अहवाल देणे, मीटिंगमध्ये माहिती सादर करणे व कमिटीच्या निर्णयांची तंतोतंत अंमलबजावणी करणे.",

    duty9Title: "सुरक्षा व्यवस्था (Security Management)",
    duty9Sub: "सुरक्षा रक्षकांची उपस्थिती व ड्युटी रोस्टर तपासणे, Visitor Entry, CCTV कार्यरत ठेवणे व कोणतीही संशयास्पद बाब तत्काळ BOM ला कळवणे.",

    duty10Title: "कायदेशीर व नियमपालन",
    duty10Sub: "PMC, फायर डिपार्टमेंट, प्रदूषण विभाग यांचे नियम पाळणे व आवश्यक रजिस्टर, लॉगबुक, नोंदी अद्ययावत ठेवणे.",

    // Services Section
    servicesTag: "आमच्या तांत्रिक सेवा",
    servicesTitle: "देखभाल व तांत्रिक सेवा (Technical Services)",
    servicesSubtitle: "आपल्या इमारतीची सुरक्षितता, कार्यक्षमता व सौंदर्य टिकवण्यासाठी आधुनिक तांत्रिक उपाय.",

    srv1Title: "विद्युत देखभाल सेवा (Electrical Maintenance)",
    srv1Sub: "सुरक्षित व अखंडित विद्युत पुरवठा आणि आपत्कालीन पॉवर बॅकअप व्यवस्था.",
    srv1List: [
      "HT / LT पॅनल ऑपरेशन व देखभाल",
      "DG सेट ऑपरेशन व प्रिव्हेंटिव्ह मेंटेनन्स",
      "पॉवर बॅकअप सिस्टिम व्यवस्थापन (UPS / इन्व्हर्टर)",
      "अंतर्गत व बाह्य लाइटिंग देखभाल",
      "अर्थिंग सिस्टिम तपासणी व टेस्टिंग",
      "फॉल्ट शोध, दुरुस्ती व लोड बॅलन्सिंग",
      "ऊर्जा वापर मॉनिटरिंग व बचत नियोजन"
    ],

    srv2Title: "प्लंबिंग व पाणी व्यवस्था (Plumbing & Water)",
    srv2Sub: "पाणीपुरवठा साखळी, मोटर पंप कार्यक्षमता व पाइपलाइन गळती निवारण.",
    srv2List: [
      "सर्व प्रकारची प्लंबिंग दुरुस्ती व देखभाल",
      "ओव्हरहेड व अंडरग्राउंड टाकी व्यवस्थापन व स्वच्छता",
      "पाणी पंप व मोटर ऑपरेशन व सर्व्हिसिंग",
      "पाइप लाइन गळती शोध व जलद दुरुस्ती",
      "व्हॉल्व्ह व फिटिंग बदल व देखभाल",
      "पाणी पुरवठा लाईन सुरळीत देखभाल"
    ],

    srv3Title: "STP / WTP ऑपरेशन व मेंटेनन्स",
    srv3Sub: "सांडपाणी पुनर्वापर, पाणी शुद्धीकरण व प्रदूषण नियंत्रण नियम पूर्तता.",
    srv3List: [
      "सांडपाणी प्रक्रिया केंद्र (STP) ऑपरेशन व देखभाल",
      "जल प्रक्रिया केंद्र (WTP / RO) मॉनिटरिंग",
      "दैनंदिन पाणी तपासणी व रिपोर्टिंग",
      "केमिकल डोसिंग व स्लज व्यवस्थापन",
      "प्रदूषण नियंत्रण नियमांचे (MPCB) काटेकोर पालन"
    ],

    srv4Title: "फायर फायटिंग व सेफ्टी सिस्टिम",
    srv4Sub: "अग्निसुरक्षा, उपकरणांची नियमित तपासणी व आपत्कालीन सज्जता.",
    srv4List: [
      "फायर अलार्म सिस्टिम देखभाल व स्मोक डिटेक्टर्स",
      "हायड्रंट सिस्टिम तपासणी व मेंटेनन्स",
      "फायर पंप व कंट्रोल पॅनेल टेस्टिंग",
      "अग्निशामक सिलिंडर रिफिल समन्वय",
      "फायर NOC साठी कागदपत्र सहाय्य",
      "फायर मॉक ड्रिल समन्वय व प्रात्यक्षिके"
    ],

    srv5Title: "लिफ्ट व उपकरण देखभाल (Lift & Equipment)",
    srv5Sub: "सुरक्षित लिफ्ट संचलन व अधिकृत वेंडर्सशी योग्य समन्वय.",
    srv5List: [
      "लिफ्ट AMC समन्वय (सर्व ब्रँड्स)",
      "ब्रेकडाउन व्यवस्थापन व त्वरित तांत्रिक सेवा",
      "नियोजित सुरक्षा तपासणी व ARD चाचणी",
      "कायदेशीर व तांत्रिक कागदपत्र व्यवस्थापन (PWD परवाना)"
    ],

    srv6Title: "प्रिव्हेंटिव्ह व ब्रेकडाउन मेंटेनन्स",
    srv6Sub: "अचानक होणारे बिघाड टाळण्यासाठी पूर्वनियोजित तांत्रिक तपासणी.",
    srv6List: [
      "नियोजित प्रिव्हेंटिव्ह मेंटेनन्स (PPM) वेळापत्रक",
      "आपत्कालीन ब्रेकडाउन सपोर्ट (२४/७)",
      "उपकरणांचे आयुष्य व्यवस्थापन (Asset Care)",
      "मेंटेनन्स शेड्युलिंग व डिजिटल लॉग्स",
      "तांत्रिक रिपोर्ट व रेकॉर्ड ठेवणे (कमिटी अहवाल)"
    ],

    // Why Choose Us
    whyTag: "युनिमॅट्रिक्सची वैशिष्ट्ये",
    whyTitle: "आम्हालाच का निवडावे? (Why Choose Us)",
    whySubtitle: "अनुभवी तंत्रज्ञ, पारदर्शक काम आणि जलद प्रतिसादासह आम्ही देतो सर्वोत्तम फॅसिलिटी सोल्यूशन्स.",

    why1Title: "प्रशिक्षित व अनुभवी टेक्निशियन",
    why1Desc: "प्रमाणित, गणवेशधारी व आधुनिक साधनांनी सज्ज असलेले कुशल इलेक्ट्रिशियन, प्लंबर व तंत्रज्ञ वर्ग.",

    why2Title: "प्रिव्हेंटिव्ह व ब्रेकडाउन मेंटेनन्स तज्ञता",
    why2Desc: "अचानक उद्भवणाऱ्या मोठ्या समस्या टाळण्यासाठी नियमित प्रतिबंधात्मक तपासणी व त्वरित दुरुस्ती.",

    why3Title: "नियम व कायद्यांचे काटेकोर पालन",
    why3Desc: "PMC महापालिका, फायर डिपार्टमेंट व प्रदूषण नियंत्रण मंडळाच्या सर्व अटी व शर्तींचे अचूक पालन.",

    why4Title: "पारदर्शक सेवा प्रक्रिया व नोंदी",
    why4Desc: "प्रत्येक कामाची व खर्चाची स्पष्ट नोंद, दैनिक लॉगबुक व कमिटीसाठी मासिक अहवाल.",

    why5Title: "जलद प्रतिसाद व आपत्कालीन सेवा",
    why5Desc: "शिरपूर व पुणे येथे स्थानिक उपस्थिती असल्याने आपत्कालीन प्रसंगी तत्काळ मदत उपलब्ध.",

    why6Title: "सानुकूल AMC योजना (Custom AMC)",
    why6Desc: "प्रत्येक सोसायटी व इमारतीचा आकार, गरजा व बजेटनुसार तयार केलेल्या विशेष वार्षिक मेंटेनन्स योजना.",

    // Calculator Section
    calcTag: "झटपट अंदाज",
    calcTitle: "सोसायटी व इमारत AMC खर्च कॅल्क्युलेटर",
    calcSubtitle: "आपल्या सोसायटी किंवा व्यावसायिक इमारतीसाठी योग्य मेंटेनन्स पॅकेज आणि मनुष्यबळ शिफारस तत्काळ जाणून घ्या.",
    calcPropertyType: "१. इमारतीचा प्रकार निवडा",
    calcPropOption1: "हाऊसिंग सोसायटी / टाउनशिप",
    calcPropOption2: "व्यावसायिक संकुल / ऑफिसेस",
    calcPropOption3: "औद्योगिक प्रकल्प / फॅक्टरी",
    calcScaleLabel: "२. सदनिकांची / युनिट्सची संख्या:",
    calcServicesLabel: "३. आवश्यक सेवा निवडा:",
    calcEstimateHeader: "शिफारस केलेली सेवा योजना व मनुष्यबळ",
    calcStaffRecLabel: "कर्मचारी नियुक्ती शिफारस:",
    calcPpmRecLabel: "मेंटेनन्स वारंवारता:",
    calcComplianceLabel: "कायदेशीर पूर्तता कव्हरेज:",
    calcBtnSendWhatsapp: "हा अंदाज व्हॉट्सअ‍ॅपवर पाठवा",
    calcBtnBookAudit: "मोफत साइट व्हिजिट बुक करा",

    // Coverage & Locations
    locTag: "आमची कार्यालये",
    locTitle: "कार्यालये व कार्यक्षेत्र (Coverage Areas)",
    locSubtitle: "शिरपूर (धुळे) आणि पुणे येथील सुसज्ज कार्यालयांद्वारे संपूर्ण महाराष्ट्रात तत्पर सेवा.",
    mainBranchTitle: "मुख्य शाखा (शिरपूर, जि. धुळे)",
    mainBranchAddress: "दुकान नं. ३, समर्थ कॉम्प्लेक्स, शहादा रोड, करवंद नाका, शिरपूर, जि. धुळे - ४२५४०५",
    branch1Title: "शाखा १ (पुणे)",
    branch1Address: "जाधव कॉम्प्लेक्स, ऑफिस नं. ०१, पहिला मजला, कात्रज-सासवड बायपास रोड, उरुळी देवाची, पुणे - ४१२३०८",
    landmarkPune: "लँडमार्क: इंडियन ऑइल पेट्रोल पंप जवळ",
    phoneLabel: "फोन:",
    emailLabel: "ईमेल:",
    serviceAreasTitle: "कार्यक्षेत्रे:",

    // Contact & Modal
    contactTag: "संपर्क साधा",
    contactTitle: "आपल्या इमारतीचे व्यवस्थापन अधिक सुलभ करा",
    contactSubtitle: "मोफत साइट ऑडिट, सानुकूल AMC कोटेशन किंवा अधिक माहितीसाठी आमच्या तज्ञांशी आजच बोला.",
    formName: "आपले पूर्ण नाव *",
    formPhone: "मोबाईल नंबर (WhatsApp) *",
    formEmail: "ईमेल पत्ता",
    formProperty: "सोसायटी / इमारतीचे नाव *",
    formCity: "शहर / ठिकाण (शिरपूर, धुळे, पुणे इ.) *",
    formService: "मुख्य आवश्यक सेवा",
    formMsg: "आपल्या गरजा किंवा समस्यांविषयी माहिती लिहा",
    formSubmit: "माहिती पाठवा व ऑडिट बुक करा",
    formOrWhatsApp: "थेट व्हॉट्सअ‍ॅपवर मेसेज करा",

    // Footer
    footerDesc: "युनिमॅट्रिक्स फॅसिलिटी सोल्यूशन्स (OPC) प्रायव्हेट लिमिटेड - हाऊसिंग सोसायट्या, व्यावसायिक संकुले व औद्योगिक इमारतींचे विश्वासू तांत्रिक साथीदार.",
    footerLinksTitle: "महत्वाच्या लिंक्स",
    footerServicesTitle: "आमच्या सेवा",
    footerContactTitle: "संपर्क पत्ते",
    copyright: "© २०२६ युनिमॅट्रिक्स फॅसिलिटी सोल्यूशन्स (OPC) प्रायव्हेट लिमिटेड. सर्व हक्क राखीव."
  }
};

// Global App State
let currentLang = 'en';

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initMobileMenu();
  initAmcCalculator();
  initQuoteForm();
  initScrollSpy();
  initSmoothScroll();
  initGalleryFilter();
  initLightbox();
});

/**
 * Language Switching Functionality
 */
function initLanguageToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  
  const savedLang = localStorage.getItem('unimatrix_lang') || 'en';
  setLanguage(savedLang);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = currentLang === 'en' ? 'mr' : 'en';
      setLanguage(targetLang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('unimatrix_lang', lang);
  document.documentElement.lang = lang;
  
  if (lang === 'mr') {
    document.body.classList.add('lang-mr');
  } else {
    document.body.classList.remove('lang-mr');
  }

  // Update text nodes with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update language toggle button label
  document.querySelectorAll('.lang-toggle-btn span.lang-label').forEach(el => {
    el.textContent = translations[lang].langToggleBtn;
  });

  // Re-run calculator updates to reflect language changes
  updateCalculatorResult();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Photo Gallery Filter
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active styling
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

      const filterCategory = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterCategory === 'all' || itemCat === filterCategory) {
          item.style.display = 'block';
          item.classList.remove('opacity-0', 'scale-95');
          item.classList.add('opacity-100', 'scale-100');
        } else {
          item.style.display = 'none';
          item.classList.add('opacity-0', 'scale-95');
          item.classList.remove('opacity-100', 'scale-100');
        }
      });
    });
  });
}

/**
 * Image Lightbox Modal
 */
function initLightbox() {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  if (!lightboxModal) return;

  document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-full-img') || trigger.querySelector('img')?.src;
      const title = trigger.getAttribute('data-title') || 'Unimatrix On-Site Operations';
      const desc = trigger.getAttribute('data-desc') || 'Standard preventive maintenance & technical facility management';

      if (lightboxImg) lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxDesc) lightboxDesc.textContent = desc;

      lightboxModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
}

/**
 * Interactive Smart AMC Cost Estimator
 */
function initAmcCalculator() {
  const unitsSlider = document.getElementById('calc-units');
  const unitsDisplay = document.getElementById('calc-units-val');
  const propTypes = document.querySelectorAll('input[name="propType"]');
  const serviceCheckboxes = document.querySelectorAll('.calc-service-cb');
  const sendWhatsAppBtn = document.getElementById('calc-whatsapp-btn');
  const bookAuditBtn = document.getElementById('calc-audit-btn');

  if (!unitsSlider) return;

  unitsSlider.addEventListener('input', (e) => {
    unitsDisplay.textContent = e.target.value;
    updateCalculatorResult();
  });

  propTypes.forEach(radio => {
    radio.addEventListener('change', updateCalculatorResult);
  });

  serviceCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateCalculatorResult);
  });

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const summary = generateCalculatorSummary();
      const whatsappUrl = `https://wa.me/919356297418?text=${encodeURIComponent(summary)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  if (bookAuditBtn) {
    bookAuditBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const msgField = document.getElementById('form-message');
        if (msgField) {
          msgField.value = `Inquiry from AMC Calculator:\n${generateCalculatorSummary()}`;
        }
      }
    });
  }

  updateCalculatorResult();
}

function updateCalculatorResult() {
  const unitsSlider = document.getElementById('calc-units');
  if (!unitsSlider) return;

  const units = parseInt(unitsSlider.value, 10);
  const selectedServices = [];
  document.querySelectorAll('.calc-service-cb:checked').forEach(cb => {
    selectedServices.push(cb.value);
  });

  const staffEl = document.getElementById('calc-res-staff');
  const ppmEl = document.getElementById('calc-res-ppm');
  const complianceEl = document.getElementById('calc-res-compliance');
  const tierBadgeEl = document.getElementById('calc-res-tier');

  const isMarathi = currentLang === 'mr';

  let tierName = "";
  let staffRec = "";
  let ppmRec = "";
  let complianceRec = "";

  if (units <= 50) {
    tierName = isMarathi ? "स्मार्ट केअर AMC (लहान सोसायटी)" : "Smart Care AMC (Compact Property)";
    staffRec = isMarathi 
      ? "१ मल्टी-टास्क टेक्निशियन (प्लंबिंग + इलेक्ट्रिकल) + साप्ताहिक सुपरवायझर भेट"
      : "1 Multi-Skilled Technician (Electrical + Plumbing) + Weekly Supervisor Audit";
    ppmRec = isMarathi ? "मासिक PPM चेकलिस्ट व व्हॉट्सअ‍ॅप रिपोर्टिंग" : "Monthly PPM Checklist & Digital Reporting";
  } else if (units <= 150) {
    tierName = isMarathi ? "प्रीमियम फॅसिलिटी कव्हरेज (मध्यम सोसायटी)" : "Premium Facility Coverage (Mid-Scale)";
    staffRec = isMarathi 
      ? "२ पूर्णवेळ टेक्निशियन (१ इलेक्ट्रिशियन, १ प्लंबर/STP ऑपरेटर) + द्वि-साप्ताहिक व्यवस्थापक भेट"
      : "2 Full-Time Technicians (Electrician + Plumber/STP) + Bi-weekly Ops Manager Visit";
    ppmRec = isMarathi ? "साप्ताहिक प्रिव्हेंटिव्ह तपासणी + मासिक कमिटी अहवाल" : "Weekly Preventive Schedule + Monthly Committee Dossier";
  } else {
    tierName = isMarathi ? "इंटिग्रेटेड टोटल फॅसिलिटी मॅनेजमेंट (मोठी टाउनशिप / संकुल)" : "Integrated Total Facility Operations (Large Scale)";
    staffRec = isMarathi 
      ? "३ ते ५ समर्पित कुशल तंत्रज्ञ + पूर्णवेळ फॅसिलिटी सुपरवायझर + २४/७ ऑन-कॉल इंजिनिअर"
      : "3 to 5 Dedicated Technical Staff + On-Site Facility Supervisor + 24/7 Chief Engineer Hotline";
    ppmRec = isMarathi ? "दैनंदिन लॉगबुक ऑडिट + सखोल मासिक तांत्रिक सादरीकरण" : "Daily Logbook Maintenance + Detailed Monthly BOM Presentation";
  }

  if (selectedServices.includes('stp') || selectedServices.includes('fire')) {
    complianceRec = isMarathi 
      ? "फायर NOC सहाय्य, MPCB प्रदूषण लॉग व उपकरणांची टेस्ट सर्टिफिकेट्स समाविष्ट" 
      : "Includes Fire NOC Assistance, MPCB Log Support & Equipment Test Certificates";
  } else {
    complianceRec = isMarathi 
      ? "PMC बायलॉज, अर्थिंग टेस्ट व सुरक्षा ऑडिट सपोर्ट समाविष्ट" 
      : "Includes Municipal Bylaws, Earthing Test & Electrical Safety Compliance";
  }

  if (tierBadgeEl) tierBadgeEl.textContent = tierName;
  if (staffEl) staffEl.textContent = staffRec;
  if (ppmEl) ppmEl.textContent = ppmRec;
  if (complianceEl) complianceEl.textContent = complianceRec;
}

function generateCalculatorSummary() {
  const unitsSlider = document.getElementById('calc-units');
  const units = unitsSlider ? unitsSlider.value : "100";
  const propTypeEl = document.querySelector('input[name="propType"]:checked');
  const propType = propTypeEl ? propTypeEl.value : 'Housing Society';

  const services = [];
  document.querySelectorAll('.calc-service-cb:checked').forEach(cb => {
    services.push(cb.getAttribute('data-name') || cb.value);
  });

  return `*Inquiry for Unimatrix Facility Solutions*\n\n` +
    `Hello Unimatrix Team,\n` +
    `I used your Website AMC Estimator for our property:\n` +
    `• Property Type: ${propType}\n` +
    `• Units / Flats: ${units}\n` +
    `• Required Verticals: ${services.join(', ')}\n\n` +
    `Please share a customized proposal and arrange a free on-site survey.`;
}

/**
 * Contact & Quote Form Submission Handler
 */
function initQuoteForm() {
  const quoteForm = document.getElementById('quote-form');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const property = document.getElementById('form-property')?.value.trim();
    const city = document.getElementById('form-city')?.value.trim();
    const service = document.getElementById('form-service')?.value || 'General Facility AMC';
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !phone || !property) {
      showToast(currentLang === 'mr' ? 'कृपया आवश्यक माहिती भरा.' : 'Please fill in all required fields.', 'error');
      return;
    }

    const payload = 
      `*New Inquiry: Unimatrix Facility Solutions*\n\n` +
      `• Name: ${name}\n` +
      `• Contact: ${phone}\n` +
      `• Property / Society: ${property}\n` +
      `• Location: ${city}\n` +
      `• Service Needed: ${service}\n` +
      `• Details: ${message || 'None provided'}`;

    showToast(
      currentLang === 'mr' 
        ? 'धन्यवाद! आपली चौकशी नोंदवली गेली आहे. आमची टीम लवकरच संपर्क करेल.' 
        : 'Thank you! Your inquiry has been recorded. Our team will contact you shortly.', 
      'success'
    );

    const waUrl = `https://wa.me/919356297418?text=${encodeURIComponent(payload)}`;
    window.open(waUrl, '_blank');

    quoteForm.reset();
  });

  const directWaBtn = document.getElementById('contact-direct-whatsapp');
  if (directWaBtn) {
    directWaBtn.addEventListener('click', () => {
      const waUrl = `https://wa.me/919356297418?text=${encodeURIComponent("Hello Unimatrix, I would like to inquire about your Facility Management & Technical AMC services.")}`;
      window.open(waUrl, '_blank');
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-700 text-white' : 'bg-red-600 text-white';
  toast.className = `${bgColor} px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform duration-300 pointer-events-auto translate-y-5 opacity-0 text-sm font-medium border border-white/20`;
  
  toast.innerHTML = `
    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-5', 'opacity-0');
  }, 20);

  setTimeout(() => {
    toast.classList.add('translate-y-5', 'opacity-0');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Scroll Spy for active navigation highlight
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('text-emerald-700', 'font-bold');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-emerald-700', 'font-bold');
          }
        });
      }
    });
  });
}

window.openQuoteModal = function(preselectedService = '') {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    if (preselectedService) {
      const serviceSelect = document.getElementById('form-service');
      if (serviceSelect) {
        serviceSelect.value = preselectedService;
      }
    }
  }
};
