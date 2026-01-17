import React from 'react';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <div className="space-y-6">


            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((src, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group relative">
                        <img src={src} alt="Campus Life" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm">View Fullscreen</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
