import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Quote, Linkedin } from 'lucide-react';

const items = [
  {
    quote:
      'Gained critical insights on renewable energy and storage solutions. A truly insightful session from a leader in the field.',
    name: 'Annete Githinji',
    meta: 'Business Development & Fleet Consultant',
    linkedin: 'https://www.linkedin.com/in/annete-githinji-040b411a2',
    rating: 5,
  },
  {
    quote:
      'An inspiring and transformative deep-dive into the entire renewable energy landscape. It significantly expanded my technical understanding.',
    name: 'Calvince Omiti, MIEK, MIEEE',
    meta: 'Graduate Electrical & Electronics Engineer',
    linkedin: 'https://www.linkedin.com/in/calvince-omiti-3123461a3/',
    rating: 5,
  },
  {
    quote:
      'Provided valuable insights into integrating diverse renewable technologies to build a sustainable energy future.',
    name: 'Engr. Danjuma, Kassam Henry',
    meta: 'Electrical Design & Project Engineer', 
    linkedin: 'https://www.linkedin.com/in/engr-danjuma-kassam-henry-coren%C2%AE-nemsa%C2%AE-mnieee-9b6128a6/',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="What People Say"
          subtitle="Trusted by professionals and organizations across the energy sector"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {items.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-emerald-600 w-10 h-10" strokeWidth={1.5} />
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                {t.quote}
              </p>
              
              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 text-base">{t.name}</div>
                    <div className="text-emerald-600 text-sm mt-1 font-medium">{t.meta}</div>
                  </div>
                  {t.linkedin && (
                    <a 
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-slate-400 hover:text-blue-600 transition-colors flex-shrink-0"
                      aria-label={`${t.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}