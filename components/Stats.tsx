import React from 'react';

const stats = [
  { value: "78%", label: "Missed Call Recovery" },
  { value: "14%", label: "Avg. No-Show Rate" },
  { value: "12x", label: "Yearly ROI" },
  { value: "0", label: "Staff Overhead" },
];

const Stats: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=2000" 
          alt="Abstract"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-primary-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-primary-500/80 text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;