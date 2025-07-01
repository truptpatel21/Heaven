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

    // ✅ Force repaint on first load
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
        <div className="swiper-banner relative z-10">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-screen w-full"
            >
                {banners.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            src={src}
                            alt={`banner-${index}`}
                            className="w-full h-screen object-cover banner-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center text-white text-center p-6">
                            <div className="space-y-6">
                                <h1 className={`text-4xl md:text-6xl font-bold drop-shadow-2xl transition-all duration-1000 
                                    ${activeIndex === index ? animationClass(index, 'title') : 'opacity-0'}`}>
                                    {headline(index)}
                                </h1>
                                <p className={`text-lg md:text-xl max-w-2xl mx-auto text-gray-200 transition-all duration-1000 
                                    ${activeIndex === index ? animationClass(index, 'desc') : 'opacity-0'}`}>
                                    {subline(index)}
                                </p>
                                {activeIndex === index && (
                                    <a
                                        href="/visit"
                                        className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-7 rounded-full hover:glow-button transition-all duration-300 shadow-xl"
                                    >
                                        Book a Site Visit
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                /* Zoom effect for background */
                .banner-zoom {
                    animation: bannerZoom 12s ease-in-out infinite;
                }
                @keyframes bannerZoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                /* Animations for text */
                .fadeUp {
                    animation: fadeUp 1s ease-out both;
                }
                .fadeInLeft {
                    animation: fadeInLeft 1s ease-out both;
                }
                .fadeInRight {
                    animation: fadeInRight 1s ease-out both;
                }
                .fadeInZoom {
                    animation: fadeInZoom 1s ease-out both;
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInZoom {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* Glow only on hover */
                .hover\\:glow-button:hover {
                    box-shadow: 0 0 15px rgba(255, 223, 0, 0.8), 0 0 30px rgba(255, 223, 0, 0.5);
                }

                /* Swiper pagination customization */
                .swiper-pagination-bullet {
                    background-color: #facc15 !important; /* yellow-400 */
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                    margin: 0 5px !important;
                }
                .swiper-pagination-bullet-active {
                    background-color: #fbbf24 !important; /* yellow-500 */
                    transform: scale(1.4);
                }
                    .swiper-pagination-bullet { background-color: white !important; }
.swiper-pagination-bullet-active { background-color: #facc15 !important; }

            `}</style>
        </div>
    );
};

// Animations per slide
const animationClass = (index, type) => {
    const animMap = [
        { title: 'fadeUp', desc: 'fadeInLeft' },
        { title: 'fadeInRight', desc: 'fadeInZoom' },
        { title: 'fadeUp', desc: 'fadeInLeft' },
        { title: 'fadeInZoom', desc: 'fadeInRight' },
    ];
    return animMap[index % animMap.length][type];
};

// Headline content
const headline = (index) => {
    const titles = [
        "Experience Timeless Luxury Living",
        "Crafted Comfort. Captivating Views.",
        "Modern Architecture Meets Tranquility",
        "Discover Your Dream Retreat Today"
    ];
    return titles[index % titles.length];
};

// Description content
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
