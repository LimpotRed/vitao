import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600">Fragrâncias Premium</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent">
                  Perfumes Árabes
                </span>
                <br />
                <span className="text-gray-800">de Luxo</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra a elegância e sofisticação dos autênticos perfumes árabes. 
                Uma experiência sensorial única que desperta seus sentidos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setActiveSection('produtos')}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-700 hover:from-purple-700 hover:to-fuchsia-800 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explorar Produtos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => setActiveSection('contato')}
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
              >
                Fale Conosco
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-amber-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                className="relative z-10 w-full h-auto max-h-[450px] object-cover rounded-3xl shadow-2xl"
                alt="Perfume árabe vermelho Baroque Rouge Extrait"
               src="https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/73b356c152c5d40a5cace14b0df6d233.png" />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-gray-600">Produtos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;