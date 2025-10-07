import React, { useState, useEffect } from 'react'
import { FiGlobe, FiSettings, FiTruck } from 'react-icons/fi'

// --- 1. NEW: Define Google Fonts Import and Font Family Variables ---
const FontImports = `
  /* Import Inter from Google Fonts for a modern, clean look */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  :root {
    --font-primary: 'Inter', sans-serif;
  }
`;

// Define a keyframe for the marquee animation and the high-contrast styles.
const MarqueeStyles = `
  /* Apply the new font globally to the section */
  section {
    font-family: var(--font-primary);
  }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .word-outline {
    /* White fill for the text body */
    color: white; 
    /* Black 1px stroke */
    -webkit-text-stroke: 1px black; 
    text-stroke: 1px black;
    /* Fallback color */
    text-shadow: 1px 1px 0 black; 
  }

  .solid-black-asterisk {
    /* Solid black color for the asterisk */
    color: black; 
    -webkit-text-stroke: none;
    text-stroke: none;
    text-shadow: none;
  }
`;

export default function WhoWeAre() {
  const [harvestCount, setHarvestCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = React.useRef(null)
  const targetNumber = 435

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let startTimestamp
            const duration = 2000

            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp
              const progress = timestamp - startTimestamp
              const percentage = Math.min(progress / duration, 1)
              const currentCount = Math.floor(percentage * targetNumber)
              setHarvestCount(currentCount)

              if (percentage < 1) {
                window.requestAnimationFrame(step)
              }
            }

            window.requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="bg-[#F6F7EE] py-16 md:py-20">
      {/* 2. NEW: Combine Font Imports and Styles */}
      <style>{FontImports + MarqueeStyles}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="relative animate-slide-in-left">
            <img
              className="rounded-[28px] object-cover w-full h-[340px] md:h-[440px] transition-transform duration-700 hover:scale-105"
              src="/who.jpg"
              alt="Farmer at work"
            />
            {/* Harvest Count Card */}
            <div className="absolute bottom-2 right-2 animate-scale-in delay-300">
              <div className="relative">
                <div
                  className="absolute -inset-3 bg-[#F6F7EE] rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                  aria-hidden
                ></div>
                <div className="relative rounded-2xl border border-amber-300/50 bg-amber-200 text-green-900 px-9 py-7 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    * {harvestCount}
                    <span className="align-super text-lg md:text-xl font-bold">+</span>
                  </div>
                  <div className="mt-1 text-xs md:text-sm tracking-wide text-green-900/80">
                    Growth Tons' of Harvest
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Text/Features Column */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold shadow-sm border border-green-100">
              <span
                className="inline-block h-2 w-2 rounded-full bg-green-300 animate-pulse-slow"
                aria-hidden
              ></span>
              Who We Are
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-green-900 leading-tight tracking-tight animate-fade-up delay-100">
              Currently we are growing
              <br className="hidden md:block" />
              and selling organic food
            </h2>
            <p className="mt-4 max-w-prose text-neutral-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don’t
              look even.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-3 group animate-fade-up delay-300">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-200">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900 underline decoration-green-300/70 underline-offset-4">
                    Eco Farms Worldwide
                  </div>
                  <div className="text-sm text-neutral-600">
                    Ages of lorem ipsum available majority have suffered.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 group animate-fade-up delay-400">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-200">
                  <FiSettings size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900 underline decoration-green-300/70 underline-offset-4">
                    Special Equipment
                  </div>
                  <div className="text-sm text-neutral-600">
                    Ages of lorem ipsum available majority have suffered.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2 group animate-fade-up delay-500">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-200">
                  <FiTruck size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900">Fast Delivery</div>
                  <div className="text-sm text-neutral-600">
                    We deliver fresh produce quickly to keep it at peak quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-16 overflow-hidden">
          <div className="relative">
            <div
              className="flex whitespace-nowrap text-[10vw] md:text-[5vw] font-extrabold tracking-tight select-none word-outline"
              style={{ animation: 'marquee 20s linear infinite' }}
            >
              <div className="flex">
                <span className="mx-6">Agriculture</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Farming</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Organic</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Vegetables</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Harvest</span>
                {/* duplicate for seamless loop */}
                <span className="mx-6">Agriculture</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Farming</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Organic</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Vegetables</span>
                <span className="mx-6 solid-black-asterisk">*</span>
                <span className="mx-6">Harvest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
