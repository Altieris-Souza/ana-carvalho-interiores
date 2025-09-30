"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import { Project } from "@/types";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project: Project | undefined = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Projeto não encontrado</h1>
          <Link href="/projetos" className="btn-primary">
            Voltar aos Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/projetos"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Voltar aos Projetos</span>
        </Link>
      </div>

      {/* Project Header */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">{project.title}</h1>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              {project.description}
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-600">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-2 mb-8">Sobre o Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-2">Categoria</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ano</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Localização</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </div>
            <Link href="/contato" className="btn-primary">
              Inicie Seu Projeto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
