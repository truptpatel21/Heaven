import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Star, Sparkles, Zap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const dropdownRef = useRef(null);

    const navLinks = [
        { name: 'Home', path: '/', icon: Star },
        {
            name: 'Projects',
            path: '/projects',
            icon: Sparkles,
            dropdown: [
                { name: 'Residential', path: '/projects/residential', icon: Star },
                { name: 'Commercial', path: '/projects/commercial', icon: Zap },
            ],
        },
        { name: 'Visit', path: '/visit', icon: Zap },
        { name: 'Contact', path: '/contact', icon: Star },
    ];

    // Update time every second for dynamic effect
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Mouse tracking for cursor effects
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setMousePosition({ x: e.clientX, y: e.clientY });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    // Scroll hide/show navbar with enhanced animation
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Animated Cursor Follower */}
            <div
                className="fixed w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 8,
                    top: mousePosition.y - 8,
                    transform: isHovering ? 'scale(3)' : 'scale(1)',
                }}
            />

            {/* Main Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-out ${showNavbar
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
            >
                {/* Animated Background with Multiple Layers */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Primary gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-orange-50 via-red-50 to-pink-50 animate-gradient-shift"></div>

                    {/* Floating orbs */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
                    <div className="absolute -top-5 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float animation-delay-2000"></div>
                    <div className="absolute -bottom-5 left-1/3 w-12 h-12 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float animation-delay-4000"></div>

                    {/* Animated border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 via-red-400 to-pink-400 animate-gradient-x"></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Animated Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                {/* Glowing background */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                                {/* Logo container */}
                                <div className="relative w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                                    <Star className="w-6 h-6 text-white animate-pulse group-hover:animate-spin" />
                                </div>

                                {/* Orbiting elements */}
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse group-hover:animate-spin"></div>
                            </div>

                            {/* Animated text */}
                            <div className="hidden sm:block">
                                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:via-orange-500 group-hover:to-red-500 transition-all duration-500 animate-text-shimmer">
                                    Heaven
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link, index) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {link.dropdown ? (
                                        // Dropdown Link
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setActiveDropdown(link.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {/* Main dropdown trigger */}
                                            <div className="flex items-center gap-2 text-yellow-900 font-semibold text-lg cursor-pointer group-hover:text-orange-600 transition-all duration-300 transform group-hover:scale-105">
                                                <link.icon className="w-5 h-5 animate-pulse group-hover:animate-bounce" />
                                                <span className="relative">
                                                    {link.name}
                                                    {/* Animated underline */}
                                                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-500"></span>
                                                </span>
                                                <ChevronDown className={`w-4 h-4 transition-all duration-500 ${activeDropdown === link.name ? 'rotate-180 text-orange-600' : ''}`} />
                                            </div>

                                            {/* Animated Dropdown Menu */}
                                            <div className={`absolute top-full left-0 mt-2 w-56 transition-all duration-500 ${activeDropdown === link.name
                                                ? 'opacity-100 visible translate-y-0 scale-100'
                                                : 'opacity-0 invisible -translate-y-4 scale-95'
                                                }`}>
                                                {/* Dropdown background with animations */}
                                                <div className="relative bg-white/95 backdrop-blur-sm border border-yellow-200 shadow-2xl rounded-2xl overflow-hidden">
                                                    {/* Animated background */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 animate-gradient-shift"></div>

                                                    {/* Floating elements in dropdown */}
                                                    <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                                                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>

                                                    <div className="relative p-2">
                                                        {link.dropdown.map((item, dropIndex) => (
                                                            <Link
                                                                key={item.name}
                                                                to={item.path}
                                                                className="group/item flex items-center gap-3 px-4 py-3 text-yellow-900 font-medium hover:text-orange-600 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 transform hover:scale-105 hover:translate-x-2"
                                                                style={{ animationDelay: `${dropIndex * 0.1}s` }}
                                                            >
                                                                <item.icon className="w-4 h-4 animate-pulse group-hover/item:animate-spin" />
                                                                <span className="relative">
                                                                    {item.name}
                                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover/item:w-full transition-all duration-300"></span>
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Regular Link
                                        <Link
                                            to={link.path}
                                            className="group/link flex items-center gap-2 text-yellow-900 font-semibold text-lg transition-all duration-300 hover:text-orange-600 transform hover:scale-105 relative"
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        >
                                            <link.icon className="w-5 h-5 animate-pulse group-hover/link:animate-bounce" />
                                            <span className="relative">
                                                {link.name}
                                                {/* Animated underline */}
                                                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover/link:w-full transition-all duration-500"></span>

                                                {/* Glowing effect */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -z-10"></span>
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Animated Time Display */}
                            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200 animate-pulse">
                                <Sparkles className="w-4 h-4 text-orange-600 animate-spin" />
                                <span className="text-sm font-medium text-yellow-800">
                                    {currentTime.toLocaleTimeString()}
                                </span>
                            </div>
                        </nav>

                        {/* Ultra Animated Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative group p-2 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            {/* Glowing background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                            {/* Button content */}
                            <div className="relative">
                                {isOpen ? (
                                    <X className="w-6 h-6 text-orange-600 animate-spin" />
                                ) : (
                                    <Menu className="w-6 h-6 text-orange-600 animate-pulse group-hover:animate-bounce" />
                                )}
                            </div>

                            {/* Orbiting dots */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse group-hover:animate-spin"></div>
                        </button>
                    </div>

                    {/* Ultra Animated Mobile Menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${isOpen
                        ? 'max-h-96 opacity-100 mt-4'
                        : 'max-h-0 opacity-0 mt-0'
                        }`}>
                        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-yellow-200 overflow-hidden">
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 animate-gradient-shift"></div>

                            {/* Floating elements */}
                            <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-bounce"></div>

                            <div className="relative p-6 space-y-4">
                                {navLinks.map((link, index) => (
                                    <div
                                        key={link.name}
                                        className="animate-slide-in-mobile"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {link.dropdown ? (
                                            <div className="space-y-2">
                                                {/* Dropdown header */}
                                                <div className="flex items-center gap-3 text-yellow-800 font-bold text-lg">
                                                    <link.icon className="w-5 h-5 animate-pulse" />
                                                    <span>{link.name}</span>
                                                    <ChevronDown className="w-4 h-4 animate-bounce" />
                                                </div>

                                                {/* Dropdown items */}
                                                <div className="pl-8 space-y-2">
                                                    {link.dropdown.map((item, dropIndex) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            onClick={() => setIsOpen(false)}
                                                            className="group/mobile flex items-center gap-3 text-gray-700 font-medium hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                                                            style={{ animationDelay: `${(index + dropIndex) * 0.1}s` }}
                                                        >
                                                            <item.icon className="w-4 h-4 animate-pulse group-hover/mobile:animate-spin" />
                                                            <span className="relative">
                                                                {item.name}
                                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover/mobile:w-full transition-all duration-300"></span>
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="group/mobile flex items-center gap-3 text-yellow-800 font-bold text-lg hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 relative"
                                            >
                                                <link.icon className="w-5 h-5 animate-pulse group-hover/mobile:animate-bounce" />
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover/mobile:w-full transition-all duration-500"></span>
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile time display */}
                                <div className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-yellow-200">
                                    <Sparkles className="w-4 h-4 text-orange-600 animate-spin" />
                                    <span className="text-sm font-medium text-yellow-800 animate-pulse">
                                        {currentTime.toLocaleTimeString()}
                                    </span>
                                    <Sparkles className="w-4 h-4 text-orange-600 animate-spin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes gradient-x {
                    0%, 100% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
                
                @keyframes text-shimmer {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes slide-in-mobile {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                }
                
                .animate-gradient-x {
                    animation: gradient-x 3s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-text-shimmer {
                    background-size: 200% 200%;
                    animation: text-shimmer 3s ease-in-out infinite;
                }
                
                .animate-slide-in-mobile {
                    animation: slide-in-mobile 0.5s ease-out forwards;
                    opacity: 0;
                }
                
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </>
    );
};

export default Navbar;



// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import heavenLogo from '../assets/icons/heaven.png';
// import { ChevronDown } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [showNavbar, setShowNavbar] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const dropdownRef = useRef(null);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         {
//             name: 'Projects',
//             path: '/projects',
//             dropdown: [
//                 { name: 'Residential', path: '/projects/residential' },
//                 { name: 'Commercial', path: '/projects/commercial' },
//             ],
//         },
//         { name: 'Visit', path: '/visit' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     // Scroll hide/show navbar
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
//             setLastScrollY(currentScrollY);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [lastScrollY]);

//     // Animation variants for navbar
//     const navbarVariants = {
//         visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
//         hidden: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
//     };

//     // Animation variants for dropdown
//     const dropdownVariants = {
//         hidden: { opacity: 0, y: -10, scale: 0.95 },
//         visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
//     };

//     // Animation variants for mobile menu
//     const mobileMenuVariants = {
//         hidden: { opacity: 0, height: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
//         visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
//     };

//     const handleLogoClick = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <motion.header
//             initial="visible"
//             animate={showNavbar ? 'visible' : 'hidden'}
//             variants={navbarVariants}
//             className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow-lg border-b border-gray-300`}
//         >
//             <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//                 {/* Logo with bounce animation */}
//                 <Link to="/" className="flex items-center gap-2">
//                     <motion.img
//                         src={heavenLogo}
//                         alt="Heaven Logo"
//                         className="h-12 w-auto object-contain drop-shadow-md"
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//                         onClick={handleLogoClick}
//                     />
//                 </Link>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex space-x-10 items-center">
//                     {navLinks.map((link) =>
//                         link.dropdown ? (
//                             <div
//                                 key={link.name}
//                                 className="relative group"
//                                 onMouseEnter={() => (dropdownRef.current.style.opacity = 1)}
//                                 onMouseLeave={() => (dropdownRef.current.style.opacity = 0)}
//                             >
//                                 <motion.span
//                                     className="flex items-center gap-1 text-yellow-900 font-medium text-lg cursor-pointer"
//                                     whileHover={{ color: '#ca8a04', scale: 1.05 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     {link.name}
//                                     <motion.div
//                                         animate={{ rotate: dropdownRef.current?.style.opacity === '1' ? 180 : 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <ChevronDown className="w-4 h-4" />
//                                     </motion.div>
//                                 </motion.span>
//                                 <motion.div
//                                     ref={dropdownRef}
//                                     initial="hidden"
//                                     animate={dropdownRef.current?.style.opacity === '1' ? 'visible' : 'hidden'}
//                                     variants={dropdownVariants}
//                                     className="absolute top-full left-0 mt-2 w-44 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 border border-yellow-400 shadow-xl rounded-md pointer-events-auto"
//                                 >
//                                     {link.dropdown.map((item) => (
//                                         <motion.div
//                                             key={item.name}
//                                             whileHover={{ backgroundColor: '#facc15', x: 5 }}
//                                             transition={{ duration: 0.2 }}
//                                         >
//                                             <Link
//                                                 to={item.path}
//                                                 className="block px-4 py-2 text-yellow-900 font-medium hover:text-yellow-900 transition"
//                                             >
//                                                 {item.name}
//                                             </Link>
//                                         </motion.div>
//                                     ))}
//                                 </motion.div>
//                             </div>
//                         ) : (
//                             <motion.div
//                                 key={link.name}
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="relative group"
//                             >
//                                 <Link
//                                     to={link.path}
//                                     className="text-yellow-900 font-medium text-lg transition relative"
//                                 >
//                                     {link.name}
//                                     <motion.span
//                                         className="absolute bottom-[-4px] left-0 h-[2px] bg-yellow-500"
//                                         initial={{ width: 0 }}
//                                         whileHover={{ width: '100%' }}
//                                         transition={{ duration: 0.3, ease: 'easeInOut' }}
//                                     />
//                                 </Link>
//                             </motion.div>
//                         )
//                     )}
//                 </nav>

//                 {/* Hamburger */}
//                 <motion.button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-yellow-900 focus:outline-none"
//                     whileTap={{ scale: 0.9 }}
//                     whileHover={{ scale: 1.1 }}
//                 >
//                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <motion.path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                             animate={{ d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
//                             transition={{ duration: 0.3 }}
//                         />
//                     </svg>
//                 </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         variants={mobileMenuVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         className="md:hidden bg-[#fffaf1] shadow-inner px-4 pt-4 pb-6 space-y-4 border-t border-yellow-200"
//                     >
//                         {navLinks.map((link) =>
//                             link.dropdown ? (
//                                 <motion.div
//                                     key={link.name}
//                                     initial={{ opacity: 0, y: -10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3, delay: 0.1 }}
//                                     className="space-y-1"
//                                 >
//                                     <span className="block text-yellow-800 text-base font-semibold flex items-center gap-1">
//                                         {link.name}
//                                         <motion.div
//                                             animate={{ rotate: isOpen ? 180 : 0 }}
//                                             transition={{ duration: 0.3 }}
//                                         >
//                                             <ChevronDown className="w-4 h-4" />
//                                         </motion.div>
//                                     </span>
//                                     <div className="pl-4 space-y-1">
//                                         {link.dropdown.map((item) => (
//                                             <motion.div
//                                                 key={item.name}
//                                                 whileHover={{ x: 5, color: '#ca8a04' }}
//                                                 transition={{ duration: 0.2 }}
//                                             >
//                                                 <Link
//                                                     to={item.path}
//                                                     onClick={() => setIsOpen(false)}
//                                                     className="block text-gray-700 text-sm font-medium transition"
//                                                 >
//                                                     {item.name}
//                                                 </Link>
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             ) : (
//                                 <motion.div
//                                     key={link.name}
//                                     initial={{ opacity: 0, y: -10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3, delay: 0.1 }}
//                                 >
//                                     <Link
//                                         to={link.path}
//                                         onClick={() => setIsOpen(false)}
//                                         className="block text-yellow-800 text-base font-semibold hover:text-yellow-600 transition"
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </motion.div>
//                             )
//                         )}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.header>
//     );
// };

// export default Navbar;