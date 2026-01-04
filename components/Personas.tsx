import React from 'react';
import { TrendingUp, Anchor, DollarSign } from 'lucide-react';

const Personas: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built for Med Spas Ready to Scale
          </h2>
          <p className="text-lg text-slate-600">
            Whether you are capped at capacity or just starting your growth journey, MedSpa Max adapts to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-primary-500">
            <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Scale-Blocked Leaders</h3>
            <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">$150k - $250k / month</p>
            <p className="text-slate-600">
              You're losing money because your staff can't keep up with the volume. Automate the chaos and free up your front desk for high-value interactions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500">
            <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth-Ready Players</h3>
            <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">$30k - $80k / month</p>
            <p className="text-slate-600">
              You have leads, but conversion is low. Implement professional follow-up systems that make you look like a national chain.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Anchor className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Operational Optimizers</h3>
            <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">Established Practices</p>
            <p className="text-slate-600">
              Move away from pen-and-paper or manual spreadsheets. Modernize your booking flow to reduce overhead and errors.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Personas;