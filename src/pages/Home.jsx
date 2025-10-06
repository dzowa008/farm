import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import WhoWeAre from '../components/WhoWeAre'
import ServicesShowcase from '../components/ServicesShowcase'
import ChoosePerfect from '../components/ChoosePerfect'
import GalleryStrip from '../components/GalleryStrip'
import TestimonialsPro from '../components/TestimonialsPro'
import BrandStrip from '../components/BrandStrip'
import Spotlight from '../components/Spotlight'
import History from '../components/History'
import CtaBanner from '../components/CtaBanner'
import LatestBlog from '../components/LatestBlog'
import Footer from '../components/Footer'
// import Services from '../components/Services'
// import Products from '../components/Products'
// import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
// import Stats from '../components/Stats'
// import CTA from '../components/CTA'
// import Blog from '../components/Blog'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <WhoWeAre />
      <ServicesShowcase />
      <ChoosePerfect />
      <GalleryStrip />
      <TestimonialsPro />
      <BrandStrip />
      <Spotlight />
      <History />
      <CtaBanner />
      <LatestBlog />
      <Footer />
        
      {/* <Services />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Stats />
      <CTA />
      <Blog />
      <Footer /> */}
    </>
  )
}
