import React from 'react'

const testimonials = [
  { name: 'A. Smith', role: 'Chef', text: 'The freshest produce I have ever had. Delivery was quick and everything tasted amazing!' },
  { name: 'J. Doe', role: 'Nutritionist', text: 'Ethical and sustainable—this is how food should be grown. Highly recommend.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#F6F7EE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900">What Our Customers Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-yellow-200/80 text-green-900 flex items-center justify-center font-bold">“”</div>
                <div>
                  <p className="text-neutral-700">{t.text}</p>
                  <footer className="mt-3 text-sm font-semibold text-green-900">{t.name} <span className="font-normal text-neutral-600">• {t.role}</span></footer>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
