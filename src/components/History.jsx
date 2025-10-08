import React from 'react';

export default function History() {
  const milestones = [
    { year: '1987', title: 'Open my Farm', desc: 'Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
    { year: '1995', title: 'Farm Remodelacion', desc: 'Majority have suffered alteration in some form by injected humor culpa odio temporibus.' },
    { year: '2000', title: 'Grainfarmers Formed', desc: 'Always parties but trying shewing of moment minus! Velit ratione hic corporis veritatis odit.' },
    { year: '1910', title: 'Start of Agriculture', desc: 'Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.' },
  ];

  const timelineTop = '160px';
  const dotTop = '156px';
  const titleMarginTop = '100px';

  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
          Our History
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-3xl md:text-5xl font-semibold text-green-900 leading-tight md:col-span-1">
            Farming have been since
            <br className="hidden md:block" />
            1866
          </h2>
          <p className="text-neutral-700 md:col-span-2 max-w-prose">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>
        </div>

        {/* Timeline container */}
        <div className="mt-10 grid md:grid-cols-4 gap-8 relative">
          {/* Full horizontal line across the whole timeline. Positioned 100px lower. */}
          <div
            className="absolute left-0 w-full h-px bg-neutral-300"
            style={{ top: timelineTop }}
          ></div>

          {milestones.map((m) => (
            <div key={m.year} className="relative pt-10">
              {/* Year Text */}
              <div className="text-5xl lg:text-7xl font-extrabold text-green-900/10 leading-none mb-2 tracking-tight">
                {m.year}
              </div>

              {/* Timeline Dot positioned on the line */}
              <span
                className="absolute h-3 w-3 rounded-full bg-green-600"
                style={{ top: dotTop }}
              ></span>


              {/* Title and Description */}
              <div className="" style={{ marginTop: titleMarginTop }}>
                <div className="font-semibold text-green-900">{m.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
