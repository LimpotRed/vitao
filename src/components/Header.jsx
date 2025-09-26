import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleMobileLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-purple-100"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  className="w-full h-full object-contain" 
                  alt="Logo da Calisse Perfumery" 
                  src="https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/chatgpt-image-26-de-set.-de-2025-14_40_36-yNglx.png" 
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
                Calisse Perfumery
              </span>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-gray-700 hover:text-purple-600 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-purple-800">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-purple-600 p-1">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {menuItems.filter(item => item.id !== 'home').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileLinkClick(item.id)}
                    className={`text-left text-lg py-3 px-4 rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700 font-semibold'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;