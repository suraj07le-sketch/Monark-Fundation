import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserShield, FaUserGraduate, FaChalkboardTeacher, FaHandHoldingHeart, FaCalendarAlt, FaImages, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { logout } = useAuth();

    const menuItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
        { name: 'Admin Panel', icon: <FaUserShield />, path: '/admin' }, // Should be conditionally rendered
        { name: 'Students', icon: <FaUserGraduate />, path: '/students' },
        { name: 'Faculty', icon: <FaChalkboardTeacher />, path: '/dashboard/faculty' },
        { name: 'Donations', icon: <FaHandHoldingHeart />, path: '/donations' },
        { name: 'Events', icon: <FaCalendarAlt />, path: '/events' },
        { name: 'Gallery', icon: <FaImages />, path: '/gallery' },
        { name: 'Settings', icon: <FaCog />, path: '/settings' },
    ];

    return (
        <>
            {/* Sidebar Container */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:static lg:translate-x-0
            `}>
                <div className="h-24 flex items-center justify-between px-6 border-b border-gray-200">
                    <img src="https://monarkuni.ac.in/img/logo/MULOGOR.png" alt="Monark" className="h-12" />
                    {/* Close Button for Mobile */}
                    <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => window.innerWidth < 1024 && onClose()}
                                    className={({ isActive }) =>
                                        `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 transition-colors ${isActive ? 'border-l-4 border-primary text-primary bg-blue-50' : ''
                                        }`
                                    }
                                >
                                    <span className="text-xl mr-3">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={logout}
                        className="flex items-center px-4 py-2 w-full text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <FaSignOutAlt className="mr-3" />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
