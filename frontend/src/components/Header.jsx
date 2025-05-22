import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#011901] border-b border-[#02B045] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-[#02B045]">EvoStore</h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#02B045] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#02B045] transition duration-200">
              Produtos
            </Link>
            <Link to="/keys" className="text-white hover:text-[#02B045] transition duration-200">
              Gerenciar Keys
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#02B045]">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-[#02B045] transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                to="/keys"
                className="text-white hover:text-[#02B045] transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Gerenciar Keys
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;