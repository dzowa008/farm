import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WhoWeAre from '../components/WhoWeAre'
import ServicesShowcase from '../components/ServicesShowcase'
import History from '../components/History'
import CtaBanner from '../components/CtaBanner'
import TestimonialsPro from '../components/TestimonialsPro'
import AboutServicesStrip from '../components/AboutServicesStrip'
import AboutGreenBlock from '../components/AboutGreenBlock'

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        bg="/about.jpg"
        badge=""
        titleLine1="about us"
        titleLine2=""
        subtitle=""
        ctaLabel=""
      />
      <WhoWeAre />
      <AboutServicesStrip />
      <AboutGreenBlock />
      {/* <Spotlight /> */}
      <History />
      <CtaBanner />
      <TestimonialsPro />
      <Footer />
    </>
  )
}
