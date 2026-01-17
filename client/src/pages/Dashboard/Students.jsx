import React from 'react';
import { Search, Filter, MoreVertical, Award, UserCheck, Clock } from 'lucide-react';

const Students = () => {
    // Demo Data
    const students = [
        { id: "STU001", name: "Aarav Patel", program: "B.Tech CS", year: "3rd Year", gpa: "3.8", status: "Active" },
        { id: "STU002", name: "Isha Sharma", program: "MBA", year: "1st Year", gpa: "3.5", status: "Active" },
        { id: "STU003", name: "Rohan Gupta", program: "B.Des", year: "2nd Year", gpa: "3.2", status: "On Leave" },
        { id: "STU004", name: "Meera Reddy", program: "MBBS", year: "4th Year", gpa: "3.9", status: "Active" },
        { id: "STU005", name: "Kabir Singh", program: "B.A. Psychology", year: "1st Year", gpa: "3.6", status: "Active" },
        { id: "STU006", name: "Ananya Desai", program: "M.Tech", year: "Final Year", gpa: "3.7", status: "Internship" },
    ];

    const stats = [
        { label: "Total Students", value: "7,204", icon: <UserCheck size={24} />, color: "bg-blue-100 text-blue-600" },
        { label: "Avg. Attendance", value: "88%", icon: <Clock size={24} />, color: "bg-green-100 text-green-600" },
        { label: "Top Performers", value: "156", icon: <Award size={24} />, color: "bg-purple-100 text-purple-600" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4">
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                        + Add Student
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                        <div className={`p-3 rounded-full ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Student Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Program</th>
                                <th className="px-6 py-4">Year</th>
                                <th className="px-6 py-4">GPA</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {students.map((student, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{student.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                {student.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <span className="font-medium text-gray-800">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{student.program}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.year}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">{student.gpa}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${student.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            student.status === 'On Leave' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={18} />
                                        </button>
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

export default Students;
