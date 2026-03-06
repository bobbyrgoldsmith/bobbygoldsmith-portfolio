'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0f172a]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4" variants={fadeInUp}>
            Experience
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
            variants={fadeInUp}
          />
        </motion.div>

        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent transform md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={fadeInUp}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-2 ring-4 ring-[#0a0a0a]" />

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="bg-[#0f172a] rounded-xl p-6 border border-white/5">
                  <span className="text-cyan-400 text-sm font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white mt-1">{exp.role}</h3>
                  <p className="text-slate-400 text-sm mb-4">{exp.company}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-2">
                        <span className="text-cyan-500 mt-1 flex-shrink-0">&#8226;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
