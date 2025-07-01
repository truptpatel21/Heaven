import React from "react";
import { Link } from "react-router-dom";
import heavenLogo from "../assets/icons/heaven.png"; // adjust path if needed

const Footer = () => {
    // Scroll to top handler
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gradient-to-r from-purple-700 to-indigo-700 text-white mt-20">
            {/* Top wave/clip path */}
            <div className="absolute -top-10 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                >
                    <path
                        d="M321.39,56.19C166.22,73.67,0,0,0,0V120H1200V0S1034.55,48.71,868.17,55.6C738.42,61.11,611.06,19.17,500,15.18,390.91,11.31,375.34,37.62,321.39,56.19Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            {/* Main footer content */}
            <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Logo, Contact, Address */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <Link to="/" onClick={handleLogoClick}>
                            <img
                                src={heavenLogo}
                                alt="Heaven Logo"
                                className="h-14 mb-2 hover:scale-105 transition-transform duration-200"
                            />
                        </Link>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" width={28} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" width={28} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" alt="YouTube" width={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" width={28} />
                            </a>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Contact:</h3>
                            <p className="text-yellow-200 text-base">+91 98765 43210</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Reg. Office Address:</h3>
                            <p className="text-sm text-gray-200">
                                HEAVEN PROJECTS<br />
                                F/107, Royal Complex, Opp. Ramdev Hotel, Ahmedabad Highway, Palanpur - 385001,<br />
                                Dist: Banaskantha, Gujarat, India.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8 mt-2">
                            <div>
                                <h4 className="font-semibold text-base">General Inquiries:</h4>
                                <a href="mailto:heavenprojects7@gmail.com" className="text-yellow-200 hover:underline text-sm">heavenprojects7@gmail.com</a>
                            </div>
                            <div className="mt-2 md:mt-0">
                                <h4 className="font-semibold text-base">Project Inquiries:</h4>
                                <a href="mailto:sales@heavenprojects.com" className="text-yellow-200 hover:underline text-sm">sales@heavenprojects.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Links, Projects, Connect */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-lg mb-2">CONNECT WITH US:</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• <a href="/" className="hover:text-yellow-200">Join Heaven Group</a></li>
                                <li>• <a href="/" className="hover:text-yellow-200">Become a Channel Partner</a></li>
                                <li>• <a href="/" className="hover:text-yellow-200">Join as Vendor</a></li>
                                <li>• <a href="/contact" className="hover:text-yellow-200">Contact Us</a></li>
                                {/* <li>• <a href="/feedback" className="hover:text-yellow-200">Share Feedback</a></li> */}
                            </ul>
                            <h4 className="font-bold text-lg mt-6 mb-2">PROJECTS :</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• <a href="/projects/residential" className="hover:text-yellow-200">Heaven Atmos</a></li>
                                <li>• <a href="/projects/commercial" className="hover:text-yellow-200">Heaven Industrial Park</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">OTHER LINKS :</h4>
                            <ul className="space-y-1 text-sm grid grid-cols-2 gap-x-4">
                                <li><a href="/" className="hover:text-yellow-200">Home</a></li>
                                <li><a href="/projects/residential" className="hover:text-yellow-200">Residential</a></li>
                                <li><a href="/projects/commercial" className="hover:text-yellow-200">Commercial</a></li>
                                {/* <li><a href="#" className="hover:text-yellow-200">Industrial</a></li> */}
                                {/* <li><a href="#" className="hover:text-yellow-200">NRI Corner</a></li> */}
                                {/* <li><a href="#" className="hover:text-yellow-200">About</a></li> */}
                                <li><a href="/contact" className="hover:text-yellow-200">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">
                    <div className="space-x-4">
                        <a href="/" className="hover:text-yellow-200">Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <span>© Heaven Projects - {new Date().getFullYear()}</span>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;