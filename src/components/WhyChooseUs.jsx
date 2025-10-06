import React from 'react'

const points = [
  { title: '100% Organic', desc: 'Certified organic methods ensure pure, chemical-free produce.' },
  { title: 'Ethical Livestock', desc: 'Free-range, well-cared-for animals for healthier products.' },
  { title: 'Farm to Table', desc: 'Shortest supply chain for peak freshness and flavor.' },
  { title: 'Sustainable Practice', desc: 'Water-saving irrigation and soil-friendly crop rotation.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 bg-[#F6F7EE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900">Why Choose Our Farm</h2>
          <a href="#" className="text-green-700 hover:underline">Learn more</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="h-11 w-11 rounded-full bg-yellow-200/90 text-green-900 flex items-center justify-center font-bold shadow-sm">✓</div>
              <h3 className="mt-3 font-semibold text-green-900">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
