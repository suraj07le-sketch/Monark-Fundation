import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogOut, Heart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ variant = 'public', onMenuClick }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Our Mission", path: "/mission" },
        { name: "Programs", path: "/programs" },
        { name: "Impact", path: "/impact" },
    ];

    const isActive = (path) => location.pathname === path;

    const navbarClasses = variant === 'dashboard'
        ? "sticky top-0 z-30 bg-white border-b border-gray-200 h-24 flex items-center shadow-sm"
        : `fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-sm border-gray-100" : "bg-white py-3 border-transparent"}`;

    const getPageTitle = (path) => {
        switch (path) {
            case '/dashboard': return 'Dashboard';
            case '/admin': return 'Admin Panel';
            case '/students': return 'Students';
            case '/dashboard/faculty': return 'Faculty';
            case '/donations': return 'Donations';
            case '/events': return 'Events';
            case '/gallery': return 'Gallery';
            case '/settings': return 'Settings';
            default: return 'Dashboard';
        }
    };

    return (
        <nav className={navbarClasses}>
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo - Hide on Dashboard as Sidebar has it */}
                {variant !== 'dashboard' ? (
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="https://monarkuni.ac.in/img/logo/MULOGOR.png"
                            alt="Monark University"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                ) : (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onMenuClick}
                            className="lg:hidden text-gray-600 hover:text-primary p-1"
                        >
                            <Menu size={28} />
                        </button>
                        <div className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                            {getPageTitle(location.pathname)}
                        </div>
                    </div>
                )}

                {/* Desktop Navigation - Hide on Dashboard */}
                {variant !== 'dashboard' && (
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <Link to="/" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">HOME</Link>
                        <Link to="/about" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">ABOUT MU</Link>
                        <Link to="/admission" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">ADMISSION</Link>
                        <Link to="/faculty" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">FACULTY</Link>
                        <Link to="/academic" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">ACADEMIC</Link>
                        <Link to="/placement" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">PLACEMENT</Link>
                        <Link to="/campus-life" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">CAMPUS LIFE</Link>
                        <Link to="/contact" className="text-[13px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase">CONTACT US</Link>
                    </div>
                )}

                {/* Auth Buttons / Right Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link to="/login" className="text-secondary font-semibold hover:text-primary text-sm transition-colors">
                                MU MIRROR
                            </Link>
                            <Link
                                to="/signup"
                                className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-orange-600 transition-all shadow-md flex items-center gap-2"
                            >
                                ATVC 2026
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-700">Hello, {user.name}</span>
                            <button
                                onClick={logout}
                                className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:text-primary hover:border-primary text-sm font-medium transition-all"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button - Hide on Dashboard */}
                {variant !== 'dashboard' && (
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-secondary z-50">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col p-6 pt-20" // Adjust pt as needed to clear fixed navbar
                    >
                        <div className="flex flex-col gap-4">
                            {/* Mobile Nav Links */}
                            {['HOME', 'ABOUT MU', 'ADMISSION', 'FACULTY', 'ACADEMIC', 'PLACEMENT', 'CAMPUS LIFE', 'CONTACT US'].map((item) => (
                                <Link
                                    key={item}
                                    to="#"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase py-2"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col gap-3 mt-auto"> {/* mt-auto pushes it to the bottom */}
                            {user ? (
                                <button
                                    onClick={() => { handleLogout(); setIsOpen(false); }}
                                    className="flex items-center justify-center gap-2 text-danger font-medium p-3 bg-red-50 rounded-lg"
                                >
                                    <LogOut size={18} /> Sign Out
                                </button>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setIsOpen(false)}>
                                        <button className="w-full border border-gray-200 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                                            Log In
                                        </button>
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                                        <button className="w-full bg-accent text-white px-4 py-3 rounded-lg font-bold shadow-md hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                                            <Heart size={18} className="fill-white" /> Donate Now
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
