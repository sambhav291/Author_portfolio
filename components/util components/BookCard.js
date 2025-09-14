import React from 'react';

const BookCard = ({ 
    imageUrl, 
    title, 
    synopsis, 
    author, 
    year, 
    genre, 
    onClick,
    className = "",
    showDetails = true 
}) => {
    return (
        <div 
            className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${className}`}
            onClick={onClick}
        >
            {/* Book Cover Image */}
            <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-64 md:h-72 bg-gray-100 flex items-center justify-center">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={`${title} book cover`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="text-center p-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                                <svg 
                                    className="w-8 h-8 text-gray-400" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                                    />
                                </svg>
                            </div>
                            <span className="text-gray-500 font-sans text-sm">Book Cover</span>
                        </div>
                    )}
                </div>
                
                {/* Overlay for additional info on hover */}
                {showDetails && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-sans text-sm font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md">
                            View Details
                        </span>
                    </div>
                )}
            </div>

            {/* Book Information */}
            <div className="p-6">
                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-ubt-blue transition-colors duration-200">
                    {title}
                </h3>

                {/* Author and Year */}
                {showDetails && (author || year || genre) && (
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-gray-600">
                        {author && (
                            <span className="font-sans font-medium">{author}</span>
                        )}
                        {(author && (year || genre)) && (
                            <span className="text-gray-400">•</span>
                        )}
                        {genre && (
                            <span className="font-sans text-ubt-blue">{genre}</span>
                        )}
                        {(genre && year) && (
                            <span className="text-gray-400">•</span>
                        )}
                        {year && (
                            <span className="font-sans">{year}</span>
                        )}
                    </div>
                )}

                {/* Synopsis */}
                {synopsis && (
                    <p className="font-sans text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
                        {synopsis}
                    </p>
                )}

                {/* Action Button */}
                {showDetails && (
                    <button 
                        className="w-full bg-gray-50 hover:bg-ubt-blue hover:text-white text-gray-700 px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-200 group-hover:bg-ubt-blue group-hover:text-white"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onClick) onClick();
                        }}
                    >
                        Learn More
                    </button>
                )}
            </div>
        </div>
    );
};

// Compact version for smaller displays or lists
export const BookCardCompact = ({ 
    imageUrl, 
    title, 
    synopsis, 
    author, 
    year,
    onClick,
    className = "" 
}) => {
    return (
        <div 
            className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group flex gap-4 ${className}`}
            onClick={onClick}
        >
            {/* Book Cover - Smaller */}
            <div className="flex-shrink-0">
                <div className="w-16 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={`${title} book cover`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <svg 
                            className="w-6 h-6 text-gray-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                            />
                        </svg>
                    )}
                </div>
            </div>

            {/* Book Info */}
            <div className="flex-1 min-w-0">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-ubt-blue transition-colors duration-200">
                    {title}
                </h4>
                
                {(author || year) && (
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                        {author && <span className="font-sans font-medium">{author}</span>}
                        {(author && year) && <span className="text-gray-400">•</span>}
                        {year && <span className="font-sans">{year}</span>}
                    </div>
                )}

                {synopsis && (
                    <p className="font-sans text-gray-700 text-xs leading-relaxed line-clamp-2">
                        {synopsis}
                    </p>
                )}
            </div>
        </div>
    );
};

// Featured book card for hero sections or highlights
export const BookCardFeatured = ({ 
    imageUrl, 
    title, 
    synopsis, 
    author, 
    year, 
    genre,
    awards,
    onClick,
    className = "" 
}) => {
    return (
        <div 
            className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden ${className}`}
            onClick={onClick}
        >
            <div className="md:flex">
                {/* Book Cover */}
                <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full bg-gray-100 flex items-center justify-center">
                        {imageUrl ? (
                            <img 
                                src={imageUrl} 
                                alt={`${title} book cover`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div className="text-center p-8">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-xl flex items-center justify-center">
                                    <svg 
                                        className="w-10 h-10 text-gray-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                                        />
                                    </svg>
                                </div>
                                <span className="text-gray-500 font-sans text-sm">Featured Book</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Book Details */}
                <div className="md:w-2/3 p-8">
                    {awards && (
                        <div className="inline-block bg-ubt-blue text-white px-3 py-1 rounded-full text-xs font-sans font-medium mb-4">
                            {awards}
                        </div>
                    )}
                    
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-ubt-blue transition-colors duration-200">
                        {title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
                        {author && (
                            <span className="font-sans font-semibold">{author}</span>
                        )}
                        {genre && (
                            <>
                                <span className="text-gray-400">•</span>
                                <span className="font-sans text-ubt-blue font-medium">{genre}</span>
                            </>
                        )}
                        {year && (
                            <>
                                <span className="text-gray-400">•</span>
                                <span className="font-sans">{year}</span>
                            </>
                        )}
                    </div>

                    {synopsis && (
                        <p className="font-sans text-gray-700 leading-relaxed mb-6 line-clamp-4">
                            {synopsis}
                        </p>
                    )}

                    <button 
                        className="bg-ubt-blue hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-sans font-medium transition-all duration-200 inline-flex items-center gap-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onClick) onClick();
                        }}
                    >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;