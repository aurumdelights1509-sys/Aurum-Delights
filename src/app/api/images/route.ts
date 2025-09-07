import { NextResponse } from 'next/server';

// This is a mock implementation since we can't access the filesystem in a serverless environment
// In a real application, you would store image metadata in a database

export async function GET() {
  try {
    // Mock list of images that exist in the public/images folder
    const images = [
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

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}