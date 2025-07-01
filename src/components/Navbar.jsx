import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import heavenLogo from '../assets/icons/heaven.png';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dropdownRef = useRef(null);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Projects',
            path: '/projects',
            dropdown: [
                { name: 'Residential', path: '/projects/residential' },
                { name: 'Commercial', path: '/projects/commercial' },
            ],
        },
        { name: 'Visit', path: '/visit' },
        { name: 'Contact', path: '/contact' },
    ];

    // Scroll hide/show navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Animation variants for navbar
    const navbarVariants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
        hidden: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    // Animation variants for dropdown
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    // Animation variants for mobile menu
    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.header
            initial="visible"
            animate={showNavbar ? 'visible' : 'hidden'}
            variants={navbarVariants}
            className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow-lg border-b border-gray-300`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo with bounce animation */}
                <Link to="/" className="flex items-center gap-2">
                    <motion.img
                        src={heavenLogo}
                        alt="Heaven Logo"
                        className="h-12 w-auto object-contain drop-shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        onClick={handleLogoClick}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => (dropdownRef.current.style.opacity = 1)}
                                onMouseLeave={() => (dropdownRef.current.style.opacity = 0)}
                            >
                                <motion.span
                                    className="flex items-center gap-1 text-yellow-900 font-medium text-lg cursor-pointer"
                                    whileHover={{ color: '#ca8a04', scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                    <motion.div
                                        animate={{ rotate: dropdownRef.current?.style.opacity === '1' ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </motion.span>
                                <motion.div
                                    ref={dropdownRef}
                                    initial="hidden"
                                    animate={dropdownRef.current?.style.opacity === '1' ? 'visible' : 'hidden'}
                                    variants={dropdownVariants}
                                    className="absolute top-full left-0 mt-2 w-44 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 border border-yellow-400 shadow-xl rounded-md pointer-events-auto"
                                >
                                    {link.dropdown.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            whileHover={{ backgroundColor: '#facc15', x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link
                                                to={item.path}
                                                className="block px-4 py-2 text-yellow-900 font-medium hover:text-yellow-900 transition"
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                key={link.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                <Link
                                    to={link.path}
                                    className="text-yellow-900 font-medium text-lg transition relative"
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute bottom-[-4px] left-0 h-[2px] bg-yellow-500"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    />
                                </Link>
                            </motion.div>
                        )
                    )}
                </nav>

                {/* Hamburger */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-yellow-900 focus:outline-none"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            animate={{ d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
                            transition={{ duration: 0.3 }}
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="md:hidden bg-[#fffaf1] shadow-inner px-4 pt-4 pb-6 space-y-4 border-t border-yellow-200"
                    >
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="space-y-1"
                                >
                                    <span className="block text-yellow-800 text-base font-semibold flex items-center gap-1">
                                        {link.name}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    </span>
                                    <div className="pl-4 space-y-1">
                                        {link.dropdown.map((item) => (
                                            <motion.div
                                                key={item.name}
                                                whileHover={{ x: 5, color: '#ca8a04' }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-gray-700 text-sm font-medium transition"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-yellow-800 text-base font-semibold hover:text-yellow-600 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;