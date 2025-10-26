import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import { ServiceCard } from '../ui/Card';
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Our Services"
          subtitle="Comprehensive solutions for power generation, renewable energy, and risk management"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <a href={service.link} className="group block">
                <div className="bg-white p-10 rounded-3xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all transform hover:-translate-y-3">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <service.icon className="text-white" size={36} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-kenya-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* CTA Link */}
                  <span className="text-kenya-green font-semibold flex items-center group-hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
            {/* <link to="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700 group"> */}
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-kenya-red hover:text-kenya-red-dark group"
          >
            Need a custom solution? Let's talk
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </a>
          {/* </link> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;