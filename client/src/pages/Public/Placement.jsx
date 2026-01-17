import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

const Placement = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Career Services</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Placements & Internships</h1>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                        <p className="text-gray-600 font-medium">Placement Assistance</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                        <p className="text-gray-600 font-medium">Recruiters</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h3 className="text-4xl font-bold text-primary mb-2">24 LPA</h3>
                        <p className="text-gray-600 font-medium">Highest Package</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h3 className="text-4xl font-bold text-primary mb-2">6.5 LPA</h3>
                        <p className="text-gray-600 font-medium">Average Package</p>
                    </div>
                </div>

                {/* Recruiters Grid */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-secondary mb-8 text-center">Top Recruiters</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
                        {/* Placeholder logos using text for simplicity in demo */}
                        {['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'IBM', 'Oracle', 'Samsung', 'HDFC Bank'].map((company, idx) => (
                            <div key={idx} className="bg-gray-50 h-20 rounded-lg flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Placement;
