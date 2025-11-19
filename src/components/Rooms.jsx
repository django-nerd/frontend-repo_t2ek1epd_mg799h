import { motion } from 'framer-motion'
import { Code2, Cpu, Braces, Atom, Boxes, Cog, Database, Palette, Rocket, Gamepad2, Trophy } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'JavaScript', level: 'Expert' },
  { icon: Braces, label: 'C / C++', level: 'Advanced' },
  { icon: Atom, label: 'React', level: 'Advanced' },
  { icon: Palette, label: 'CSS / Tailwind', level: 'Advanced' },
  { icon: Cpu, label: 'Python', level: 'Advanced' },
  { icon: Database, label: 'MongoDB', level: 'Intermediate' },
  { icon: Boxes, label: 'Data Structures', level: 'Advanced' },
  { icon: Cog, label: 'System Design', level: 'Intermediate' }
]

const hobbies = [
  { icon: Gamepad2, title: 'Cricket', note: 'Weekend league opener' },
  { icon: Rocket, title: 'Hackathons', note: 'Rapid prototyping' },
]

export default function Rooms() {
  return (
    <section id="rooms" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Rooms of Skills & Passions
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, label, level }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/60 to-slate-900 p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_55%)]" />
              <Icon className="w-8 h-8 text-blue-300" />
              <div className="mt-4">
                <div className="text-white font-semibold">{label}</div>
                <div className="text-blue-200/70 text-sm">{level}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {hobbies.map(({ icon: Icon, title, note }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/60 to-slate-900 p-6"
            >
              <div className="flex items-start gap-4">
                <Icon className="w-7 h-7 text-blue-300" />
                <div>
                  <div className="text-white font-semibold">{title}</div>
                  <div className="text-blue-200/70 text-sm">{note}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
