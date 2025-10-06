import React from 'react'
import { FiCheck } from 'react-icons/fi'

const features = [
  'Garlic Farming',
  'Lavender Farming',
  'Gourmet Mushrooms',
  'Fertilizer Distribution',
  'Poultry Farming',
  'Organic Fertilizer',
]

export default function HistoryIntro() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="/history.jpg" alt="farmers" className="rounded-xl w-full h-[360px] md:h-[420px] object-cover" />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">About Us</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900 max-w-xl">We’re Best Agriculture & Organic Farms</h2>
          <p className="mt-3 text-neutral-700 max-w-prose">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {features.map((f) => (
              <div key={f} className="inline-flex items-center gap-2 text-green-900"><span className="h-5 w-5 rounded-full bg-amber-300 text-green-900 grid place-items-center"><FiCheck size={14}/></span>{f}</div>
            ))}
          </div>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-900 text-white font-medium px-5 py-2.5 hover:bg-green-800">Know More</a>
        </div>
      </div>
    </section>
  )
}
