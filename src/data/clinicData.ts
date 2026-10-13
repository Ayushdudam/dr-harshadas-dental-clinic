// Centralized clinic data and TypeScript contracts for Dr Harshada's Dental Clinic, Borivali West, Mumbai
// Built using the proven Boutique Clinical Editorial architecture

export interface ClinicalStage {
  step: string;
  title: string;
  detail: string;
}

export interface ProcedureFaq {
  q: string;
  a: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: 'Cosmetic' | 'Endodontics' | 'Restorative' | 'Preventive' | 'Orthodontics';
  patientConcern: string;
  shortDesc: string;
  duration: string;
  suitableFor: string;
  iconName: string;
  fullDesc: string;
  process: string[];
  clinicalHighlights: string[];
  reasonsForAssessment: string[];
  clinicalStages: ClinicalStage[];
  questionsToAsk: string[];
  aftercare: string[];
  procedureFaqs: ProcedureFaq[];
  featured?: boolean;
  needsClinicConfirmation: boolean;
}

export interface PatientJourneyStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface SterilizationStandard {
  step: string;
  title: string;
  description: string;
}

export interface DoctorProfile {
  name: string;
  qualification: string;
  specialty: string;
  role: string;
  experienceYears: number;
  philosophy: string;
  bio: string;
  affiliations: string[];
  needsClinicConfirmation: boolean;
}

export interface PatientReview {
  id: string;
  author: string;
  locality: string;
  treatmentTag: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  needsClinicConfirmation: boolean;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}

export const CLINIC_INFO = {
  name: "Dr Harshada's Dental Clinic",
  tagline: "Modern Dentistry & Advanced Dental Care in Borivali West",
  subtagline: "Cosmetic Dentistry, Teeth Whitening, Emergency Care & Family Wellness",
  address: {
    line1: "Shop No. 4, Ground Floor, Rosemar CHS",
    line2: "Holy Cross Road, Near HDFC Bank, I.C. Colony",
    area: "Borivali West, Mumbai",
    pincode: "400103",
    state: "Maharashtra, India",
    full: "Shop No. 4, Ground Floor, Rosemar CHS, Holy Cross Road, Near HDFC Bank, I.C. Colony, Borivali West, Mumbai - 400103"
  },
  landmarks: [
    "Near HDFC Bank, Holy Cross Road",
    "Situated in the quiet heart of I.C. Colony, Borivali West",
    "Easily accessible from Borivali Station (West) & New Link Road",
  ],
  phone: "+91 85918 42595",
  phoneRaw: "+918591842595",
  alternatePhone: "+91 85918 42595",
  alternatePhoneRaw: "+918591842595",
  whatsappUrl: "https://wa.me/918591842595?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Dr%20Harshada%27s%20Dental%20Clinic%20in%20Borivali%20West",
  email: "care@drharshadadental.com",
  hours: "Mon – Sun: 9:00 AM – 9:30 PM",
  hoursDetail: [
    { days: "Monday – Saturday", time: "9:00 AM – 9:30 PM", status: "Full Day Consultations & Procedures" },
    { days: "Sunday", time: "9:00 AM – 9:30 PM", status: "Open All Day / Emergency Priority" },
  ],
  verifiedRating: "4.9 / 5.0 (159+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Dr+Harshada%27s+Dental+Clinic+Rosemar+CHS+Holy+Cross+Road+Borivali+West+Mumbai+400103",
  googleMapsEmbed: "https://maps.google.com/maps?q=Rosemar+CHS+Holy+Cross+Road+IC+Colony+Borivali+West+Mumbai+400103&t=&z=16&ie=UTF8&iwloc=&output=embed",
  needsClinicConfirmation: false,
};

