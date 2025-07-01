import React from "react";

const FloatingWhatsapp = () => {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="WhatsApp Chat"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] bg-green-500 p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce-custom"
            style={{
                pointerEvents: "auto",
            }}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Icon"
                width="30"
                height="30"
                className="block"
            />
        </a>
    );
};

export default FloatingWhatsapp;

/* Add this to your global CSS (e.g., index.css or App.css):

@keyframes bounce-custom {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-16px);}
}
.animate-bounce-custom {
  animation: bounce-custom 1.5s infinite;
}
*/