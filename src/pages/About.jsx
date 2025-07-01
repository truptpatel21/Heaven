import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/icons/heaven.png";

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);
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

    return (
        <section className="relative py-24 bg-white text-gray-800 overflow-hidden" id="about">
            {/* Background Logo */}
            <img
                src={logo}
                alt="Heaven Logo"
                className="absolute opacity-10 w-[600px] md:w-[800px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none"
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Red Section Label with drawing line animation */}
                <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
                    <div
                        ref={lineRef}
                        className="h-[1px] bg-red-600 w-20 opacity-100 animate-drawLine"
                    ></div>
                    <h3 className="text-red-700 font-medium text-lg">About Us</h3>
                </div>

                {/* Title with simple fade and scale animation */}
                <h2 className="text-5xl font-light mb-8 tracking-wide" data-aos="custom-title">
                    <span className="text-black font-serif font-semibold">Happy</span>{" "}
                    <span className="text-red-600 font-bold font-serif">Everyday</span>
                </h2>

                {/* Description */}
                <p
                    className="text-[18px] md:text-lg leading-relaxed text-gray-800 mb-6 max-w-4xl"
                    data-aos="fade-up"
                >
                    Heaven Group is one of the most prestigious real estate developers based in Gujarat. Heaven Group
                    has the vision of creating & shaping a new India with self-sufficient and enduring projects. Every
                    activity, be it in real estate, hospitality, leisure or entertainment has steadily focused on creating
                    a better experience in every aspect of life.
                    {showMore && (
                        <>
                            {" "}
                            While corporate has gone from strength to strength, the group is primarily synonymous with
                            quality, commitment towards customers, reliability, and excellence in architecture, innovation &
                            technology. We are here to give an experience of a lifetime to every family, through infrastructure
                            that is synonymous with supreme quality, beauty, and longevity.
                        </>
                    )}
                    <span
                        onClick={() => setShowMore(!showMore)}
                        className="text-red-600 font-medium cursor-pointer ml-2 hover:underline"
                    >
                        {showMore ? "Read Less" : "Read More"}
                    </span>
                </p>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mt-16" data-aos="fade-up">
                    {/* Mission */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                        <p className="text-gray-600 text-[17px] leading-relaxed">
                            We are on the voyage to add a splendid dimension to life and living. We believe that life is a
                            gift and lifestyle should be extraordinary. We are here to help you to think beyond the chaos,
                            the hustle-bustle of the city.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                        <p className="text-gray-600 text-[17px] leading-relaxed">
                            Heaven Group aims to provide premium housing, commercial, leisure, industrial & hospitality
                            developments to our clients at par with international standards so as to provide benchmark
                            quality standards and luxury lifestyles.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style>{`
                @keyframes drawLine {
                    0% {
                        width: 0;
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        width: 5rem;
                        opacity: 1;
                    }
                }
                .animate-drawLine {
                    animation: drawLine 1.2s ease-out forwards;
                }
                [data-aos="custom-title"] {
                    opacity: 0;
                    transform: scale(0.95);
                    transition-property: opacity, transform;
                    transition-duration: 1000ms;
                }
                [data-aos="custom-title"].aos-animate {
                    opacity: 1;
                    transform: scale(1);
                }
            `}</style>
        </section>
    );
};

export default AboutUs;