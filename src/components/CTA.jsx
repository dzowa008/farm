import React from 'react'

export default function CTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-green-100 bg-yellow-100 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-green-900">Healthy life with fresh products.</h3>
            <p className="text-neutral-700">Get seasonal boxes and weekly deliveries right to your door.</p>
          </div>
          <div className="flex gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800">Browse Products</a>
            <a href="#" className="px-5 py-3 rounded-md border border-green-700 text-green-800 hover:bg-green-50">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
