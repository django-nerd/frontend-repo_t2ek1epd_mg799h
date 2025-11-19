import { motion } from 'framer-motion'
import { DoorOpen, Footprints, ArrowDownCircle } from 'lucide-react'

export default function Entrance() {
  return (
    <section id="entrance" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Entering the House</h2>
            <p className="mt-4 text-blue-200/80">
              The door opens and you step into a world where each room represents a part of Bedachari's journey. Follow the glowing path to discover languages, frameworks, and passions.
            </p>
            <div className="mt-6 flex items-center gap-4 text-blue-200/80">
              <DoorOpen className="w-6 h-6" />
              <Footprints className="w-6 h-6" />
              <ArrowDownCircle className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-slate-800/40 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.12),transparent_55%)]"></div>
              <div className="absolute bottom-3 right-3 text-xs text-blue-200/70">Scene: Entrance Hall</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
