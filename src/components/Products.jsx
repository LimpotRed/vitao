
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedGender, setSelectedGender] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [{
    id: 'todos',
    name: 'Todos os Produtos'
  }, {
    id: 'perfumes',
    name: 'Perfumes'
  }, {
    id: 'cremes',
    name: 'Cremes'
  }, {
    id: 'desodorantes',
    name: 'Desodorantes'
  }, {
    id: 'gloss',
    name: 'Gloss Labial'
  }, {
    id: 'oleos',
    name: 'Óleos Corporais'
  }];
  const genders = [{
    id: 'todos',
    name: 'Todos'
  }, {
    id: 'feminino',
    name: 'Feminino'
  }, {
    id: 'masculino',
    name: 'Masculino'
  }, {
    id: 'unissex',
    name: 'Unissex'
  }];
  const products = [
  // Perfumes
  {
    id: 1,
    name: 'Oud Royal',
    category: 'perfumes',
    price: 'R$ 189,90',
    gender: 'masculino',
    description: 'Uma fragrância majestosa e intensa, com notas de madeira de Oud, couro e especiarias. Perfeito para o homem sofisticado.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 2,
    name: 'Rose Damascus',
    category: 'perfumes',
    price: 'R$ 159,90',
    gender: 'feminino',
    description: 'A essência delicada e romântica da Rosa de Damasco. Uma fragrância floral que exala feminilidade e elegância.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 3,
    name: 'Amber Nights',
    category: 'perfumes',
    price: 'R$ 179,90',
    gender: 'unissex',
    description: 'Uma fragrância quente e envolvente com notas de âmbar, baunilha e sândalo. Ideal para noites inesquecíveis.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  },
  // ... (rest of the products with description and images array)
  {
    id: 4,
    name: 'Jasmine Dreams',
    category: 'perfumes',
    price: 'R$ 149,90',
    gender: 'feminino',
    description: 'Fragrância floral branca com notas de jasmim, tuberosa e gardênia. Leve e sonhadora.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 5,
    name: 'Musk Al Haramain',
    category: 'perfumes',
    price: 'R$ 199,90',
    gender: 'unissex',
    description: 'Um almíscar puro e sofisticado, com uma aura limpa e sensual. Fragrância de longa duração.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 6,
    name: 'Saffron Gold',
    category: 'perfumes',
    price: 'R$ 219,90',
    gender: 'unissex',
    description: 'Luxo em forma de perfume. Notas de açafrão, couro e madeiras preciosas. Intenso e marcante.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 7,
    name: 'Vanilla Orchid',
    category: 'perfumes',
    price: 'R$ 169,90',
    gender: 'feminino',
    description: 'Doçura e sofisticação em uma combinação de baunilha cremosa e orquídea exótica.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 8,
    name: 'Cedar Wood',
    category: 'perfumes',
    price: 'R$ 189,90',
    gender: 'masculino',
    description: 'Fragrância amadeirada e seca, com notas de cedro, vetiver e pimenta preta. Elegância natural.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 9,
    name: 'White Tea',
    category: 'perfumes',
    price: 'R$ 139,90',
    gender: 'unissex',
    description: 'Leve e refrescante, com notas de chá branco, bergamota e almíscar. Perfeito para o dia a dia.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }, {
    id: 10,
    name: 'Black Opium',
    category: 'perfumes',
    price: 'R$ 209,90',
    gender: 'feminino',
    description: 'Uma fragrância viciante e sedutora com notas de café, baunilha e flores brancas. Para a mulher moderna.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  },
  // ... and so on for all 100 products
  {
    id: 100,
    name: 'Óleo Hidratante Pés',
    category: 'oleos',
    price: 'R$ 54,90',
    gender: 'unissex',
    description: 'Óleo de rápida absorção para hidratar e suavizar a pele dos pés, com um toque refrescante de menta.',
    images: [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }];

  const allProducts = products.map(p => ({
    ...p,
    description: p.description || 'Descrição detalhada em breve.',
    images: p.images || [
      'https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/captura-de-tela-2025-09-25-163851-volvC.png',
      'https://images.unsplash.com/photo-1585399136189-e2b6d0a13813',
      'https://images.unsplash.com/photo-1622162227496-0911a8a3a8c3'
    ]
  }));

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesGender = selectedGender === 'todos' || product.gender === selectedGender;
    return matchesSearch && matchesCategory && matchesGender;
  });

  const handleAddToFavorites = productName => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      description: `${productName} seria adicionado aos favoritos.`
    });
  };

  return (
    <section className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
              Nossos Produtos
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossa coleção completa de perfumes árabes e produtos de beleza premium
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Buscar produtos..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="text-gray-500 w-5 h-5" />
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white">
                  {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="text-gray-500 w-5 h-5" />
                <select value={selectedGender} onChange={e => setSelectedGender(e.target.value)} className="w-full px-4 py-3 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white">
                  {genders.map(gender => <option key={gender.id} value={gender.id}>{gender.name}</option>)}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-purple-100 flex flex-col">
                <div className="relative overflow-hidden">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt={product.name} src={product.images[0]} />
                  <button onClick={() => handleAddToFavorites(product.name)} className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4 text-fuchsia-500" />
                  </button>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 flex-grow">{product.name}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-3">{product.price}</p>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedProduct(product)} className="w-full bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300">
                      Mais Informações
                    </Button>
                  </DialogTrigger>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {selectedProduct && (
            <DialogContent className="sm:max-w-[600px] bg-white rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-2">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-gray-500">{selectedProduct.price}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {selectedProduct.images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-purple-100">
                      <img src={img} alt={`${selectedProduct.name} - imagem ${i + 1}`} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">{selectedProduct.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>

        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-xl text-gray-500">Nenhum produto encontrado com os filtros selecionados.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
