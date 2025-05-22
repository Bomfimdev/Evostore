import axios from 'axios';

// Configurando axios com a URL base do backend
const apiUrl = 'http://localhost:8080'; // URL do backend Spring Boot

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Endpoints de keys
export const keysApi = {
  // Criar uma nova key
  createKey: (keyData) => api.post('/keys', keyData),
  
  // Obter todas as keys
  getAllKeys: () => api.get('/keys'),
  
  // Obter detalhes de uma key específica
  getKey: (id) => api.get(`/keys/${id}`),
  
  // Excluir uma key
  deleteKey: (id) => api.delete(`/keys/${id}`),
};

// Endpoints de sessões
export const sessionsApi = {
  // Criar uma nova sessão para uma key
  createSession: (sessionData) => api.post('/sessions', sessionData),
  
  // Obter sessões de uma key específica
  getSessionsByKey: (keyId) => api.get(`/sessions/${keyId}`),
};

export default api;