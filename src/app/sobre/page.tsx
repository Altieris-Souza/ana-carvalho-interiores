"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white z-10"
        >
          <h1 className="heading-1 text-white mb-4">Sobre</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça a história e filosofia por trás do Studio Ana Carvalho.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://picsum.photos/800/1000?random=ana-sobre"
                  alt="Ana Carvalho - Designer de Interiores"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black opacity-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-2 mb-6">Ana Carvalho</h2>
                <p className="body-text mb-6">
                  Com mais de 7 anos de experiência em design de interiores, Ana
                  Carvalho dedica-se a transformar espaços em ambientes únicos e
                  funcionais. Sua paixão pelo design começou cedo, quando
                  percebeu o poder transformador que um ambiente bem projetado
                  pode ter na vida das pessoas.
                </p>
                <p className="body-text mb-6">
                  Formada em Design de Interiores, Ana especializou-se em
                  projetos residenciais e comerciais, sempre buscando a perfeita
                  harmonia entre estética e funcionalidade. Sua abordagem
                  combina tendências contemporâneas com elementos atemporais.
                </p>
                <p className="body-text mb-8">
                  Acredita que cada espaço deve contar uma história e refletir a
                  personalidade de quem o habita. Por isso, cada projeto é
                  único, desenvolvido com atenção aos detalhes e cuidado
                  especial com as necessidades e desejos de cada cliente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Especialidades</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Design de Interiores Residenciais</li>
                    <li>• Projetos Comerciais</li>
                    <li>• Reformas e Renovações</li>
                    <li>• Consultoria em Decoração</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Experiência</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• +7 anos de experiência</li>
                    <li>• Mais de 150 projetos realizados</li>
                    <li>• Especialização em espaços residenciais</li>
                    <li>• Projetos comerciais de grande porte</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-8">Filosofia de Trabalho</h2>
            <p className="body-text mb-8">
              &ldquo;Acredito que o design de interiores vai além da estética. É sobre
              criar espaços que inspirem, confortem e reflitam a essência de
              quem os habita. Cada projeto é uma oportunidade de transformar não
              apenas um ambiente, mas também a experiência de vida das pessoas.&rdquo;
            </p>
            <div className="text-lg text-gray-600 font-light italic">
              — Ana Carvalho
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Nossos Valores</h2>
            <p className="body-text max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e garantem a excelência em
              cada projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalização",
                description:
                  "Cada projeto é único e desenvolvido especialmente para atender às necessidades e desejos específicos de cada cliente.",
              },
              {
                title: "Qualidade",
                description:
                  "Utilizamos apenas os melhores materiais e técnicas para garantir durabilidade e excelência em cada detalhe.",
              },
              {
                title: "Inovação",
                description:
                  "Estamos sempre atualizados com as últimas tendências e tecnologias para oferecer soluções modernas e funcionais.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
