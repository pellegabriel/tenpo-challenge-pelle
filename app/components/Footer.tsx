'use client'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Company Name</h3>
                        <p className="text-gray-400">
                            Making the world a better place through innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Business Street</li>
                            <li>City, State 12345</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@company.com</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;