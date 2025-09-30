"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Service } from "@/types";

export default function ServicesPage() {
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
          <h1 className="heading-1 text-white mb-4">Serviços</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços em design de interiores
            para transformar seus espaços em ambientes únicos e funcionais.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service: Service, index: number) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={`https://picsum.photos/800/600?random=service-${index}`}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-medium group-hover:text-gray-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Como Trabalhamos</h2>
            <p className="body-text max-w-2xl mx-auto">
              Nosso processo é estruturado para garantir que cada projeto seja
              executado com excelência e atenção aos detalhes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                description:
                  "Conversamos sobre suas necessidades, estilo e expectativas para o projeto.",
              },
              {
                step: "02",
                title: "Desenvolvimento",
                description:
                  "Criamos o conceito e desenvolvemos o projeto detalhado com plantas e especificações.",
              },
              {
                step: "03",
                title: "Execução",
                description:
                  "Acompanhamos toda a execução do projeto, garantindo qualidade e prazos.",
              },
              {
                step: "04",
                title: "Entrega",
                description:
                  "Realizamos a entrega final com todos os detalhes finalizados e ambiente pronto.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="text-4xl font-light text-gray-300 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Pronto para Transformar seu Espaço?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos conversar sobre seu próximo
              projeto. Estamos aqui para tornar sua visão realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="btn-primary bg-white text-black hover:bg-gray-100"
              >
                Iniciar Projeto
              </Link>
              <Link
                href="/projetos"
                className="btn-secondary border-white text-white hover:bg-white hover:text-black"
              >
                Ver Projetos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
