import React from 'react';
import { ShieldCheck, Clock, Award, Wrench, DollarSign, PenTool } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Proven Experience",
    description: "Over three decades of industry leadership and technical expertise."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Competitive Pricing",
    description: "Top-tier service at market-competitive rates without compromising quality."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Quality Guaranteed",
    description: "We stand behind our workmanship with comprehensive service warranties."
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "Preventive Maintenance",
    description: "Customized maintenance plans to extend the lifespan of your equipment."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Timely Completion",
    description: "We respect your deadlines and ensure efficient project delivery."
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
    title: "Expert Design",
    description: "In-house engineering for custom ducting and cooling load calculations."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine technical expertise with superior customer service to deliver results that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="mb-6 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
