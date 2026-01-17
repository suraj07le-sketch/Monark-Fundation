import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

const About = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">About Monark University</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A legacy of excellence in education, research, and innovation since 1995.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Our History</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Monark University was established with a vision to redefine higher education. Over the past three decades, we have evolved from a small institute into a world-class university, fostering a culture of academic rigor and practical application.
                        </p>
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Vision & Mission</h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                                <span>To provide accessible, high-quality education that empowers students to become global leaders.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                                <span>To foster an environment of innovation, critical thinking, and ethical responsibility.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                                <span>To contribute to society through impactful research and community engagement.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 space-y-4">
                        <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" alt="University Building" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
