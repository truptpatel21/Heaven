import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

const HeavenVideo = () => {
    const lineRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && lineRef.current) {
                    lineRef.current.classList.remove("animate-drawLine");
                    void lineRef.current.offsetWidth;
                    lineRef.current.classList.add("animate-drawLine");
                }
            },
            { threshold: 0.6 }
        );

        if (lineRef.current) observer.observe(lineRef.current);
        return () => {
            if (lineRef.current) observer.unobserve(lineRef.current);
        };
    }, []);
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
            <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
                <div
                    ref={lineRef}
                    className="h-[1px] bg-red-600 w-20 opacity-100 animate-drawLine"
                ></div>
                <h3 className="text-red-700 font-medium text-lg">Walk Through</h3>
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
                    src="https://www.youtube.com/embed/ih6ez-I_bo0?autoplay=0&mute=1&loop=1&playlist=ih6ez-I_bo0"
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
