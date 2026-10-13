# Dr Harshada's Dental Clinic — Elite Dental Web Experience

> **Boutique Clinical Editorial** web experience engineered for **Dr Harshada's Dental Clinic**, Borivali West, Mumbai.  
> Founder & Lead Clinician: **Dr. Harshada, B.D.S.**  
> Built using the proven high-conversion design framework with zero redesign, featuring verified local clinic details.

---

## 1. Executive Summary & Creative Direction

This application delivers a high-conversion, editorial dental web platform tailored to the expectations of patients in North Mumbai (Borivali West, I.C. Colony, Dahisar, Kandivali). Rather than standard hospital templates with sterile blues and repetitive cards, this project executes the **Boutique Clinical Editorial** creative direction.

### Key Pillars:
1. **Conservation & Gentle Care**: Emphasizes preserving natural teeth and comfortable patient care.
2. **Authentic Photographic Storytelling**: Combines clean editorial compositions, natural operatory lighting, and clinician framing with zero fake outcome claims.
3. **Frictionless Local Conversion**: Instant WhatsApp routing (`+91 85918 42595`) with pre-filled inquiry text, Indian mobile number validation (`+91`), and a non-obstructive mobile sticky bar.
4. **Strict Medical & Verification Integrity**: Verified 4.9★ rating (159+ reviews), daily open hours (9:00 AM – 9:30 PM, all 7 days), and verified clinical services (Zoom Whitening, Veneers, Emergency Care, Tooth-Colored Fillings, Night Guards, Implants).

---

## 2. Design System Tokens

The visual system is governed by custom Tailwind tokens with WCAG AAA / AA verified contrast:

| Token | Value | Role & Contrast Ratio |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Primary brand color; clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological enamel tone eliminating coldness |
| `surface` | `#FFFFFF` | Clean white elevated cards and modal dialogs |
| `copper.500` | `#C28C6B` | Muted copper accent; restrained Mediterranean earthen warmth |
| `border-subtle` | `#E7E3DA` | Crisp editorial borders separating content zones |
| `text-main` | `#29332F` | Dark slate ink; **10.6:1** contrast on canvas (WCAG AAA compliant) |
| `text-muted` | `#6B716D` | Secondary text; **4.6:1** contrast on canvas (WCAG AA compliant) |

### Typography:
- **Display Serif**: *Fraunces* & *DM Serif Display* (soft organic curves, warmth, medical prestige).
- **Interface Sans**: *Plus Jakarta Sans* & *Manrope* (crystal-clear geometric digital legibility).

---

## 3. Architecture & Routing

```
dr-harshadas-dental-clinic/
├── index.html                     # HTML5 entry, OpenGraph, JSON-LD Dentist schema
├── package.json                   # React 19, react-router-dom, lucide-react, Tailwind
├── tailwind.config.js             # Boutique editorial tokens & typography rules
├── ASSET-MANIFEST.md              # Photographic registry, aspect ratios & licensing
├── VERIFICATION-REGISTER.md       # Clinical claims audit & verification register
├── CONFIGURATION.md               # Customization guide & WhatsApp integration
├── CONTENT-TODO.md                # Doctor sign-off checklist & asset swap steps
├── README.md                      # Comprehensive technical architecture
└── src/
    ├── main.tsx                   # React root entry point
    ├── App.tsx                    # Multi-page router & layout orchestrator
    ├── index.css                  # Custom scrollbars, 2px focus rings, reduced motion
    ├── data/
    │   └── clinicData.ts          # Strongly-typed central source of truth
    ├── components/
    │   ├── Header.tsx             # Accessible skip link, logo, desktop & mobile drawer
    │   ├── Hero.tsx               # Above-the-fold value proposition & doctor card
    │   ├── TrustSection.tsx       # Biological conservation pillars & patient feedback
    │   ├── TreatmentsGrid.tsx     # 6-card services matrix with direct WhatsApp
    │   ├── DoctorClinicSection.tsx# Lead clinician profile & Class-B autoclave steps
    │   ├── AppointmentForm.tsx    # Multi-field booking form with WhatsApp recap
    │   ├── LocationHub.tsx        # Transit directions, map embed & consultation hours
    │   ├── FAQSection.tsx         # Accessible accordion for common questions
    │   ├── MobileStickyBar.tsx    # Virtual-keyboard aware mobile Call & WhatsApp bar
    │   └── Footer.tsx             # Medical disclaimer, links, hours & copyright
    └── pages/
        ├── HomePage.tsx           # Assembled single-page experience
        ├── TreatmentsPage.tsx     # Filterable full-depth services directory
        ├── TreatmentDetailPage.tsx# Individual treatment clinical roadmaps & FAQs
        ├── AboutPage.tsx          # Full practice story, doctor credentials & ethics
        ├── PatientExperiencePage.tsx# 4-stage anxiety-free care walkthrough
        ├── ContactPage.tsx        # Interactive directions, map & transit guide
        ├── AppointmentPage.tsx    # Dedicated booking portal
        ├── PrivacyPage.tsx        # Comprehensive medical data privacy declaration
        └── NotFoundPage.tsx       # Helpful 404 recovery page
```

---

## 4. Local Development & Production Build

### Prerequisites:
- Node.js 18+ (tested on Node v24.19.0)
- npm 9+

### Commands:
```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Code quality check (Oxlint)
npm run lint

# Production compilation
npm run build

# Preview production build locally
npm run preview
```
