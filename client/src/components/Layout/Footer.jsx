import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <img src="https://monarkuni.ac.in/img/logo/MULOGOR.png" alt="Monark Foundation" className="h-12 w-auto mb-6" />
                    <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                        Monark Foundation is dedicated to excellence in education, research, and community service. We build leaders for tomorrow.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-dark mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
                        <li><Link to="/programs" className="text-gray-600 hover:text-primary">Our Programs</Link></li>
                        <li><Link to="/admissions" className="text-gray-600 hover:text-primary">Admissions</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-dark mb-6">Connect</h4>
                    <p className="text-gray-600 mb-2">info@monarkuni.ac.in</p>
                    <p className="text-gray-600 mb-4">+91 123 456 7890</p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-primary border border-gray-100 cursor-pointer hover:bg-primary hover:text-white transition-all">
                            <Globe size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center bg-white">
                <p className="text-gray-500 text-sm">© 2026 Monark Foundation. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="#" className="text-sm text-gray-500 hover:text-dark">Privacy Policy</Link>
                    <Link to="#" className="text-sm text-gray-500 hover:text-dark">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
