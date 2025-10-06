import React, { useState } from 'react';
import { FiSearch, FiClock, FiTag, FiFolder } from 'react-icons/fi';

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { name: 'Farming', count: 12 },
    { name: 'Organic', count: 8 },
    { name: 'Gardening', count: 5 },
    { name: 'Soil & Compost', count: 7 },
    { name: 'Pest Control', count: 3 },
    { name: 'Harvesting', count: 9 },
  ];

  const recentPosts = [
    { id: 1, title: 'The Future of Sustainable Agriculture', date: 'Oct 15, 2025', image: '/blog1.jpg' },
    { id: 2, title: 'Organic Farming Benefits', date: 'Oct 10, 2025', image: '/blog2.jpg' },
    { id: 3, title: 'Seasonal Harvest Guide', date: 'Oct 5, 2025', image: '/blog3.jpg' },
    { id: 4, title: 'Urban Farming Solutions', date: 'Sep 28, 2025', image: '/about2.jpg' },
  ];

  const tags = [
    'Agriculture', 'Organic', 'Farming', 'Harvest', 'Garden', 'Vegetables',
    'Fruits', 'Compost', 'Soil', 'Pests', 'Sustainable', 'Eco-friendly'
  ];

  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Here</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600">
            <FiSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center">
                <FiFolder className="mr-2 text-green-500" />
                {category.name}
              </a>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start space-x-3">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-green-600 line-clamp-2">
                  {post.title}
                </a>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <FiClock className="mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a 
              key={index} 
              href="#" 
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-green-100 hover:text-green-700"
            >
              <FiTag className="mr-1 text-green-500" />
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
