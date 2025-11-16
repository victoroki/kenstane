import React from 'react';
import { SECTORS } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Sectors We Serve"
          subtitle="Partnering with leading organizations across multiple industries"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {SECTORS.map((sector, idx) => (
            <div
              key={idx}
              className="group text-center p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-2 border-slate-100 hover:border-transparent animate-scale-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Icon Container */}
              <div className={`w-24 h-24 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                <sector.icon className="text-white" size={40} />
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-kenya-green transition-colors">
                {sector.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {sector.desc}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-1 bg-gradient-to-r from-kenya-green to-kenya-red mx-auto mt-6 group-hover:w-16 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-50 to-white p-10 rounded-3xl border-2 border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              We are planning to partner with operators, managers, insurance firms, and loss adjusters across East Africa to deliver excellence in training and risk engineering services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Power Plants", value: "25+" },
                { label: "Insurance Firms", value: "15+" },
                { label: "Universities", value: "8+" },
                { label: "Projects", value: "100+" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-kenya-green to-kenya-red bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SectorsSection;