import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-ink-800">
      <Navigation />
      
      <main id="main" className="w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;