import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Sparkles, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Paixão pela Beleza',
      description: 'Dedicados a oferecer produtos que realçam sua beleza natural e autoestima.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas os melhores perfumes árabes e produtos de autocuidado.'
    },
    {
      icon: Sparkles,
      title: 'Experiência Única',
      description: 'Cada fragrância conta uma história e desperta sensações especiais.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe está sempre pronta para ajudar você a encontrar o produto ideal.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
              Sobre a Calisse Perfumery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Calisse Perfumery, acreditamos que cada pessoa merece se sentir especial e confiante. 
            Oferecemos uma coleção cuidadosamente selecionada de perfumes árabes autênticos, 
            cremes hidratantes, desodorantes premium e produtos de beleza que transformam 
            sua rotina de autocuidado em um ritual de luxo.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;