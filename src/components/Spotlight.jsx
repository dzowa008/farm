import React from 'react'

export default function Spotlight() {
  return (
    <section className="bg-[#F6F7EE] py-10 md:py-14">
      
      <style>{`
        @keyframes ring90 { from { stroke-dashoffset: 201; } to { stroke-dashoffset: 21; } }
        @keyframes ring78 { from { stroke-dashoffset: 201; } to { stroke-dashoffset: 44; } }
        .ring-track { opacity: 0.25; }
        .ring-stroke { animation-fill-mode: forwards; animation-timing-function: ease-out; animation-duration: 1.2s; }
        .ring90 { animation-name: ring90; }
        .ring78 { animation-name: ring78; }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] overflow-hidden grid md:grid-cols-2 bg-white">
          <img src="/spotlight.jpg" alt="field" className="h-full w-full object-cover" />
          <div className="relative bg-amber-200 p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 text-green-900 px-3 py-1 text-[11px] font-semibold border border-amber-300/40">
              What We Do
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">Healthy life with fresh products</h3>
            <p className="mt-3 text-neutral-700 max-w-prose">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  
                  <svg viewBox="0 0 72 72" className="absolute inset-0">
                    
                    <circle cx="36" cy="36" r="32" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="201" strokeDashoffset="201" transform="rotate(-90 36 36)" className="ring-stroke ring90" />
                    
                    <circle cx="36" cy="36" r="32" fill="none" stroke="#ffffff" strokeWidth="3" transform="rotate(-90 36 36)" className="ring-track" />
                  </svg>
                  
                  <div className="absolute inset-4 rounded-full bg-white grid place-items-center">
                    <div className="text-lg font-extrabold text-green-900">90%</div>
                  </div>
                </div>
                <div className="text-xs text-neutral-700">
                  <div className="text-green-900 font-semibold text-sm">Eco Farms Worldwide</div>
                </div>
              </div>

              
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <svg viewBox="0 0 72 72" className="absolute inset-0">
                    <circle cx="36" cy="36" r="32" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="201" strokeDashoffset="201" transform="rotate(-90 36 36)" className="ring-stroke ring78" />
                    <circle cx="36" cy="36" r="32" fill="none" stroke="#ffffff" strokeWidth="3" transform="rotate(-90 36 36)" className="ring-track" />
                  </svg>
                  <div className="absolute inset-4 rounded-full bg-white grid place-items-center">
                    <div className="text-lg font-extrabold text-green-900">78%</div>
                  </div>
                </div>
                <div className="text-xs text-neutral-700">
                  <div className="text-green-900 font-semibold text-sm">Special Equipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
