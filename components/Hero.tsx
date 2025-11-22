import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import hvacRepairImg from '../asset/HVAC reapir photo.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hvacRepairImg}
          alt="AC Repair Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative  pt-20">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 px-4 py-1 rounded-full text-sm font-semibold mt-2 mb-6 text-blue-100">
            Trusted HVAC Experts Since 1989
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            MaxCool<span className="text-blue-400">Engineers</span> <br />
            <span className="text-3xl md:text-5xl">Professional AC Repair & Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            Over 35 years of experience in commercial cooling, industrial refrigeration, and air conditioning maintenance.
            Specialized in AC repairing and installation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              Get a Quote <ChevronRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Our Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
             <div>
                <p className="text-3xl font-bold text-blue-400">35+</p>
                <p className="text-sm text-slate-300">Years Experience</p>
             </div>
             <div>
                <p className="text-3xl font-bold text-blue-400">24/7</p>
                <p className="text-sm text-slate-300">Emergency Support</p>
             </div>
             <div className="hidden md:block">
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-sm text-slate-300">Client Satisfaction</p>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
