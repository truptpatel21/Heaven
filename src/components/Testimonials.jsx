import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    { name: "Amit S.", quote: "Absolutely loved the residential project!", role: "Home Buyer" },
    { name: "Neha R.", quote: "The resort is breathtaking, so peaceful.", role: "Resort Visitor" },
    { name: "Karan M.", quote: "Booking was smooth and support is great.", role: "Commercial Client" },
    { name: "Priya T.", quote: "The amenities and staff exceeded my expectations.", role: "NRI Investor" },
    { name: "Rahul D.", quote: "A true premium experience from start to finish.", role: "Industrial Partner" },
    { name: "Sita L.", quote: "The design and quality are top-notch!", role: "Luxury Home Buyer" },
    { name: "Raj P.", quote: "Perfect blend of luxury and comfort zone.", role: "Resort Guest" },
];

const Testimonials = () => {
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
    const swiperRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    const totalSlides = testimonials.length;
    const autoplayDelay = 4000; // Delay per slide in ms
    const totalCycleTime = totalSlides * autoplayDelay; // Total time for one full loop

    // Calculate visible slides based on screen size
    // const getVisibleSlides = () => {
    //     if (typeof window !== "undefined") {
    //         return window.innerWidth < 768 ? 1 : 3;
    //     }
    //     return 3;
    // };

    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-100 relative">
            <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
                <div
                    ref={lineRef}
                    className="h-[1px] bg-red-600 w-20 opacity-100 animate-drawLine"
                ></div>
                <h3 className="text-red-700 font-medium text-lg">Testimonials</h3>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-16 tracking-tight">
                What Our Clients Say
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
                navigation={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                }}
                className="px-6 max-w-6xl mx-auto"
            >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="bg-white p-8 shadow-2xl rounded-3xl border-t-4 border-purple-500 transform transition duration-500 hover:scale-105 hover:shadow-purple-300"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Ascending Order */}
                            <div className="flex flex-col items-center">
                                <p className="text-gray-800 italic text-lg text-center mb-6 leading-relaxed">
                                    <span className="text-2xl text-purple-400 font-serif">“</span>
                                    {item.quote}
                                    <span className="text-2xl text-purple-400 font-serif">”</span>
                                </p>
                                <h4 className="text-purple-700 font-semibold text-xl">{item.name}</h4>
                                <span className="text-sm text-gray-500">{item.role}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Sliding underline indicator */}
            <div className="mt-8 relative w-1/2 md:w-1/3 h-1 mx-auto bg-purple-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-purple-500"
                    style={{
                        width: `${100 / totalSlides}%`,
                        animation: `slideIndicator ${totalCycleTime}ms linear infinite`,
                    }}
                ></div>
            </div>

            <style jsx>{`
                @keyframes slideIndicator {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(${totalSlides * 100}%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;