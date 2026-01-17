import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/Layout/AuthLayout';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
        }
    };

    return (
        <AuthLayout title="Welcome Back" subtitle="Please enter your details to sign in">
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <div className="relative">
                        <input
                            type="email"
                            required
                            className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                            placeholder="student@monarkuni.ac.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:outline-none transition-all bg-white/50 backdrop-blur-sm pr-12"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center text-gray-600 dark:text-gray-400 cursor-pointer">
                        <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary border-gray-300" /> Remember me
                    </label>
                    <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">Forgot password?</a>
                </div>

                <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 active:scale-95"
                >
                    Sign In
                </button>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Login;
