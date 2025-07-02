import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const SwiperBanner = () => {
    const banners = [
        "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_95_74.jpg&h=1080&w=1903&q=100",
        "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_24_74.jpg&h=1080&w=1903&q=100",
        "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_15_74.jpg&h=1080&w=1903&q=100",
        "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_61_74.jpg&h=1080&w=1903&q=100",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Force repaint on first load
    useEffect(() => {
        const forceRepaint = () => {
            document.body.style.display = 'none';
            setTimeout(() => {
                document.body.style.display = 'block';
            }, 10);
        };
        forceRepaint();
    }, []);

    return (
        <div className="swiper-banner relative z-10 overflow-hidden">
            {/* Elegant decorative elements */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute top-1/4 left-8 w-1 h-20 bg-gradient-to-b from-yellow-400/60 to-transparent animate-elegant-slide-down"></div>
                <div className="absolute bottom-1/4 right-8 w-1 h-20 bg-gradient-to-t from-yellow-400/60 to-transparent animate-elegant-slide-up"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400/40 rounded-full animate-elegant-pulse"></div>
            </div>

            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} elegant-pagination-bullet"></span>`;
                    }
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-screen w-full"
            >
                {banners.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            src={src}
                            alt={`banner-${index}`}
                            className="w-full h-screen object-cover elegant-zoom"
                        />

                        {/* Enhanced gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

                        {/* Content with sophisticated animations */}
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                            <div className="space-y-6 max-w-4xl mx-auto">
                                {/* Elegant title with refined animation */}
                                <h1 className={`text-4xl md:text-6xl font-bold drop-shadow-2xl transition-all duration-1200 ease-out transform
                                    ${activeIndex === index ? animationClass(index, 'title') : 'opacity-0 translate-y-8 scale-95'}`}>
                                    {headline(index)}
                                </h1>

                                {/* Subtitle with delayed elegant entrance */}
                                <p className={`text-lg md:text-xl max-w-2xl mx-auto text-gray-200 transition-all duration-1200 ease-out transform delay-300
                                    ${activeIndex === index ? animationClass(index, 'desc') : 'opacity-0 translate-y-8'}`}>
                                    {subline(index)}
                                </p>

                                {/* CTA button with sophisticated hover effects */}
                                {activeIndex === index && (
                                    <div className="animate-elegant-fade-in-up">
                                        <a
                                            href="/visit"
                                            className="group inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-7 rounded-full transition-all duration-500 shadow-xl transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                                        >
                                            <span className="relative z-10">Book a Site Visit</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Subtle decorative lines */}
                        <div className="absolute bottom-20 left-20 w-16 h-px bg-gradient-to-r from-yellow-400/60 to-transparent animate-elegant-expand-right"></div>
                        <div className="absolute top-20 right-20 w-16 h-px bg-gradient-to-l from-yellow-400/60 to-transparent animate-elegant-expand-left"></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                /* Elegant zoom effect for background images */
                .elegant-zoom {
                    animation: elegantZoom 15s ease-in-out infinite;
                    transform-origin: center center;
                }
                @keyframes elegantZoom {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.08) rotate(0.5deg); }
                }

                /* Classic fade and slide animations */
                .classic-fade-up {
                    animation: classicFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }
                .classic-fade-in-left {
                    animation: classicFadeInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }
                .classic-fade-in-right {
                    animation: classicFadeInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }
                .classic-zoom-in {
                    animation: classicZoomIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }

                @keyframes classicFadeUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(40px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1);
                    }
                }
                @keyframes classicFadeInLeft {
                    from { 
                        opacity: 0; 
                        transform: translateX(-50px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0) scale(1);
                    }
                }
                @keyframes classicFadeInRight {
                    from { 
                        opacity: 0; 
                        transform: translateX(50px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0) scale(1);
                    }
                }
                @keyframes classicZoomIn {
                    from { 
                        opacity: 0; 
                        transform: scale(0.9) translateY(20px);
                    }
                    to { 
                        opacity: 1; 
                        transform: scale(1) translateY(0);
                    }
                }

                /* Elegant decorative animations */
                .animate-elegant-slide-down {
                    animation: elegantSlideDown 2s ease-out;
                }
                .animate-elegant-slide-up {
                    animation: elegantSlideUp 2s ease-out 0.5s both;
                }
                .animate-elegant-pulse {
                    animation: elegantPulse 3s ease-in-out infinite;
                }
                .animate-elegant-fade-in-up {
                    animation: elegantFadeInUp 1s ease-out 0.8s both;
                }
                .animate-elegant-expand-right {
                    animation: elegantExpandRight 1.5s ease-out 1s both;
                }
                .animate-elegant-expand-left {
                    animation: elegantExpandLeft 1.5s ease-out 1.2s both;
                }

                @keyframes elegantSlideDown {
                    from { 
                        opacity: 0; 
                        transform: translateY(-20px) scaleY(0);
                    }
                    to { 
                        opacity: 0.6; 
                        transform: translateY(0) scaleY(1);
                    }
                }
                @keyframes elegantSlideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px) scaleY(0);
                    }
                    to { 
                        opacity: 0.6; 
                        transform: translateY(0) scaleY(1);
                    }
                }
                @keyframes elegantPulse {
                    0%, 100% { 
                        opacity: 0.4; 
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% { 
                        opacity: 0.8; 
                        transform: translate(-50%, -50%) scale(1.5);
                    }
                }
                @keyframes elegantFadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                @keyframes elegantExpandRight {
                    from { 
                        opacity: 0; 
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                    to { 
                        opacity: 0.6; 
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
                @keyframes elegantExpandLeft {
                    from { 
                        opacity: 0; 
                        transform: scaleX(0);
                        transform-origin: right;
                    }
                    to { 
                        opacity: 0.6; 
                        transform: scaleX(1);
                        transform-origin: right;
                    }
                }

                /* Enhanced pagination styling */
                .swiper-pagination-bullet.elegant-pagination-bullet {
                    background: rgba(255, 255, 255, 0.3) !important;
                    width: 12px !important;
                    height: 12px !important;
                    margin: 0 6px !important;
                    opacity: 1 !important;
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
                    border: 2px solid rgba(255, 255, 255, 0.2) !important;
                    position: relative !important;
                }

                .swiper-pagination-bullet-active.elegant-pagination-bullet {
                    background: #fbbf24 !important;
                    transform: scale(1.4) !important;
                    border-color: rgba(251, 191, 36, 0.8) !important;
                    box-shadow: 0 0 15px rgba(251, 191, 36, 0.5) !important;
                }

                .swiper-pagination-bullet.elegant-pagination-bullet:hover {
                    background: rgba(251, 191, 36, 0.7) !important;
                    transform: scale(1.2) !important;
                    border-color: rgba(251, 191, 36, 0.6) !important;
                }

                .swiper-pagination-bullet.elegant-pagination-bullet::before {
                    content: '';
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    right: -4px;
                    bottom: -4px;
                    border: 1px solid rgba(251, 191, 36, 0.3);
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .swiper-pagination-bullet-active.elegant-pagination-bullet::before {
                    opacity: 1;
                    animation: elegantRipple 2s ease-out infinite;
                }

                @keyframes elegantRipple {
                    0% {
                        transform: scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

// Enhanced animation classes with more sophisticated timing
const animationClass = (index, type) => {
    const animMap = [
        { title: 'classic-fade-up', desc: 'classic-fade-in-left' },
        { title: 'classic-fade-in-right', desc: 'classic-zoom-in' },
        { title: 'classic-zoom-in', desc: 'classic-fade-in-left' },
        { title: 'classic-fade-in-left', desc: 'classic-fade-up' },
    ];
    return animMap[index % animMap.length][type];
};

// Headline content (unchanged)
const headline = (index) => {
    const titles = [
        "Experience Timeless Luxury Living",
        "Crafted Comfort. Captivating Views.",
        "Modern Architecture Meets Tranquility",
        "Discover Your Dream Retreat Today"
    ];
    return titles[index % titles.length];
};

// Description content (unchanged)
const subline = (index) => {
    const descs = [
        "From peaceful havens to stunning escapes — explore refined living.",
        "Live where every sunrise feels like a masterpiece.",
        "Minimalist design meets maximum serenity.",
        "Take the first step toward an extraordinary lifestyle."
    ];
    return descs[index % descs.length];
};

export default SwiperBanner;

// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// const SwiperBanner = () => {
//     const banners = [
//         "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_95_74.jpg&h=1080&w=1903&q=100",
//         "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_24_74.jpg&h=1080&w=1903&q=100",
//         "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_15_74.jpg&h=1080&w=1903&q=100",
//         "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/home/banner/banner_web_1721823028_61_74.jpg&h=1080&w=1903&q=100",
        
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);

//     //  Force repaint on first load
//     useEffect(() => {
//         const forceRepaint = () => {
//             document.body.style.display = 'none';
//             setTimeout(() => {
//                 document.body.style.display = 'block';
//             }, 10);
//         };
//         forceRepaint();
//     }, []);

//     return (
//         <div className="swiper-banner relative z-10">
//             <Swiper
//                 modules={[Autoplay, EffectFade, Pagination]}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 loop={true}
//                 effect="fade"
//                 pagination={{ clickable: true }}
//                 onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                 className="h-screen w-full"
//             >
//                 {banners.map((src, index) => (
//                     <SwiperSlide key={index} className="relative">
//                         <img
//                             src={src}
//                             alt={`banner-${index}`}
//                             className="w-full h-screen object-cover banner-zoom"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center text-white text-center p-6">
//                             <div className="space-y-6">
//                                 <h1 className={`text-4xl md:text-6xl font-bold drop-shadow-2xl transition-all duration-1000 
//                                     ${activeIndex === index ? animationClass(index, 'title') : 'opacity-0'}`}>
//                                     {headline(index)}
//                                 </h1>
//                                 <p className={`text-lg md:text-xl max-w-2xl mx-auto text-gray-200 transition-all duration-1000 
//                                     ${activeIndex === index ? animationClass(index, 'desc') : 'opacity-0'}`}>
//                                     {subline(index)}
//                                 </p>
//                                 {activeIndex === index && (
//                                     <a
//                                         href="/visit"
//                                         className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-7 rounded-full hover:glow-button transition-all duration-300 shadow-xl"
//                                     >
//                                         Book a Site Visit
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             <style>{`
//                 /* Zoom effect for background */
//                 .banner-zoom {
//                     animation: bannerZoom 12s ease-in-out infinite;
//                 }
//                 @keyframes bannerZoom {
//                     0%, 100% { transform: scale(1); }
//                     50% { transform: scale(1.1); }
//                 }

//                 /* Animations for text */
//                 .fadeUp {
//                     animation: fadeUp 1s ease-out both;
//                 }
//                 .fadeInLeft {
//                     animation: fadeInLeft 1s ease-out both;
//                 }
//                 .fadeInRight {
//                     animation: fadeInRight 1s ease-out both;
//                 }
//                 .fadeInZoom {
//                     animation: fadeInZoom 1s ease-out both;
//                 }
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(40px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes fadeInLeft {
//                     from { opacity: 0; transform: translateX(-50px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes fadeInRight {
//                     from { opacity: 0; transform: translateX(50px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes fadeInZoom {
//                     from { opacity: 0; transform: scale(0.8); }
//                     to { opacity: 1; transform: scale(1); }
//                 }

//                 /* Glow only on hover */
//                 .hover\\:glow-button:hover {
//                     box-shadow: 0 0 15px rgba(255, 223, 0, 0.8), 0 0 30px rgba(255, 223, 0, 0.5);
//                 }

//                 /* Swiper pagination customization */
//                 .swiper-pagination-bullet {
//                     background-color: #facc15 !important; /* yellow-400 */
//                     opacity: 1;
//                     width: 12px;
//                     height: 12px;
//                     margin: 0 5px !important;
//                 }
//                 .swiper-pagination-bullet-active {
//                     background-color: #fbbf24 !important; /* yellow-500 */
//                     transform: scale(1.4);
//                 }
//                     .swiper-pagination-bullet { background-color: white !important; }
// .swiper-pagination-bullet-active { background-color: #facc15 !important; }

//             `}</style>
//         </div>
//     );
// };

// // Animations per slide
// const animationClass = (index, type) => {
//     const animMap = [
//         { title: 'fadeUp', desc: 'fadeInLeft' },
//         { title: 'fadeInRight', desc: 'fadeInZoom' },
//         { title: 'fadeUp', desc: 'fadeInLeft' },
//         { title: 'fadeInZoom', desc: 'fadeInRight' },
//     ];
//     return animMap[index % animMap.length][type];
// };

// // Headline content
// const headline = (index) => {
//     const titles = [
//         "Experience Timeless Luxury Living",
//         "Crafted Comfort. Captivating Views.",
//         "Modern Architecture Meets Tranquility",
//         "Discover Your Dream Retreat Today"
//     ];
//     return titles[index % titles.length];
// };

// // Description content
// const subline = (index) => {
//     const descs = [
//         "From peaceful havens to stunning escapes — explore refined living.",
//         "Live where every sunrise feels like a masterpiece.",
//         "Minimalist design meets maximum serenity.",
//         "Take the first step toward an extraordinary lifestyle."
//     ];
//     return descs[index % descs.length];
// };

// export default SwiperBanner;
