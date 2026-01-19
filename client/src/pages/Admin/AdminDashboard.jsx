import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaCheck, FaSearch, FaUserShield, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    const [editingId, setEditingId] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        // Filter users based on search
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
    }, [searchTerm, users]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_API_URL + '/auth/users', {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            setUsers(res.data);
            setFilteredUsers(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleRoleUpdate = async (id, newRole) => {
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/auth/users/${id}/role`,
                { role: newRole },
                { headers: { 'x-auth-token': localStorage.getItem('token') } }
            );
            // Update UI
            const updatedUsers = users.map(user => user._id === id ? { ...user, role: newRole } : user);
            setUsers(updatedUsers);
            setEditingId(null);
            alert('Role updated successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to update role');
        }
    };

    // Calculate Stats
    const stats = [
        { label: 'Total Users', value: users.length, icon: <FaUsers />, color: 'bg-blue-500' },
        { label: 'Students', value: users.filter(u => u.role === 'student').length, icon: <FaUserGraduate />, color: 'bg-green-500' },
        { label: 'Faculty', value: users.filter(u => u.role === 'faculty').length, icon: <FaChalkboardTeacher />, color: 'bg-purple-500' },
        { label: 'Admins', value: users.filter(u => u.role === 'admin').length, icon: <FaUserShield />, color: 'bg-red-500' },
    ];

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
                    <p className="text-gray-500 text-sm">Manage roles and permissions for all users.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                        <div className={`p-3 rounded-lg text-white ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{stat.label}</p>
                            <h4 className="text-xl font-bold text-gray-800">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Email</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-sm uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map(user => (
                                    <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold border border-gray-200">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-gray-800">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">{user.email}</td>
                                        <td className="px-6 py-4">
                                            {editingId === user._id ? (
                                                <div className="flex items-center gap-2">
                                                    <select
                                                        value={selectedRole}
                                                        onChange={(e) => setSelectedRole(e.target.value)}
                                                        className="border border-orange-300 rounded px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                                                    >
                                                        <option value="student">Student</option>
                                                        <option value="faculty">Faculty</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="donor">Donor</option>
                                                    </select>
                                                </div>
                                            ) : (
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                    ${user.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                                        user.role === 'faculty' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                            user.role === 'donor' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                                                'bg-green-50 text-green-700 border-green-200'
                                                    }`}>
                                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {editingId === user._id ? (
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleRoleUpdate(user._id, selectedRole)}
                                                        className="p-1.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                                                        title="Save"
                                                    >
                                                        <FaCheck size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="p-1.5 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                                                        title="Cancel"
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setEditingId(user._id);
                                                        setSelectedRole(user.role);
                                                    }}
                                                    className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-orange-50 rounded-lg transition-colors border border-transparent hover:border-orange-100"
                                                >
                                                    Edit Role
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-10 text-center text-gray-500">
                                        No users found matching "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
