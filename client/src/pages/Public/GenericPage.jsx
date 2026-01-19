import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { Building2, ChevronRight, FileText } from 'lucide-react';

const GenericPage = ({ title, subtitle = "Exploring Excellence at Monark University" }) => {
    return (
        <div className="font-sans text-dark min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-secondary text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Building2 size={300} />
                </div>
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-primary uppercase font-bold text-sm tracking-widest mb-4">
                        <span>Home</span> <ChevronRight size={14} /> <span>Pages</span> <ChevronRight size={14} /> <span>{title}</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">{title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow py-20 px-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="font-serif text-3xl font-bold text-secondary mb-6">{title} Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                At Monark University, the <strong>{title}</strong> represents our commitment to excellence and holistic development.
                                We strive to provide an environment that fosters growth, innovation, and leadership.
                                This section provides detailed information regarding our standards, offerings, and compliance.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                                <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                                    <FileText size={20} className="text-primary" /> Key Highlights
                                </h4>
                                <ul className="space-y-2 mt-4 text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Comprehensive curriculum designed by industry experts.</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> State-of-the-art facilities and resources.</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Focus on practical application and research.</li>
                                </ul>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We invite you to explore more about our programs and initiatives. For specific inquiries, please contact the administration office.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-32">
                            <h3 className="font-bold text-lg text-secondary mb-4 border-b border-gray-100 pb-2">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="/about" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between">About Us <ChevronRight size={16} /></a></li>
                                <li><a href="/admission" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between">Admissions <ChevronRight size={16} /></a></li>
                                <li><a href="/faculty" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between">Faculty <ChevronRight size={16} /></a></li>
                                <li><a href="/contact" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between">Contact Us <ChevronRight size={16} /></a></li>
                            </ul>

                            <div className="mt-8 bg-secondary text-white p-6 rounded-xl text-center">
                                <h4 className="font-bold text-xl mb-2">Need Help?</h4>
                                <p className="text-sm text-gray-300 mb-4">Our support team is here to assist you.</p>
                                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GenericPage;
