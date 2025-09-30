"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
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
                src="https://picsum.photos/800/1000?random=ana"
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
              <h2 className="heading-2 mb-6">Sobre Ana Carvalho</h2>
              <p className="body-text mb-6">
                Com mais de 7 anos de experiência em design de interiores, Ana
                Carvalho dedica-se a transformar espaços em ambientes únicos e
                funcionais. Sua abordagem combina estética contemporânea com
                funcionalidade prática.
              </p>
              <p className="body-text mb-8">
                Especializada em projetos residenciais e comerciais, Ana
                acredita que cada ambiente deve contar uma história e refletir a
                personalidade de quem o habita.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-700">Designer de Interiores</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-700">+7 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-700">
                  Projetos residenciais e comerciais
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-700">Abordagem personalizada</span>
              </div>
            </div>

            <Link href="/sobre" className="btn-primary inline-block">
              Conheça Mais
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
