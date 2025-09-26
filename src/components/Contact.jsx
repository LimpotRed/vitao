import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo = [
    { icon: Mail, text: 'calisseperfumes@gmail.com', label: 'E-mail' },
    { icon: Phone, text: '+55 62 8230-9207', label: 'Telefone' },
    { icon: MapPin, text: 'Goiânia, Goiás (Entregamos em todo o país)', label: 'Localização' },
    { icon: Clock, text: '06:00 - 22:00 (Todos os dias)', label: 'Atendimento' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mensagem de Contato de ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:calisseperfumes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
              Fale Conosco
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white p-3 rounded-full shadow-lg">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">{item.label}</p>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300" 
                  placeholder="Seu nome completo" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300" 
                  placeholder="seu.email@exemplo.com" 
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300" 
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-700 hover:from-purple-700 hover:to-fuchsia-800 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;