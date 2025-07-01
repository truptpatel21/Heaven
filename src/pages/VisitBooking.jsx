import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisitBooking = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        project: "residential",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
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
            date: "",
            project: "residential",
            message: "",
        });
    };

    return (
        <section className="pt-28 pb-16 px-6 bg-white min-h-screen flex items-start justify-center">
            <div className="w-full max-w-3xl p-8 shadow-xl rounded-xl bg-gradient-to-br from-purple-50 to-white">
                <h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-6 text-purple-700 leading-tight break-words px-2"
                    data-aos="fade-down"
                >
                    Book a Site Visit
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 rounded-md border w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-md border w-full"
                        />
                    </div>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-3 rounded-md border w-full"
                    />
                    <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="p-3 rounded-md border w-full"
                    />

                    <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="p-3 rounded-md border w-full"
                    >
                        <option value="residential">Heaven Atmos</option>
                        <option value="resort">Heaven Industrial Park</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Additional Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded-md border w-full"
                        rows="4"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Submit Booking Request
                    </button>

                    {submitted && (
                        <p className="text-green-600 text-center pt-4 animate-pulse">
                            ✅ Request submitted successfully! We'll contact you soon.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default VisitBooking;
