import React from 'react'
import { FiTruck, FiBox, FiShield, FiArrowUpRight } from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa'

const items = [
  {
    icon: <FiTruck size={26} />,
    title: 'Professional Farmers',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    icon: <FaLeaf size={24} />,
    title: 'Fresh Vegetables',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    icon: <FiBox size={26} />,
    title: 'Agriculture Products',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    icon: <FiShield size={26} />,
    title: '100% Guaranteed',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  }
]

export default function FeatureCards() {
  return (
    <section className="bg-[#F6F7EE] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it) => (
            <div key={it.title} className="relative rounded-2xl bg-white shadow-sm shadow-black/5 p-5 md:p-6 overflow-hidden">
             
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-200 text-green-900">
                {it.icon}
              </div>
              <h3 className="mt-4 text-base md:text-lg font-semibold text-green-900">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{it.desc}</p>
              
              <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full border border-neutral-200 grid place-items-center text-neutral-700 bg-white">
                <FiArrowUpRight size={16} aria-hidden />
              </div>
              
              <div className="pointer-events-none absolute left-4 right-4 top-[58px] h-px bg-neutral-100/70" />
              <div className="pointer-events-none absolute left-4 right-4 bottom-12 h-px bg-neutral-100/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
