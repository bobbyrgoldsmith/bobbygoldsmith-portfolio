'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
            variants={fadeInUp}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                I started my career in 2012 managing e-commerce operations at 4 Wheel Parts, where I quickly
                discovered that the biggest bottleneck wasn't the technology — it was the lack of systematic
                testing. That realization kicked off a 12-year arc from operations specialist to QA Lead,
                building automation frameworks, leading release processes, and driving quality across web,
                mobile, and API platforms.
              </p>
              <p>
                Along the way, I earned my Scrum Master certification, architected end-to-end test automation
                with Playwright and Selenium, implemented performance testing with JMeter, and integrated QA
                into CI/CD pipelines. I reduced regression cycles by 60% and managed releases with zero
                critical production incidents.
              </p>
              <p>
                In 2024, I founded NodeBridge Automation Solutions to take everything I'd learned and apply it
                at a broader scale. Today I'm building MCP-based QA intelligence tools, orchestrating autonomous
                agent systems, and consulting with engineering teams on automation strategy. My focus is at the
                intersection of QA, DevOps, and AI — where the most interesting problems live.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="bg-[#0f172a] rounded-xl p-6 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">At a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: 'Experience', value: '13+ Years' },
                  { label: 'Current Role', value: 'Principal Consultant' },
                  { label: 'Company', value: 'NodeBridge Automation' },
                  { label: 'Previous', value: 'QA Lead, 4 Wheel Parts' },
                  { label: 'Certification', value: 'Scrum Master (CSM)' },
                  { label: 'Location', value: 'Los Angeles, CA' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start">
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
