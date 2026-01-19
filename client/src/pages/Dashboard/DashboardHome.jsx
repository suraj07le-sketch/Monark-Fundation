import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaHandHoldingHeart, FaCalendarAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const DashboardHome = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.role === 'student') {
                navigate('/student-dashboard');
            } else if (user.role === 'faculty') {
                navigate('/dashboard/faculty');
            }
        }
    }, [user, navigate]);

    // Demo Data
    const stats = [
        { title: 'Total Students', value: '1,234', icon: <FaUserGraduate />, color: 'bg-blue-500' },
        { title: 'Faculty Members', value: '56', icon: <FaChalkboardTeacher />, color: 'bg-green-500' },
        { title: 'Total Donations', value: '$45,200', icon: <FaHandHoldingHeart />, color: 'bg-orange-500' },
        { title: 'Upcoming Events', value: '3', icon: <FaCalendarAlt />, color: 'bg-purple-500' },
    ];

    const recentActivity = [
        { id: 1, user: 'John Doe', action: 'Registered for "Tech Summit"', time: '2 hours ago' },
        { id: 2, user: 'Sarah Smith', action: 'Donated $500', time: '5 hours ago' },
        { id: 3, user: 'Dr. Emily Brown', action: 'Uploaded new course material', time: '1 day ago' },
        { id: 4, user: 'Michael Lee', action: 'Updated profile picture', time: '2 days ago' },
    ];

    return (
        <div className="space-y-6">
            {/* Find Welcome Message */}
            <div className="bg-gradient-to-r from-primary to-orange-600 rounded-xl p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold mb-2">Welcome back, {user ? user.name : 'User'}!</h1>
                <p className="opacity-90">Here's what's happening at Monark University today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className={`p-4 rounded-full text-white ${stat.color} mr-4 shadow-md`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-gray-600 font-bold">{activity.user.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium">{activity.user} <span className="text-gray-500 font-normal">{activity.action}</span></p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Announcements */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Announcements</h2>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
                        <h4 className="font-bold text-orange-800 mb-1">Semester Exams</h4>
                        <p className="text-sm text-orange-700">Fall semester exams schedule has been released. Check your calendar.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-1">New Library Hours</h4>
                        <p className="text-sm text-blue-700">The library will remain open until 10 PM starting next week.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
