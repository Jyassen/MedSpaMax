import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import RoiCalculator from './components/RoiCalculator';
import Personas from './components/Personas';
import Workflow from './components/Workflow';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary-100 selection:text-primary-900 overflow-x-hidden">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-50" style={{ backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <RoiCalculator />
        <Workflow />
        <Personas />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;