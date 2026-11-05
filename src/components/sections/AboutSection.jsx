import React from 'react';
import { Eye, Target, Shield, Handshake, Award, Linkedin } from 'lucide-react';
import { CORE_VALUES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import ParvezImg from '../../assests/team/Parvez.png';
import DaltonImg from '../../assests/team/Dalton.png';
import DorisImg from '../../assests/team/Doris.png';

const TEAM = [
  {
    name: 'Parvez Butt',
    title: 'Senior Power Generation Risk Engineer',
    bio:
      "A highly seasoned Senior Risk Engineer with over 35 years of comprehensive experience in the power generation sector. Parvez has hands-on expertise in the development, design, and commissioning of diverse power plants globally. He specializes in conducting insurance risk surveys for all types of generation facilities, from conventional thermal to cutting-edge renewable plants.",
    img: ParvezImg,
    linkedin: 'https://www.linkedin.com/in/parvez-butt-8a0a8840/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BRv9wQaZzRyqqHvioaZlabw%3D%3D',
  },
  {
    name: 'Ondora Mogere Dalton',
    title: 'Technical Engineer | Solar Engineer | Risk Engineer',
    bio:
      "A dedicated Solar and Risk Engineer with a strong background in applied physics and renewable energy technologies. Dalton brings expertise in designing and installing solar PV systems and excels at conducting technical risk assessments, developing safety protocols, and enhancing project sustainability.",
    img: DaltonImg,
    linkedin: 'https://www.linkedin.com/in/ondora-mogere-dalton/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BkYteCxpPR%2Fuo3zxnHY0ayw%3D%3D',
  },
  {
    name: 'Doris Nyakongo',
    title: 'Solar PV Project Manager',
    bio:
      "A passionate and dedicated Solar PV Project Manager with a strong foundation in developing and coordinating solar energy projects. Doris is skilled in project planning, feasibility analysis, and effectively coordinating all project phases from engineering to commissioning.",
    img: DorisImg,
    linkedin: 'https://www.linkedin.com/in/doris-nyakongo-aba764231/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BptKvNdu8RRSB%2FDGw48QR2Q%3D%3D',
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.1' }}>
              About Kenstane Energy
            </h1>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Transforming Africa's energy landscape through excellence in training and risk engineering
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.2' }}>
                  Transforming Africa's Energy Future
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Kenstane Energy Ltd aims to be Africa's premium power generation training and consultancy partner, bridging critical skills gaps with industry-driven programs and risk engineering expertise.
                  </p>
                  <p>
                    Aligned with Kenya's Vision 2030 and global climate goals, we equip graduates and professionals with technical expertise, project management rigor, and risk mitigation strategies for sustainable energy projects.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Vision */}
                <div className="p-8 bg-emerald-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl mb-3">Vision</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Fostering a skilled workforce capable of driving sustainable power solutions across Africa and beyond.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission */}
                <div className="p-8 bg-slate-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl mb-3">Mission</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Upscale and rescale industry-driven training that fuses technical mastery, risk engineering, and innovation to eliminate academic to workplace readiness gaps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  Core Values
                </h2>
                <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CORE_VALUES.map((value, idx) => (
                  <div
                    key={idx}
                    className="group p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                      <value.icon className="text-white" size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3 text-xl">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Section */}
            <div className="mb-20">
              <div className="bg-slate-50 p-12 md:p-16 rounded-3xl">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Trusted by Industry Leaders
                  </h2>
                  <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We partner with operators, managers, insurance firms, and loss adjusters across East Africa to deliver excellence in training and risk engineering services.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {[
                    { label: "Trust", icon: Shield, color: "text-emerald-600" },
                    { label: "Partnership", icon: Handshake, color: "text-blue-600" },
                    { label: "Leadership", icon: Award, color: "text-amber-600" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <item.icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="text-lg font-semibold text-slate-900">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  Meet Our Team
                </h2>
                <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Global energy and risk specialists
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM.map((m, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <img 
                        src={m.img} 
                        alt={m.name} 
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0" 
                      />
                      <div className="flex-1">
                        <div className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                          {m.name}
                          <a 
                            href={m.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-emerald-600 transition-colors" 
                            aria-label={`${m.name} LinkedIn`}
                          >
                            <Linkedin size={18} />
                          </a>
                        </div>
                        <div className="text-emerald-600 text-sm font-medium">{m.title}</div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {m.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;