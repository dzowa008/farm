import React from 'react'

const products = [
  { name: 'Sweet Corn', price: '$4.50 / kg', img: 'https://images.unsplash.com/photo-1599751449128-8c3b19e1a6b9?q=80&w=800&auto=format&fit=crop' },
  { name: 'Organic Eggs', price: '$3.20 / dozen', img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=800&auto=format&fit=crop' },
  { name: 'Fresh Milk', price: '$2.40 / L', img: 'https://images.unsplash.com/photo-1563630384103-73d66a78c4c1?q=80&w=800&auto=format&fit=crop' },
]

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900">Choose What’s Perfect For Your Palate</h2>
          <a href="#" className="text-green-700 hover:underline">See all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="card overflow-hidden">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                <span className="absolute bottom-3 left-3 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-green-900 shadow">{p.price}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-green-900">{p.name}</h3>
                <div className="mt-3 flex items-center gap-3">
                  <button className="inline-flex px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">Add to cart</button>
                  <button className="text-sm text-green-700 hover:underline">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
