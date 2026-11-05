import React from 'react';
import SEO from '../components/SEO';
import SectorsSection from '../components/sections/SectorsSection';

export default function SectorsPage() {
  return (
    <>
      <SEO 
        title="Sectors We Serve" 
        description="We provide energy solutions across diverse sectors including Agriculture, Health, Hospitality, Education, and Commercial Real Estate in Kenya."
      />
      <SectorsSection />
    </>
  );
}