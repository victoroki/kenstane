import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';

import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Comprehensive energy solutions including solar PV installations, professional training, risk engineering, and specialized project management in Kenya."
      />
      <ServicesSection />
    </>
  );
}