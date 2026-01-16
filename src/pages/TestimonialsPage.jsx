import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const testimonials = [
  {
    name: 'Annete Githinji',
    role: 'Business Development & Fleet Consultant',
    company: 'Independent',
    quote:
      'Gained critical insights on renewable energy and storage solutions. A truly insightful session from a leader in the field.',
  },
  {
    name: 'Calvince Omiti, MIEK, MIEEE',
    role: 'Graduate Electrical & Electronics Engineer',
    company: 'Independent',
    quote:
      'An inspiring and transformative deep-dive into the entire renewable energy landscape. It significantly expanded my technical understanding.',
  },
  {
    name: 'Engr. Danjuma, Kassam Henry, COREN®, NEMSA®',
    role: 'Electrical Design & Project Engineer',
    company: 'Independent',
    quote:
      'Provided valuable insights into integrating diverse renewable technologies to build a sustainable energy future.',
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