import React from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'

const posts = [
  { tag: 'Food Crops', date: 'March 20, 2024', author: 'Admin', title: 'What technology is used in vertical farming?', img: '/blog1.jpg' },
  { tag: 'Organic Farm', date: 'March 21, 2024', author: 'Admin', title: 'Which type of farming is more prevalent today?', img: '/blog2.jpg' },
  { tag: 'Farming Tips', date: 'March 23, 2024', author: 'Admin', title: 'The Farmers Sentiment Darkens Hopes Fade', img: '/blog3.jpg' },
]

export default function LatestBlog() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
              Latest Blog
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">Latest posts & articles</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white">
              <FiChevronLeft />
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-[18px] overflow-hidden bg-white shadow-sm">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover" />
                {/* tag pill inside image top-left */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 text-green-900 px-3 py-1 text-[11px] font-semibold">
                  {p.tag}
                </div>
                {/* orange circular arrow bottom-right inside image */}
                <div className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-amber-400 text-white grid place-items-center">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-5 text-green-900">
                <div className="mt-2 text-neutral-500 text-xs">{p.date} • {p.author}</div>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
