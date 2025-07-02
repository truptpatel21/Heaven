import React, { useEffect, useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    MessageCircle,
    Send,
    User,
    Calendar,
    Clock,
    CheckCircle,
    Star,
    Heart,
    Sparkles
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        project: "",
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
            message: "",
            project: "",
            scheduleCall: false
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: "Address",
            value: "Palanpur, Gujarat, India",
            color: "text-purple-600"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 98765 43210",
            color: "text-green-600"
        },
        {
            icon: Mail,
            label: "Email",
            value: "heavenatmos@contact.com",
            color: "text-blue-600"
        },
        {
            icon: Clock,
            label: "Business Hours",
            value: "Mon - Sunat: 9:00 AM - 9:00 PM",
            color: "text-orange-600"
        }
    ];

    const socialLinks = [
        {
            name: "WhatsApp",
            url: "https://wa.me/919876543210",
            icon: MessageCircle,
            color: "bg-green-500 hover:bg-green-600"
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
            icon: Heart,
            color: "bg-pink-500 hover:bg-pink-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
                        <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Let's Connect
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your vision to life? We're here to help you create something extraordinary.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-xl ${info.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                                            <info.icon className={`w-6 h-6 ${info.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                                            <p className="text-gray-600 text-sm">{info.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <Star className="w-6 h-6 text-yellow-500 mr-2 animate-spin" />
                                Connect With Us
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`${social.color} p-4 rounded-xl text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <MapPin className="w-6 h-6 text-purple-600 mr-2" />
                                Find Us Here
                            </h3>
                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <iframe
                                    title="Google Map"
                                    className="w-full h-64 hover:scale-105 transition-transform duration-500"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5231447991946!2d72.40117397512829!3d24.15337917839757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebb41495d205%3A0x2a87b02642a54325!2sHeaven%20Atmos%20(Heaven%20Group)!5e0!3m2!1sen!2sin!4v1751255227123!5m2!1sen!2sin"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Simplified Contact Form */}
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 sticky top-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
                                <p className="text-gray-600">Tell us about your project and let's create magic together</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative group">
                                    <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'name' ? 'text-purple-600' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('name')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="relative group">
                                    <Mail className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'email' ? 'text-purple-600' : 'text-gray-400'}`} />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('email')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="relative group">
                                    <Phone className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'phone' ? 'text-purple-600' : 'text-gray-400'}`} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('phone')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                    />
                                </div>

                                {/* Project Dropdown */}
                                {/* <div className="relative group">
                                    <select
                                        name="project"
                                        required
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                    >
                                        <option value="">Select Project</option>
                                        <option value="heaven-atmos">Heaven Atmos</option>
                                        <option value="heaven-industrial-park">Heaven Industrial Park</option>
                                    </select>
                                </div> */}

                                {/* Message Field */}
                                <div className="relative group">
                                    <MessageCircle className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${activeField === 'message' ? 'text-purple-600' : 'text-gray-400'}`} />
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField('')}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 resize-none"
                                        rows="4"
                                    />
                                </div>

                                {/* Schedule Call Checkbox */}
                                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                                    <input
                                        type="checkbox"
                                        name="scheduleCall"
                                        id="scheduleCall"
                                        checked={formData.scheduleCall}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-purple-600 bg-white border-purple-300 rounded focus:ring-purple-500 focus:ring-2"
                                    />
                                    <label htmlFor="scheduleCall" className="flex items-center text-purple-700 font-medium cursor-pointer">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Schedule a Call
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 font-semibold text-lg group"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    <span>Send Message</span>
                                </button>

                                {submitted && (
                                    <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200 animate-bounce">
                                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                        <p className="text-green-700 font-semibold">
                                            ✨ Message sent successfully! We'll get back to you soon.
                                        </p>
                                    </div>
                                )}
                            </form>
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

export default Contact;