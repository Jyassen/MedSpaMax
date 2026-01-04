import React from 'react';
import { PhoneCall, MessageSquareMore, CalendarX, Repeat, FileText, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    description: "Handles inbound calls 24/7. It qualifies leads, answers FAQs, and books appointments directly into your calendar.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: MessageSquareMore,
    title: "Lead Nurture Flows",
    description: "Instant SMS & Email sequences that engage new leads within 5 minutes, significantly boosting conversion rates.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: CalendarX,
    title: "No-Show Reducer",
    description: "Smart reminder system that confirms attendance 24h and 2h prior, reducing last-minute cancellations by up to 80%.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Repeat,
    title: "Reactivation Engine",
    description: "Automatically identifies dormant contacts (60+ days) and sends personalized offers to bring them back.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: FileText,
    title: "Smart Intake Bot",
    description: "Sends service-specific intake forms automatically upon booking, saving your front desk hours of manual work.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: BarChart3,
    title: "Revenue Dashboard",
    description: "Weekly reports tracking recovered revenue, booked appointments, and lead conversion KPIs.",
    color: "bg-slate-50 text-slate-600"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">The Solution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Complete Operational System for Med Spas
          </h3>
          <p className="text-lg text-slate-600">
            Modular AI automation designed to fix the "leaky bucket" of lost revenue in your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;