import React from 'react';
import { motion } from 'framer-motion';

const AuthLayout = ({ children, title = "Welcome Back", subtitle = "Access the Monark University Portal" }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 overflow-hidden">
            {/* Left Section - Hero */}
            <div className="hidden md:flex w-full md:w-1/2 lg:w-2/5 relative overflow-hidden bg-primary text-white items-center justify-center p-12">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/savadeshi-vidhyapith.appspot.com/o/MU%2FGreen.jpg?alt=media&token=f61aaf55-06ef-4830-b041-c4e46276302c"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/80 mix-blend-multiply"></div>
                </div>

                {/* Animated Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-info/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="relative z-20 text-center max-w-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 inline-block bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl"
                    >
                        <img src="https://monarkuni.ac.in/img/logo/MULOGOR.png" alt="Monark University Logo" className="w-32 mx-auto drop-shadow-xl" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight"
                    >
                        Monark University
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-blue-100/90 font-light leading-relaxed"
                    >
                        "Empowering the future through education, innovation, and unwavering excellence."
                    </motion.p>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full md:w-1/2 lg:w-3/5 flex items-center justify-center p-6 sm:p-12 relative">
                {/* Mobile Background (Subtle) */}
                <div className="absolute inset-0 bg-[url('https://monarkuni.ac.in/img/logo/monarklogoonly.png')] bg-no-repeat bg-center opacity-[0.03] grayscale bg-contain pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="text-center mb-10">
                        <div className="md:hidden mb-6 flex justify-center">
                            <img src="https://monarkuni.ac.in/img/logo/MULOGOR.png" alt="Logo" className="h-16" />
                        </div>
                        <h2 className="text-3xl font-bold text-dark">{title}</h2>
                        <p className="text-gray-500 mt-2 font-medium">{subtitle}</p>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-gray-100 shadow-xl bg-white/50 backdrop-blur-xl">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;
