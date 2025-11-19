import Hero from './components/Hero'
import Entrance from './components/Entrance'
import Rooms from './components/Rooms'
import Achievements from './components/Achievements'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with interactive 3D scene */}
      <Hero />

      {/* Story: entering the house */}
      <Entrance />

      {/* Rooms showcasing skills & hobbies as objects */}
      <Rooms />

      {/* Framed achievements on the wall */}
      <Achievements />

      {/* Journey timeline */}
      <Timeline />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-blue-200/70">
          Crafted for Bedachari • Built with modern web tech • Interactive & playful
        </div>
      </footer>
    </div>
  )
}

export default App
