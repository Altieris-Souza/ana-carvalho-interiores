"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Project } from "@/types";

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">Projetos em Destaque</h2>
          <p className="body-text max-w-2xl mx-auto">
            Cada projeto é uma história única, contada através do design,
            funcionalidade e atenção aos detalhes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/projetos/${project.id}`}>
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="heading-3 group-hover:text-gray-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-light">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projetos" className="btn-secondary">
            Ver Todos os Projetos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
