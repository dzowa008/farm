import React from 'react'
import { FiStar } from 'react-icons/fi'

const words = ['Agriculture', 'Farming', 'Organic', 'Vegetables', 'Harvest', 'Seeds']

export default function KeywordMarquee() {
  return (
    <section className="bg-[#F6F7EE]">
      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { animation: marquee 28s linear infinite; }
          .stroke-text {
            color: transparent;
            -webkit-text-stroke-width: 1.2px;
            -webkit-text-stroke-color: rgba(255,255,255,0.85);
          }
        `}</style>
        <div className="bg-[#4E7D4F] py-4">
          <div className="whitespace-nowrap flex">
            {/* two copies for seamless loop */}
            <div className="marquee-track flex items-center gap-10 pr-10" style={{ width: '200%', willChange: 'transform' }}>
              {[0,1].map((copy) => (
                <div key={copy} className="flex items-center gap-10">
                  {words.map((w, i) => (
                    <React.Fragment key={`${copy}-${w}-${i}`}>
                      <FiStar className="text-amber-300 text-2xl" aria-hidden />
                      <span className="stroke-text text-4xl md:text-5xl font-extrabold tracking-tight">{w}</span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
