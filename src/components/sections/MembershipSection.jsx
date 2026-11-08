import React, { useState } from 'react';
import { Star, Zap, Shield, X, Loader, CheckCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mgoqwone';

const MembershipSection = () => {
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

  return (
    <>
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
    </>
  );
};

export default MembershipSection;