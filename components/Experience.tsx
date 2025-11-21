import React from 'react';
import repair from '../asset/Repair.png';

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={repair} 
                alt="Technician working on HVAC unit"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-5xl font-bold mb-1">35+</p>
              <p className="font-medium text-blue-100">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              35+ Years of Excellence in <span className="text-blue-600">Industrial Cooling</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Since our inception, MaxCoolEngineers has been at the forefront of the HVAC industry, delivering robust and energy-efficient cooling solutions for commercial and industrial clients. We have evolved from a small local service provider to a leader in large-scale refrigeration and climate control systems.
            </p>
            <p className="text-slate-600 mb-8">
              Our team of certified engineers and technicians is dedicated to ensuring your operations never skip a beat. Whether it's a critical pharmaceutical cold room or a massive mall air conditioning system, we bring the same level of precision and care to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">500+</span>
                <span className="text-sm text-slate-500 font-medium">Projects Completed</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">100+</span>
                <span className="text-sm text-slate-500 font-medium">Happy Clients</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">35</span>
                <span className="text-sm text-slate-500 font-medium">Years in Business</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;