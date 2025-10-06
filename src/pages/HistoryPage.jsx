import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HistoryIntro from '../components/HistoryIntro'
import KeywordMarquee from '../components/KeywordMarquee'
import History from '../components/History'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <Hero bg="/about.jpg" badge="Our History" titleLine1="Our History" titleLine2="" subtitle="" ctaLabel="" />
      <HistoryIntro />
      <KeywordMarquee />
      <History />
      <CtaBanner />
      <Footer />
    </>
  )
}
