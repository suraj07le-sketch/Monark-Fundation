import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    const [editingId, setEditingId] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/users', {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            setUsers(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleRoleUpdate = async (id, newRole) => {
        try {
            await axios.put(`http://localhost:5000/api/auth/users/${id}/role`,
                { role: newRole },
                { headers: { 'x-auth-token': localStorage.getItem('token') } }
            );
            // Update UI
            setUsers(users.map(user => user._id === id ? { ...user, role: newRole } : user));
            setEditingId(null);
            alert('Role updated successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to update role');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">


            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Email</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Current Role</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map(user => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{user.name}</td>
                                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`uppercase px-2 py-1 rounded text-xs font-bold ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                                        user.role === 'faculty' ? 'bg-blue-100 text-blue-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {editingId === user._id ? (
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-primary"
                                            >
                                                <option value="student">Student</option>
                                                <option value="faculty">Faculty</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                            <button
                                                onClick={() => handleRoleUpdate(user._id, selectedRole)}
                                                className="text-green-600 hover:text-green-800"
                                            >
                                                <FaCheck />
                                            </button>
                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="text-gray-500 hover:text-gray-700 text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setEditingId(user._id);
                                                setSelectedRole(user.role);
                                            }}
                                            className="flex items-center gap-1 text-primary hover:text-orange-700 font-medium text-sm transition-colors"
                                        >
                                            <FaEdit /> Change Role
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
