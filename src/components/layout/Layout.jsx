import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
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