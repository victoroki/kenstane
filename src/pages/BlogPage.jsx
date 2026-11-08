import React from 'react';
import BlogSection from '../components/sections/BlogSection';
import SEO from '../components/SEO';

export default function BlogPage() {
  return (
    <>
      <SEO 
        title="Energy Insights Blog" 
        description="Stay updated with the latest trends and insights in Africa's energy sector, including solar power, risk engineering, and professional training."
      />
      <BlogSection />
    </>
  );
}