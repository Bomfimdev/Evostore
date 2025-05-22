import React from 'react';
import KeyManager from '../components/KeyManager';

function KeyManagement({ purchasedKeys }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Gerenciamento de Keys</h1>
      
      {purchasedKeys.length > 0 ? (
        <>
          <p className="text-gray-300 mb-8 text-center">
            Aqui você pode visualizar e gerenciar todas as suas keys adquiridas.
          </p>
          <KeyManager purchasedKeys={purchasedKeys} />
        </>
      ) : (
        <div className="bg-[#012b01] rounded-lg shadow-lg p-8 border border-[#02B045] text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#02B045] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-4">Nenhuma key adquirida</h2>
          <p className="text-gray-300 mb-6">
            Você ainda não possui nenhuma key. Navegue pelos nossos produtos e faça sua primeira compra!
          </p>
          <a href="/" className="bg-[#02B045] hover:bg-[#079D3B] text-white py-2 px-6 rounded-md transition duration-200 inline-block">
            Ver produtos
          </a>
        </div>
      )}
    </div>
  );
}

export default KeyManagement;