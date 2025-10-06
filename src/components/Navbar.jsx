import React, { useState, useRef, useEffect } from 'react'
import { FiPhoneCall, FiSearch, FiArrowRight, FiChevronDown } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/#products', label: 'Products' },
    { href: '/#why', label: 'Why Us' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="absolute top-5 inset-x-0 z-50">
      <div className="w-full px-0 h-10 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Farm logo" className="h-8 w-20 object-contain ml-6" />
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm ml-4 mr-auto">
          {/* Home */}
          <a href="/" className="group inline-flex items-center text-white hover:text-amber-200 relative pl-3">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[6px] rounded-full bg-amber-300 group-hover:bg-amber-200"></span>
            Home
          </a>

          {/* Pages dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-1 text-white hover:text-amber-200 pl-3"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              Pages
              <FiChevronDown 
                size={14} 
                aria-hidden 
                className={`mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`transition-all duration-150 absolute left-0 mt-2 w-44 rounded-lg bg-white text-green-900 shadow-lg ring-1 ring-black/5 ${
                isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <a href="/about" className="block px-4 py-2 hover:bg-amber-50" onClick={() => setIsOpen(false)}>About</a>
              <a href="/history" className="block px-4 py-2 hover:bg-amber-50" onClick={() => setIsOpen(false)}>Our History</a>
              <a href="/team" className="block px-4 py-2 hover:bg-amber-50" onClick={() => setIsOpen(false)}>Team Member</a>
              <a href="/faq" className="block px-4 py-2 hover:bg-amber-50" onClick={() => setIsOpen(false)}>FAQ</a>
              
            </div>
          </div>

          {/* Other navigation links */}
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="group inline-flex items-center text-white hover:text-amber-200 relative pl-3"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[6px] rounded-full bg-amber-300 group-hover:bg-amber-200"></span>
              {link.label}
            </a>
          ))}

          {/* Call + Search placed inline with nav links */}
          <div className="hidden lg:flex items-center gap-2 ml-36">
            <FiPhoneCall className="text-amber-300" size={22} aria-hidden />
            <div className="leading-tight">
              <div className="text-[11px] text-green-100">Call us Now</div>
              <div className="text-sm font-semibold text-white">+1(212)255-511</div>
            </div>
          </div>
          <button className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-900 shadow-lg shadow-black/10">
            <FiSearch size={16} aria-hidden />
            <span className="sr-only">Search</span>
          </button>
        </nav>

        <div className="flex items-center justify-end">
          <div className="hidden sm:flex items-center justify-center absolute right-[3px] -top-6 z-50 bg-[#F6F7EE] w-[160px] h-[110px] rounded-bl-[40px]">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-300 text-green-900 font-semibold px-5 py-2.5 hover:bg-amber-200 pointer-events-auto">
              Get In Touch
            </a>
          </div>
          {/* Image below the top-right box */}
          <img
            src="/SVG.png"
            className="hidden sm:block absolute right-0 top-[85px] z-40 w-[40px] h-[40px]"
          />
          <img
            src="/SVG.png"
            alt="Decorative"
            className="hidden sm:block absolute right-[155px] -top-3 z-40 w-[40px] h-[40px]"
          />
        </div>
      </div>
    </header>
  )
}