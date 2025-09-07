import { NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongodb';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
}

// Mock data using images from the public/images folder
const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Ladoo Raja',
    price: 350,
    image: '/images/1.png',
    description: 'Traditional sweet made from tiny chickpea flour balls soaked in sugar syrup',
    stock: 15
  },
  {
    _id: '2',
    name: 'Ladoo Rani',
    price: 450,
    image: '/images/5.png',
    description: 'Rich ladoos packed with premium nuts and dry fruits',
    stock: 8
  },
  {
    _id: '3',
    name: 'Dryfruit chocolate bar',
    price: 400,
    image: '/images/7.png',
    description: 'Decadent chocolate-flavored ladoos with dry fruits and cocoa richness',
    stock: 12
  },
  {
    _id: '4',
    name: 'Postpartum Ladoo',
    price: 420,
    image: '/images/2.png',
    description: 'Nutritious ladoos specially crafted for new mothers with iron-rich ingredients',
    stock: 5
  },
  {
    _id: '5',
    name: 'Bajra Ladoo',
    price: 300,
    image: '/images/3.png',
    description: 'Healthy bajra-based ladoos with nuts and jaggery for sustained energy',
    stock: 20
  },
  {
    _id: '6',
    name: 'Ragi Ladoo',
    price: 280,
    image: '/images/4.png',
    description: 'Nutritious ragi-based ladoos with sesame seeds and jaggery',
    stock: 18
  },
  {
    _id: '7',
    name: 'Halim Ladoo',
    price: 320,
    image: '/images/6.png',
    description: 'Protein-rich halim-based ladoos with dates and nuts for strength',
    stock: 10
  },
  {
    _id: '8',
    name: 'Mix millet Ladoo',
    price: 340,
    image: '/images/8.png',
    description: 'Wholesome mix millet ladoos with dry fruits for balanced nutrition',
    stock: 12
  }
];

export async function GET() {
  try {
    // In a real application, you would fetch from MongoDB
    // const client = await clientPromise;
    // const db = client.db("aurum-delights");
    // const products = await db.collection("products").find({}).toArray();
    
    // For now, return mock data
    return NextResponse.json(mockProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}