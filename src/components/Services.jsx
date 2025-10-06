import React from 'react'

const items = [
  { title: 'Organic Farming', desc: 'No chemicals, just nature.', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop' },
  { title: 'Livestock Care', desc: 'Happy, healthy animals.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' },
  { title: 'Delivery Service', desc: 'Farm-fresh to your door.', img: 'https://images.unsplash.com/photo-1524594227084-8b7cfe03be53?q=80&w=800&auto=format&fit=crop' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      {/* Green band background */}
      <div className="absolute inset-0 -z-10 bg-green-800" aria-hidden="true" />
      {/* Subtle pattern/top border curve could be added here if desired */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Best Agriculture Services</h2>
          <a href="#" className="text-yellow-300 hover:underline">See all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="card overflow-hidden">
              <img src={it.img} alt={it.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-green-900">{it.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
                <button className="mt-4 text-sm text-green-700 hover:underline">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
