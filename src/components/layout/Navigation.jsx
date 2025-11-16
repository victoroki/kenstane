import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';


const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();

  // Updated navigation items with paths
  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Risk Engineering', path: '/risk-engineering' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Community', path: '/blogs', children: [
      { name: 'Blogs', path: '/blogs' },
      { name: 'Articles', path: '/articles' },
      { name: 'Media', path: '/media' },
      { name: 'Events', path: '/events' }
    ] },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute  rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative p-2 rounded-lg">
                <img src="./logo.png" alt="Kenstane Logo" className="w-14 h-15 object-contain" />
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black bg-clip-text text-transparent">
                KENSTANE
              </span>
              <span className="text-xs block text-slate-600 font-medium tracking-wider">
                ENERGY LIMITED
              </span>
            </div>
          </Link>
         
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 font-medium transition-colors flex items-center ${
                      isActive(item.path) ? 'text-kenya-red' : 'text-slate-700 hover:text-kenya-red'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-4 py-2 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-kenya-green hover:to-kenya-red hover:text-white`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 font-medium transition-colors group ${
                    isActive(item.path) 
                      ? 'text-kenya-red' 
                      : 'text-slate-700 hover:text-kenya-red'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-kenya-green to-kenya-red transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-kenya-red transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-kenya-black/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item, idx) => (
            item.children ? (
              <div
                key={item.name}
                className="text-center"
                style={{ animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${idx * 0.1}s both` : 'none' }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-semibold ${isActive(item.path) ? 'text-kenya-red' : 'text-white hover:text-kenya-red'}`}
                >
                  {item.name}
                </Link>
                <div className="mt-4 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white text-lg"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-all transform hover:scale-110 ${
                  isActive(item.path) ? 'text-kenya-red' : 'text-white hover:text-kenya-red'
                }`}
                style={{ animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${idx * 0.1}s both` : 'none' }}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;