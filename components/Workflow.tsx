import React from 'react';
import { ArrowRight, PhoneIncoming, Zap, CalendarCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneIncoming,
    title: "Inbound Event",
    desc: "A patient calls after hours or misses a staff member.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "AI Response",
    desc: "MedSpa Max engages via Voice or SMS within seconds.",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: CalendarCheck,
    title: "Self-Booking",
    desc: "Patient selects a slot and completes intake automatically.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Profit Realized",
    desc: "Revenue is secured without human intervention.",
    color: "from-slate-700 to-slate-900"
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Invisible Operations. Visible Profit.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                <step.icon className="text-white h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-500 text-center text-sm font-medium leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
              
              {idx < steps.length - 1 && (
                <div className="md:hidden my-6">
                  <div className="h-8 w-[2px] bg-slate-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;