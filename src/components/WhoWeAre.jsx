import React, { useState, useEffect, useRef } from 'react';
import { FiGlobe, FiSettings, FiTruck } from 'react-icons/fi';

// ----------------------------------------------------------------------------------
// 1. ANIMATED COUNTER COMPONENT
// ----------------------------------------------------------------------------------

const AnimatedCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const finalNumber = targetNumber || 435; // Default to 435

  useEffect(() => {
    // Clear any previous interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const start = 0;
    const end = finalNumber;
    // Calculate the step size to complete the animation within the duration (e.g., 2000ms)
    // We update every 10ms, so duration / 10 is the total number of steps.
    const steps = duration / 10;
    const increment = Math.ceil(end / steps);
    let current = start;

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(intervalRef.current);
      } else {
        setCount(current);
      }
    }, 10); // Update every 10ms for a smooth animation

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [finalNumber, duration]); // Dependency array ensures effect re-runs if props change

  return (
    <div className="relative rounded-2xl border border-amber-300/50 bg-amber-200 text-green-900 px-9 py-7">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
        * {count}<span className="align-super text-lg md:text-xl font-bold">+</span>
      </div>
      <div className="mt-1 text-xs md:text-sm tracking-wide text-green-900/80">Growth Tons' of Harvest</div>
    </div>
  );
};


// ----------------------------------------------------------------------------------
// 2. MAIN WHO WE ARE COMPONENT
// ----------------------------------------------------------------------------------

export default function WhoWeAre() {
  return (
    <section className="bg-[#F6F7EE] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="relative">
            <img
              className="rounded-[28px] object-cover w-full h-[340px] md:h-[440px]"
              src="/who.jpg"
              alt="Farmer at work" />
            
            {/* START: Animated Counter Integration */}
            <div className="absolute bottom-2 right-2">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#F6F7EE] rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none" aria-hidden></div>
                
                {/* Replaced static div with the AnimatedCounter component */}
                <AnimatedCounter 
                  targetNumber={435} // The number to count up to
                  duration={2000}    // The duration of the animation in milliseconds (2 seconds)
                />

              </div>
            </div>
            {/* END: Animated Counter Integration */}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold shadow-sm border border-green-100">
              <span className="inline-block h-2 w-2 rounded-full bg-green-300" aria-hidden></span>
              Who We Are
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-green-900 leading-tight tracking-tight">
              Currently we are growing
              <br className="hidden md:block" />
              and selling organic food
            </h2>
            <p className="mt-4 max-w-prose text-neutral-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don’t look even.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900 underline decoration-green-300/70 underline-offset-4">Eco Farms Worldwide</div>
                  <div className="text-sm text-neutral-600">Ages of lorem ipsum available majority have suffered.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center">
                  <FiSettings size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900 underline decoration-green-300/70 underline-offset-4">Special Equipment</div>
                  <div className="text-sm text-neutral-600">Ages of lorem ipsum available majority have suffered.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center">
                  <FiTruck size={20} />
                </div>
                <div>
                  <div className="font-semibold text-green-900">Fast Delivery</div>
                  <div className="text-sm text-neutral-600">We deliver fresh produce quickly to keep it at peak quality.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 overflow-hidden">
          <div className="relative">
            <div
              className="flex whitespace-nowrap text-[13vw] md:text-[7vw] font-extrabold tracking-tight text-green-900/10 select-none"
              style={{ animation: 'marquee 20s linear infinite' }}
            >
              <div className="flex">
                <span className="mx-6">Agriculture</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Farming</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Organic</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Vegetables</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Harvest</span>
                {/* duplicate for seamless loop */}
                <span className="mx-6">Agriculture</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Farming</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Organic</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Vegetables</span>
                <span className="mx-6">*</span>
                <span className="mx-6">Harvest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
