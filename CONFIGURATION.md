# DR HARSHADA'S DENTAL CLINIC — CONFIGURATION GUIDE (`CONFIGURATION.md`)

This guide explains how to customize and maintain the Dr Harshada's Dental Clinic web codebase, configure backend integrations, and manage environment settings.

---

## 1. Centralized Clinic Configuration (`src/data/clinicData.ts`)

All clinical text, doctor credentials, operating hours, telephone numbers, and treatment data are centralized in a single TypeScript configuration file: `src/data/clinicData.ts`.

### Modifying Contact Information:
```typescript
export const CLINIC_INFO = {
  name: "Dr Harshada's Dental Clinic",
  tagline: "Gentle, Comprehensive Dental Care in Borivali West",
  phone: "+91 85918 42595",
  phoneRaw: "+918591842595",
  whatsappUrl: "https://wa.me/918591842595?text=...",
  email: "drharshada.dental@gmail.com",
  hours: "Mon – Sun: 9:00 AM – 9:30 PM",
  verifiedRating: "4.9 / 5.0 (159+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Dr+Harshadas+Dental+Clinic+Borivali+West",
  googleMapsEmbed: "https://maps.google.com/maps?q=Rosemar+CHS+Holy+Cross+Road+IC+Colony+Borivali+West+Mumbai+400103&t=&z=16&ie=UTF8&iwloc=&output=embed",
};
```

### Adding or Updating Treatments:
To add or modify treatments, edit the `TREATMENTS` array conforming to the `Treatment` interface in `src/data/clinicData.ts`.

---

## 2. Design System Tokens (`tailwind.config.js`)

The visual design system is driven by Tailwind CSS tokens configured in `tailwind.config.js`:

| Token Name | Color Hex | Psychological Purpose |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological enamel tone eliminating clinical sterility |
| `surface` | `#FFFFFF` | Crisp white cards, dialogs, and navigation background |
| `copper.500` | `#C28C6B` | Restrained Mediterranean earthen warmth |
| `border-subtle` | `#E7E3DA` | Precision editorial separation borders |

---

## 3. Deployment Configuration

Configured for single-page application routing on Vercel via `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
