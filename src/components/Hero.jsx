import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const nextRef = useRef(null)

  const scrollToNext = () => {
    const el = document.getElementById('entrance')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-widest text-blue-200/90 backdrop-blur-md"
            >
              Welcome to the house of
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300/70">
              BEDACHARI'S HOUSE
            </h1>
            <p className="mt-5 text-blue-200/90 max-w-2xl mx-auto">
              Step inside an interactive portfolio. Explore rooms filled with skills, framed achievements, and playful objects that tell the story behind the craft.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToNext}
                className="pointer-events-auto rounded-xl bg-blue-500/90 text-white px-5 py-3 shadow-lg shadow-blue-500/20 hover:bg-blue-500"
              >
                Enter the House
              </motion.button>
              <a href="#achievements" className="pointer-events-auto text-blue-200 hover:text-white underline/30 hover:underline">
                View Achievements
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
