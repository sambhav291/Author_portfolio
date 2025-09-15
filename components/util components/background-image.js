import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": "./images/wallpapers/wall-1.webp",
        "wall-2": "./images/wallpapers/wall-2.webp",
        "wall-3": "./images/wallpapers/wall-3.webp",
        "wall-4": "./images/wallpapers/wall-4.webp",
        "wall-5": "./images/wallpapers/wall-5.webp",
        "wall-6": "./images/wallpapers/wall-6.webp",
        "wall-7": "./images/wallpapers/wall-7.webp",
        "wall-8": "./images/wallpapers/wall-8.webp",
        "gradient-1": "gradient-animated-purple",
        "gradient-2": "gradient-animated-ocean",
        "gradient-3": "gradient-animated-aurora",
        "gradient-4": "gradient-animated-sunset",
        "gradient-5": "gradient-animated-literary"
    };

    // Check if it's a gradient background
    const isGradient = props.img && props.img.startsWith('gradient-');
    
    if (isGradient) {
        return (
            <div className={`bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full ${bg_images[props.img]}`}>
                {/* Floating particles for modern effect */}
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`particle particle-${i + 1}`}></div>
                    ))}
                </div>
                
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-texture-dots"></div>
            </div>
        );
    }

    return (
        <div 
            style={{ 
                backgroundImage: `url(${bg_images[props.img]})`, 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat", 
                backgroundPositionX: "center" 
            }} 
            className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full"
        >
            {/* Add subtle gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 via-transparent to-primary-dark/30"></div>
        </div>
    )
}
