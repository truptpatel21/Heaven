import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHome, FaRegClock } from "react-icons/fa";
import HeavenGallery from './HeavenGallery';
import HeavenVideo from './HeavenVideo';
import AtmosAminities from './AtmosAminities'
import PhoneInput from 'react-phone-input-2';
import './style.css';
import axios from 'axios';
import { useEffect, useRef } from 'react';



const ResidentialProject = () => {
    const [phone, setPhone] = useState('');
    const [amenitiesVisible, setAmenitiesVisible] = useState(false);
    // const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState({ name: 'India', code: '+91', flag: '🇮🇳' });
    const [countryList, setCountryList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // const aboutRef = useRef(null);
    // const [aboutInView, setAboutInView] = useState(false);
    const aboutRef = useRef(null);
    const [aboutInView, setAboutInView] = useState(false);

    const locationRef = useRef(null);
    const [locationInView, setLocationInView] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setLocationInView(entry.isIntersecting),
            { threshold: 0.4 }
        );

        if (locationRef.current) observer.observe(locationRef.current);
        return () => {
            if (locationRef.current) observer.unobserve(locationRef.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setAboutInView(entry.isIntersecting),
            { threshold: 0.4 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);
      
      

    const contactRef = useRef(null);
    const [contactInView, setContactInView] = useState(false);
    const [hasAnimatedContact, setHasAnimatedContact] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedContact) {
                    setHasAnimatedContact(true);
                }
            }
              
        );

        if (contactRef.current) observer.observe(contactRef.current);
        return () => {
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);



    const dropdownRef = useRef(null);

    const toggleAmenities = () => {
        setAmenitiesVisible(!amenitiesVisible);
    };

    const filteredCountries = countryList.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.includes(searchTerm)
    );

    useEffect(() => {
        const closeDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    }, []);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,idd,flags').then(res => {
            const list = res.data
                .filter(c => c.idd?.root)
                .map(c => ({
                    name: c.name.common,
                    code: `${c.idd.root}${c.idd.suffixes ? c.idd.suffixes[0] : ''}`,
                    flag: c.flags.svg,
                }))
                .sort((a, b) => a.name.localeCompare(b.name));
            setCountryList(list);
            const india = list.find(c => c.name === 'India');
            if (india) setCountryCode(india);

        });
    }, []);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section */}
            <section
                className="relative bg-cover bg-center h-[100vh] text-white font-['Inter']"
                style={{
                    backgroundImage: `url(https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/project/banner/banner_web_1721466111_79.jpg&h=1080&w=1903&q=100)`
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-wide font-['Playfair_Display'] mb-4 typing-effect">
                        HEAVEN ATMOS</h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 opacity-0 animate-fade-up animation-delay-500">

                        4 BHK King Size Luxurious Bungalows <br />
                        <span className="flex justify-center items-center gap-2 mt-2 text-lg font-medium opacity-0 animate-fade-up animation-delay-700">
                            <FaMapMarkerAlt /> Palanpur, Gujarat | <FaRegClock /> Ongoing
                        </span>
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up animation-delay-900">

                        <button
                            onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-red-600 hover:bg-red-700 transition-all px-6 py-3 rounded-md shadow-md text-lg font-medium"
                        >
                            Inquire Now
                        </button>
                        <a
                            href="/pdfs/Heaven_Atmos_Brochure.pdf"
                            download="Heaven_Atmos_Brochure.pdf"
                            className="bg-white hover:bg-gray-100 transition-all text-red-700 px-6 py-3 rounded-md shadow-md text-lg font-medium"
                        >
                            📄 Brochure
                        </a>

                        <button
                            onClick={() => document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gray-800 hover:bg-black transition-all px-6 py-3 rounded-md shadow-md text-lg font-medium"
                        >
                            Gallery
                        </button>
                    </div>
                </div>
            </section>


            {/* <section className="bg-white py-20 px-6 md:px-16 text-center text-gray-800 relative" >
             */}
            <section
                ref={aboutRef}
                className={`bg-white py-20 px-6 md:px-16 text-center text-gray-800 relative transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className={`h-[2px] bg-red-600 transition-all duration-[1.5s] ${aboutInView ? 'w-20' : 'w-0'
                        }`}></div>
                    <h3 className="text-red-700 font-medium text-lg">About Us</h3>
                </div>

                <div className="max-w-5xl mx-auto" >

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight font-['Playfair_Display'] typing-effect ${aboutInView ? 'inline-block' : 'hidden'
                        }`}>
                        <span className="text-black">Welcome to </span>
                        <span className="text-red-700">Heaven Atmos</span>
                    </h2>


                    <p className={`text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto text-gray-600 transition-opacity duration-700 delay-500 ${aboutInView ? 'opacity-100' : 'opacity-0'
                        }`}>

                        Heaven Atmos offers a premium lifestyle in the heart of Palanpur with ultra-spacious 4 BHK king-size bungalows.
                        Thoughtfully designed to blend luxury, comfort, and greenery — making every day feel like a holiday.
                    </p>

                    <div className="mt-10 flex justify-center gap-8 flex-wrap">
                        {[
                            { icon: <FaHome className="text-red-600 text-2xl" />, text: "Residential" },
                            { icon: <FaMapMarkerAlt className="text-red-600 text-2xl" />, text: "Palanpur, Gujarat" },
                            { icon: <FaRegClock className="text-red-600 text-2xl" />, text: "Ongoing Project" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 opacity-0 transform transition-all duration-700 ${aboutInView ? `opacity-100 translate-y-0 delay-[${300 + idx * 200}ms]` : 'translate-y-5'
                                    }`}
                                style={{ transitionDelay: `${idx * 200 + 300}ms` }}
                            >
                                {item.icon}
                                <span className="text-base font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section className="video-section">
                <HeavenGallery />
            </section>


            {/* Project Walkthrough Section */}
            <section className="py-12 px-4">
                <HeavenVideo />
            </section>


            {/* Amenities Section */}
            <section className="py-12 px-4">
                <AtmosAminities />
            </section>

            {/* Location Section */}
            <section
                ref={locationRef}
                className={`py-16 px-6 md:px-20 bg-[#f9f9f9] transition-all duration-700 ${locationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                


                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                    {/* Left: Address Info */}
                    <div className="text-left space-y-6">
                        <div className="flex items-center gap-4">
                            <div className={`h-[2px] bg-red-600 transition-all duration-1000 ${locationInView ? 'w-20' : 'w-0'}`}></div>

                            <h2 className="text-red-700 text-xl font-medium">Location</h2>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-gray-800">
                            Find Us Easily
                        </h3>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Heaven Atmos, Before D'mart, Opp. Ramdev Hotel, <br />
                            Palanpur - Ahmedabad Highway, Palanpur - 385001,<br />
                            Dist: Banaskantha, Gujarat, India.
                        </p>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Heaven+Atmos,+Palanpur,+Gujarat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-md shadow transition-all duration-300"
                        >
                            📍 Get Directions
                        </a>
                    </div>

                    {/* Right: Google Map */}
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 transition-all duration-700 hover:scale-[1.01]">
                        <iframe
                            title="Heaven Atmos Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5231447991946!2d72.40117397512829!3d24.15337917839757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebb41495d205%3A0x2a87b02642a54325!2sHeaven%20Atmos%20(Heaven%20Group)!5e0!3m2!1sen!2sin!4v1751255227123!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full h-[350px] border-0"
                        ></iframe>
                    </div>
                </div>

            </section>



            <section
                ref={contactRef}
                className={`py-20 bg-gradient-to-br from-white to-gray-100 px-6 md:px-16 transition-all duration-700 ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Form Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <div
                                className={`h-[2px] bg-red-600 transition-all duration-1000 ${hasAnimatedContact ? 'w-20' : 'w-0'
                                    }`}
                            ></div>
                            <h3 className="text-red-700 text-lg font-medium tracking-wide">Contact</h3>
                        </div>
                        <h2
                            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display'] typing-effect ${hasAnimatedContact ? 'inline-block' : 'hidden'
                                }`}
                        >
                            <span className="text-gray-900">Get in </span>
                            <span className="text-red-600">Touch</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Fill the form below and our team will connect with you shortly.
                        </p>

                        <form className="space-y-6">
                            {/* Name & Email */}
                            <div
                                className={`transition-all duration-700 delay-[100ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            className="peer w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent py-3 px-1 outline-none"
                                            required
                                        />
                                        <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder=" "
                                            className="peer w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent py-3 px-1 outline-none"
                                            required
                                        />
                                        <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
                                            Email Address
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Country & Phone */}
                            <div
                                className={`transition-all duration-700 delay-[250ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative" ref={dropdownRef}>
                                        <label className="block mb-2 text-sm font-semibold text-red-700">Country Code</label>
                                        <div
                                            className="border-b-2 border-gray-300 focus-within:border-red-600 flex items-center gap-2 py-2 px-2 cursor-pointer"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <img src={countryCode.flag} alt="" className="w-6 h-4 object-contain" />
                                            <span className="text-base text-gray-700">{countryCode.code}</span>
                                            <svg className="ml-auto w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        {dropdownOpen && (
                                            <div className="absolute z-50 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-auto shadow-md">
                                                <input
                                                    type="text"
                                                    className="w-full p-2 border-b text-sm outline-none"
                                                    placeholder="Search..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                                {filteredCountries.map((country, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => {
                                                            setCountryCode(country);
                                                            setDropdownOpen(false);
                                                            setSearchTerm('');
                                                        }}
                                                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                    >
                                                        <img src={country.flag} alt={country.name} className="w-5 h-3 object-contain" />
                                                        <span>{country.code}</span>
                                                        <span className="ml-auto text-gray-600">{country.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <label className="block mb-2 text-sm font-semibold text-red-700">Mobile Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Type Your Mobile Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full border-b-2 border-gray-300 focus:border-red-600 outline-none py-3 px-1 text-base text-gray-700 placeholder-gray-400"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div
                                className={`transition-all duration-700 delay-[400ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <div className="relative">
                                    <textarea
                                        placeholder=" "
                                        rows="4"
                                        className="peer w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent py-3 px-1 outline-none"
                                        required
                                    ></textarea>
                                    <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
                                        Your Message
                                    </label>
                                </div>
                            </div>

                            {/* Checkboxes */}
                            <div
                                className={`transition-all duration-700 delay-[550ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                                    {['Keep me updated', 'Schedule Call', 'Schedule Visit'].map((text, index) => (
                                        <label key={index} className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked className="accent-red-600" />
                                            {text}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Dates */}
                            <div
                                className={`transition-all duration-700 delay-[700ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="date" className="w-full p-3 border-b-2 border-gray-300 text-gray-600 focus:border-red-600 bg-transparent outline-none" />
                                    <input type="date" className="w-full p-3 border-b-2 border-gray-300 text-gray-600 focus:border-red-600 bg-transparent outline-none" />
                                </div>
                            </div>

                            {/* Submit */}
                            <div
                                className={`transition-all duration-700 delay-[850ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold text-lg shadow-lg transition-all duration-300"
                                >
                                    🚀 Submit Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Illustration */}
                    <div
                        className={`text-center md:text-left transition-all duration-700 delay-[900ms] ${hasAnimatedContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                            }`}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Contact Illustration"
                            className="w-full max-w-sm mx-auto md:mx-0"
                        />
                        <p className="mt-6 text-gray-600 text-lg">
                            Or email us directly at <span className="text-red-600 font-semibold">heavenatmos@contact.com</span>
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ResidentialProject;