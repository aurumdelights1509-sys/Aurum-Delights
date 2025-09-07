'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageData {
  id: string;
  name: string;
  url: string;
}

export default function ImageGallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data: ImageData[] = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
        // Fallback to static list if API fails
        const fallbackImages: ImageData[] = [
          { id: '1', name: 'Chocolate Croissant', url: '/images/1.png' },
          { id: '2', name: 'Blueberry Muffin', url: '/images/2.png' },
          { id: '3', name: 'Cinnamon Roll', url: '/images/3.png' },
          { id: '4', name: 'Assorted Macarons', url: '/images/4.png' },
          { id: '5', name: 'Artisan Bread Loaf', url: '/images/5.png' },
          { id: '6', name: 'Red Velvet Cake Slice', url: '/images/6.png' },
          { id: '7', name: 'Cheesecake', url: '/images/7.png' },
          { id: '8', name: 'Fruit Tart', url: '/images/8.png' },
          { id: '9', name: 'Pain au Chocolat', url: '/images/9.png' },
          { id: '10', name: 'Lemon Drizzle Cake', url: '/images/10.png' },
          { id: '11', name: 'Banana Bread', url: '/images/11.png' },
          { id: '12', name: 'Croissant Assortment', url: '/images/12.png' },
        ];
        setImages(fallbackImages);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gold mb-12">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image.url}
              alt={image.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold text-center">{image.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}