import React, { useState } from 'react';

function KeyManager({ purchasedKeys }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  // Filter keys based on search term and type
  const filteredKeys = purchasedKeys.filter((key) => {
    const matchesSearch = searchTerm === '' || 
                          key.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          key.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === '' || key.tipo === filterType;
    return matchesSearch && matchesType;
  });

  // Get unique product types for filter
  const productTypes = [...new Set(purchasedKeys.map(key => key.tipo))];

  // Calculate remaining time
  const getRemainingTime = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diffTime = end - now;
    
    if (diffTime <= 0) return 'Expirada';

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 365 * 10) return 'Vitalício';
    
    return `${diffDays} dias, ${diffHours} horas`;
  };

  return (
    <div className="bg-[#012b01] rounded-lg shadow-lg p-6 border border-[#02B045]">
      <h2 className="text-2xl font-bold text-white mb-6">Gerenciador de Keys</h2>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Pesquisar por ID ou tipo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#011901] border border-[#079D3B] text-white focus:outline-none focus:border-[#02B045]"
          />
        </div>
        <div className="w-full md:w-1/3">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#011901] border border-[#079D3B] text-white focus:outline-none focus:border-[#02B045]"
          >
            <option value="">Todos os produtos</option>
            {productTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Keys Table */}
      {filteredKeys.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#011901]">
                <th className="px-4 py-3 text-left">ID da Key</th>
                <th className="px-4 py-3 text-left">Tipo</th>
                <th className="px-4 py-3 text-left">Plano</th>
                <th className="px-4 py-3 text-left">Data de Criação</th>
                <th className="px-4 py-3 text-left">Tempo Restante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#079D3B]">
              {filteredKeys.map((key) => (
                <tr key={key.id} className="hover:bg-[#011901]">
                  <td className="px-4 py-3 font-mono">{key.id}</td>
                  <td className="px-4 py-3">{key.tipo}</td>
                  <td className="px-4 py-3">{key.plano}</td>
                  <td className="px-4 py-3">{new Date(key.dataCriacao).toLocaleDateString('pt-BR')}</td>
                  <td className="px-4 py-3">{getRemainingTime(key.fim)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-lg">Nenhuma key encontrada</p>
          <p className="mt-2">Compre um produto para receber sua key</p>
        </div>
      )}
    </div>
  );
}

export default KeyManager;