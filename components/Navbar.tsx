import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              MedSpa Max<span className="text-primary-600">™</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#roi" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">ROI Calculator</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">How it Works</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-base font-medium text-slate-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#roi" 
              className="text-base font-medium text-slate-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ROI Calculator
            </a>
            <a 
              href="#how-it-works" 
              className="text-base font-medium text-slate-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg text-base font-semibold">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;