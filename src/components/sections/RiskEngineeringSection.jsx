import React from 'react';
import { Shield, Search, ClipboardCheck, FileText, Building2, HardHat, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RISK_SERVICES } from '../../utils/constants';
import riskBg from '../../assests/risk_assesnt.webp';

const services = [
  {
    icon: Search,
    title: 'Site Surveys',
    description: 'Comprehensive on-site risk assessments of power plants, industrial facilities, and infrastructure projects to identify hazards and evaluate existing controls.'
  },
  {
    icon: ClipboardCheck,
    title: 'Mining Assessments',
    description: 'Specialised risk evaluation for mining operations covering equipment, ground stability, processing facilities, and operational safety protocols.'
  },
  {
    icon: Building2,
    title: 'Property Inspections',
    description: 'Detailed commercial and industrial property inspections for insurance underwriting, loss prevention, and asset integrity management.'
  },
  {
    icon: HardHat,
    title: 'Oil & Gas Evaluations',
    description: 'Risk assessment across upstream, midstream, and downstream operations including refineries, pipelines, storage terminals, and processing facilities.'
  }
];

const process = [
  {
    step: '01',
    title: 'Scoping',
    description: 'Define the scope, objectives, and key risk areas specific to your facility and operational context.'
  },
  {
    step: '02',
    title: 'Site Assessment',
    description: 'On-site inspection and data collection by experienced risk engineers using industry-standard methodologies.'
  },
  {
    step: '03',
    title: 'Analysis',
    description: 'Quantitative and qualitative risk analysis including PML/EML estimation, hazard identification, and vulnerability assessment.'
  },
  {
    step: '04',
    title: 'Reporting',
    description: 'Clear, actionable reports with prioritised recommendations, risk ratings, and mitigation strategies tailored to your needs.'
  }
];

const RiskEngineeringSection = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={riskBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Risk Engineering
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Expert risk assessment and loss prevention services for the power generation, mining, oil & gas, and industrial sectors across Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">What We Offer</h2>
              <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Our certified risk engineers bring decades of operational and insurance industry experience to every engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {services.map((service, idx) => (
                <div key={idx} className="group flex gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-100 transition-colors">
                    <service.icon size={22} className="text-slate-600 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Approach</h2>
              <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                A structured, methodical process that delivers clear outcomes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full">
                    <span className="text-4xl font-bold text-slate-200 block mb-4">{item.step}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 text-slate-300">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need a Risk Assessment?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Our team is ready to help you identify, assess, and mitigate risks across your energy and industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+254793041411"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-900 hover:text-slate-900 transition-all"
              >
                <Phone size={18} />
                +254 793 041 411
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskEngineeringSection;
