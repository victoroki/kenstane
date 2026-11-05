import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../components/sections/AboutSection';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Kenstane Energy Ltd, our mission to bridge skills gaps in Africa's power sector, and our leadership in energy consultancy."
      />
      <AboutSection />
    </>
  );
}