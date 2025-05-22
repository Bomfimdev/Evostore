import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import KeyManagement from './pages/KeyManagement';

function App() {
  const [purchasedKeys, setPurchasedKeys] = useState([]);

  const addPurchasedKey = (key) => {
    setPurchasedKeys([...purchasedKeys, key]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#011901] text-white flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home onPurchase={addPurchasedKey} />} />
            <Route path="/product/:productId" element={<ProductDetail onPurchase={addPurchasedKey} />} />
            <Route path="/keys" element={<KeyManagement purchasedKeys={purchasedKeys} />} />
          </Routes>
        </main>
        <footer className="bg-[#011901] border-t border-[#02B045] py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} EvoStore. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;