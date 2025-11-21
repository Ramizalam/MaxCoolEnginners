import React from 'react';
import { Service } from '../types';
import chillerImg from '../asset/Chiller.jpg';
import ductableImg from '../asset/DuctableAC.jpg';
import freezerImg from '../asset/Deepfreezer.webp';
import coldRoomImg from '../asset/Cold Room.jpg';
import iceMachineImg from '../asset/IceMachine.webp';
import ductingImg from '../asset/Ducting work.avif';

const services: Service[] = [
  {
    id: 'chilled-water',
    title: 'Chilled Water Plant',
    description: 'Complete installation, maintenance, and repair of chilled water plant systems for commercial and industrial facilities.',
    image: chillerImg,
    colorAccent: 'blue'
  },
  {
    id: 'ductable-ac',
    title: 'Ductable AC',
    description: 'Expert ductable AC installation and servicing for offices, retail spaces, and commercial buildings.',
    image: ductableImg,
    colorAccent: 'blue'
  },
  {
    id: 'deep-freezer',
    title: 'Commercial Deep Freezer',
    description: 'Professional installation and maintenance of commercial-grade deep freezers for restaurants and food storage.',
    image: freezerImg,
    colorAccent: 'ice'
  },
  {
    id: 'cold-room',
    title: 'Cold Room',
    description: 'Custom cold room design, installation, and maintenance for food service, pharmaceutical, and industrial applications.',
    image: coldRoomImg,
    colorAccent: 'ice'
  },
  {
    id: 'ice-machine',
    title: 'Ice Machine',
    description: 'Commercial ice machine installation, repair, and maintenance for hospitality and food service industries.',
    image: iceMachineImg,
    colorAccent: 'ice'
  },
  {
    id: 'ducting',
    title: 'Ducting Work',
    description: 'Professional ducting design, fabrication, and installation for optimal air distribution and energy efficiency.',
    image: ductingImg,
    colorAccent: 'gray'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive HVAC Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From installation to maintenance, we provide end-to-end cooling solutions for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                  service.colorAccent === 'blue' ? 'bg-blue-900' : 
                  service.colorAccent === 'ice' ? 'bg-cyan-400' : 'bg-slate-800'
                }`}></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                   {/* Icon overlay could go here */}
                </div>
              </div>
              <div className={`p-6 border-t-4 ${
                  service.colorAccent === 'blue' ? 'border-blue-600' : 
                  service.colorAccent === 'ice' ? 'border-cyan-400' : 'border-slate-500'
              }`}>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800">
                  Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;