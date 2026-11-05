import React from 'react';
import SEO from '../components/SEO';
import TrainingSection from '../components/sections/TrainingSection';

export default function TrainingPage() {
  return (
    <>
      <SEO 
        title="Training Programs" 
        description="Advance your career with Kenstane Energy's professional training programs in solar installation, power systems, and energy management."
      />
      <TrainingSection />
    </>
  );
}