"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Project } from "@/types";

export default function ProjectsPage() {
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
          <h1 className="heading-1 text-white mb-4">Projetos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma seleção dos nossos trabalhos mais recentes, onde cada projeto
            conta uma história única de design e funcionalidade.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
        </div>
      </section>
    </div>
  );
}
