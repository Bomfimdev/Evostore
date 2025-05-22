import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onPurchase }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onPurchase={onPurchase} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;