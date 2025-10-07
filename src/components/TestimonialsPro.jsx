import React from 'react'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const items = [
  {
    text: `I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!`,
    name: 'Martin Bailey',
    role: 'Supervisor',
    avatar: 'https://i.pravatar.cc/80?img=12'
  },
  {
    text: `I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!`,
    name: 'Emma Greed',
    role: 'Customer',
    avatar: 'https://i.pravatar.cc/80?img=32'
  },
  {
    text: `I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!`,
    name: 'Daniel Craig',
    role: 'Co Founder',
    avatar: 'https://i.pravatar.cc/80?img=5'
  },
]

export default function TestimonialsPro() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
              <span className="inline-block h-2 w-2 rounded-full bg-green-300 animate-pulse-slow" aria-hidden></span>
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">What our customers say</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 animate-slide-in-right">
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110">
              <FiChevronLeft />
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t, index) => (
            <article
              key={t.name}
              className="relative rounded-2xl bg-white p-6 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FaQuoteRight className="absolute -right-2 -top-2 text-amber-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" size={28} aria-hidden />
              <div className="flex items-center gap-1 text-amber-400" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="transition-all duration-300 hover:scale-125" />
                ))}
              </div>
              <p className="mt-3 text-neutral-700 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-amber-300" />
                <div>
                  <div className="text-sm font-semibold text-green-900">{t.name}</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