export const DOCTOR_INFO: DoctorProfile = {
  name: "Dr. Harshada",
  qualification: "Chief Dental Surgeon & Aesthetic Specialist",
  specialty: "Cosmetic Smile Makeovers, Teeth Whitening & Precision Restorations",
  role: "Founder & Lead Dental Surgeon",
  experienceYears: 10,
  philosophy: "Every smile is a personal work of art. We practice conservative, gentle dentistry that protects natural tooth structures while creating radiant, harmonious smiles without discomfort.",
  bio: "Dr. Harshada is a dedicated dental surgeon leading Dr Harshada's Dental Clinic in I.C. Colony, Borivali West. Known for her gentle chairside manner and patient-first approach, she provides advanced Zoom teeth whitening, conservative cosmetic smile makeovers, dental implants, child-friendly pediatric care, and urgent emergency pain relief.",
  affiliations: [
    "Indian Dental Association (IDA)",
    "Maharashtra State Dental Council (MSDC)",
    "Borivali Medical & Dental Practitioners Forum",
  ],
  needsClinicConfirmation: false,
};

export const TREATMENTS: Treatment[] = [
  {
    id: "whitening",
    slug: "teeth-whitening",
    title: "Professional Zoom Teeth Whitening",
    category: "Cosmetic",
    patientConcern: "Yellow teeth, tea/coffee stains, dull enamel, wedding prep",
    shortDesc: "Safe, chairside clinical teeth whitening lifting years of stubborn stains in a single 45-minute sitting.",
    duration: "Single Visit • 45–60 mins",
    suitableFor: "Deep dietary stains from tea, coffee, or spices; dull enamel; pre-event smile enhancement",
    iconName: "Sparkles",
    fullDesc: "Clinical Zoom Whitening uses light-activated peroxide formulations buffered with anti-sensitivity desensitizers to safely lift deep enamel stains without weakening tooth minerals.",
    process: [
      "Initial tooth shade assessment and high-definition photo record",
      "Protective resin barrier applied over gum tissues to prevent irritation",
      "Clinical Zoom whitening formulation applied and activated with LED blue light",
      "Fluoride mineralizing polish to nourish enamel and minimize sensitivity"
    ],
    clinicalHighlights: [
      "Up to 6–8 shades visibly brighter in a single comfortable sitting",
      "Formulated with desensitizing agents for sensitive teeth",
      "Preserves enamel density with zero harsh abrasives",
      "Custom take-home touch-up guidance provided"
    ],
    reasonsForAssessment: [
      "Noticeable yellowing or darkening of front teeth over time",
      "Dietary staining from daily tea, coffee, wine, or spices",
      "Desire for an instant confidence boost for weddings, interviews, or milestones",
      "Superficial fluorosis or minor enamel discoloration"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Shade Calibration & Examination",
        detail: "Standardized shade guide comparison establishes your baseline color and identifies suitable brightening targets."
      },
      {
        step: "02",
        title: "Gingival Gum Barrier Isolation",
        detail: "Gentle soft tissue isolation guards your gums, cheeks, and lips, keeping whitening formulation strictly on enamel."
      },
      {
        step: "03",
        title: "Photo-Activation Light Exposure",
        detail: "Three 15-minute cycles of targeted light energy break down deep stain molecules without tooth overheating."
      },
      {
        step: "04",
        title: "Mineral Hydration & Shade Reveal",
        detail: "Post-whitening mineral varnish relieves transient sensitivity and locks in your vibrant new shade."
      }
    ],
    questionsToAsk: [
      "How many shades lighter can my teeth realistically become?",
      "Will my existing composite fillings or crowns change color?",
      "What precautions should I take in the first 48 hours?",
      "How long will my whitening results typically last?"
    ],
    aftercare: [
      "Follow the 'white diet' (avoid coffee, dark tea, soy sauce, and turmeric) for 48 hours.",
      "Use room-temperature water if mild transient sensitivity occurs during the first 24 hours.",
      "Brush gently twice daily with non-abrasive fluoride toothpaste.",
      "Schedule routine 6-month clinical cleanings to maintain your luminous brightness."
    ],
    procedureFaqs: [
      {
        q: "Does professional teeth whitening damage enamel?",
        a: "No. Professional chairside whitening penetrates microscopic enamel pores to dissolve organic stain pigments without stripping enamel structure."
      },
      {
        q: "How long do Zoom whitening results last?",
        a: "Results typically last 1 to 2 years, depending on your oral hygiene and consumption of staining beverages like coffee and tea."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "cosmetic",
    slug: "cosmetic-procedures",
    title: "Cosmetic Procedures & Smile Design",
    category: "Cosmetic",
    patientConcern: "Chipped teeth, gaps between teeth, uneven smile line",
    shortDesc: "Handcrafted ultra-thin porcelain veneers, composite bonding, and contouring customized to your facial character.",
    duration: "2–3 Visits across 7–10 days",
    suitableFor: "Chipped or worn edges, permanent intrinsic stains, front tooth gaps (diastema), minor misalignment",
    iconName: "Sparkles",
    fullDesc: "We balance biological dental preservation with facial harmony. Every smile design begins with digital smile previewing, shade matching against your skin undertones, and minimal preparation of natural enamel.",
    process: [
      "Facial proportion analysis, photographic evaluation & digital preview",
      "Trial smile prototype in your mouth to inspect contour and lip dynamics",
      "Micro-conservative enamel preparation (0.3mm–0.5mm) and digital 3D scans",
      "Permanent resin bonding of hand-finished ceramic or composite veneers"
    ],
    clinicalHighlights: [
      "Mimics natural enamel light refraction and translucency",
      "Highly stain-resistant against dietary colors and tea",
      "Conservative, tissue-sparing enamel preparation protocols",
      "Corrects chips, gaps, and uneven edges harmoniously"
    ],
    reasonsForAssessment: [
      "Chipped, cracked, or worn front tooth edges from clenching",
      "Persistent dark or grey tooth discoloration resistant to bleaching",
      "Gaps (diastema) between upper or lower anterior teeth",
      "Irregularly shaped or unevenly sized teeth affecting smile symmetry"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Facial Proportion Assessment",
        detail: "Digital photo mapping documents your smile line, lip curvature, and facial aesthetics to design tailored restorations."
      },
      {
        step: "02",
        title: "Diagnostic Smile Mockup",
        detail: "A temporary prototype is placed over your teeth so you can evaluate the look and feel before any permanent changes."
      },
      {
        step: "03",
        title: "Conservative Enamel Preparation",
        detail: "Micro-sculpting (0.3mm to 0.5mm) creates room for the restoration while preserving natural tooth vitality."
      },
      {
        step: "04",
        title: "Precision Adhesive Bonding",
        detail: "High-strength adhesive resin securely bonds each handcrafted veneer for lasting beauty."
      }
    ],
    questionsToAsk: [
      "How much natural enamel must be prepared for my smile?",
      "Can I preview my new smile before permanent bonding?",
      "How do porcelain veneers compare with composite bonding in terms of longevity?",
      "Will I need a night guard to protect my veneers if I clench my teeth?"
    ],
    aftercare: [
      "Brush twice daily with a non-abrasive soft toothbrush.",
      "Wear a protective custom night guard if you tend to clench or grind your teeth at night.",
      "Avoid biting hard non-food objects like pens, pins, or bottle caps.",
      "Attend routine biannual clinical checkups to inspect bonding margins."
    ],
    procedureFaqs: [
      {
        q: "Will veneers look artificial or too bulky?",
        a: "No. We hand-calibrate translucency and edge contours to complement your natural facial aesthetics for an authentic, luminous appearance."
      },
      {
        q: "How long do porcelain veneers last?",
        a: "With good oral hygiene and routine checkups, porcelain veneers typically last 10 to 15 years or longer."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "emergency",
    slug: "emergency-care",
    title: "Emergency Care & Pain Relief",
    category: "Endodontics",
    patientConcern: "Severe throbbing toothache, broken tooth, swelling, trauma",
    shortDesc: "Prompt same-day diagnosis and gentle relief for acute toothaches, cracked teeth, and dental emergencies.",
    duration: "Same-Day Emergency Visit • 30–60 mins",
    suitableFor: "Severe throbbing toothache, cracked or knocked-out tooth, painful abscess, sudden swelling",
    iconName: "ShieldCheck",
    fullDesc: "Dental pain can be excruciating and disruptive. Dr Harshada's Dental Clinic prioritizes urgent same-day appointments to relieve biological pressure, treat pulpal infection, and stabilize broken teeth promptly.",
    process: [
      "Rapid diagnostic assessment with low-dose digital radiography",
      "Immediate gentle local anesthesia to eliminate pain promptly",
      "Targeted intervention (pulp debridement, temporary dressing, or tooth repair)",
      "Clear prescription and follow-up plan for definitive healing"
    ],
    clinicalHighlights: [
      "Same-day emergency prioritization across all 7 days of the week",
      "Immediate pain relief with gentle, localized anesthesia",
      "Preserves biological tooth root rather than extracting hastily",
      "Compassionate, unhurried chairside care for anxious patients"
    ],
    reasonsForAssessment: [
      "Continuous, throbbing toothache that prevents sleeping at night",
      "Sharp, electric pain triggered by hot or cold food and drinks",
      "Fractured tooth from an accidental fall or biting on hard food",
      "Tender swelling or pimple-like drainage on the gumline"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Urgent Diagnostic Triage",
        detail: "Digital X-ray confirms whether the root pulp is inflamed or infected without painful exploratory drilling."
      },
      {
        step: "02",
        title: "Immediate Comfort Numbing",
        detail: "Targeted local anesthesia provides near-instant relief from acute throbbing."
      },
      {
        step: "03",
        title: "Active Infection Debridement",
        detail: "Clearing inflamed pulpal tissue relieves internal pressure and halts the spread of infection."
      },
      {
        step: "04",
        title: "Protective Seal & Healing Plan",
        detail: "A soothing sedative medicament and temporary seal protect the tooth until definitive restoration."
      }
    ],
    questionsToAsk: [
      "What caused this acute pain so suddenly?",
      "Can this tooth be saved with a root canal or is extraction required?",
      "What medications will relieve post-treatment soreness?",
      "When should I return for definitive completion?"
    ],
    aftercare: [
      "Avoid chewing hard foods on the tender tooth until your permanent restoration is complete.",
      "Take prescribed analgesics and antibiotics strictly as directed by the doctor.",
      "Rinse with lukewarm salt water starting 24 hours after treatment.",
      "Contact the clinic immediately if swelling increases or a dressing loosens."
    ],
    procedureFaqs: [
      {
        q: "What should I do if a tooth gets knocked out?",
        a: "Hold the tooth by the crown (do not touch the root), gently rinse it in milk, and visit our clinic immediately within 30 to 60 minutes for the highest re-implantation success."
      },
      {
        q: "Are root canals painful during emergency visits?",
        a: "No. Modern local anesthesia numbs the tooth completely. The procedure actively stops existing pain rather than creating new discomfort."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "fillings",
    slug: "fillings-and-sealants",
    title: "Fillings & Preventive Sealants",
    category: "Restorative",
    patientConcern: "Cavities, food trapping, dark spots, replacing silver fillings",
    shortDesc: "Invisible tooth-colored composite restorations and preventive fissure sealants to halt cavities permanently.",
    duration: "Single Visit • 30–45 mins",
    suitableFor: "Mild to moderate dental decay, replacing worn amalgam fillings, deep molar grooves in children and adults",
    iconName: "CheckCircle",
    fullDesc: "Tooth-colored composite resins bond directly to natural enamel and dentin, restoring strength and appearance with zero unsightly metal. Deep grooves in molars are protected with resin sealants before cavities can start.",
    process: [
      "Micro-conservative removal of decayed tooth structure",
      "Conditioning and adhesive bonding agent applied to enamel margins",
      "Layer-by-layer placement of shade-matched composite resin",
      "High-intensity curing light activation followed by bite polishing"
    ],
    clinicalHighlights: [
      "Blends invisibly with your surrounding natural tooth shade",
      "Mercury-free and metal-free biocompatible materials",
      "Preserves more natural tooth structure than old silver fillings",
      "Fissure sealants protect children's molars from cavity risk"
    ],
    reasonsForAssessment: [
      "Dark spots, holes, or visible discoloration on chewing surfaces",
      "Food constantly getting caught between two adjacent teeth",
      "Mild sensitivity when eating sweet, hot, or cold foods",
      "Deep grooves on molars prone to plaque accumulation"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Gentle Decontamination",
        detail: "Decayed tooth material is carefully cleared under isolation, preserving maximum healthy dentin."
      },
      {
        step: "02",
        title: "Adhesive Resin Priming",
        detail: "Micro-mechanical bonding agents are applied to create a hermetic seal against future bacteria."
      },
      {
        step: "03",
        title: "Sculpting Natural Anatomy",
        detail: "Composite resin is sculpted to recreate natural molar cusps and chewing grooves."
      },
      {
        step: "04",
        title: "Occlusal Bite Calibration",
        detail: "Checking bite alignment with articulating paper ensures smooth, comfortable chewing."
      }
    ],
    questionsToAsk: [
      "Which filling material is best for this tooth?",
      "How long can I expect a composite filling to last?",
      "Are fissure sealants recommended for my child?",
      "Can I eat immediately after the filling is placed?"
    ],
    aftercare: [
      "Composite fillings cure immediately under blue light; you can eat once local anesthesia wears off.",
      "Avoid biting hard ice cubes or nuts with restored edges.",
      "Floss daily between teeth to keep filling margins clean.",
      "Attend regular 6-month checkups to check filling integrity."
    ],
    procedureFaqs: [
      {
        q: "Why should I replace my old black amalgam fillings?",
        a: "Old silver fillings can develop micro-cracks over time, allowing recurrent decay underneath. Tooth-colored composite fillings bond directly to the tooth, strengthening the cusps."
      },
      {
        q: "What is a dental fissure sealant?",
        a: "A sealant is a clear or white protective resin coating painted onto the deep grooves of back molars to block food and plaque from starting cavities."
      }
    ],
    featured: false,
    needsClinicConfirmation: false,
  },
  {
    id: "mouthguards",
    slug: "mouth-guards",
    title: "Custom Mouth Guards & Night Guards",
    category: "Preventive",
    patientConcern: "Teeth grinding, morning jaw soreness, sports protection",
    shortDesc: "Precision-molded comfortable night guards and sports mouthguards preventing enamel wear and TMJ strain.",
    duration: "2 Quick Visits (Impression + Delivery)",
    suitableFor: "Nocturnal bruxism (teeth grinding), jaw soreness, cracked tooth prevention, impact sports",
    iconName: "ShieldCheck",
    fullDesc: "Unconscious nocturnal teeth grinding (bruxism) exerts tremendous pressure, leading to worn enamel, fractured cusps, and morning headaches. Our custom-fabricated night guards cushion your bite and protect facial muscles.",
    process: [
      "Precise digital or anatomical impressions of your dental arches",
      "Custom vacuum fabrication using durable medical-grade biocompatible polymer",
      "Chairside trial to balance contact points and ensure natural breathing",
      "Guidance on daily maintenance and cleaning"
    ],
    clinicalHighlights: [
      "Protects natural enamel and ceramic restorations from severe wear",
      "Relieves morning jaw joint (TMJ) stiffness and tension headaches",
      "Slim, custom fit allowing effortless breathing and swallowing",
      "Heavy-duty sports mouthguards designed for athletes"
    ],
    reasonsForAssessment: [
      "Waking up with sore jaw muscles, ear tightness, or dull headaches",
      "Noticeable flattened, worn, or chipped edges on front teeth",
      "Partner reporting loud teeth grinding sounds during the night",
      "Participation in martial arts, football, basketball, or contact sports"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Bite Analysis & Impression",
        detail: "Evaluating tooth wear patterns and taking high-precision impressions of your upper and lower arches."
      },
      {
        step: "02",
        title: "Laboratory Polymer Fabrication",
        detail: "Medical-grade dual-laminate material is pressure-molded for optimal shock absorption and comfort."
      },
      {
        step: "03",
        title: "Custom Fit & Occlusal Balancing",
        detail: "Refining contacts so all teeth meet evenly without straining the temporomandibular joint (TMJ)."
      },
      {
        step: "04",
        title: "Wear & Care Routine",
        detail: "Clear guidelines on nighttime insertion, daytime storage, and hygiene cleaning."
      }
    ],
    questionsToAsk: [
      "Should I wear the night guard on my upper or lower teeth?",
      "Will the night guard feel bulky or affect my sleep?",
      "How often will the mouth guard need replacement?",
      "How do I clean and sanitize my guard daily?"
    ],
    aftercare: [
      "Rinse your night guard with cold water and gentle antibacterial soap after each use.",
      "Store it in its ventilated protective case during the day.",
      "Do not use hot or boiling water, which can warp the custom-molded polymer.",
      "Bring your night guard to your 6-month checkups so the doctor can inspect wear patterns."
    ],
    procedureFaqs: [
      {
        q: "Why are custom night guards better than store-bought ones?",
        a: "Store-bought 'boil and bite' guards are bulky, shift easily, and can alter your bite negatively. Custom-made clinical guards fit snugly, cushion teeth precisely, and allow easy breathing."
      },
      {
        q: "How long does a custom night guard last?",
        a: "Depending on your grinding intensity, a high-quality clinical guard typically lasts 2 to 5 years."
      }
    ],
    featured: false,
    needsClinicConfirmation: false,
  },
  {
    id: "implants",
    slug: "dental-implants",
    title: "Dental Implants & Fixed Teeth",
    category: "Restorative",
    patientConcern: "Missing teeth, loose dentures, difficulty chewing food",
    shortDesc: "Permanent, medical-grade titanium foundations that restore full chewing power and natural smile aesthetics.",
    duration: "Planned over 2–4 months",
    suitableFor: "Single or multiple missing teeth, failing bridge, loose dentures",
    iconName: "Target",
    fullDesc: "Dental implants fuse directly with your jawbone through osseointegration, preventing bone loss and facial collapse. Unlike bridges, implants preserve adjacent healthy natural teeth without grinding them down.",
    process: [
      "High-resolution 3D CBCT bone density scan & computer-guided planning",
      "Gentle placement of medical-grade titanium fixture under local anesthesia",
      "Osseointegration healing phase (8–12 weeks) forming a solid biological anchor",
      "Digital impression & cementation of custom-milled ceramic crown"
    ],
    clinicalHighlights: [
      "Self-standing anchor: zero damage to adjacent healthy teeth",
      "Restores natural biting force for all food types",
      "Stimulates jawbone retention and prevents sunken facial contours",
      "Built for decades of durability with regular dental hygiene"
    ],
    reasonsForAssessment: [
      "Single or multiple missing teeth causing adjacent teeth to tilt",
      "Difficulty chewing nuts, meats, or fibrous foods comfortably",
      "Loose or unstable removable partial dentures causing gum soreness",
      "Failing old dental bridge with recurrent decay under support teeth"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "3D CBCT Bone Volume Mapping",
        detail: "Digital diagnostic scans evaluate bone density and nerve paths for safe, computer-guided placement."
      },
      {
        step: "02",
        title: "Minimally Invasive Placement",
        detail: "A medical-grade titanium fixture is inserted into the jawbone using gentle local anesthesia."
      },
      {
        step: "03",
        title: "Biological Osseointegration",
        detail: "Over 8 to 12 weeks, bone cells fuse directly with the titanium surface to form a permanent root anchor."
      },
      {
        step: "04",
        title: "Custom Ceramic Crown Bonding",
        detail: "A custom abutment and shade-matched ceramic crown restore complete chewing function."
      }
    ],
    questionsToAsk: [
      "Do I have sufficient bone volume for a dental implant?",
      "What is the expected timeline from placement to permanent crown?",
      "How do I clean and floss around my dental implant?",
      "What happens if I delay replacing a missing tooth?"
    ],
    aftercare: [
      "Eat a cool, soft diet for the first 48 hours following fixture placement.",
      "Avoid vigorous spitting or smoking to protect the surgical site.",
      "Start warm salt water rinses 24 hours post-procedure.",
      "Clean around your implant crown daily using dental floss or a water flosser once healed."
    ],
    procedureFaqs: [
      {
        q: "Is dental implant placement painful?",
        a: "The procedure is carried out with thorough local anesthesia. Most patients report feeling only mild vibration and take standard analgesics for a day or two."
      },
      {
        q: "Can older adults get dental implants?",
        a: "Yes. General systemic health and sufficient jawbone density are the key factors rather than age."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  }
];

export const PATIENT_JOURNEY: PatientJourneyStep[] = [
  {
    number: "01",
    title: "Unhurried Consultation & Listening",
    summary: "Your appointment begins with a focused conversation in a calm, private room.",
    detail: "We listen to your concerns, past dental experiences, and aesthetic goals. We never rush you into a chair or start treatments without thoroughly understanding your perspective."
  },
  {
    number: "02",
    title: "Digital Diagnostics & Visual Clarity",
    summary: "We examine your teeth using low-radiation digital radiography and intraoral cameras.",
    detail: "You see exactly what we see on a high-definition monitor. We point out healthy areas, explain underlying causes of pain or wear, and answer every question before discussing solutions."
  },
  {
    number: "03",
    title: "Transparent, Collaborative Plan",
    summary: "Together, we agree on a practical treatment pathway with honest timelines and costs.",
    detail: "You receive an itemized treatment outline. We distinguish between urgent biological needs (like relieving active infection) and elective aesthetic options, putting you in total control."
  },
  {
    number: "04",
    title: "Gentle Care & Dedicated Follow-Up",
    summary: "Every clinical procedure is buffered with proven comfort protocols and paced breaks.",
    detail: "From topical pre-numbing to comfortable hand signals, treatment progresses at your pace. We follow up after procedures to ensure smooth healing and long-term oral stability."
  }
];

export const STERILIZATION_STANDARDS: SterilizationStandard[] = [
  {
    step: "01",
    title: "Ultrasonic Enzymatic Cleaning",
    description: "Instruments undergo multi-frequency ultrasonic bath cavitation to remove micro-debris prior to autoclaving.",
  },
  {
    step: "02",
    title: "Hermetic Medical Pouching",
    description: "Every tool is sealed in individual surgical pouches with multi-variable chemical indicator strips verifying sterile penetration.",
  },
  {
    step: "03",
    title: "Class-B Fractionated Vacuum Autoclave",
    description: "Medical autoclave cycles operate at 134°C under high vacuum bar pressure, destroying all viral, bacterial, and spore pathogens.",
  },
  {
    step: "04",
    title: "UV Germicidal Storage Cabinet",
    description: "Sterile instrument pouches are preserved in ultraviolet irradiated chambers until opened directly in front of the patient.",
  },
  {
    step: "05",
    title: "Operatory Surface Barrier Disinfection",
    description: "Chairs, light handles, and hoses undergo medical-grade virucidal disinfection and fresh barrier wraps between every single patient.",
  },
  {
    step: "06",
    title: "Strict 100% Single-Use Disposables",
    description: "Examination gloves, suction tips, patient bibs, cups, needles, and cartridges are strictly single-use and medically incinerated.",
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Pooja Shah",
    locality: "I.C. Colony, Borivali West",
    treatmentTag: "Teeth Whitening",
    rating: 5,
    text: "Visited Dr Harshada's clinic for professional teeth whitening and cleaning. The difference was remarkable and the entire procedure was completely pain-free. Very hygienic and clean clinic in I.C. Colony.",
    date: "Verified Google Review",
    source: "Google Local Review",
    needsClinicConfirmation: false,
  },
  {
    id: "rev-2",
    author: "Kunal Mehta",
    locality: "Borivali West, Mumbai",
    treatmentTag: "Fillings & Night Guard",
    rating: 5,
    text: "Dr. Harshada is exceptionally gentle. Had composite fillings and a custom night guard made for my teeth grinding. She explained everything clearly with transparent charges. Highly recommended for families.",
    date: "Verified Google Review",
    source: "Google Local Review",
    needsClinicConfirmation: false,
  },
  {
    id: "rev-3",
    author: "Sneha D'Souza",
    locality: "Holy Cross Road, Borivali",
    treatmentTag: "Dental Implants",
    rating: 5,
    text: "Replaced a missing lower molar with a dental implant. From the initial 3D X-ray consultation to final crown placement, the process was seamless and painless. Chewing is completely normal again.",
    date: "Verified Google Review",
    source: "Google Local Review",
    needsClinicConfirmation: false,
  },
  {
    id: "rev-4",
    author: "Amit Parekh",
    locality: "Shimpoli, Borivali West",
    treatmentTag: "Emergency Care",
    rating: 5,
    text: "Went for emergency toothache treatment on a Sunday evening. Dr. Harshada provided immediate pain relief. Open all 7 days until 9:30 PM, which is a huge blessing for working professionals.",
    date: "Verified Google Review",
    source: "Google Local Review",
    needsClinicConfirmation: false,
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Procedures & Whitening",
    q: "Does Zoom teeth whitening cause tooth sensitivity?",
    a: "Some patients experience mild, temporary sensitivity for 24 hours following whitening. We apply desensitizing minerals and recommend anti-sensitivity toothpaste to ensure comfortable recovery."
  },
  {
    category: "Appointments & Emergencies",
    q: "Do you accept walk-in emergency dental patients in Borivali West?",
    a: "Yes. If you have severe dental pain, a broken tooth, or facial swelling, please call or WhatsApp us (+91 85918 42595). We prioritize acute pain cases daily with extended hours until 9:30 PM."
  },
  {
    category: "Location & Transit",
    q: "How do I reach the clinic from Borivali Station or Link Road?",
    a: "We are located at Shop No. 4, Rosemar CHS, Holy Cross Road, near HDFC Bank in I.C. Colony, Borivali West. We are approximately 7 to 10 minutes from Borivali Station (West) by auto-rickshaw or taxi."
  },
  {
    category: "Procedures & Restorations",
    q: "Why should I choose tooth-colored composite fillings over silver amalgams?",
    a: "Composite resins bond directly to natural tooth enamel, restoring chewing strength while blending seamlessly with your natural tooth shade with zero toxic metals."
  },
  {
    category: "Billing & Insurance",
    q: "What payment methods are supported at Dr Harshada's Dental Clinic?",
    a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash. Itemized diagnostic invoices and clinical summaries are provided for insurance reimbursement."
  },
  {
    category: "Comfort & Pacing",
    q: "I have dental anxiety. How does Dr. Harshada ensure a comfortable visit?",
    a: "We practice comfort-first dentistry. We apply topical numbing gel before any localized injection, pace procedures with periodic rests, and give you full control with an agreed hand signal to pause whenever needed."
  }
];
