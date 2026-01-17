import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
    // Demo Data
    const events = [
        {
            id: 1,
            title: "Annual Tech Symposium 2026",
            date: "15 Apr 2026",
            time: "09:00 AM - 05:00 PM",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
            category: "Academic",
            status: "Upcoming"
        },
        {
            id: 2,
            title: "Alumni Networking Night",
            date: "22 Apr 2026",
            time: "06:00 PM - 09:00 PM",
            location: "University Gardens",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
            category: "Social",
            status: "Open"
        },
        {
            id: 3,
            title: "Guest Lecture: AI Ethics",
            date: "05 May 2026",
            time: "02:00 PM - 04:00 PM",
            location: "Lecture Hall B",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
            category: "Lecture",
            status: "Upcoming"
        },
        {
            id: 4,
            title: "Sports Day Finals",
            date: "10 May 2026",
            time: "10:00 AM - 03:00 PM",
            location: "Sports Complex",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
            category: "Sports",
            status: "Upcoming"
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-end items-center">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors shadow-md">
                    + Create Event
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                        <div className="md:w-2/5 h-48 md:h-auto relative">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                {event.category}
                            </div>
                        </div>
                        <div className="p-6 md:w-3/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{event.title}</h3>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Calendar size={16} className="text-primary" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock size={16} className="text-primary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin size={16} className="text-primary" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className={`text-sm font-semibold ${event.status === 'Open' ? 'text-green-600' : 'text-blue-600'
                                    }`}>
                                    {event.status === 'Open' ? 'Registration Open' : 'Coming Soon'}
                                </span>
                                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Details <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
