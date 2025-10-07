import React from 'react'
import { FiArrowRight } from 'react-icons/fi'


const HERO_BG = '/hero.jpg'

export default function Hero({
  bg = HERO_BG,
  badge = 'BELIEVE IN QUALITY',
  titleLine1 = 'Quality Trust :',
  titleLine2 = 'Direct to the Farm',
  subtitle = 'Organic vegetables, fresh dairy, and ethically raised livestock—delivered from our fields to your table.',
  ctaLabel = 'contact us',
}) {
  return (
    <section className="relative overflow-hidden text-white m-2.5 rounded-b-[40px] rounded-tl-[40px]">
      <style>{`
        @keyframes bgZoom { from { transform: scale(1); } to { transform: scale(1.08); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-[8000ms] ease-out"
        style={{
          backgroundImage: `url(${bg})`,
          animation: 'bgZoom 20s ease-in-out infinite alternate'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-2xl ml-15" style={{ fontFamily: "'Signika', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial" }}>
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white border border-white/80 bg-white/10 backdrop-blur-[1px]" style={{ animation: 'fadeUp 700ms ease-out 60ms both' }}>{badge}</span>
          )}
          <h1 className="mt-5 text-4xl sm:text-7xl font-medium leading-[1.1]" style={{ animation: 'fadeUp 800ms ease-out 140ms both' }}>{titleLine1}
            {titleLine2 && (<><br />{titleLine2}</>)}
          </h1>
          {subtitle && (
            <>
              <div className="mt-4 h-px w-150 bg-white/80" style={{ animation: 'fadeUp 700ms ease-out 220ms both' }}></div>
              <p className="mt-4 text-green-70 text-md" style={{ animation: 'fadeUp 800ms ease-out 260ms both' }}>{subtitle}</p>
            </>
          )}
          {ctaLabel && (
            <div className="mt-8 flex gap-3" style={{ animation: 'fadeUp 800ms ease-out 320ms both' }}>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                {ctaLabel}
                <FiArrowRight size={18} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}
