import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom"; // if you're using React Router


const Projects = () => {
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
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const projects = [
        {
            title: "Heaven Atmos",
            desc: "Peaceful residential living with lush gardens, modern amenities, and vibrant community life.",
            img: "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/project/banner/banner_web_1721466111_79.jpg&w=1320&h=740&q=100",
            type: "Residential",
            location: "Palanpur, Gujarat",
            path: "/projects/residential",
            color: "purple",
        },
        {
            title: "Heaven Resort",
            desc: "Luxurious retreat nestled in nature with spa, private villas, and scenic views.",
            img: "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/project/banner/banner_web_1728896845_98.jpg&w=1320&h=740&q=100",
            type: "Commercial",
            location: "Ambaji Highway, Gujarat",
            path: "/projects/commercial",
            color: "green",
        },
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            purple: 'bg-purple-600 hover:bg-purple-700',
            green: 'bg-green-600 hover:bg-green-700',
        };
        return colorMap[color] || 'bg-gray-600 hover:bg-gray-700'; // Fallback class
    };

    return (
        <section className="bg-white py-24 px-6">
            <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
                <div
                    ref={lineRef}
                    className="h-[1px] bg-red-600 w-20 opacity-100 animate-drawLine"
                ></div>
                <h3 className="text-red-700 font-medium text-lg">Projects</h3>
            </div>
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-down">
                    Our Signature Projects
                </h2>
                <p className="text-gray-500 mt-2" data-aos="fade-up">
                    Two destinations, one philosophy: Lifestyle with luxury.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl shadow-xl group"
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        {/* Clickable Image */}
                        <Link to={project.path}>
                            <img
                                src={`${project.img}?auto=format&fit=crop&w=900&q=80`}
                                alt={project.title}
                                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-1200 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        </Link>

                        {/* Text Overlay */}
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>

                            {/* Icons for type and location */}
                            <div className="flex items-center text-sm text-gray-200 gap-4 mb-3">
                                <span className="flex items-center gap-1">
                                    <FaBuilding className="text-white" />
                                    {project.type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-white" />
                                    {project.location}
                                </span>
                            </div>

                            <p className="text-sm max-w-sm mb-4">{project.desc}</p>

                            {/* Clickable Button */}
                            <Link
                                to={project.path}
                                className={`inline-block px-5 py-2 rounded-full text-sm font-semibold ${getColorClasses(project.color)} transition`}
                            >
                                Explore More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
