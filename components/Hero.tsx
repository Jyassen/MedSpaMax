import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Now accepting NYC Pilot Partners
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Stop Losing Revenue to <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
            Missed Calls & No-Shows
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          <span className="font-semibold text-slate-900">MedSpa Max™</span> is the 24/7 receptionist that qualifies leads, books appointments, and reactivates dormant clients—without you lifting a finger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            Launch AI Receptionist
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Calculate Your ROI
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary-500" />
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary-500" />
            Works with your existing CRM
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary-500" />
            Deploy in &lt; 1 hour
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;