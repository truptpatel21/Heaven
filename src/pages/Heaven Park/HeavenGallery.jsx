import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "https://www.reecosys.com/assets/uploads/project/images/gallery_1728896581_81.jpg",
    "https://www.reecosys.com/assets/uploads/project/images/gallery_1728896581_27.jpg",
    "https://www.reecosys.com/assets/uploads/project/images/gallery_1728896581_83.jpg",
    "https://www.reecosys.com/assets/uploads/project/images/gallery_1728896581_100.jpg",

];

const HeavenGallery = () => {
    const galleryRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.3 }
        );
        if (galleryRef.current) observer.observe(galleryRef.current);
        return () => {
            if (galleryRef.current) observer.unobserve(galleryRef.current);
        };
    }, []);


    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // auto-slide every 5s
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={galleryRef}
            className={`relative bg-white py-20 px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >


            <div className="flex items-center gap-4 mb-6">
                <div
                    className={`h-[2px] bg-red-600 transition-all duration-[1.2s] ${inView ? "w-20" : "w-0"
                        }`}
                ></div>
                <h3 className="text-red-700 font-medium text-lg">Image Gallery</h3>
            </div>

            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-800 typing-effect ${inView ? "inline-block" : "hidden"
                    }`}>
                    Heaven Gallery
                </h2>

                <p className="text-gray-500">Discover the charm of our projects through beautiful visuals.</p>
            </div>

            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
                {/* Slide Images */}
                <div className="relative w-full h-[500px]">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={`${img}?auto=format&fit=crop&w=1000&q=80`}
                            alt={`slide-${index}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg z-10"
                >
                    <FaChevronLeft className="text-gray-700" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg z-10"
                >
                    <FaChevronRight className="text-gray-700" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-purple-600 scale-125" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeavenGallery;
