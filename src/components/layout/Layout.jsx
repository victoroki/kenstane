import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navigation />
      
      <main className="w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;