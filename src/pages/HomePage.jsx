import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ServicesSection /> */}
      {/* <CaseStudiesSection /> */}
      <TestimonialsSection />
    </>
  );
}