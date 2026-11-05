import React from 'react';
import RiskEngineeringSection from '../components/sections/RiskEngineeringSection';
import SEO from '../components/SEO';

export default function RiskEngineeringPage() {
  return (
    <>
      <SEO 
        title="Risk Engineering" 
        description="Professional risk engineering services for the power and energy sector. Specialized audits, safety assessments, and loss prevention."
      />
      <RiskEngineeringSection />
    </>
  );
}