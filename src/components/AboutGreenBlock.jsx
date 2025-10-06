import React from 'react'

const steps = [
  { num: '01', title: 'Schedule Your Experience', desc: 'Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.' },
  { num: '02', title: 'Get Professional Advice', desc: 'Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.' },
  { num: '03', title: 'Meet Our Expert Farmer', desc: 'Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.' },
  { num: '04', title: 'Now Get A Best Products', desc: 'Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.' },
]

export default function AboutGreenBlock() {
  // Pre-encode the SVG to avoid JSX string escaping issues
  const leafSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" opacity="0.06"><defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 3c6 7 6 18 0 25s-18 6-25 0 6-18 25-25Z" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(%23p)"/></svg>`
  const bgStyle = {
    backgroundColor: '#4E7D4F',
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(leafSvg)}")`,
    backgroundSize: 'auto',
  }
  return (
    <section className="relative py-14 md:py-20">
        
      <style>{`
        @keyframes bob { 0% { transform: translateY(0) } 50% { transform: translateY(-3px) } 100% { transform: translateY(0) } }
        .chip-bob { animation: bob 3s ease-in-out infinite; }
      `}</style>
      <div className="absolute inset-0" aria-hidden style={bgStyle} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start pt-8 md:pt-12">
       
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-[11px] font-semibold border border-white/30 tracking-wide">
            Get To Know Us
          </div>
          <h3 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl">Agriculture matters to the future of development</h3>
          <div className="relative mt-8 md:mt-10">
            <img src="/block.jpg" alt="farm" className="rounded-xl w-full h-80 md:h-96 object-cover" />
            <div className="chip-bob absolute -bottom-4 -right-4 h-12 w-12 rounded-xl bg-amber-300 grid place-items-center text-green-900 shadow-lg">✿</div>
          </div>
        </div>

       
        <div className="md:mt-16">

          <p className="text-white/85 max-w-prose text-[15px] leading-7 mb-6 md:mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={s.num}>
                {idx === 0 ? (
                  <div className="mt-5 rounded-md bg-white p-4 shadow-sm flex items-center gap-4">
                    <div className="grid place-items-center rounded-md bg-white h-12 w-[86px]">
                      <span className="font-extrabold text-5xl leading-none" style={{ WebkitTextStrokeWidth: '1.2px', WebkitTextStrokeColor: 'rgb(21, 128, 61)', color: 'transparent' }}>{s.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-green-900 text-[15px] truncate">{s.title}</div>
                      <div className="text-sm text-neutral-600 leading-6 line-clamp-1">{s.desc}</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 py-2.5">
                    <span className="font-extrabold text-5xl leading-none" style={{ WebkitTextStrokeWidth: '1.2px', WebkitTextStrokeColor: 'rgba(255,255,255,0.7)', color: 'transparent' }}>{s.num}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-[15px] truncate">{s.title}</div>
                      <div className="text-sm text-white/75 leading-6 line-clamp-1">{s.desc}</div>
                    </div>
                  </div>
                )}
                {idx < steps.length - 1 && <div className="mt-6 h-px bg-white/15" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
