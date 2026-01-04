import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Automate Your Growth?
        </h2>
        <p className="text-xl text-primary-100 mb-10">
          Join the pilot program for NYC Med Spas. Lifetime licensing of workflows. 7-Day Onboarding.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
            Schedule Implementation Call
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            View Sample Report
          </button>
        </div>
        <p className="mt-6 text-sm text-primary-200 opacity-80">
          Limited spots available for Tier 1 onboarding support.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;