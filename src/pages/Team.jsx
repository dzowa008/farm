import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TeamGrid from '../components/TeamGrid'
import Footer from '../components/Footer'

export default function Team() {
  return (
    <>
      <Navbar />
      <Hero bg="/about.jpg" badge="Our Team Member" titleLine1="Our Team Member" titleLine2="" subtitle="" ctaLabel="" />
      <TeamGrid />
      <Footer />
    </>
  )
}
