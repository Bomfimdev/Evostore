import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail({ onPurchase }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Fetch product details
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    
    setProduct(foundProduct);
    if (foundProduct && foundProduct.plans.length > 0) {
      setSelectedPlan(foundProduct.plans[0]);
    }
    setLoading(false);
  }, [productId]);

  // Handle purchase
  const handlePurchase = () => {
    if (!selectedPlan) return;

    // Simulate key generation
    const keyData = {
      id: Math.random().toString(36).substring(2, 15),
      tipo: product.name,
      plano: selectedPlan.name,
      valor: selectedPlan.price,
      dataCriacao: new Date().toISOString(),
      inicio: new Date().toISOString(),
      fim: calculateEndDate(selectedPlan.name)
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#02B045]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Produto não encontrado</h2>
        <Link to="/" className="text-[#02B045] hover:underline">Voltar para a lista de produtos</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="text-[#02B045] hover:underline flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para produtos
      </Link>

      <div className="bg-[#051005] rounded-lg shadow-lg overflow-hidden border border-[#02B045]">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-white mb-8">{product.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Selecione um plano</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.plans.map((plan, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedPlan(plan)}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                    selectedPlan === plan
                      ? 'bg-[#079D3B] border-[#02B045]'
                      : 'bg-[#051005] border-[#079D3B] hover:bg-[#051005]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{plan.name}</span>
                    <span className="text-[#02B045] font-bold">
                      R$ {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedPlan && (
            <div className="bg-[#051005] p-6 rounded-lg border border-[#079D3B] mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Detalhes do plano</h3>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <p className="text-white">Plano selecionado: <span className="text-white font-bold">{selectedPlan.name}</span></p>
                  <p className="text-white">Valor: <span className="text-[#02B045] font-bold">R$ {selectedPlan.price.toFixed(2).replace('.', ',')}</span></p>
                </div>
                <button
                  onClick={handlePurchase}
                  className="bg-[#02B045] hover:bg-[#079D3B] text-white py-3 px-6 rounded-md mt-4 md:mt-0 transition duration-200"
                >
                  Comprar agora
                </button>
              </div>
            </div>
          )}

          <div className="bg-[#051005] p-6 rounded-lg border border-[#079D3B]">
            <h3 className="text-lg font-bold text-white mb-4">Características</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02B045] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;