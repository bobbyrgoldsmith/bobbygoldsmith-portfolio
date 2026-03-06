'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4" variants={fadeInUp}>
            Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
            variants={fadeInUp}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project) => {
            const Card = (
              <motion.div
                key={project.title}
                className="group bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <div className="h-1" style={{ backgroundColor: project.accent }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-1 rounded-full border whitespace-nowrap ml-3"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                        backgroundColor: `${project.accent}10`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  {project.url && (
                    <div className="mt-4">
                      <span className="text-cyan-400 text-sm group-hover:underline">
                        View Project &rarr;
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )

            return project.url ? (
              <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer">
                {Card}
              </a>
            ) : (
              <div key={project.title}>{Card}</div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
