import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';

interface LogoSplashProps {
    onComplete: () => void;
}

const LogoSplash: React.FC<LogoSplashProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // Wait for fade out animation
        }, 3500); // Show splash for 3.5 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`logo-splash ${!isVisible ? 'fade-out' : ''}`}>
            {/* Animated Background */}
            <div className="splash-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}>
                        <Sparkles size={12} />
                    </div>
                ))}
            </div>

            {/* Main Logo Container */}
            <div className="logo-container">
                {/* Rotating Ring */}
                <div className="logo-ring">
                    <div className="ring-segment"></div>
                    <div className="ring-segment"></div>
                    <div className="ring-segment"></div>
                </div>

                {/* Logo Image */}
                <div className="logo-image-wrapper">
                    <img
                        src="/logo/heaven.png"
                        alt="Heaven Logo"
                        className="logo-image"
                    />
                    <div className="logo-glow"></div>
                </div>

                {/* Pulsing Stars */}
                <div className="star star-1">
                    <Star size={16} fill="currentColor" />
                </div>
                <div className="star star-2">
                    <Star size={12} fill="currentColor" />
                </div>
                <div className="star star-3">
                    <Star size={14} fill="currentColor" />
                </div>
                <div className="star star-4">
                    <Star size={10} fill="currentColor" />
                </div>
            </div>

            {/* Loading Text */}
            <div className="loading-text">
                <span className="loading-letter">L</span>
                <span className="loading-letter">O</span>
                <span className="loading-letter">A</span>
                <span className="loading-letter">D</span>
                <span className="loading-letter">I</span>
                <span className="loading-letter">N</span>
                <span className="loading-letter">G</span>
                <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-container">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default LogoSplash;