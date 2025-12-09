import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold heading-serif tracking-tight text-primary-900">
          Grace Kazeem<span className="text-primary-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.cvLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30"
          >
            My CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-700 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.cvLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-primary-600 font-semibold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Access CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;