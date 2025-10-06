import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function CtaBanner() {
  return (
    <section className="bg-[#F6F7EE] py-4 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[22px] overflow-hidden bg-center bg-cover min-h-[110px] md:min-h-[180px]" style={{ backgroundImage: `url('/cta.png')` }}>
          <div className="bg-black/35 h-full w-full">
            <div className="flex items-center justify-between p-8 md:p-12 h-full">
              <h3 className="text-white text-3xl md:text-4xl font-semibold md:leading-tight max-w-2xl">We’re popular leader in agriculture market globally</h3>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 font-medium px-6 py-3 hover:bg-white/90">
                Discover More
                <FiArrowRight size={18} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
