import React from 'react';
import { Search, Filter, MoreVertical, Briefcase, UserCheck, GraduationCap } from 'lucide-react';

const FacultyDashboard = () => {
    // Demo Data
    const faculty = [
        { id: "FAC001", name: "Dr. Eleanor Fant", department: "Engineering", designation: "Dean", status: "Active" },
        { id: "FAC002", name: "Prof. James Halloway", department: "Computer Science", designation: "HOD", status: "Active" },
        { id: "FAC003", name: "Dr. Sarah Chen", department: "Business", designation: "Associate Prof.", status: "On Leave" },
        { id: "FAC004", name: "Prof. Marcus Thorne", department: "Research", designation: "Director", status: "Active" },
        { id: "FAC005", name: "Dr. Emily Vance", department: "Arts", designation: "Senior Lecturer", status: "Active" },
        { id: "FAC006", name: "Dr. Robert Fox", department: "Law", designation: "Visiting Prof.", status: "Active" },
    ];

    const stats = [
        { label: "Total Faculty", value: "342", icon: <Briefcase size={24} />, color: "bg-blue-100 text-blue-600" },
        { label: "Active Today", value: "310", icon: <UserCheck size={24} />, color: "bg-green-100 text-green-600" },
        { label: "Departments", value: "12", icon: <GraduationCap size={24} />, color: "bg-purple-100 text-purple-600" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4">
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                        + Add Faculty
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

            {/* Faculty Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search faculty..."
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
                                <th className="px-6 py-4">Department</th>
                                <th className="px-6 py-4">Designation</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {faculty.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{member.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                {member.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <span className="font-medium text-gray-800">{member.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{member.department}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">{member.designation}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {member.status}
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

export default FacultyDashboard;
