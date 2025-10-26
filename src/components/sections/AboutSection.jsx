import React from 'react';
import { Eye, Target } from 'lucide-react';
import { CORE_VALUES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="About Kenstane Energy"
          subtitle="Transforming Africa's energy landscape through excellence in training and risk engineering"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-4xl font-bold text-slate-900">Transforming Africa's Energy Future</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kenstane Energy Ltd is Kenya's premier professional training and consultancy firm dedicated to bridging critical skills gaps in the power generation sector. We specialize in upskilling professionals across renewable energy technologies and risk engineering.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aligned with Kenya's Vision 2030 and global climate goals, we equip graduates and professionals with technical expertise, project management rigor, and risk mitigation strategies for sustainable energy projects.
            </p>
            
            {/* Vision & Mission Cards */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-kenya-green hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-kenya-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Vision</h4>
                  <p className="text-slate-600">Fostering a skilled workforce capable of driving sustainable power solutions across Africa and beyond.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-kenya-red-light hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-kenya-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Mission</h4>
                  <p className="text-slate-600">Delivering industry-driven training combining technical mastery, risk engineering, and innovation to bridge academic and workplace readiness gaps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {CORE_VALUES.slice(0, 4).map((value, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Values */}
        {CORE_VALUES.length > 4 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CORE_VALUES.slice(4).map((value, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;