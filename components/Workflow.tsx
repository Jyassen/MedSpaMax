import React from 'react';
import { ArrowDown } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The Revenue Recovery Workflow
          </h2>
          <p className="text-lg text-slate-600">
            How we turn a missed call into a confirmed appointment in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10 border-4 border-white">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Missed Call</h3>
              <p className="text-sm text-slate-500">Client calls at 8:30 PM. No staff available to answer.</p>
              <ArrowDown className="md:hidden mt-4 text-slate-300" />
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10 border-4 border-white">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">AI Activation</h3>
              <p className="text-sm text-slate-500">AI Receptionist picks up instantly or sends immediate SMS follow-up.</p>
              <ArrowDown className="md:hidden mt-4 text-slate-300" />
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10 border-4 border-white">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Booking & Intake</h3>
              <p className="text-sm text-slate-500">AI qualifies lead, books slot in CRM, and sends intake forms.</p>
              <ArrowDown className="md:hidden mt-4 text-slate-300" />
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10 border-4 border-white">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Revenue Captured</h3>
              <p className="text-sm text-slate-500">Patient arrives. Revenue secured. No staff intervention needed.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;