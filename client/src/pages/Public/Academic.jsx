import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

const Academic = () => {
    const schools = [
        "School of Engineering & Technology",
        "School of Management & Commerce",
        "School of Computer Applications",
        "School of Law & Justice",
        "School of Nursing & Allied Health",
        "School of Arts & Humanities",
        "School of Design & Architecture",
        "School of Science & Research"
    ];

    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Academics</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Our Schools & Programs</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Offering a wide range of undergraduate, postgraduate, and doctoral programs designed to foster excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schools.map((school, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{school}</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                B.Tech, M.Tech, BCA, MCA, Ph.D. and more.
                            </p>
                            <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Programs &rarr;</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Academic;
