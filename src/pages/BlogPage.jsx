import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BlogGrid from '../components/BlogGrid';
import Footer from '../components/Footer';

const categories = [
  'All',
  'Agriculture',
  'Extensive',
  'Farming Tips',
  'Food Crops',
  'Mixed Farming',
  'Organic Farm',
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Hero 
        bg="/about.jpg" 
        badge="Agrimo"
        titleLine1="Blog" 
        titleLine2="" 
        subtitle="" 
        ctaLabel="" 
      />

      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
          <div className="flex flex-wrap gap-3 items-center justify-start md:justify-center">
            {categories.map((c) => (
              <button
                key={c}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${
                  c === 'All' ? 'bg-green-900 text-white border-green-900' : 'bg-white text-green-900 border-green-200 hover:bg-amber-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog grid */}
      <div className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </div>
      
      <Footer />
    </>
  );
}
