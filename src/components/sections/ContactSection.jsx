import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { FadeIn, SlideInLeft, SlideInRight } from '../animations/AnimatedElements';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
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
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Get In Touch"
          subtitle="Ready to transform your career? Let's discuss how we can help you achieve your goals"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <SlideInLeft>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Whether you're looking to upskill your team, need risk engineering support, 
                    or want to learn more about our programs, we're here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                      <div className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-kenya-green hover:shadow-xl transition-all">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-kenya-green to-kenya-green-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <info.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 text-lg mb-1">
                              {info.title}
                            </h4>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-slate-600 hover:text-kenya-green transition-colors"
                              >
                                {info.detail}
                              </a>
                            ) : (
                              <p className="text-slate-600">{info.detail}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Business Hours */}
                <FadeIn delay={0.4}>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-kenya-green">
                    <h4 className="font-bold text-slate-900 text-lg mb-3">
                      Business Hours
                    </h4>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">8:00 AM - 5:00 PM</span>
                      </div>
                      {/* <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">Closed</span>
                      </div> */}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </SlideInLeft>

            {/* Contact Form */}
            <SlideInRight>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-kenya-green" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600 text-center">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
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
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-kenya-green focus:border-transparent transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-kenya-green focus:border-transparent transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-kenya-green focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-kenya-green focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-kenya-green to-kenya-green-light text-white py-4 rounded-xl font-bold hover:from-kenya-green-dark hover:to-kenya-green transition-all flex items-center justify-center group shadow-lg hover:shadow-xl"
                    >
                      <span>Send Message</span>
                      <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;