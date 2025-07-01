import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white pt-28 pb-16 px-6 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Contact Info + Map */}
                <div data-aos="fade-right">
                    <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4 leading-tight break-words text-center md:text-left px-2">
                        Get in Touch
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 mb-6">
                        We'd love to hear from you. Whether you have a question or want to schedule a visit — reach out!
                    </p>

                    <div className="space-y-2 text-sm text-gray-700 mb-6">
                        <p><strong>📍 Address:</strong> Palanpur, Gujarat </p>
                        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                        <p><strong>✉️ Email:</strong> heavenatmos@contact.com</p>
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="28" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="28" />
                        </a>
                    </div>

                    <div className="mt-6">
                        <iframe
                            title="Google Map"
                            className="w-full h-60 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5231447991946!2d72.40117397512829!3d24.15337917839757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebb41495d205%3A0x2a87b02642a54325!2sHeaven%20Atmos%20(Heaven%20Group)!5e0!3m2!1sen!2sin!4v1751255227123!5m2!1sen!2sin"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-left" className="bg-white p-6 shadow-xl rounded-xl">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
                        Contact Form
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                        />
                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                            rows="5"
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
                        >
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-green-600 text-center pt-4 animate-pulse">
                                ✅ Message sent! We'll respond shortly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
