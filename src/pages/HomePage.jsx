import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import FeaturedCourseSection from '../components/sections/FeaturedCourseSection';
import MembershipSection from '../components/sections/MembershipSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Solar & Renewable Energy Solutions Kenya" 
        description="Kenstane Energy provides expert solar installations, renewable energy training, and risk engineering consultancy across Kenya and Africa."
      />
      <HeroSection />
      <FeaturedCourseSection />
      <MembershipSection />
      <TestimonialsSection />
    </>
  );
}