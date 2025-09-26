import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-fuchsia-100">
      <Helmet>
        <title>Calisse Perfumery - Perfumes Árabes Premium</title>
        <meta name="description" content="Descubra a elegância dos perfumes árabes na Calisse Perfumery. Oferecemos uma seleção exclusiva de fragrâncias, cremes, desodorantes e produtos de beleza premium." />
      </Helmet>
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero setActiveSection={setActiveSection} />
            <About />
          </motion.div>
        )}
        
        {activeSection === 'produtos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Products />
          </motion.div>
        )}
        
        {activeSection === 'contato' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        )}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;