import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const services = [
  { img: '/blog1.jpg', tag: 'FERTILIZER', title: 'Harvest Concepts', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/about2.jpg', tag: 'FRUITS', title: 'Farming Products', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/about3.jpg', tag: 'FERTILIZER', title: 'Soil Fertilization', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/about4.jpg', tag: 'FRUITS', title: 'Fresh Vegetables', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/gallery3.jpg', tag: 'FARMING', title: 'Dairy Production', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/gallery4.jpg', tag: 'VEGETABLES', title: 'Product Supplies', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/gallery1.jpg', tag: 'FRUITS', title: 'Natural Carrots', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/blog2.jpg', tag: 'NUTRITION', title: 'Nutrition Solutions', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/blog3.jpg', tag: 'FRUITS, VEGETABLES', title: 'Organic Vegetables', desc: 'Farming and animal husbandry and discusses with farmers and scientists.' },
  { img: '/gallery2.jpg', tag: 'TOOLS', title: 'Farm Tools Supply', desc: 'High-quality tools and equipment for efficient farm operations.' },
  { img: '/who.jpg', tag: 'IRRIGATION', title: 'Irrigation Setup', desc: 'Design and installation of water-efficient irrigation systems.' },
  { img: '/service2.png', tag: 'CONSULTING', title: 'Crop Consulting', desc: 'Expert guidance to improve yield, soil health, and profitability.' },
]

export default function ServicesGrid() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="rounded-[18px] bg-white shadow-sm overflow-hidden">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={s.img} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute right-3 bottom-3 h-9 w-9 rounded-full bg-amber-300 text-green-900 grid place-items-center shadow">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-5 text-green-900">
                <div className="text-[11px] uppercase tracking-wide text-amber-700">• {s.tag}</div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
