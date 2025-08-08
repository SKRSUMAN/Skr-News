import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stay Informed with
                <span className="text-yellow-400"> SkrNews</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Your trusted source for the latest news and updates from around the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured News
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the most important stories of the day, carefully curated by our expert editors
              </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Technology</span>
                    <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Latest Developments in AI Technology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore the newest breakthroughs in artificial intelligence and their potential impact on our daily lives.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Business</span>
                    <span className="text-gray-500 text-sm ml-auto">4 hours ago</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Global Market Trends Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive analysis of current market trends and their implications for investors worldwide.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Sports</span>
                    <span className="text-gray-500 text-sm ml-auto">6 hours ago</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Championship Finals Preview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about the upcoming championship finals and team preparations.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Load More News
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest news and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
