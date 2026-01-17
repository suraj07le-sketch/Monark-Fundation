import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Get in Touch</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Contact Us</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-secondary mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-800">Campus Address</p>
                                        <p className="text-gray-600">Monark University, At. & Po. Vahelal, Naroda-Dahegam Road, Dist. Ahmedabad - 382330, Gujarat, India.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-800">Phone</p>
                                        <p className="text-gray-600">+91 12345 67890</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-primary shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-800">Email</p>
                                        <p className="text-gray-600">info@monarkuni.ac.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-primary shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-800">Office Hours</p>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full py-3 bg-secondary text-white font-bold rounded-lg hover:bg-primary transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
