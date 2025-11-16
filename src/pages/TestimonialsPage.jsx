import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const testimonials = [
  {
    name: 'Amina K.',
    role: 'Graduate Engineer',
    company: 'Nairobi',
    quote:
      'The renewable energy training gave me a practical foundation and confidence to start contributing on real projects.',
  },
  {
    name: 'Joseph M.',
    role: 'Operations Manager',
    company: 'Manufacturing',
    quote:
      'Clear, structured sessions. The risk engineering insights helped us standardize safety audits across sites.',
  },
  {
    name: 'Lydia N.',
    role: 'HSE Lead',
    company: 'Utilities',
    quote:
      'Actionable guidance and relevant examples. Our team left aligned on best practices and responsibilities.',
  },
  {
    name: 'Peter O.',
    role: 'Project Engineer',
    company: 'Energy Projects',
    quote:
      'Great balance between theory and case-based practice. Highly engaging and easy to apply on site.',
  },
  {
    name: 'Ruth W.',
    role: 'Maintenance Supervisor',
    company: 'Industrial Plant',
    quote:
      'Support with thermal imaging helped us diagnose faults faster and reduce downtime.',
  },
  {
    name: 'Daniel K.',
    role: 'Insurance Analyst',
    company: 'Risk & Reinsurance',
    quote:
      'Professional, responsive, and insightful. We look forward to enrolling in the advanced courses.',
  },
];

export default function TestimonialsPage() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Testimonials"
          subtitle="What participants and partners say about our training and risk engineering support"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <Card key={idx} variant="default" className="shadow-lg">
              <div className="flex items-start">
                <div className="text-kenya-green text-4xl leading-none mr-3">“</div>
                <p className="text-slate-700 leading-relaxed">{t.quote}</p>
              </div>
              <div className="mt-6">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-slate-600 text-sm">{t.role} • {t.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}