import React from 'react';
import { LocationHub } from '../components/LocationHub';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>Location & Contact</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight">
            Visiting Dr Harshada's Dental Clinic, Borivali West
          </h1>
          <p className="text-text-muted text-base leading-relaxed">
            Located at Shop No. 4, Ground Floor, Rosemar CHS, Holy Cross Road, near HDFC Bank, I.C. Colony, Borivali West, Mumbai 400103. Easily accessible from Borivali, Dahisar, Kandivali, and across North Mumbai.
          </p>
        </div>

        {/* Location Hub Component */}
        <LocationHub />

      </div>
    </div>
  );
};
