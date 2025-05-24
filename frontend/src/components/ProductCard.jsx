import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-[#051005] rounded-lg shadow-lg overflow-hidden border border-[#02B045] transition-transform duration-200 hover:scale-105 flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
        <div className="space-y-4 flex-grow">
          <ul className="text-white space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#02B045] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        to={`/product/${product.id}`}
        className="bg-[#079D3B] hover:bg-[#02B045] text-white py-2 text-center w-full transition duration-200 block"
      >
        Ver mais detalhes
      </Link>
    </div>
  );
}

export default ProductCard;