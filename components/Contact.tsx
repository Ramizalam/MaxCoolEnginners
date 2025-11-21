import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use EmailJS to send email automatically from the client
    // Requires you to set the following Vite env vars in a .env file at project root:
    // VITE_EMAILJS_SERVICE_ID=your_service_id
    // VITE_EMAILJS_TEMPLATE_ID=your_template_id
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key

    const env = (import.meta as any).env || {};
    const serviceId = env.VITE_EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS is not configured. Please set environment variables.');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      // Optionally override recipient if your template uses `to_email`
      to_email: 'ramizalam63@gmail.com'
    } as Record<string, string>;

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        toast.error('Failed to send message. Please try again later.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us for a Quote</h2>
          <p className="mt-4 text-slate-600">Ready to start your project? Fill out the form or give us a call.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                 <Phone className="text-blue-600 mb-4 h-8 w-8" />
                 <h3 className="font-bold text-lg mb-2">Phone</h3>
                 <p className="text-slate-600">98105 14828</p>
                 <p className="text-slate-400 text-sm mt-1">24/7 Emergency</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                 <Mail className="text-blue-600 mb-4 h-8 w-8" />
                 <h3 className="font-bold text-lg mb-2">Email</h3>
                 <p className="text-slate-600 break-all">rafikulalam00786@gmail.com</p>
                 <p className="text-slate-400 text-sm mt-1">Response within 24h</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 sm:col-span-2">
                 <MapPin className="text-blue-600 mb-4 h-8 w-8" />
                 <h3 className="font-bold text-lg mb-2">Address</h3>
                 <p className="text-slate-600">Gali Number 15, Sant Nagar, Block B,</p>
                 <p className="text-slate-600">West Sant Nagar, Burari, Delhi, 110084</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 sm:col-span-2">
                 <Clock className="text-blue-600 mb-4 h-8 w-8" />
                 <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                 <p className="text-slate-600">Mon - Fri: 8am - 8pm</p>
                 <p className="text-slate-600">Sat - Sun: 9am - 6pm</p>
               </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden relative shadow-md">
              <iframe 
                title="MaxCoolEngineers Location"
                src="https://maps.google.com/maps?q=Gali%20Number%2015%2C%20Sant%20Nagar%2C%20Block%20B%2C%20West%20Sant%20Nagar%2C%20Burari%2C%20Delhi%2C%20110084&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="98105 14828"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="rafikulalam00786@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                >
                  <option value="">Select a Service</option>
                  <option value="AC Repair & Service">AC Repair & Service</option>
                  <option value="Chilled Water Plant">Chilled Water Plant</option>
                  <option value="Ductable AC">Ductable AC</option>
                  <option value="Commercial Deep Freezer">Commercial Deep Freezer</option>
                  <option value="Cold Room">Cold Room</option>
                  <option value="Ice Machine">Ice Machine</option>
                  <option value="Ducting Work">Ducting Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Tell us about your project or maintenance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;