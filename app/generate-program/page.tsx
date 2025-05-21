'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Recent Activity</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2">
            <div className="relative w-full h-40">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold text-primary">{product.title}</h3>
            <p className="text-sm text-gray-500 truncate">{product.description}</p>
            <span className="text-sm font-medium text-green-600">${product.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
