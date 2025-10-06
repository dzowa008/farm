import React, { useState, useEffect, useRef } from 'react';

// AnimatedHarvestCounter component for the counting animation
const AnimatedHarvestCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Ref to hold the interval ID

  useEffect(() => {
    // Clear any existing interval on re-renders or component unmounts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const start = 0;
    const end = targetNumber;
    const increment = Math.ceil(targetNumber / (duration / 10)); // Calculate step for smooth animation
    let current = start;

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(intervalRef.current);
      } else {
        setCount(current);
      }
    }, 10); // Update every 10ms

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetNumber, duration]); // Re-run effect if targetNumber or duration changes

  return (
    <div className="relative rounded-2xl border border-amber-300/50 bg-amber-200 text-green-900 px-9 py-7">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
        * {count}<span className="align-super text-lg md:text-xl font-bold">+</span>
      </div>
      <div className="mt-1 text-xs md:text-sm tracking-wide text-green-900/80">Growth Tons' of Harvest</div>
    </div>
  );
};

// Your main History component, now integrating the AnimatedHarvestCounter
export default function History() {
  const milestones = [
    { year: '1987', title: 'Open my Farm', desc: 'Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
    { year: '1995', title: 'Farm Remodelacion', desc: 'Majority have suffered alteration in some form by injected humor culpa odio temporibus.' },
    { year: '2000', title: 'Grainfarmers Formed', desc: 'Always parties but trying shewing of moment minus! Velit ratione hic corporis veritatis odit.' },
    { year: '1910', title: 'Start of Agriculture', desc: 'Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
  ];

  const timelineTop = '160px';
  const dotTop = '156px';
  const titleMarginTop = '100px';

  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
          Our History
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-3xl md:text-5xl font-semibold text-green-900 leading-tight md:col-span-1">
            Farming have been since
            <br className="hidden md:block" />
            1866
          </h2>
          <p className="text-neutral-700 md:col-span-2 max-w-prose">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>
        </div>

        {/* Timeline container */}
        <div className="mt-10 grid md:grid-cols-4 gap-8 relative">
          {/* Full horizontal line across the whole timeline. Positioned 100px lower. */}
          <div
            className="absolute left-0 w-full h-px bg-neutral-300"
            style={{ top: timelineTop }}
          ></div>

          {milestones.map((m) => (
            <div key={m.year} className="relative pt-10">
              {/* Year Text */}
              <div className="text-5xl lg:text-7xl font-extrabold text-green-900/10 leading-none mb-2 tracking-tight">
                {m.year}
              </div>

              {/* Timeline Dot positioned on the line */}
              <span
                className="absolute h-3 w-3 rounded-full bg-green-600"
                style={{ top: dotTop }}
              ></span>


              {/* Title and Description */}
              <div className="" style={{ marginTop: titleMarginTop }}>
                <div className="font-semibold text-green-900">{m.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* The Animated Counter Section */}
        <div className="absolute bottom-2 right-2">
          <div className="relative">
            <div className="absolute -inset-3 bg-[#F6F7EE] rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none" aria-hidden></div>
            {/* Using the new AnimatedHarvestCounter component here */}
            <AnimatedHarvestCounter targetNumber={435} duration={2000} /> {/* Counts to 435 over 2 seconds */}
          </div>
        </div>

      </div>
    </section>
  );
}
