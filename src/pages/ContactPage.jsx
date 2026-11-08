import React from 'react';
import ContactSection from '../components/sections/ContactSection';

import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact Kenstane Energy for expert solar installations, training course registration, or energy risk consultancy in Nairobi, Kenya."
      />
      <ContactSection />
    </>
  );
}