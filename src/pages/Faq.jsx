import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FaqAccordion from '../components/FaqAccordion'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function Faq() {
  return (
    <>
      <Navbar />
      <Hero bg="/about.jpg" badge="Faq" titleLine1="Faq" titleLine2="" subtitle="" ctaLabel="" />
      <FaqAccordion />
      <CtaBanner />
      <Footer />
    </>
  )
}
