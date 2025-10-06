import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const items = [
  { img: '/about1.jpg', tag: 'Fertilizer', title: 'Harvest Concepts' },
  { img: '/about2.jpg', tag: 'Fruits', title: 'Farming Products' },
  { img: '/about3.jpg', tag: 'Fertilizer', title: 'Soil fertilization' },
  { img: '/about4.jpg', tag: 'Fruits', title: 'Fresh vegetables' },
]

export default function AboutServicesStrip() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900">Best Agriculture Services</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.title} className="group relative rounded-[26px] bg-white p-5 shadow-sm">
              <div className="relative mx-auto h-40 w-40">
                <img src={it.img} alt="" className="h-full w-full object-cover rounded-full ring-4 ring-green-100 transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute -right-3 -top-3 h-9 w-9 rounded-full bg-amber-400 text-white grid place-items-center shadow group-hover:translate-y-[-2px] transition-transform">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-[11px] uppercase tracking-wide text-amber-700">• {it.tag}</div>
                <div className="mt-1 font-semibold text-green-900">{it.title}</div>
              </div>
            </article>
          ))}
        </div>

        {/* pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-300"></span>
          {[...Array(5)].map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-green-200"></span>
          ))}
        </div>
      </div>
    </section>
  )
}
