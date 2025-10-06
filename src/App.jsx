import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import HistoryPage from './pages/HistoryPage'
import Team from './pages/Team'
import Faq from './pages/Faq'
import Services from './pages/Services'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '/'
  if (path.includes('contact')) return <Contact />
  if (path.includes('blog')) return <BlogPage />
  if (path.includes('services')) return <Services />
  if (path.includes('faq')) return <Faq />
  if (path.includes('team')) return <Team />
  if (path.includes('history')) return <HistoryPage />
  if (path.includes('about')) return <About />
  return <Home />
}
