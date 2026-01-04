import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RoiCalculator: React.FC = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(80000);
  const [missedCalls, setMissedCalls] = useState(20); // calls per month
  const [avgTicket, setAvgTicket] = useState(650);
  const [bookingRate, setBookingRate] = useState(30); // %

  // Calculations
  const potentialRecovered = useMemo(() => {
    // Basic logic: Missed Calls * Booking Rate (via AI) * Avg Ticket
    // Assume AI recovers 70% of missed calls to a conversation, and converts based on booking rate
    const recoveredCalls = missedCalls * 0.7; 
    const bookings = recoveredCalls * (bookingRate / 100);
    const revenue = bookings * avgTicket;
    return Math.round(revenue);
  }, [missedCalls, avgTicket, bookingRate]);

  const annualRecovered = potentialRecovered * 12;

  const data = [
    {
      name: 'Current Revenue',
      amount: monthlyRevenue,
      color: '#94a3b8' // Slate 400
    },
    {
      name: 'With MedSpa Max',
      amount: monthlyRevenue + potentialRecovered,
      color: '#0d9488' // Primary 600
    }
  ];

  return (
    <section id="roi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Calculate Your Lost Revenue
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              See exactly how much revenue you are leaving on the table due to missed calls and operational inefficiencies.
            </p>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Revenue: <span className="font-bold">${monthlyRevenue.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="20000" 
                  max="250000" 
                  step="5000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Est. Missed Calls / Month: <span className="font-bold">{missedCalls}</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  step="5"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Ticket Value: <span className="font-bold">${avgTicket}</span>
                </label>
                <input 
                  type="range" 
                  min="200" 
                  max="2000" 
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <h4 className="text-primary-800 font-semibold mb-2">Estimated Annual Impact</h4>
              <p className="text-3xl font-extrabold text-primary-600">
                +${annualRecovered.toLocaleString()} / year
              </p>
              <p className="text-sm text-primary-600 mt-1">
                Based on recovering ~70% of missed opportunities.
              </p>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-[500px] flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6">projected Monthly Revenue</h3>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 14, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    hide 
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]} animationDuration={1000}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-slate-400">
              *Projections based on conservative lead recovery metrics.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;