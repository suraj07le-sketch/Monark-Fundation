import React from 'react';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar'; // Assuming Navbar is used in MainLayout but this is a PUBLIC page so we might need it wrapped or imported. LandingPage uses Footer but Navbar is in App or MainLayout? 
// Wait, App.jsx puts LandingPage on root. It doesn't wrap it in MainLayout. 
// MainLayout contains Navbar. 
// So Public pages like LandingPage need their own Navbar or layout. 
// LandingPage had Navbar inside it? No, LandingPage didn't import Navbar.
// Let's check Navbar usage in App.jsx.
// App.jsx: "/" -> LandingPage. 
// MainLayout has Navbar.
// Creating a PublicLayout would be best, but for now I'll just include Navbar here if LandingPage does. 
// LandingPage DOES NOT include Navbar.
// Let me check LandingPage again.
// LandingPage `view_file` showed it imports Footer but NOT Navbar. 
// But the screenshot/user request implies a Navbar exists. 
// IF LandingPage is at `/`, and `MainLayout` wraps `/dashboard`.
// Where is the Navbar for the public site?
// Maybe `App.jsx` needs to render Navbar for public routes too.
// Let's re-read `App.jsx`.
// `App.jsx`:
// <Routes>
//   <Route path="/" element={<LandingPage />} />
// </Routes>
// If LandingPage doesn't have Navbar, then there is NO Navbar on the homepage? 
// That seems wrong.
// Ah, the previous `Navbar.jsx` file I edited was definitely the public one.
// Let me check if I should wrap LandingPage and Faculty in a layout.
// For now, I will explicitly import Navbar in Faculty.jsx to be safe, echoing LandingPage pattern (which might be missing it, or I missed where it's included).
// Wait, I previously edited `Navbar.jsx`.
// If `App.jsx` doesn't include it, and `LandingPage.jsx` doesn't include it... then it's not showing?
// OR, maybe the user hasn't noticed yet or I missed something.
// Actually, `LandingPage.jsx` code I viewed:
// ...
// return ( <div class...> ... { /* content */ } <Footer /> </div> )
// No Navbar. 
// I should probably fix `App.jsx` to include Navbar for public routes, or add it to `LandingPage` and `Faculty`.
// I'll add it to `Faculty.jsx` manually for now.

import { Mail, Phone, ExternalLink } from 'lucide-react';

const Faculty = () => {
    const facultyMembers = [
        {
            id: 1,
            name: "Dr. Eleanor Fant",
            title: "Dean of Sciences",
            department: "School of Engineering",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            email: "eleanor.fant@monarkuni.ac.in"
        },
        {
            id: 2,
            name: "Prof. James Halloway",
            title: "Head of Computer Science",
            department: "School of Technology",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            email: "j.halloway@monarkuni.ac.in"
        },
        {
            id: 3,
            name: "Dr. Sarah Chen",
            title: "Associate Professor",
            department: "School of Business",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            email: "sarah.chen@monarkuni.ac.in"
        },
        {
            id: 4,
            name: "Prof. Marcus Thorne",
            title: "Director of Research",
            department: "Advanced Research Centre",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=400",
            email: "m.thorne@monarkuni.ac.in"
        },
        {
            id: 5,
            name: "Dr. Emily Vance",
            title: "Senior Lecturer",
            department: "School of Arts",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
            email: "emily.vance@monarkuni.ac.in"
        },
        {
            id: 6,
            name: "Dr. Robert Fox",
            title: "Visiting Professor",
            department: "School of Law",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            email: "robert.fox@monarkuni.ac.in"
        }
    ];

    return (
        <div className="font-sans text-dark bg-grid-pattern min-h-screen flex flex-col">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Experts</span>
                    <h1 className="font-serif text-5xl text-secondary font-bold mb-6">Distinguished Faculty</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Meet the visionaries, researchers, and mentors who are shaping the minds of tomorrow at Monark University.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-bold flex items-center gap-2">View Profile <ExternalLink size={16} /></span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-primary text-sm font-bold uppercase tracking-wider">{member.department}</span>
                                <h3 className="font-serif text-2xl font-bold text-secondary mt-2 mb-1">{member.name}</h3>
                                <p className="text-gray-500 font-medium mb-4">{member.title}</p>

                                <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                                        <Mail size={16} /> {member.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Faculty;
