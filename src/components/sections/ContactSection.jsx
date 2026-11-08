import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mgoqwone';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Kiambu, Kenya',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+254 793 041 411',
      link: 'tel:+254793041411'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@kenstaneltd.com',
      link: 'mailto:info@kenstaneltd.com'
    },
    // {
    //   icon: Globe,
    //   title: 'Website',
    //   detail: 'kenstaneenergyltd.co.ke',
    //   link: 'https://kenstaneenergyltd.co.ke'
    // }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.1' }}>
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your career? Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ lineHeight: '1.2' }}>
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Whether you're looking to upskill your team, need risk engineering support, 
                    or want to learn more about our programs, we're here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-white" size={24} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-lg mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-slate-600 hover:text-emerald-600 transition-colors"
                            >
                              {info.detail}
                            </a>
                          ) : (
                            <p className="text-slate-600">{info.detail}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-emerald-600" size={40} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600 text-center">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="training">Training Programs</option>
                        <option value="risk">Risk Engineering Services</option>
                        <option value="consultancy">Consultancy Services</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help you..."
                        rows="5"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader size={20} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;