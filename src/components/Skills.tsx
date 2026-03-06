'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0f172a]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4" variants={fadeInUp}>
            Skills & Tools
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
            variants={fadeInUp}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="bg-[#0f172a] rounded-xl p-6 border border-white/5 hover:border-cyan-500/20 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
