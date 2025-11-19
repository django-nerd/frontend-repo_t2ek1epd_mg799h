import { motion } from 'framer-motion'
import { Award, Medal, Star, Trophy, Sparkles } from 'lucide-react'

const achievements = [
  {
    title: 'National Coding Challenge Finalist',
    detail: 'Built a full-stack app in 24 hours with real-time features.'
  },
  {
    title: 'Open Source Contributor',
    detail: 'Merged PRs to popular React ecosystem libraries.'
  },
  {
    title: 'University Top Performer',
    detail: 'Graduated with honors and led the developer club.'
  },
  {
    title: 'Hackathon Winner',
    detail: 'Awarded for best UX and innovation in a 500+ participant event.'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Framed Achievements on the Wall
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-slate-800/40 to-slate-900 p-6"
            >
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-amber-300" />
                <div>
                  <div className="text-white font-semibold">{a.title}</div>
                  <div className="text-blue-200/80 text-sm mt-1">{a.detail}</div>
                </div>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 w-16 h-16 text-amber-300/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
