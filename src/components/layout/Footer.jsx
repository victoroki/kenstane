import React from 'react';
import { COMPANY_INFO, NAV_ITEMS, ENERGY_TYPES } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-kenya-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center flex-wrap text-xl md:text-2xl font-bold mb-4">
                <img src="./logo.png" alt="Kenstane Logo" className="w-8 h-8 md:w-10 md:h-10 mr-2 object-contain" />
              <span className="text-kenya-green text-sm md:text-base">KENSTANE ENERGY LIMITED</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Kenya's premier training and consultancy firm for power generation and risk engineering.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-kenya-red transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-kenya-red transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-3.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-kenya-red transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-kenya-green transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-kenya-green group-hover:w-4 transition-all mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Courses</h4>
            <ul className="space-y-3">
              {ENERGY_TYPES.map((energy) => (
                <li key={energy.name}>
                  <a href="#training" className="text-slate-400 hover:text-kenya-green transition-colors text-sm flex items-center group">
                    <span className="w-0 h-0.5 bg-kenya-green group-hover:w-4 transition-all mr-2"></span>
                    {energy.name} Training
                  </a>
                </li>
              ))}
              <li>
                <a href="#training" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all mr-2"></span>
                  CCGT Training
                </a>
              </li>
              <li>
                <a href="#training" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all mr-2"></span>
                  HSE & Process Safety
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-slate-400">
                <svg className="w-5 h-5 mr-3 text-kenya-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY_INFO.location}
              </li>
              <li className="flex items-start text-slate-400">
                <svg className="w-5 h-5 mr-3 text-kenya-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY_INFO.phone}
              </li>
              <li className="flex items-start text-slate-400">
                <svg className="w-5 h-5 mr-3 text-kenya-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY_INFO.email}
              </li>
              <li className="flex items-start text-slate-400">
                <svg className="w-5 h-5 mr-3 text-kenya-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {COMPANY_INFO.website}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 Kenstane Energy Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-kenya-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-kenya-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-kenya-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;