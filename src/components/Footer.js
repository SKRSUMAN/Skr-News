import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-warning mb-3">SkrNews</h5>
                        <p className="text-muted">
                            Your trusted source for the latest news and updates from around the world. 
                            Stay informed with real-time breaking news, in-depth analysis, and comprehensive coverage 
                            across all major categories.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-outline-light btn-sm">Facebook</button>
                            <button className="btn btn-outline-light btn-sm">Twitter</button>
                            <button className="btn btn-outline-light btn-sm">Instagram</button>
                            <button className="btn btn-outline-light btn-sm">LinkedIn</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-muted text-decoration-none">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/business" className="text-muted text-decoration-none">Business</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/technology" className="text-muted text-decoration-none">Technology</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/sports" className="text-muted text-decoration-none">Sports</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/entertainment" className="text-muted text-decoration-none">Entertainment</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">Categories</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/health" className="text-muted text-decoration-none">Health</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/science" className="text-muted text-decoration-none">Science</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/general" className="text-muted text-decoration-none">General</Link>
                            </li>
                            <li className="mb-2">
                                <button className="btn btn-link text-muted text-decoration-none p-0">Politics</button>
                            </li>
                            <li className="mb-2">
                                <button className="btn btn-link text-muted text-decoration-none p-0">Education</button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">Contact Us</h6>
                        <div className="mb-3">
                            <span className="text-warning me-2">Email:</span>
                            <span className="text-muted">info@skrnews.com</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-warning me-2">Phone:</span>
                            <span className="text-muted">+1 (555) 123-4567</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-warning me-2">Address:</span>
                            <span className="text-muted">123 News Street, Media City, MC 12345</span>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-warning mb-2">Newsletter</h6>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your email"
                                    aria-label="Email for newsletter"
                                />
                                <button className="btn btn-warning" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <hr className="my-4" />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="text-muted mb-0">
                            © {currentYear} SkrNews. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <button className="btn btn-link text-muted text-decoration-none p-0">Privacy Policy</button>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-muted">|</span>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-link text-muted text-decoration-none p-0">Terms of Service</button>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-muted">|</span>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-link text-muted text-decoration-none p-0">Cookie Policy</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
