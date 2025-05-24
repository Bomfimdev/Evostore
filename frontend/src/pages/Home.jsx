import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#02B045] mb-4">Bem-vindo à EvoStore</h1>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Seu destino para os melhores softwares de gaming. Encontre os produtos que vão melhorar sua experiência de jogo.
        </p>
      </section>

      <section>
        <ProductList products={products} />
      </section>

      <section className="bg-[#051005] p-8 rounded-lg border border-[#02B045]">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Vantagens da EvoStore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-[#079D3B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#02B045] mb-2">Segurança Garantida</h3>
            <p className="text-white">Todos os nossos produtos são testados e seguros para uso.</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-[#079D3B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#02B045] mb-2">Entrega Instantânea</h3>
            <p className="text-white">Receba suas keys no momento da compra sem espera.</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-[#079D3B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#02B045] mb-2">Suporte 24/7</h3>
            <p className="text-white">Nossa equipe está sempre disponível para ajudar com qualquer dúvida.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;