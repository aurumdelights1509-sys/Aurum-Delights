'use client';

import { useCartStore } from "@/store/cart";
import Link from 'next/link';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQty = useCartStore((s) => s.updateQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.total)();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
          <p className="text-gray-600 mb-8">Your cart is currently empty.</p>
          <Link 
            href="/products" 
            className="bg-gold text-white px-6 py-3 rounded hover:bg-gold-dark transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart ({items.length} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {items.map((item) => (
              <div key={item.productId} className="border-b border-gray-200 last:border-b-0">
                <div className="p-6 flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gold font-bold mt-1">
                          {process.env.NEXT_PUBLIC_CURRENCY}{item.price.toFixed(2)}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.productId)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQty(item.productId, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQty(item.productId, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="ml-auto font-bold">
                        {process.env.NEXT_PUBLIC_CURRENCY}{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">
                {process.env.NEXT_PUBLIC_CURRENCY}{total.toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">
                {process.env.NEXT_PUBLIC_CURRENCY}{(total * 0.08).toFixed(2)}
              </span>
            </div>
            
            <div className="border-t border-gray-200 my-4 pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>
                {process.env.NEXT_PUBLIC_CURRENCY}{(total * 1.08).toFixed(2)}
              </span>
            </div>
            
            <Link 
              href="/checkout" 
              className="block w-full bg-gold text-white text-center py-3 rounded hover:bg-gold-dark transition mt-6"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}