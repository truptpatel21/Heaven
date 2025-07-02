import React, { useEffect, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MessageCircle,
    Send,
    Calendar,
    Clock,
    CheckCircle,
    Star,
    Sparkles,
    MapPin,
    Building
} from "lucide-react";

const VisitBooking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
        scheduleVisit: false,
        scheduleCall: false
    });

    const [submitted, setSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeField, setActiveField] = useState("");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
            name: "",
            email: "",
            phone: "",
            project: "",
            message: "",
            scheduleVisit: false,
            scheduleCall: false
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                        <Building className="w-6 h-6 text-blue-600 animate-pulse" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Book Your Visit
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience our premium properties firsthand. Schedule your personalized site visit today.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Form */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
                                    <MapPin className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Experience</h2>
                                <p className="text-gray-600">Fill out the form below and we'll arrange your perfect visit</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="relative group">
                                        <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'name' ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('name')}
                                            onBlur={() => setActiveField('')}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 group-hover:shadow-md"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group">
                                        <Mail className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('email')}
                                            onBlur={() => setActiveField('')}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 group-hover:shadow-md"
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="relative group">
                                    <Phone className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'phone' ? 'text-blue-600' : 'text-gray-400'}`} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('phone')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 group-hover:shadow-md"
                                    />
                                </div>

                                {/* Project Dropdown */}
                                <div className="relative group">
                                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <select
                                        name="project"
                                        required
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 group-hover:shadow-md appearance-none"
                                    >
                                        <option value="">Select Project</option>
                                        <option value="heaven-atmos">Heaven Atmos</option>
                                        <option value="heaven-industrial-park">Heaven Industrial Park</option>
                                    </select>
                                </div>

                                {/* Message Field (Optional) */}
                                <div className="relative group">
                                    <MessageCircle className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'message' ? 'text-blue-600' : 'text-gray-400'}`} />
                                    <textarea
                                        name="message"
                                        placeholder="Additional requirements or questions (Optional)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 resize-none group-hover:shadow-md"
                                        rows="4"
                                    />
                                </div>

                                {/* Checkbox Options */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Schedule Visit Checkbox */}
                                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors duration-300 group">
                                        <input
                                            type="checkbox"
                                            name="scheduleVisit"
                                            id="scheduleVisit"
                                            checked={formData.scheduleVisit}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label htmlFor="scheduleVisit" className="flex items-center text-blue-700 font-medium cursor-pointer group-hover:text-blue-800 transition-colors duration-300">
                                            <MapPin className="w-5 h-5 mr-2" />
                                            Schedule Site Visit
                                        </label>
                                    </div>

                                    {/* Schedule Call Checkbox */}
                                    <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200 hover:bg-indigo-100 transition-colors duration-300 group">
                                        <input
                                            type="checkbox"
                                            name="scheduleCall"
                                            id="scheduleCall"
                                            checked={formData.scheduleCall}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-indigo-600 bg-white border-indigo-300 rounded focus:ring-indigo-500 focus:ring-2"
                                        />
                                        <label htmlFor="scheduleCall" className="flex items-center text-indigo-700 font-medium cursor-pointer group-hover:text-indigo-800 transition-colors duration-300">
                                            <Phone className="w-5 h-5 mr-2" />
                                            Schedule Call
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 font-semibold text-lg group"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    <span>Book Your Visit</span>
                                </button>

                                {/* Success Message */}
                                {submitted && (
                                    <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200 animate-bounce">
                                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                        <p className="text-green-700 font-semibold">
                                            ✨ Booking request submitted successfully! We'll contact you soon to confirm your visit.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Additional Info Cards */}
                    <div className={`grid md:grid-cols-3 gap-6 mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 group">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                            <p className="text-gray-600 text-sm">Choose your preferred date and time for the visit</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 group">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Star className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                            <p className="text-gray-600 text-sm">Our specialists will guide you through every detail</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 group">
                            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Experience</h3>
                            <p className="text-gray-600 text-sm">Enjoy a personalized tour of our premium properties</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default VisitBooking;