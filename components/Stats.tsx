import React from 'react';

const stats = [
  { value: "60-80%", label: "Missed Call Recovery" },
  { value: "< 20%", label: "Reduced No-Show Rate" },
  { value: "6x", label: "First Month ROI" },
  { value: "24/7", label: "Automated Booking" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wide">
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