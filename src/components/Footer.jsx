import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Instagram, Facebook } from 'lucide-react';
const MessageCircle = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>;
const Footer = () => {
  const socialLinks = [{
    icon: Instagram,
    href: 'https://www.instagram.com/calisseoficial/'
  }, {
    icon: Facebook,
    href: 'https://www.facebook.com/106904877544074'
  }, {
    icon: MessageCircle,
    href: 'http://wa.me/5562982309207'
  }];
  return <footer className="bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img className="w-full h-full object-contain" alt="Logo da Calisse Perfumery" src="https://horizons-cdn.hostinger.com/47f5b32a-28b1-4a37-bd41-6bb7508091a4/chatgpt-image-26-de-set.-de-2025-15_08_23-JMGu9.png" />
              </div>
              <span className="text-2xl font-bold">Calisse Perfumery</span>
            </div>
            <p className="text-purple-100 leading-relaxed">
              Sua loja especializada em perfumes árabes premium e produtos de beleza. 
              Transformamos sua rotina de autocuidado em um ritual de luxo.
            </p>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="space-y-4">
            <span className="text-xl font-semibold">Siga-nos</span>
            <p className="text-purple-100">
              Acompanhe nossas novidades e dicas de beleza nas redes sociais
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <social.icon className="w-6 h-6" />
                </a>)}
            </div>
          </motion.div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-purple-300/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-100 text-center md:text-left">
              © 2025 Calisse Perfumery. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-purple-100">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-fuchsia-400 fill-current" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;