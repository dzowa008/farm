import React from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'

const services = [
  {
    img: '/service1.png',
    tag: 'Fertilizer',
    title: 'Harvest Concepts',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    img: '/service2.png',
    tag: 'Fruits',
    title: 'Farming Products',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    img: '/service3.png',
    tag: 'Fertilizer',
    title: 'Soil Fertilization',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
]

export default function ServicesShowcase() {
  return (
    <section className="relative bg-[#4E7D4F] text-white py-14 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        <div className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              Our Services
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Best Agriculture Services</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 animate-slide-in-right">
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110">
              <FiChevronLeft />
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110">
              <FiChevronRight />
            </button>
          </div>
        </div>



        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, index) => (
            <article
              key={s.title}
              className="group relative rounded-[22px] bg-white text-green-900 shadow-sm overflow-hidden pb-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-amber-200/70 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-60 w-full overflow-hidden">
                <img src={s.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />
              </div>
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-wide text-amber-600">• {s.tag}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </div>


              <div className="absolute bottom-3 right-4 h-9 w-9 rounded-full bg-amber-400 text-white grid place-items-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-45 group-hover:bg-amber-300 z-20">
                <FiArrowUpRight size={16} className="transition-transform duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-8 bg-white z-0 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
