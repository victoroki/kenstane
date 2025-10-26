import React from 'react';
import { Shield, CheckCircle, FileText, Zap, Target } from 'lucide-react';
import { RISK_SERVICES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const RiskEngineeringSection = () => {
  return (
    <section id="risk-engineering" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Risk Engineering Services"
          subtitle="Expert guidance across the project lifecycle supporting energy companies, power plant operators, and institutions with actionable insights and customized solutions"
        />

        <div className="max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {RISK_SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group flex items-start space-x-4 bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-kenya-green hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="text-kenya-green group-hover:scale-110 transition-transform" size={24} />
                </div>
                <span className="text-slate-700 font-medium group-hover:text-kenya-green transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Comprehensive Solutions Highlight */}
          <div className="relative bg-gradient-to-br from-kenya-black via-kenya-red to-kenya-green text-white p-12 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8">Comprehensive Risk Solutions</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  { icon: Shield, title: "Site Surveys", desc: "Comprehensive on-site risk assessments and safety audits" },
                  { icon: FileText, title: "QRA & PML/EML", desc: "Quantitative risk analysis and loss estimation" },
                  { icon: Zap, title: "Thermal Inspection", desc: "Advanced drone-based thermal diagnostics" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="text-center group hover:transform hover:scale-105 transition-all"
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                      <item.icon size={40} />
                    </div>
                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Additional Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Target className="mb-3" size={32} />
                  <h4 className="font-bold text-lg mb-2">Customized Solutions</h4>
                  <p className="text-gray-100 text-sm">Tailored risk engineering services designed specifically for your project requirements and industry standards.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Shield className="mb-3" size={32} />
                  <h4 className="font-bold text-lg mb-2">Insurance Support</h4>
                  <p className="text-gray-100 text-sm">Expert advisory services to support insurance applications, claims, and risk mitigation strategies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Need a Risk Assessment?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our certified risk engineers are ready to help you identify, assess, and mitigate risks in your power generation projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-kenya-red to-kenya-red-dark text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Request a Quote
              </a>
              <a 
                href="#" 
                className="bg-white border-2 border-kenya-green text-kenya-green px-10 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskEngineeringSection;