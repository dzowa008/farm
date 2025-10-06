import React from 'react'
import { FiBox, FiPackage, FiCheckCircle } from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa'

const left = [
  { icon: <FiBox size={20} />, title: 'Agriculture Products', desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.' },
  { icon: <FiPackage size={20} />, title: 'Quality Products', desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.' },
]
const right = [
  { icon: <FaLeaf size={20} />, title: 'Fresh Vegetables', desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.' },
  { icon: <FiCheckCircle size={20} />, title: 'Pure & Organic', desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.' },
]

export default function ChoosePerfect() {
  return (
    <section className="bg-[#F6F7EE] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold shadow-sm border border-green-100">
            Grow Naturally
          </div>
        </div>
        <h2 className="mt-16 text-center text-3xl md:text-5xl font-semibold text-green-900 leading-tight">
          Choose What's Perfect
          <br className="hidden md:block" />
          For Your Field
        </h2>

        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
         
          <div className="space-y-8 mt-6 md:mt-12">
            {left.map((it) => (
              <div key={it.title} className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-yellow-200 text-green-900 grid place-items-center">
                  {it.icon}
                </div>
                <div>
                  <div className="font-semibold text-green-900">{it.title}</div>
                  <div className="text-sm text-neutral-600 max-w-xs">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex items-center justify-center">
            <img src="/corn.png" alt="Corn" className="h-466px md:h-433px object-contain" />
          </div>

         
          <div className="space-y-8 mt-6 md:mt-12">
            {right.map((it) => (
              <div key={it.title} className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-yellow-200 text-green-900 grid place-items-center">
                  {it.icon}
                </div>
                <div>
                  <div className="font-semibold text-green-900">{it.title}</div>
                  <div className="text-sm text-neutral-600 max-w-xs">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
