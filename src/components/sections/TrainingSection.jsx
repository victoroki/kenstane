import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Download, CheckCircle, Award, Clock, Users, Star, Zap, Shield, X, Loader, ExternalLink } from 'lucide-react';
import { ENERGY_TYPES } from '../../utils/constants';
import Button from '../ui/Button';
import PastCourseCard from './PastCourseCard';
import { COURSES, isCoursePast, pastCourses } from '../../data/courses';

const FORMSPREE_URL = 'https://formspree.io/f/mgoqwone';

const TrainingSection = () => {
  const [activeTab, setActiveTab] = useState('renewable');
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [membershipForm, setMembershipForm] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const membershipTiers = [
    {
      name: 'Basic',
      price: 'USD 80',
      description: 'For individuals beginning their journey in risk engineering and renewable power generation.',
      features: [
        'Access to selected online learning materials',
        'Monthly technical updates',
        'Entry-level webinars',
        'Membership certificate',
        'Community forum access'
      ],
      icon: Star,
      color: 'slate',
      popular: false
    },
    {
      name: 'Standard',
      price: 'USD 100',
      description: 'For members seeking deeper learning and more engagement with trainers and peers.',
      features: [
        'Everything in Basic tier',
        'Live training sessions',
        'Discounted practical workshops',
        'Access to recorded classes',
        'Technical Q&A forums',
        'Priority updates on courses & events'
      ],
      icon: Zap,
      color: 'emerald',
      popular: true
    },
    {
      name: 'Premium',
      price: 'USD 120',
      description: 'The most advanced option for professionals seeking full support and industry exposure.',
      features: [
        'Everything in Standard tier',
        'Advanced training modules',
        'Expert mentorship',
        'Priority technical support',
        'Exclusive masterclasses',
        'Discounted consultancy & site visits',
        'First consideration for partner opportunities'
      ],
      icon: Shield,
      color: 'amber',
      popular: false
    }
  ];

  const renewableTrainings = [
    {
      title: 'Solar Power Plant',
      audience: 'Risk Engineers, Project Managers',
      duration: '4 Weeks',
      level: 'Advanced',
      color: 'blue'
    },
    {
      title: 'Wind Power Plant',
      audience: 'Risk Engineers, Project Managers',
      duration: '4 Weeks',
      level: 'Advanced',
      color: 'green'
    },
    {
      title: 'Hydropower Plant',
      audience: 'Operators, Safety Officers',
      duration: '3-4 Weeks',
      level: 'Professional',
      color: 'indigo'
    },
    {
      title: 'Geothermal Power Plant',
      audience: 'Insurers, Engineers',
      duration: '3 Weeks',
      level: 'Professional',
      color: 'red'
    }
  ];

  const nonRenewableTrainings = [
    {
      title: 'CCGT Power Plant',
      audience: 'Insurers, Operators, Engineers',
      duration: '4-6 Weeks',
      level: 'Professional',
      color: 'emerald'
    },
    {
      title: 'Thermal Power Plant',
      audience: 'Operators, Risk Engineers',
      duration: '4 Weeks',
      level: 'Advanced',
      color: 'amber'
    }
  ];

  const managementTrainings = [
    {
      title: 'HSE & Process Safety',
      audience: 'Safety Officers, Engineers',
      duration: '2-4 Weeks',
      level: 'Professional',
      color: 'purple'
    },
    {
      title: 'Project Management for Energy Projects',
      audience: 'Project Managers, Team Leads',
      duration: '2-3 Weeks',
      level: 'Professional',
      color: 'cyan'
    },
    {
      title: 'Codes and Standards Compliance',
      audience: 'Engineers, Compliance Officers',
      duration: '2 Weeks',
      level: 'Professional',
      color: 'teal'
    },
    {
      title: 'Introduction to Natural Perils & Hazards',
      audience: 'Risk Engineers, Insurers, HSE Personnel',
      duration: '3 Days',
      level: 'Professional',
      color: 'orange',
      link: '/training/natural-perils-hazards'
    }
  ];

  const handleJoinClick = (tier) => {
    setSelectedTier(tier);
    setShowMembershipModal(true);
    setIsSuccess(false);
  };

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: membershipForm.name,
          email: membershipForm.email,
          phone: membershipForm.phone,
          tier_name: selectedTier.name,
          tier_price: selectedTier.price
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setMembershipForm({ name: '', email: '', phone: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to submit. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pastCourseFor = (program) =>
    program.link ? COURSES.find((c) => c.link === program.link && isCoursePast(c)) : null;

  const renderTrainingCards = (list) => (
    <div className="grid md:grid-cols-2 gap-6">
      {list.map((program, idx) => {
        const past = pastCourseFor(program);
        return (
        <div 
          key={idx} 
          className="group bg-white border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center">
              <GraduationCap size={28} className="text-white" strokeWidth={1.5} />
            </div>
            {past ? (
              <span className="bg-ink-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Completed · {new Date(`${past.startDate}T00:00:00`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </span>
            ) : (
              <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                {program.level}
              </span>
            )}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {program.title}
          </h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-600">
              <Users size={18} className="mr-3 text-emerald-600" strokeWidth={1.5} />
              <span className="text-sm"><strong>Target:</strong> {program.audience}</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Clock size={18} className="mr-3 text-emerald-600" strokeWidth={1.5} />
              <span className="text-sm"><strong>Duration:</strong> {program.duration}</span>
            </div>
          </div>

          {/* CTA */}
          {program.link ? (
            <Link to={program.link} className="text-emerald-600 font-semibold flex items-center hover:gap-3 transition-all">
              {past ? 'View past course details' : 'View Course Details'}
              <ExternalLink size={18} className="ml-2" />
            </Link>
          ) : (
            <button className="text-emerald-600 font-semibold flex items-center hover:gap-3 transition-all">
              Download Brochure 
              <Download size={18} className="ml-2" />
            </button>
          )}
        </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.1' }}>
              Training Programs
            </h1>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Industry-certified courses designed to bridge the skills gap and enhance employability
            </p>
          </div>
        </div>
      </section>

      {/* Training Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'renewable', label: 'Renewable Energy' },
              { key: 'nonrenewable', label: 'Non-Renewable Energy' },
              { key: 'management', label: 'Management' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                  activeTab === tab.key 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-600 hover:text-emerald-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Renewable: Energy type cards */}
          {activeTab === 'renewable' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {ENERGY_TYPES.map((energy, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-gradient-to-br ${energy.color} p-8 rounded-2xl text-white text-center hover:scale-105 transition-all cursor-pointer`}
                >
                  <energy.icon className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                  <h4 className="font-bold text-lg">{energy.name}</h4>
                </div>
              ))}
            </div>
          )}

          {/* Training cards per tab */}
          {activeTab === 'renewable' && renderTrainingCards(renewableTrainings)}
          {activeTab === 'nonrenewable' && renderTrainingCards(nonRenewableTrainings)}
          {activeTab === 'management' && renderTrainingCards(managementTrainings)}

          {activeTab !== 'management' && (
            <div className="mt-16">
              <div className="bg-slate-900 text-white p-12 md:p-16 rounded-3xl">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">Graduate Engineering Training (GET)</h3>
                    <p className="text-slate-300 text-lg mb-6">Our flagship employability program</p>
                    <p className="text-lg mb-8 leading-relaxed text-slate-300">
                      Graduate training focuses on bridging the skills gap among fresh university and college graduates. The program offers employability training, technical certification programs, mentorship, and corporate induction services aimed at improving workplace readiness and employability.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {['Technical Certification', 'Mentorship Programs', 'Corporate Induction', 'Career Guidance'].map((item, idx) => (
                        <div key={idx} className="bg-slate-800 p-6 rounded-xl">
                          <CheckCircle className="mb-3 text-emerald-400" size={24} strokeWidth={1.5} />
                          <p className="text-sm font-semibold">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="secondary" icon={Download} iconPosition="left">
                        GET Program Details
                      </Button>
                      <button className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past courses */}
      {pastCourses().length > 0 && (
        <section id="past-courses" aria-labelledby="past-courses-title" className="scroll-mt-28 pb-20 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <p className="eyebrow mb-3">Recently delivered</p>
            <h2 id="past-courses-title" className="text-3xl md:text-4xl font-bold text-ink-950">Past courses</h2>
            <p className="mt-3 max-w-2xl text-lg text-ink-600">
              Courses we have already run. Register your interest and we’ll let you know when the next session is scheduled.
            </p>
            <div className="mt-10 space-y-8">
              {pastCourses().map((c) => <PastCourseCard key={c.id} course={c} />)}
            </div>
          </div>
        </section>
      )}

      {/* Membership Tiers */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Membership Benefits
            </h2>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the membership level that matches your professional goals. 
              From foundational learning to advanced development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-2 border-emerald-500 shadow-xl scale-105' 
                    : 'border border-slate-200 hover:border-emerald-300 hover:shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  tier.color === 'emerald' ? 'bg-emerald-100' :
                  tier.color === 'amber' ? 'bg-amber-100' : 'bg-slate-100'
                }`}>
                  <tier.icon 
                    size={24} 
                    className={
                      tier.color === 'emerald' ? 'text-emerald-600' :
                      tier.color === 'amber' ? 'text-amber-600' : 'text-slate-600'
                    } 
                    strokeWidth={1.5} 
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-4">{tier.price}</div>
                <p className="text-slate-600 text-sm mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-sm text-slate-600">
                      <CheckCircle size={16} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleJoinClick(tier)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  Join {tier.name}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm">
              All memberships are annual. Prices shown in USD.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Modal */}
      {showMembershipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => setShowMembershipModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-emerald-600" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  Your {selectedTier?.name} membership request has been submitted. 
                  We'll contact you shortly with payment details.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Join {selectedTier?.name} Membership
                </h3>
                <p className="text-slate-600 mb-6">
                  {selectedTier?.price}/year - Fill your details and we'll get back to you.
                </p>

                <form onSubmit={handleMembershipSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={membershipForm.name}
                      onChange={(e) => setMembershipForm({...membershipForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={membershipForm.email}
                      onChange={(e) => setMembershipForm({...membershipForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={membershipForm.phone}
                      onChange={(e) => setMembershipForm({...membershipForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      placeholder="+254..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingSection;