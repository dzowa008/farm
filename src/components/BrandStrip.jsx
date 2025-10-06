import React from 'react'

const logos = [
  '/only rice.png',
  '/farm.png',
  '/farm fresh.png',
  '/food.png',
  '/eco product.png',
  '/tractor.png',
]

export default function BrandStrip() {
  return (
    <section className="bg-[#F6F7EE] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-32 gap-y-8">
          {logos.map((src) => (
            <img
              key={src}
              src={src}
              alt="brand logo"
              className="h-[80px] w-[80px] object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
