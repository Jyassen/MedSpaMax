import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-20 hidden lg:block"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-50 rounded-full blur-[120px] opacity-60 -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
              The Gold Standard in MedSpa AI
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Capture Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">
                Revenue Opportunity
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              <span className="font-bold text-slate-900">MedSpa Max™</span> combines clinical-grade AI with hyper-personalized automation to handle missed calls, bookings, and patient follow-ups while you focus on treatments.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Book a 15-Min Demo
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                See Live ROI
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 font-medium">
                <div className="bg-primary-100 p-1 rounded-full"><CheckCircle2 className="h-4 w-4 text-primary-600" /></div>
                Integrates with Zenoti, Mindbody, and Boulevard
              </div>
              <div className="flex items-center gap-3 text-slate-600 font-medium">
                <div className="bg-primary-100 p-1 rounded-full"><CheckCircle2 className="h-4 w-4 text-primary-600" /></div>
                HIPAA & SOC2 Compliant Data Handling
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury MedSpa Reception" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 animate-fade-in-up">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Last 30 Days</p>
                    <p className="text-2xl font-black text-slate-900">+$24,850 <span className="text-primary-600 text-sm font-bold">Recovered</span></p>
                  </div>
                  <div className="h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-white h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-200 rounded-full blur-[80px] -z-10 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;