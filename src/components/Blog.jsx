import React from 'react'

const posts = [
  { title: 'Sustainable Irrigation 101', date: 'Sep 14', img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800&auto=format&fit=crop' },
  { title: 'How to Pick Fresh Corn', date: 'Sep 07', img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=800&auto=format&fit=crop' },
  { title: 'Benefits of Organic Eggs', date: 'Aug 29', img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=800&auto=format&fit=crop' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900">Latest posts & news</h2>
          <a href="#" className="text-green-700 hover:underline">View all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group card overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
              <div className="relative">
                <img src={p.img} alt="" className="h-44 w-full object-cover" />
                <span className="absolute top-3 left-3 inline-flex rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-green-900 shadow">{p.date}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-green-900 group-hover:underline">{p.title}</h3>
                <a className="mt-2 inline-flex items-center gap-1 text-sm text-green-700 hover:underline" href="#">Read more <span aria-hidden>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
