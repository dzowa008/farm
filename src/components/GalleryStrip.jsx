import React from 'react'

const images = ['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg']

export default function GalleryStrip() {
  return (
    <section className="bg-[#F6F7EE] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <img src={src} alt="gallery" className="w-full h-48 md:h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
