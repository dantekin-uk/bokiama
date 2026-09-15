import React from 'react'
import Hero from '../components/Hero'
import WordingPlane from '../components/WordingPlane'
import Pillers from '../components/Pillers'
import CTA from '../components/CTA'
import Globe from '../components/Globe'
import Services from '../components/Services'

const Home = () => {
  return (
    <main>
      <Hero />

      <WordingPlane />

      {/* Pillers Section */}
      <Pillers />

      {/* Recommended Services Section */}
      <Services />

      {/* Globe Section */}
      <Globe />

      {/* CTA Section */}
      <CTA
        title="Ready to architect your journey?"
        text="Speak with our local experts today and let us build a seamless, hyper-personalized narrative designed entirely around your passions."
        button="Begin Your Consultation"
      />

      {/* Features/Stats Section */}
    </main>
  )
}

export default Home
