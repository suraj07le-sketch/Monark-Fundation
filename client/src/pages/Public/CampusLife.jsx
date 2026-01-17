import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

const CampusLife = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Vibrant & Dynamic</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Campus Life</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        More than just classrooms. Experience a world of culture, sports, and community.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Section 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" alt="Campus" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Facilities</span>
                            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">World-Class Infrastructure</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                From advanced laboratories and a digital library to smart classrooms and spacious auditoriums, Monark University provides an environment conducive to learning and growth.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-2">
                            <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800" alt="Sports" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="md:order-1">
                            <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Sports & Recreation</span>
                            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Stay Active, Stay Fit</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We believe in holistic development. Our sports complex features facilities for cricket, football, basketball, and indoor games, encouraging students to actively participate in sports.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CampusLife;
