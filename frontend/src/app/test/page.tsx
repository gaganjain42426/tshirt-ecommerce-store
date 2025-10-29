'use client';

import { getAllProducts } from '@/lib/products';

export default function TestPage() {
  const products = getAllProducts();
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Debug: Products Test</h1>
      <p className="mb-4">Total products: {products.length}</p>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Image: {product.images[0]}</p>
            <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
