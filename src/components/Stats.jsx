import React from 'react'

export default function Stats() {
  const stats = [
    { label: 'Happy Customers', value: '4.3K+' },
    { label: 'Acres Cultivated', value: '980+' },
    { label: 'Livestock', value: '6,200+' },
    { label: 'Founded', value: '1945' },
  ]
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-green-800 text-white px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="px-2">
                <div className="text-3xl font-extrabold tracking-tight">{s.value}</div>
                <div className="text-sm text-green-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
