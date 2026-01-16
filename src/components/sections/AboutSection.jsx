import React from 'react';
import { Eye, Target, Shield, Handshake, Award, Linkedin } from 'lucide-react';
import { CORE_VALUES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import DorisImg from '../../assests/team/Doris.png';
import ParvezImg from '../../assests/team/Parvez.png';
import DaltonImg from '../../assests/team/Dalton.png';

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
  // {
  //   name: 'Doris Nyakongo',
  //   title: 'Solar PV Project Manager',
  //   bio:
  //     "A passionate and dedicated Solar PV Project Manager with a strong foundation in developing and coordinating solar energy projects. Doris is skilled in project planning, feasibility analysis, and effectively coordinating all project phases from engineering to commissioning.",
  //   img: DorisImg,
  //   linkedin: 'https://www.linkedin.com/in/doris-nyakongo-aba764231/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BptKvNdu8RRSB%2FDGw48QR2Q%3D%3D',
  // },
];

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

        <div className="mt-24">
          <SectionHeader
            title="Meet Our Team"
            subtitle="Global energy and risk specialists"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TEAM.map((m, idx) => (
              <Card key={idx} variant="default" className="p-8 shadow-lg">
                <div className="flex items-start">
                  <img src={m.img} alt={`${m.name} photo`} className="w-16 h-16 rounded-2xl object-cover mr-4" />
                  <div>
                    <div className="text-xl font-bold text-slate-900 flex items-center">
                      {m.name}
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 text-kenya-green hover:text-kenya-red" aria-label={`${m.name} LinkedIn`}>
                        <Linkedin size={18} />
                      </a>
                    </div>
                    <div className="text-slate-600 text-sm">{m.title}</div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mt-4 text-sm">{m.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;