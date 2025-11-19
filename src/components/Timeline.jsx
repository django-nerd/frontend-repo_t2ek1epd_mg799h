import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
  { year: '2021', title: 'Graduated', desc: 'Computer Science degree with honors', icon: GraduationCap },
  { year: '2022', title: 'Internship', desc: 'Frontend Engineer Intern, built component libraries', icon: Briefcase },
  { year: '2023', title: 'Full-time', desc: 'Software Engineer, shipped production features', icon: Calendar },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Journey Through the Rooms
        </motion.h2>

        <div className="mt-12 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-blue-500/30">
          {timeline.map((t, i) => {
            const Icon = t.icon
            const side = i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
            return (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} py-6`}
              >
                <div className={`bg-slate-800/60 border border-blue-500/20 rounded-xl p-5 ${side}`}>
                  <div className="text-blue-300 text-sm">{t.year}</div>
                  <div className="flex items-start gap-3 mt-1">
                    <Icon className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">{t.title}</div>
                      <div className="text-blue-200/80 text-sm">{t.desc}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
