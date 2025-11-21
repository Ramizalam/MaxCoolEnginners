import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';
import ductingImg from '../asset/Ducting work.avif';
import ductableImg from '../projects/split AC maintinance.jpg';
import chillerImg from '../projects/chillerPlant.jpg';
import coldRoomImg from '../asset/Cold Room.jpg';
import hvacRepairImg from '../projects/Outdoor.jpg';
import freezerImg from '../projects/Ac maintinance.jpg';

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: ductingImg,
    title: 'Industrial Ductwork',
    category: 'Ducting'
  },
  {
    id: 2,
    image: ductableImg,
    title: 'AC maintinance',
    category: 'AC'
  },
  {
    id: 3,
    image: chillerImg,
    title: 'Chiller Plant Maintenance',
    category: 'Chiller'
  },
  {
    id: 4,
    image: coldRoomImg,
    title: 'Cold Storage Facility',
    category: 'Cold Room'
  },
  {
    id: 5,
    image: hvacRepairImg,
    title: 'Condenser Unit Servicing',
    category: 'Ducting'
  },
  {
    id: 6,
    image: freezerImg,
    title: 'AC plants',
    category: 'AC'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Duplicate items for seamless infinite scroll
  const extendedItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // Reset position when we've scrolled through half the duplicated list
        if (newPosition >= galleryItems.length * 300) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Our Portfolio</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recent Projects</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden bg-white rounded-lg">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${galleryItems.length * 300}px); }
            }
            .carousel-track {
              animation: scroll-left 60s linear infinite;
            }
          `}</style>
          
          <div className="flex gap-6 p-6 carousel-track" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {extendedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer flex-shrink-0 w-80 aspect-[4/3]"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <span className="text-blue-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div 
            className="max-w-4xl w-full max-h-[90vh] relative bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain bg-black"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-slate-800">{selectedImage.title}</h3>
              <p className="text-slate-500">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
