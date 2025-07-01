import React, { useEffect, useRef, useState } from "react";

const HeavenVideo = () => {
    const videoRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.3 }
        );

        if (videoRef.current) observer.observe(videoRef.current);
        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <section
            ref={videoRef}
            className={`bg-white py-20 px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* Red Line + Label */}
            <div className="flex items-center gap-4 mb-6">
                <div
                    className={`h-[2px] bg-red-600 transition-all duration-1000 ${inView ? "w-20" : "w-0"
                        }`}
                ></div>
                <h3 className="text-red-700 font-medium text-lg">Walkthrough</h3>
            </div>

            {/* Typing Heading */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 typing-effect ${inView ? "inline-block" : "hidden"
                        }`}
                >
                    Heaven Video Tour
                </h2>
                <p className="text-gray-500 mt-2">
                    Experience the elegance and atmosphere of our signature projects in motion.
                </p>
            </div>

            {/* Video Responsive Container */}
            <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl aspect-video">
                <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/0tsHZwUNLmc?si=6lb3ye7u4yszM0aH"
                    title="Heaven Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default HeavenVideo;
