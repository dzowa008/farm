import React, { useState, useRef, useEffect } from 'react';
import { FiPhoneCall, FiSearch, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  ];

  return (
    <header className="absolute top-5 inset-x-0 z-50">
      <div className="w-full px-4 h-14 flex items-center justify-between text-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Farm logo" className="h-8 w-20 object-contain ml-2" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm ml-4 mr-auto">
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

          {/* Other nav links */}
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

          {/* Call + Search */}
          <div className="hidden lg:flex items-center gap-2 ml-36">
            <FiPhoneCall className="text-amber-300" size={22} aria-hidden />
            <div className="leading-tight">
              <div className="text-[11px] text-green-100">Call us Now</div>
              <div className="text-sm font-semibold text-white">+(263)78-763-090</div>
            </div>
          </div>
          <button className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-900 shadow-lg shadow-black/10">
            <FiSearch size={16} aria-hidden />
            <span className="sr-only">Search</span>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Contact Button */}
        <div className="hidden sm:flex items-center justify-center absolute right-[3px] -top-6 z-50 bg-[#F6F7EE] w-[160px] h-[70px] rounded-bl-[40px]">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-300 text-green-900 font-semibold px-5 py-2.5 hover:bg-amber-200 pointer-events-auto"
          >
            Get In Touch
          </a>
        </div>

        {/* Decorative images */}
        <img
          src="/SVG.png"
          className="hidden sm:block absolute right-0 top-[45px] z-40 w-[40px] h-[40px]"
        />
        <img
          src="/SVG.png"
          alt="Decorative"
          className="hidden sm:block absolute right-[155px] -top-3 z-40 w-[40px] h-[40px]"
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-green-900 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-200">Home</a>

          {/* Pages dropdown in mobile */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-1 hover:text-amber-200"
            >
              Pages
              <FiChevronDown
                size={14}
                className={`mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2 text-sm">
                <a href="/about" className="hover:text-amber-200">About</a>
                <a href="/history" className="hover:text-amber-200">Our History</a>
                <a href="/team" className="hover:text-amber-200">Team Member</a>
                <a href="/faq" className="hover:text-amber-200">FAQ</a>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2 pt-4 border-t border-green-800 w-full">
            <FiPhoneCall className="text-amber-300" size={22} />
            <div>
              <div className="text-[11px] text-green-100">Call us Now</div>
              <div className="text-sm font-semibold text-white">+(263)78-763-090</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
