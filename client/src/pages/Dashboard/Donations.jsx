import React from 'react';
import { DollarSign, TrendingUp, Users, Calendar, Download } from 'lucide-react';

const Donations = () => {
    // Demo Data
    const donations = [
        { id: "D-1024", donor: "Rajesh Kumar", amount: "₹50,000", date: "2024-03-15", cause: "Scholarship Fund", status: "Completed" },
        { id: "D-1025", donor: "Anita Desai", amount: "₹25,000", date: "2024-03-14", cause: "Library Books", status: "Completed" },
        { id: "D-1026", donor: "Tech Solutions Ltd", amount: "₹1,00,000", date: "2024-03-12", cause: "Lab Equipment", status: "Processing" },
        { id: "D-1027", donor: "Vikram Singh", amount: "₹10,000", date: "2024-03-10", cause: "General Fund", status: "Completed" },
        { id: "D-1028", donor: "Alumni Batch '15", amount: "₹2,50,000", date: "2024-03-08", cause: "Sports Complex", status: "Completed" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-end items-center">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    <Download size={16} /> Export Report
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <DollarSign size={24} />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">+12% vs last month</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">₹45.2L</h3>
                    <p className="text-green-100 text-sm">Total Funds Raised (FY 2024)</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Active Donors</p>
                            <h3 className="text-2xl font-bold text-gray-800">1,240</h3>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">70% retention rate</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Avg. Donation</p>
                            <h3 className="text-2xl font-bold text-gray-800">₹12,500</h3>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Top category: Scholarships</p>
                </div>
            </div>

            {/* Recent Donations Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Donor Name</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Cause</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {donations.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.donor}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{item.amount}</td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{item.cause}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                                        <Calendar size={14} /> {item.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Donations;
