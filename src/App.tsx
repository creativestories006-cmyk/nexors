import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import IntroSection from './components/IntroSection'
import CourseMarketplace from './components/CourseMarketplace'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-void">
      <Preloader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <IntroSection />
            <CourseMarketplace />
            <Pricing />
            <FinalCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
