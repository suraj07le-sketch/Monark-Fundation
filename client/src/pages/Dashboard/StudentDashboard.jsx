import React from 'react';
import { BookOpen, Calendar, Award, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
    const { user } = useAuth();

    // Demo Data for Student
    const courses = [
        { name: "Computer Science 101", code: "CS101", instructor: "Prof. Halloway", grade: "A", attendance: "92%" },
        { name: "Data Structures", code: "CS201", instructor: "Dr. Chen", grade: "B+", attendance: "88%" },
        { name: "Web Development", code: "CS305", instructor: "Prof. Thorne", grade: "A-", attendance: "95%" },
        { name: "Database Systems", code: "CS302", instructor: "Dr. Vance", grade: "A", attendance: "90%" },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}! 🎓</h1>
                <p className="text-gray-500 mt-1">Here is your academic overview for this semester.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><BookOpen size={24} /></div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Courses</p>
                        <p className="text-2xl font-bold text-gray-800">4</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-full"><Award size={24} /></div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">CGPA</p>
                        <p className="text-2xl font-bold text-gray-800">3.8</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><Calendar size={24} /></div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Attendance</p>
                        <p className="text-2xl font-bold text-gray-800">91%</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-full"><Clock size={24} /></div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Next Class</p>
                        <p className="text-lg font-bold text-gray-800">10:00 AM</p>
                    </div>
                </div>
            </div>

            {/* Enrolled Courses Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">Enrolled Courses</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Course Name</th>
                                <th className="px-6 py-4">Code</th>
                                <th className="px-6 py-4">Instructor</th>
                                <th className="px-6 py-4">Attendance</th>
                                <th className="px-6 py-4 text-right">Grade</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {courses.map((course, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{course.name}</td>
                                    <td className="px-6 py-4 text-gray-500">{course.code}</td>
                                    <td className="px-6 py-4 text-gray-600">{course.instructor}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${parseInt(course.attendance) > 90 ? 'bg-green-500' : 'bg-yellow-500'}`}
                                                    style={{ width: course.attendance }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">{course.attendance}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded font-bold text-xs">
                                            {course.grade}
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

export default StudentDashboard;
