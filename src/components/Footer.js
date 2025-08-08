import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="lg:col-span-1">
                        <h5 className="text-yellow-400 text-lg font-semibold mb-4">SkrNews</h5>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Your trusted source for the latest news and updates from around the world. 
                            Stay informed with real-time breaking news, in-depth analysis, and comprehensive coverage 
                            across all major categories.
                        </p>
                        <div className="flex space-x-3">
                            <button className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 rounded">Facebook</button>
                            <button className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 rounded">Twitter</button>
                            <button className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 rounded">Instagram</button>
                            <button className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 rounded">LinkedIn</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-yellow-400 text-base font-semibold mb-4">Quick Links</h6>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Home</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Business</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Technology</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Sports</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Entertainment</button>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h6 className="text-yellow-400 text-base font-semibold mb-4">Categories</h6>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Health</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Science</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">General</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Politics</button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Education</button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h6 className="text-yellow-400 text-base font-semibold mb-4">Contact Us</h6>
                        <div className="space-y-3">
                            <div>
                                <span className="text-yellow-400 text-sm">Email:</span>
                                <span className="text-gray-300 text-sm ml-2">info@skrnews.com</span>
                            </div>
                            <div>
                                <span className="text-yellow-400 text-sm">Phone:</span>
                                <span className="text-gray-300 text-sm ml-2">+1 (555) 123-4567</span>
                            </div>
                            <div>
                                <span className="text-yellow-400 text-sm">Address:</span>
                                <span className="text-gray-300 text-sm ml-2">123 News Street, Media City, MC 12345</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h6 className="text-yellow-400 text-sm font-semibold mb-2">Newsletter</h6>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 rounded-l"
                                    placeholder="Enter your email"
                                    aria-label="Email for newsletter"
                                />
                                <button className="px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-medium hover:bg-yellow-300 transition-colors duration-200 rounded-r">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <hr className="border-gray-700 my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-300 text-sm">
                            © {currentYear} SkrNews. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Privacy Policy</button>
                        <span className="text-gray-600">|</span>
                        <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Terms of Service</button>
                        <span className="text-gray-600">|</span>
                        <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Cookie Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
