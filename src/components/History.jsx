import React from 'react'

const milestones = [
  { year: '1987', title: 'Open my Farm', desc: 'Conubia et consectetur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
  { year: '1995', title: 'Farm Remodelacion', desc: 'Majority have suffered alteration in some form by injected humour culpa odio temporibus.' },
  { year: '2000', title: 'Grainfarmers Formed', desc: 'Always parties but trying the sheaving of moment minute. Vitae ratione hic corpora veritatis odit.' },
  { year: '1910', title: 'Start of Agriculture', desc: 'Consequatur magni. Conubia et minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
]

export default function History() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
          Our History
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-3xl md:text-5xl font-semibold text-green-900 leading-tight md:col-span-1">
            Farming have been since
            <br className="hidden md:block"/>1866
          </h2>
          <p className="text-neutral-700 md:col-span-2 max-w-prose">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="text-4xl font-extrabold text-green-900/20">{m.year}</div>
              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                <div>
                  <div className="font-semibold text-green-900">{m.title}</div>
                  <div className="text-sm text-neutral-600">{m.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
