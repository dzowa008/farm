import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

function Item({ question, answer, highlight = false }) {
  const [open, setOpen] = useState(highlight)
  return (
    <div className={`rounded-xl bg-white shadow-sm border border-neutral-200/60`}>
      <button
        className={`w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl ${highlight ? 'bg-[#6FA567] text-white' : 'text-green-900'}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-sm sm:text-[15px]">{question}</span>
        <FiChevronDown className={`transition-transform ${open ? 'rotate-180' : ''} ${highlight ? 'text-white' : 'text-green-900'}`} />
      </button>
      {open && (
        <div className={`px-4 sm:px-5 pb-4 -mt-1 ${highlight ? 'text-white/90 bg-[#6FA567] rounded-b-xl' : 'text-neutral-600'}`}>
          <p className="text-sm leading-6">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FaqAccordion({ titleLeft = 'General Questions', titleRight = 'Other Questions' }) {
  const left = [
    { q: 'What is Agricultural Biotechnology?', a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { q: 'Can the products be applied during rainy season?', a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { q: 'What vegetables can I grow in my hothouse?', a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ]
  const right = [
    { q: 'What is modern agriculture?', a: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' },
    { q: 'What are the 2 main types of farming?', a: 'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Architecto beatae vitae dicta sunt explicabo.' },
    { q: 'What are the different types of greenhouse?', a: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
  ]

  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column: General Questions */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">Most Ask</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">{titleLeft}</h2>
            <div className="mt-4 space-y-3">
            {left.map((it, idx) => (
              <Item key={it.q} question={it.q} answer={it.a} highlight={idx === 0} />
            ))}
            </div>
          </div>
          {/* Right column: Other Questions */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">People Know</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">{titleRight}</h2>
            <div className="mt-4 space-y-3">
            {right.map((it, idx) => (
              <Item key={it.q} question={it.q} answer={it.a} highlight={idx === 0} />
            ))}
            </div>
          </div>
        </div>

        <h3 className="mt-12 text-2xl md:text-3xl font-semibold text-green-900">Happy to Answer All Your Questions</h3>
        <div className="mt-4 space-y-3 max-w-3xl">
          {[1,2,3,4,5].map((n, idx) => (
            <Item key={n} question={`Sample question ${n}`} answer="Additional details to explain your answer succinctly with practical context for users." highlight={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
