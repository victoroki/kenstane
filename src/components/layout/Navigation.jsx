import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const MobileNavItem = ({ item, isActive, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isItemActive = isActive(item.path);
  const hasActiveChild = item.children?.some(c => isActive(c.path));

  if (item.children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all duration-300 ${isItemActive || hasActiveChild
              ? 'bg-kenya-red/10 text-kenya-red'
              : 'text-slate-200 hover:bg-white/5'
            }`}
        >
          <span className="flex items-center space-x-3">{item.name}</span>
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-kenya-red' : 'text-slate-500'}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="ml-6 space-y-1 border-l-2 border-white/5 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.path}
                onClick={closeMenu}
                className={`block p-3 rounded-lg text-base font-medium transition-colors ${isActive(child.path)
                    ? 'text-kenya-red bg-kenya-red/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      onClick={closeMenu}
      className={`block p-4 rounded-xl text-lg font-bold transition-all duration-300 ${isItemActive
          ? 'bg-kenya-red/10 text-kenya-red shadow-inner'
          : 'text-slate-200 hover:bg-white/5 hover:translate-x-1'
        }`}
    >
      {item.name}
    </Link>
  );
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update effect to close menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Risk Engineering', path: '/risk-engineering' },
    { name: 'Risk Tool', path: '/risk-assessment' },
    { name: 'Sectors', path: '/sectors' },
    {
      name: 'Community',
      path: '/blogs',
      children: [
        { name: 'Blogs', path: '/blogs' },
        { name: 'Articles', path: '/articles' },
        { name: 'Media', path: '/media' },
        { name: 'Events', path: '/events' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-white/90 backdrop-blur-sm py-5'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative p-2 rounded-lg">
                <img src="/logo.png" alt="Kenstane Logo" className="w-14 h-15 object-contain" />
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black bg-clip-text text-transparent">
                KENSTANE
              </span>
              <span className="text-xs block text-slate-600 font-medium tracking-wider">ENERGY LIMITED</span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 font-medium transition-colors flex items-center ${isActive(item.path) ? 'text-kenya-red' : 'text-slate-700 hover:text-kenya-red'
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
                  className={`relative px-4 py-2 font-medium transition-colors group ${isActive(item.path) ? 'text-kenya-red' : 'text-slate-700 hover:text-kenya-red'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-kenya-green to-kenya-red transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-kenya-red transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0a0f18]/95 backdrop-blur-2xl z-50 lg:hidden transform transition-transform duration-500 ease-out shadow-2xl border-l border-white/10 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-kenya-red/20 rounded-lg blur-md"></div>
                <img src="/logo.png" alt="Kenstane Logo" className="relative w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black bg-clip-text text-transparent leading-none">
                  KENSTANE
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest mt-1 uppercase">
                  Energy Limited
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                isActive={isActive}
                closeMenu={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="p-8 border-t border-white/10 bg-black/5 mt-auto">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-kenya-red to-kenya-red/80 text-white py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-kenya-red/20 active:scale-[0.98] transition-all hover:brightness-110"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;