import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ThermometerSnowflake } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group relative z-[101]">
          <div className={`p-2 rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <ThermometerSnowflake size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold leading-none ${isScrolled ? 'text-primary' : 'text-white'} group-hover:opacity-90`}>
              MaxCool
            </span>
            <span className={`text-xs font-medium tracking-wider ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              ENGINEERS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide hover:text-secondary transition-colors cursor-pointer ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:9810514828"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-transform transform hover:scale-105 cursor-pointer ${
              isScrolled
                ? 'bg-primary text-white hover:bg-blue-800'
                : 'bg-white text-primary hover:bg-slate-100'
            }`}
          >
            <Phone size={16} />
            <span>98105 14828</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none relative z-[101]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-medium text-lg border-b border-slate-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:9810514828"
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-bold mt-4"
          >
            <Phone size={18} />
            Call 98105 14828
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;