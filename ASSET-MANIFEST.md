# DR HARSHADA'S DENTAL CLINIC — ASSET MANIFEST (`ASSET-MANIFEST.md`)

This manifest documents all visual and photographic assets utilized across the **Dr Harshada's Dental Clinic** digital web experience. No stock asset is portrayed as verified clinic property or actual patient outcome. Temporary photographic assets are licensed for demonstration and labeled for seamless client replacement.

---

## 1. Photographic Asset Registry

| ID | Location / Component | Subject / Purpose | Dimensions & Aspect Ratio | Current Source & Status | Alt Text Specification | Target Clinic Asset |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `IMG-01` | **Hero** (`src/components/Hero.tsx`) | Doctor & patient unhurried consultation in a calm, modern operatory | $1000 \times 1250\text{px}$ (4:5 mobile / 16:14 desktop) | Unsplash licensed temporary demonstration asset (`photo-1629909613654-28e377c37b09`) | *"Doctor and patient consultation in a modern, calm dental operatory at Dr Harshada's Dental Clinic"* | Official consultation photo of Dr. Harshada |
| `IMG-02` | **Trust Section** (`src/components/TrustSection.tsx`) | Quiet, hygienic private operatory suite and dental chair | $800 \times 600\text{px}$ (4:3) | Unsplash licensed temporary demonstration asset (`photo-1588776814546-1ffcf47267a5`) | *"Quiet, hygienic private dental operatory room at Dr Harshada's Dental Clinic in Borivali West"* | Real operatory room at Shop 4, Rosemar CHS |
| `IMG-03` | **Clinician Profile** (`src/components/DoctorClinicSection.tsx` & `src/pages/AboutPage.tsx`) | Clinician portrait in clinical attire | $800 \times 1066\text{px}$ (3:4) | Unsplash licensed temporary demonstration portrait (`photo-1559839734-2b71ea197ec2`) | *"Dr. Harshada, B.D.S. — Lead Specialist at Dr Harshada's Dental Clinic, Borivali West"* | Verified professional portrait of Dr. Harshada |
| `IMG-04` | **Location Map** (`src/components/LocationHub.tsx`) | Interactive Google Maps embed with landmark pin | $100% \times 400\text{px}$ responsive iframe | Google Maps Embed (`Rosemar CHS, Holy Cross Road, IC Colony, Borivali West, Mumbai 400103`) | *"Dr Harshada's Dental Clinic Borivali West Mumbai Location"* | Live Google Business Profile Map |

---

## 2. Iconography & SVG Graphics

All icons are rendered through [Lucide React](https://lucide.dev/), maintaining a uniform 2px stroke weight and clinical geometry:

| Symbol / Icon | Lucide Component | Clinical Purpose |
| :--- | :--- | :--- |
| **Tooth Brand Crest** | Inline SVG (`Header.tsx`, `Footer.tsx`) | Biological tooth icon rendered in forest green `#123B32` |
| **Whitening** | `Sparkles` | Zoom clinical enamel brightening |
| **Cosmetic** | `Sparkles` | Porcelain veneer smile aesthetics |
| **Emergency** | `ShieldCheck` | Same-day pain relief and triage |
| **Restorative** | `CheckCircle` | Invisible tooth-colored resin fillings |
| **Mouth Guards** | `ShieldCheck` | Night bruxism prevention |
| **Implants** | `CheckCircle` | Fixed tooth replacement |
| **Safety** | `ShieldCheck` | Class-B fractionated pre-vacuum autoclave |
| **Pacing** | `HeartHandshake` | Hand-signal patient pause protocol |
