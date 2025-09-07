'use client';

import ImageGallery from '@/components/ImageGallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-600 mb-4">Our Gallery</h1>
        <p className="text-lg text-amber-100 text-center mb-12 max-w-2xl mx-auto">
          A visual journey through our artisanal baked goods, crafted with passion and precision.
        </p>
        
        <ImageGallery />
      </div>
    </div>
  );
}