import React from 'react';
import { Eye, Target, Shield, Handshake, Award } from 'lucide-react';
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
              Kenstane Energy Ltd aims to be Africa's premium power generation training and consultancy partner, bridging critical skills gaps with industry-driven programs and risk engineering expertise.
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
                  <p className="text-slate-600">Upscale and rescale industry-driven training that fuses technical mastery, risk engineering, and innovation to eliminate academic to workplace readiness gaps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Core Values</h3>
            <div className="grid grid-cols-2 gap-6">
              {CORE_VALUES.map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl border-2 border-slate-100"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">{value.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Values removed: all values now aligned in single grid */}
                <div className="mt-20 max-w-4xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-slate-50 to-white p-10 rounded-3xl border-2 border-slate-100">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      Trusted by Industry Leaders
                    </h3>
                    <p className="text-lg text-slate-600 mb-8">
                      We are planning to partner with operators, managers, insurance firms, and loss adjusters across East Africa to deliver excellence in training and risk engineering services.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {[
                        { label: "Trust", icon: Shield, color: "from-emerald-500 to-teal-500" },
                        { label: "Partnership", icon: Handshake, color: "from-blue-500 to-indigo-500" },
                        { label: "Leadership", icon: Award, color: "from-amber-500 to-orange-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                            <item.icon className="text-white" size={28} />
                          </div>
                          <div className="text-sm md:text-base text-slate-700 font-semibold">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
      </div>
    </section>
  );
};

export default AboutSection;