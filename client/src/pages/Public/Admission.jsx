import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { CheckCircle, Calendar, FileText } from 'lucide-react';

const Admission = () => {
    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Join Our Community</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Admission 2026</h1>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Process Steps */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-8 text-center">Application Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: <FileText size={32} />, title: "1. Apply Online", desc: "Fill out the comprehensive application form on our portal." },
                                { icon: <CheckCircle size={32} />, title: "2. Qualification", desc: "Submit your academic transcripts and entrance exam scores." },
                                { icon: <Calendar size={32} />, title: "3. Interview", desc: "Attend a personal interview with our faculty panel." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                    <p className="text-gray-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important Dates Table */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="bg-secondary p-6 text-white text-center">
                            <h3 className="text-2xl font-serif font-bold">Key Dates & Deadlines</h3>
                        </div>
                        <div className="p-6">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="py-4">
                                        <td className="py-4 font-bold text-secondary">Applications Open</td>
                                        <td className="py-4 text-right text-gray-600">Jan 10, 2026</td>
                                    </tr>
                                    <tr className="py-4">
                                        <td className="py-4 font-bold text-secondary">Entrance Exam</td>
                                        <td className="py-4 text-right text-gray-600">Apr 15, 2026</td>
                                    </tr>
                                    <tr className="py-4">
                                        <td className="py-4 font-bold text-secondary">Interviews Begin</td>
                                        <td className="py-4 text-right text-gray-600">May 01, 2026</td>
                                    </tr>
                                    <tr className="py-4">
                                        <td className="py-4 font-bold text-secondary">Final Deadline</td>
                                        <td className="py-4 text-right text-red-500 font-bold">Jun 30, 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admission;
