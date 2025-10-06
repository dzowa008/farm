import React from 'react'
import { FiShare2 } from 'react-icons/fi'

const members = [
  { img: '/team1.jpg', role: 'CEO OWNER', name: 'Jacob Mersin' },
  { img: '/team2.jpg', role: 'SUPERVISOR', name: 'Clara Henry' },
  { img: '/team3.jpg', role: 'MANAGER', name: 'Paula Den' },
  { img: '/team4.jpg', role: 'MARKETING', name: 'Carla Hall' },
  { img: '/team5.jpg', role: 'SALES MANAGER', name: 'Mark Donald' },
  { img: '/team6.jpg', role: 'GARDEN EXPERT', name: 'Jamie Oliver' },
  { img: '/team7.jpg', role: 'SENIOR MANAGER', name: 'Alice Waters' },
  { img: '/team8.jpg', role: 'SENIOR WORKER', name: 'Julia Taylor' },
]

export default function TeamGrid() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <article key={m.name} className="rounded-[18px] bg-white shadow-sm overflow-hidden">
              <div className="relative h-60 w-full">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                <div className="absolute right-3 bottom-3 h-9 w-9 rounded-full bg-amber-300 text-green-900 grid place-items-center shadow">
                  <FiShare2 size={16} />
                </div>
              </div>
              <div className="p-4 text-green-900">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">• {m.role}</div>
                <div className="mt-1 font-semibold">{m.name}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
