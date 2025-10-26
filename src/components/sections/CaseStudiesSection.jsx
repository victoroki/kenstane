import React from 'react';
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, Target, Users, Lightbulb, Rocket } from 'lucide-react';
import { CASE_STUDIES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const CaseStudiesSection = () => {
  // Icon mapping for different case study types
  const getStudyIcon = (index, tags) => {
    const icons = [
      <Zap className="text-white" size={48} />,
      <Shield className="text-white" size={48} />,
      <BarChart3 className="text-white" size={48} />,
      <Target className="text-white" size={48} />,
      <Users className="text-white" size={48} />,
      <Lightbulb className="text-white" size={48} />,
      <Rocket className="text-white" size={48} />,
    ];
    
    // Use tags to determine appropriate icon
    if (tags.some(tag => tag.toLowerCase().includes('safety'))) return <Shield className="text-white" size={48} />;
    if (tags.some(tag => tag.toLowerCase().includes('efficiency'))) return <Zap className="text-white" size={48} />;
    if (tags.some(tag => tag.toLowerCase().includes('growth'))) return <TrendingUp className="text-white" size={48} />;
    
    return icons[index % icons.length];
  };

  // Kenyan flag theme gradients
  const gradients = [
    'from-kenya-green to-kenya-green-light',
    'from-kenya-red to-kenya-red-light',
    'from-kenya-black to-slate-700',
    'from-kenya-green-dark to-kenya-green',
    'from-kenya-red-dark to-kenya-red',
    'from-slate-800 to-kenya-black',
    'from-kenya-green to-kenya-red',
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Success Stories"
          subtitle="Transformative results and measurable impact across the energy sector"
          centered
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {CASE_STUDIES.map((study, idx) => {
              const gradient = gradients[idx % gradients.length];
              const icon = getStudyIcon(idx, study.tags);
              
              return (
                <div 
                  key={idx} 
                  className="group bg-white rounded-2xl overflow-hidden border border-kenya-green hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Elegant Header with Icon */}
                  <div className={`bg-gradient-to-br ${gradient} h-40 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                      {icon}
                    </div>
                    {/* Floating accent */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx} 
                          className="text-xs font-medium px-3 py-1 rounded-full border border-kenya-green text-kenya-green bg-green-50 hover:border-kenya-green-light transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Client */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-kenya-green transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 font-medium">{study.client}</p>
                    
                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-3">
                      {study.description}
                    </p>

                    {/* Outcome Highlight */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-kenya-green rounded-xl p-4 mb-6 group-hover:border-kenya-green-light transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-100">
                          <TrendingUp className="text-kenya-green" size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-kenya-green mb-1 uppercase tracking-wide">
                            Key Achievement
                          </div>
                          <p className="text-sm text-slate-700 font-medium">{study.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-kenya-green text-kenya-green font-semibold rounded-xl hover:border-kenya-green-light hover:bg-green-50 hover:text-kenya-green-dark transition-all duration-300 group/btn">
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-12 rounded-2xl border border-kenya-green relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-kenya-green rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-kenya-red rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
                Join our growing list of satisfied clients and experience the Kenstane difference.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-kenya-green to-kenya-green-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 hover:gap-4"
              >
                <Rocket size={20} />
                Start Your Journey
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;