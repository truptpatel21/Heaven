import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import SwiperBanner from '../components/SwiperBanner';
import Testimonials from '../components/Testimonials';
import About from '../pages/About';
import Projects from '../pages/Projects';
import HeavenGallery from '../pages/HeavenGallery';
import HeavenVideo from '../pages/HeavenVideo';

const Home = () => {
    return (
        <div className="home">
            <section className="banner-section">
                <SwiperBanner />
            </section>
            <section className="about-section">
                <About />
            </section>
            <section className="project-section">
                <Projects />
            </section>
            <section className="gallery-section">
                <HeavenGallery />
            </section>
            <section className="video-section">
                <HeavenVideo />
            </section>
            <section className="testimonials-section">
                <Testimonials />
            </section>
            {/* <Link to="/contact" className="whatsapp-button">
                <i className="fab fa-whatsapp"></i> Chat with Us
            </Link> */}
        </div>
    );
};

export default Home;