import CallToAction from './components/CallToAction'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Nutrition from './components/Nutrition'
import Schedule from './components/Schedule'
import Testimonials from './components/Testimonials'
import WorkoutPlans from './components/WorkoutPlans'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-void text-paper">
      <Navbar />
      <main>
        <Hero />
        <WorkoutPlans />
        <Schedule />
        <Nutrition />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
