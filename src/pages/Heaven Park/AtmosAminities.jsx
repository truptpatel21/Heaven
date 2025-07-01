import { useEffect, useRef, useState } from 'react';
import {
    FaMotorcycle,
    FaBolt,
    FaCamera,
    FaFireExtinguisher,
    FaHouseUser,
    FaLightbulb,
} from 'react-icons/fa';
import clsx from 'clsx';

const amenities = [
    { icon: <FaMotorcycle />, label: '2 Wheeler Parking' },
    { icon: <FaBolt />, label: '24 Hrs Backup Electricity' },
    { icon: <FaCamera />, label: 'CCTV Camera' },
    { icon: <FaFireExtinguisher />, label: 'Fire Safety' },
    { icon: <FaHouseUser />, label: 'Security Cabin' },
    { icon: <FaLightbulb />, label: 'Street Light' },
];

const AtmosAminities = () => {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="relative bg-white py-20 overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
                <div
                    className={`h-[2px] bg-red-600 transition-all duration-[1200ms] ${isVisible ? "w-20" : "w-0"
                        }`}
                ></div>
                <h2 className="text-red-700 text-xl font-medium">Aminities</h2>
            </div>

            {/* Mobile */}
            <div className="block md:hidden px-4 space-y-6">
                <img
                    src="https://www.heavenprojects.com/assets/images/detail/amenity-industrial-2.jpg"
                    alt="Mobile Top"
                    className={clsx(
                        'rounded-xl w-full transition-all duration-[1500ms] ease-in-out',
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0'
                    )}
                />

                <div className="text-center">
                    <h3 className="text-red-600 font-semibold text-lg mb-2">Amenities</h3>
                    <h2 className="text-1.5xl md:text-4xl font-bold text-gray-800 font-['Playfair_Display'] mb-8 typing-effect">
                        Discover the Benefits <span className="text-red-700">of choosing us</span>
                    </h2>

                    <p className="text-md text-gray-600 mb-5">
                        Industrial plots are designed to meet the diverse needs of modern businesses, offering a comprehensive suite of amenities to ensure efficiency and growth.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full transition-all shadow-lg"
                    >
                        • VIEW ALL AMENITIES
                    </button>
                </div>

                <img
                    src="https://www.heavenprojects.com/assets/images/detail/amenity-industrial-1.jpg"
                    alt="Mobile Bottom"
                    className={clsx(
                        'rounded-xl w-full transition-all duration-[1500ms] ease-in-out',
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
                    )}
                />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex justify-center items-center relative">
                <img
                    src="https://www.heavenprojects.com/assets/images/detail/amenity-industrial-2.jpg"
                    alt="Left"
                    className={clsx(
                        'md:w-[33%] rounded-xl transition-all duration-[1500ms] ease-in-out',
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0'
                    )}
                />

                <div className="text-center max-w-xl px-4 z-10">
                    <h3 className="text-red-600 font-semibold text-lg mb-2">Amenities</h3>
                    <h2 className="text-4xl font-bold text-gray-800 font-['Playfair_Display'] mb-4">
                        Discover the Benefits  <span className="text-red-700">of choosing us.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Industrial plots are designed to meet the diverse needs of modern businesses, offering a comprehensive suite of amenities to ensure efficiency and growth.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}

                        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full transition-all shadow-lg"
                    >
                        • VIEW ALL AMENITIES
                    </button>
                </div>

                <img
                    src="https://www.heavenprojects.com/assets/images/detail/amenity-industrial-1.jpg"
                    alt="Right"
                    className={clsx(
                        'md:w-[33%] rounded-xl transition-all duration-[1500ms] ease-in-out',
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
                    )}
                />
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-start overflow-y-auto pt-[80px] px-4 pb-4">

                    <div className="bg-white rounded-xl p-6 sm:p-10 max-w-4xl w-full mx-auto shadow-2xl relative animate-slide-up max-h-screen overflow-y-auto">

                        {/* Sticky Close Button */}
                        <button
                            className="sticky top-0 left-full z-50 text-gray-500 hover:text-red-700 text-3xl float-right"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>

                        {/* Red line and heading */}
                        <div className="flex items-center gap-4 mb-4 mt-2">
                            <div className="w-20 h-[2px] bg-red-600"></div>
                            <h3 className="text-red-700 font-medium text-lg">Amenities</h3>
                        </div>

                        {/* Typing-style heading */}
                        <h2 className="text-1.5xl md:text-4xl font-bold text-gray-800 font-['Playfair_Display'] mb-8 typing-effect">
                            Discover the Benefits <span className="text-red-700">of choosing us.</span>
                        </h2>

                        {/* Amenity Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {amenities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 text-gray-800 hover:scale-105 transition duration-500 opacity-0 animate-fade-up"
                                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                                >
                                    <span className="text-xl text-red-600">{item.icon}</span>
                                    <span className="text-lg font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default AtmosAminities;