import React, { useState, useRef, useEffect } from 'react';

const BookCard = ({ 
  imageUrl, 
  title, 
  synopsis, 
  author, 
  year, 
  genre, 
  onClick, 
  className = "",
  index = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, index * 150); // Staggered delay
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index, hasAnimated]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  const generatePlaceholderGradient = (title) => {
    const colors = [
      'from-purple-600 to-blue-600',
      'from-emerald-600 to-teal-600', 
      'from-rose-600 to-pink-600',
      'from-amber-600 to-orange-600',
      'from-indigo-600 to-purple-600',
      'from-cyan-600 to-blue-600'
    ];
    const hash = title.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform cursor-pointer book-card-hover-lift ${
        isVisible ? 'book-card-slide-in' : 'opacity-0'
      } book-card-delay-${Math.min(index + 1, 6)} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(30, 37, 51, 0.9) 0%, rgba(42, 52, 65, 0.8) 50%, rgba(53, 64, 80, 0.7) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(201, 169, 97, 0.2)',
        borderRadius: '1.5rem',
        boxShadow: '0 15px 40px rgba(10, 14, 26, 0.6), 0 8px 25px rgba(10, 14, 26, 0.4), inset 0 1px 0 rgba(247, 249, 252, 0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Textured Background Overlay */}
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7f9fc' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-primary-gradient opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      
      {/* Mouse-responsive Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(201, 169, 97, 0.15) 0%, transparent 70%)`
        }}
      />
      
      {/* Enhanced Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-primary-medium/30 to-primary-light/20 border border-accent-gold/20" />
      
      {/* Content Container */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Book Cover */}
        <div className="relative mb-6 group/cover">
          <div 
            className={`aspect-[3/4] w-full rounded-xl overflow-hidden shadow-book transition-all duration-500 ${
              isHovered ? 'transform rotate-1 scale-105' : ''
            }`}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${title} cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${generatePlaceholderGradient(title)} flex items-center justify-center relative overflow-hidden`}>
                {/* Animated Book Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 right-4 h-px bg-white/30" />
                  <div className="absolute top-8 left-4 right-8 h-px bg-white/20" />
                  <div className="absolute top-12 left-4 right-6 h-px bg-white/20" />
                  <div className="absolute top-16 left-4 right-10 h-px bg-white/20" />
                  <div className="absolute bottom-8 left-4 right-4 text-xs text-white/50 font-serif">
                    {title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
                
                {/* Floating Book Icon */}
                <div className="relative">
                  <svg 
                    className="w-16 h-16 text-white/80 animate-float" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/cover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                </div>
              </div>
            )}
          </div>
          
          {/* Reading Progress Indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-literary-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
            <svg className="w-3 h-3 text-literary-dark" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Book Details */}
        <div className="flex-grow space-y-3">
          {/* Genre Badge */}
          {genre && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-gold/20 text-accent-gold border border-accent-gold/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 animate-pulse-soft" />
              {genre}
            </div>
          )}
          
          {/* Title with Enhanced Typography */}
          <h3 className={`text-xl font-serif font-bold text-primary leading-tight transition-all duration-300 tracking-wide ${
            isHovered ? 'text-accent-gold' : ''
          }`}
              style={{
                textShadow: '0 2px 4px rgba(10, 14, 26, 0.3)',
                fontFamily: "'Playfair Display', Georgia, Cambria, 'Times New Roman', Times, serif"
              }}>
            {title}
          </h3>
          
          {/* Author & Year */}
          <div className="flex items-center justify-between text-sm text-secondary font-sans">
            {author && <span className="font-medium tracking-wide">{author}</span>}
            {year && <span className="text-accent-gold/80 font-medium">{year}</span>}
          </div>
          
          {/* Synopsis with Clean Sans-Serif */}
          {synopsis && (
            <div className="relative">
              <p className={`text-sm text-secondary leading-relaxed transition-all duration-500 font-sans tracking-wide ${
                isHovered ? 'max-h-32' : 'max-h-20'
              } overflow-hidden`}
                 style={{
                   fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                   lineHeight: '1.6'
                 }}>
                {synopsis}
              </p>
              
              {/* Gradient Fade */}
              <div className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-primary-medium/80 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`} />
            </div>
          )}
        </div>
        
        {/* Action Button */}
        <div className="mt-6">
          <button className="w-full bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary-dark px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1 relative overflow-hidden group/btn backdrop-blur-sm border border-accent-gold/30">
            <span className="relative z-10 flex items-center justify-center space-x-2 font-sans tracking-wide">
              <span className="font-semibold">Explore Book</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            
            {/* Enhanced Button Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold-light to-accent-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
        <svg fill="currentColor" viewBox="0 0 20 20" className="text-accent-gold animate-rotate-slow">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Enhanced Bottom Accent Line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default BookCard;