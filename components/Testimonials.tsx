import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohit Sharma",
    company: "Seven Seas Hotel",
    rating: 5,
    text: "The MaxCoolEngineers team transformed our hotel's aging cooling system. Their chilled water plant installation was seamless, and the energy savings have been remarkable. Highly recommended for any large-scale commercial project."
  },
  {
    id: 2,
    name: "Anita Desai",
    company: "Fresh Foods Logistics",
    rating: 5,
    text: "We rely heavily on our cold rooms and deep freezers. MaxCoolEngineers's preventive maintenance program has virtually eliminated downtime for us. Their response time for emergency calls is impressive."
  },
  {
    id: 3,
    name: "Ravi Patel",
    company: "TechPark Offices",
    rating: 5,
    text: "Professional, knowledgeable, and courteous. They handled the ductable AC installation for our new office building perfectly. The air distribution is balanced and the system runs quietly."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Client Feedback</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-slate-700 text-center italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h3>
              <p className="text-blue-600">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 text-slate-700 transition-colors z-20 border border-slate-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 text-slate-700 transition-colors z-20 border border-slate-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
