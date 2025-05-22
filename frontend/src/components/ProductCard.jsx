import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onPurchase }) {
  const handlePurchase = (plan) => {
    // Simulate key generation
    const keyData = {
      id: Math.random().toString(36).substring(2, 15),
      tipo: product.name,
      plano: plan.name,
      valor: plan.price,
      dataCriacao: new Date().toISOString(),
      inicio: new Date().toISOString(),
      fim: calculateEndDate(plan.name)
    };

    onPurchase(keyData);
    alert(`Compra realizada com sucesso!\nChave: ${keyData.id}`);
  };

  // Calculate end date based on plan
  const calculateEndDate = (planName) => {
    const now = new Date();
    let endDate = new Date(now);

    if (planName.includes('Diária')) {
      endDate.setDate(now.getDate() + 1);
    } else if (planName.includes('Semanal')) {
      endDate.setDate(now.getDate() + 7);
    } else if (planName.includes('Mensal')) {
      endDate.setMonth(now.getMonth() + 1);
    } else if (planName.includes('Vitalício')) {
      endDate = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());
    }

    return endDate.toISOString();
  };

  return (
    <div className="bg-[#012b01] rounded-lg shadow-lg overflow-hidden border border-[#02B045] transition-transform duration-200 hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
        <div className="space-y-4">
          {product.plans.map((plan, index) => (
            <div key={index} className="border-t border-[#079D3B] pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300">{plan.name}</span>
                <span className="text-[#02B045] font-bold text-lg">
                  R$ {plan.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button
                onClick={() => handlePurchase(plan)}
                className="bg-[#079D3B] hover:bg-[#02B045] text-white py-2 px-4 rounded-md w-full transition duration-200"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#011901] p-4 border-t border-[#02B045]">
        <Link
          to={`/product/${product.id}`}
          className="text-[#02B045] hover:text-[#079D3B] text-sm flex justify-center items-center"
        >
          Ver mais detalhes
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;