import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-white overflow-hidden">
            {/* Sidebar with mobile props */}
            <Sidebar
                isOpen={isMobileSidebarOpen}
                onClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* Mobile Overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            <div className="flex-1 flex flex-col h-full w-full relative">
                <Navbar
                    variant="dashboard"
                    onMenuClick={() => setIsMobileSidebarOpen(true)}
                />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
