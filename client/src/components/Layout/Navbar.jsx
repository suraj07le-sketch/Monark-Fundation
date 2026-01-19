import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogOut, Heart, ChevronDown, LayoutDashboard } from "lucide-react";
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

    const getPanelPath = () => {
        if (!user) return '/login';
        switch (user.role) {
            case 'admin': return '/admin';
            case 'faculty': return '/dashboard/faculty';
            case 'student': return '/student-dashboard';
            default: return '/dashboard';
        }
    };

    const navLinks = [
        { name: "HOME", path: "/" },
        {
            name: "ABOUT MU",
            path: "#",
            submenu: [
                { name: "About Us", path: "/about" },
                { name: "Leadership", path: "/leadership" },
                { name: "Vision & Mission", path: "/mission" }
            ]
        },
        {
            name: "ADMISSION",
            path: "#",
            submenu: [
                { name: "Process", path: "/admission" },
                { name: "Fees", path: "/fees" },
                { name: "Scholarships", path: "/scholarships" }
            ]
        },
        {
            name: "FACULTY",
            path: "#",
            submenu: [
                { name: "List of Faculty", path: "/faculty" },
                { name: "Research", path: "/research" }
            ]
        },
        {
            name: "ACADEMIC",
            path: "#",
            submenu: [
                { name: "Programs", path: "/programs" },
                { name: "Calendar", path: "/academic-calendar" }
            ]
        },
        {
            name: "PLACEMENT",
            path: "#",
            submenu: [
                { name: "Overview", path: "/placement" },
                { name: "Recruiters", path: "/recruiters" }
            ]
        },
        {
            name: "CAMPUS LIFE",
            path: "#",
            submenu: [
                { name: "Events", path: "/campus-life" },
                { name: "Clubs", path: "/clubs" }
            ]
        },
        {
            name: "INFRASTRUCTURE",
            path: "#",
            submenu: [
                { name: "Library", path: "/library" },
                { name: "Labs", path: "/labs" }
            ]
        },
        { name: "PUBLIC SELF-DISCLOSURE", path: "/disclosure" },
        { name: "CONTACT US", path: "/contact" },
    ];

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
            case '/student-dashboard': return 'Student Portal';
            default: return 'Dashboard';
        }
    };

    const navbarClasses = variant === 'dashboard'
        ? "sticky top-0 z-30 bg-white border-b border-gray-200 h-26 flex items-center shadow-sm"
        : `fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-sm border-gray-100" : "bg-white py-3 border-transparent"}`;

    return (
        <nav className={navbarClasses}>
            <div className="w-full px-6 sm:px-8 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                {variant !== 'dashboard' ? (
                    <Link to="/" className="flex items-center gap-3 pr-4">
                        <img
                            src="https://monarkuni.ac.in/img/logo/MULOGOR.png"
                            alt="Monark University"
                            className="h-16 w-auto object-contain"
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

                {/* Desktop Navigation */}
                {variant !== 'dashboard' && (
                    <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    to={link.path}
                                    className="flex items-center gap-1 text-[11px] xl:text-[12px] font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase py-4 whitespace-nowrap"
                                >
                                    {link.name}
                                    {link.submenu && <ChevronDown size={12} />}
                                </Link>

                                {link.submenu && (
                                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg border-t-2 border-primary opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        {link.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.path}
                                                className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-primary border-b border-gray-100 last:border-0"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Auth Buttons / Right Actions */}
                <div className="hidden lg:flex items-center gap-3 shrink-0 ml-8">
                    {!user ? (
                        <>
                            <Link to="/login" className="text-secondary font-bold hover:text-primary text-xs transition-colors whitespace-nowrap">
                                MU MIRROR
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-orange-600 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
                            >
                                ATVC 2026
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                to={getPanelPath()}
                                className="px-4 py-2 rounded-full bg-secondary text-white text-xs font-bold hover:bg-primary transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
                            >
                                <LayoutDashboard size={20} />
                                MY PANEL
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:text-danger hover:border-danger flex items-center justify-center transition-all bg-white"
                                title="Logout"
                            >
                                <LogOut size={14} />
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
                        className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col p-6 pt-20"
                    >
                        <div className="flex flex-col gap-4">
                            {/* Mobile Nav Links */}
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-secondary hover:text-primary tracking-wide transition-colors font-sans uppercase py-2"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col gap-3 mt-auto">
                            {user ? (
                                <>
                                    <Link to={getPanelPath()} onClick={() => setIsOpen(false)}>
                                        <button className="w-full bg-secondary text-white px-4 py-3 rounded-lg font-bold shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2">
                                            <LayoutDashboard size={18} /> My Panel
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => { handleLogout(); setIsOpen(false); }}
                                        className="flex items-center justify-center gap-2 text-danger font-medium p-3 bg-red-50 rounded-lg"
                                    >
                                        <LogOut size={18} /> Sign Out
                                    </button>
                                </>
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
