import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              MaxCool <span className="text-blue-500">Engineers</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for commercial cooling and industrial HVAC solutions. Over 35 years of excellence in keeping your business running at the perfect temperature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Chilled Water Plant</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ductable AC</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial Deep Freezer</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cold Room</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industrial Ducting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 text-blue-500 flex-shrink-0" size={18} />
                <span>98105 14828</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 text-blue-500 flex-shrink-0" size={18} />
                <span className="break-all">rafikulalam00786@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-500 flex-shrink-0" size={18} />
                <span>Gali Number 15, Sant Nagar,<br/>Block B, Burari, Delhi, 110084</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2024 MaxCoolEngineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;