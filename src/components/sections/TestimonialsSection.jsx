import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const items = [
  {
    quote:
      'Gained critical insights on renewable energy and storage solutions. A truly insightful session from a leader in the field.',
    name: 'Annete Githinji',
    meta: 'Business Development & Fleet Consultant',
  },
  {
    quote:
      'An inspiring and transformative deep-dive into the entire renewable energy landscape. It significantly expanded my technical understanding.',
    name: 'Calvince Omiti, MIEK, MIEEE',
    meta: 'Graduate Electrical & Electronics Engineer',
  },
  {
    quote:
      'Provided valuable insights into integrating diverse renewable technologies to build a sustainable energy future.',
    name: 'Engr. Danjuma, Kassam Henry,',
    meta: 'Electrical Design & Project Engineer',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="What People Say"
          subtitle="Three recent testimonials from participants and partners"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((t, idx) => (
            <Card key={idx} variant="default" className="shadow-lg">
              <div className="flex items-start">
                <div className="text-kenya-green text-4xl leading-none mr-3">“</div>
                <p className="text-slate-700 leading-relaxed">{t.quote}</p>
              </div>
              <div className="mt-6">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-slate-600 text-sm">{t.meta}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}