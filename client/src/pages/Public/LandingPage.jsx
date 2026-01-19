
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { ArrowRight, BookOpen, Users, Award, Building2, ChevronRight } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen">
            <Navbar />
            {/* FIXED APPLY NOW SIDE TAB */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <button className="bg-secondary text-white font-bold py-6 px-2 rounded-l-lg shadow-lg [writing-mode:vertical-lr] hover:bg-primary transition-colors tracking-widest text-sm uppercase">
                    Apply Now
                </button>
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* LEFT IMAGES (Stacked/Masked) */}
                        <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
                            {/* Image 1 */}
                            <div className="absolute top-0 left-0 w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white transform -rotate-3">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                                    alt="Students"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Image 2 */}
                            <div className="absolute top-20 left-48 w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl z-20 border-4 border-white transform rotate-3">
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
                                    alt="Campus"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* RIGHT TEXT CONTENT */}
                        <div className="lg:col-span-7">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary font-bold leading-tight mb-8">
                                Experience <span className="text-primary">Academic Diversity</span> Like <span className="text-primary">Never Before</span> with Leading <span className="text-primary">Experts</span> and <span className="text-primary">Comprehensive</span> Programs
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                                technologies and an emphasis on holistic development converge to shape future leaders.
                                <br /><br />
                                Our sprawling campus, equipped with state-of-the-art facilities, fosters a culture of curiosity, collaboration, and creativity. With a distinguished faculty and a commitment to nurturing talent, Monark University is where tradition meets modernity, ensuring that students are well-prepared to excel in a dynamic world. Join us, and be part of a legacy of excellence.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/login" className="group px-8 py-3 bg-primary rounded-full text-white font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                                    MU MIRROR
                                    <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                                <Link to="/signup" className="group px-8 py-3 bg-primary rounded-full text-white font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                                    ATVC 2026
                                    <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section className="py-20 relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                        {/* Stat 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                            <Building2 size={48} className="text-secondary mb-4 group-hover:text-primary transition-colors" />
                            <h3 className="font-serif text-gray-500 font-semibold uppercase tracking-wider mb-2">Institutes</h3>
                            <p className="text-4xl font-bold text-secondary">13+</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300 relative">
                            {/* Central Logo Badge (Absolute) - Visual hack to overlap */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white z-20">
                                <img src="https://monarkuni.ac.in/img/logo/MULOGOR.png" className="w-14 h-auto" alt="Logo" />
                            </div>

                            <Users size={48} className="text-secondary mb-4 group-hover:text-primary transition-colors mt-8" />
                            <h3 className="font-serif text-gray-500 font-semibold uppercase tracking-wider mb-2">Students</h3>
                            <p className="text-4xl font-bold text-secondary">7,000+</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                            <Award size={48} className="text-secondary mb-4 group-hover:text-primary transition-colors" />
                            <h3 className="font-serif text-gray-500 font-semibold uppercase tracking-wider mb-2">Programs</h3>
                            <p className="text-4xl font-bold text-secondary">100+</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACADEMIC EMPHASIS SECTION */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Why Monark?</span>
                            <h2 className="font-serif text-4xl text-secondary font-bold">Shaping Future Leaders</h2>
                        </div>
                        <Link to="#" className="text-secondary font-bold hover:text-primary flex items-center gap-2 mt-4 md:mt-0">
                            View all programs <ChevronRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Engineering', 'Management', 'Law', 'Nursing'].map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl h-64 bg-secondary cursor-pointer">
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-primary/20 transition-colors z-10"></div>
                                <img src={`https://source.unsplash.com/random/400x600?${item}`} alt={item} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-6 z-20">
                                    <h3 className="text-white text-xl font-bold font-serif">{item}</h3>
                                    <span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 block mt-2">Explore Course →</span>
                                </div>
                            </div >
                        ))}
                    </div >
                </div >
            </section >

            {/* Footer Call to Action */}
            <section className="py-20 bg-gray-50 text-center border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-secondary">Make a Lasting Difference</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Your support can help build a classroom, sponsor a student, or fund a research project.
                    </p>
                    <Link to="/signup">
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-all">
                            Partner With Us
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div >
    );
};

export default LandingPage;

