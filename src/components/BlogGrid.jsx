import React from 'react';
import { FiCalendar, FiUser, FiMessageSquare, FiArrowRight } from 'react-icons/fi';

const posts = [
  {
    id: 1,
    title: 'The Future of Sustainable Agriculture',
    excerpt: 'Exploring innovative farming techniques that are shaping the future of sustainable agriculture...',
    date: 'October 15, 2025',
    author: 'Admin',
    comments: 3,
    image: '/blog1.jpg',
    category: 'Farming',
    tags: ['Agriculture', 'Sustainability']
  },
  {
    id: 2,
    title: 'Organic Farming Benefits',
    excerpt: 'Discover the numerous benefits of organic farming for both consumers and the environment...',
    date: 'October 10, 2025',
    author: 'Admin',
    comments: 5,
    image: '/blog2.jpg',
    category: 'Organic',
    tags: ['Organic', 'Health']
  },
  {
    id: 3,
    title: 'Seasonal Harvest Guide',
    excerpt: 'A comprehensive guide to what to plant and harvest each season for optimal yield...',
    date: 'October 5, 2025',
    author: 'Admin',
    comments: 2,
    image: '/blog3.jpg',
    category: 'Gardening',
    tags: ['Seasons', 'Harvest']
  },
  {
    id: 4,
    title: 'Urban Farming Solutions',
    excerpt: 'How to start and maintain a successful urban farm in limited spaces...',
    date: 'September 28, 2025',
    author: 'Admin',
    comments: 7,
    image: '/about2.jpg',
    category: 'Urban Farming',
    tags: ['Urban', 'DIY']
  },
  {
    id: 5,
    title: 'Natural Pest Control Methods',
    excerpt: 'Effective and eco-friendly ways to protect your crops from pests...',
    date: 'September 20, 2025',
    author: 'Admin',
    comments: 4,
    image: '/about3.jpg',
    category: 'Pest Control',
    tags: ['Pests', 'Organic']
  },
  {
    id: 6,
    title: 'Soil Health 101',
    excerpt: 'Understanding and improving your soil health for better crop production...',
    date: 'September 15, 2025',
    author: 'Admin',
    comments: 1,
    image: '/about4.jpg',
    category: 'Soil',
    tags: ['Soil', 'Fertilizers']
  },
  {
    id: 7,
    title: 'Agricultural Infrastructure in Rural Areas',
    excerpt: 'Key infrastructure improvements that boost rural farming productivity and logistics...',
    date: 'September 10, 2025',
    author: 'Admin',
    comments: 6,
    image: '/gallery3.jpg',
    category: 'Farming Tips',
    tags: ['Infrastructure', 'Rural']
  },
  {
    id: 8,
    title: 'Are You Prepared for the Upcoming Season?',
    excerpt: 'Checklist and planning strategies for a smooth and successful growing season...',
    date: 'September 03, 2025',
    author: 'Admin',
    comments: 2,
    image: '/gallery2.jpg',
    category: 'Seasonal',
    tags: ['Planning', 'Checklist']
  },
  {
    id: 9,
    title: 'A Beginner’s Guide for Managing a Successful Farm',
    excerpt: 'Essential tips for new farmers to manage operations, budgets, and crop cycles...',
    date: 'August 28, 2025',
    author: 'Admin',
    comments: 9,
    image: '/about4.jpg',
    category: 'Beginner',
    tags: ['Guide', 'Basics']
  }
];

export default function BlogGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-56 object-cover"
              />
              <div className="absolute left-4 top-8 sm:top-10 z-10">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
              
              <a
                href={`/blog`}
                className="absolute -bottom-5 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-green-900 shadow ring-4 ring-white hover:bg-amber-200"
                aria-label="Open post"
              >
                <FiArrowRight />
              </a>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                <span className="flex items-center">
                  <FiCalendar className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FiUser className="mr-1" />
                  By {post.author}
                </span>
                <span className="flex items-center">
                  <FiMessageSquare className="mr-1" />
                  {post.comments} Comments
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                <a href={`/blog`}>
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <a 
                  href={`/blog`} 
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                >
                  Read More
                  <FiArrowRight className="ml-1" />
                </a>
                <div className="flex space-x-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 border border-green-500 bg-green-50 text-sm font-medium text-green-600">1</a>
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
          <a href="#" className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
