import React, { Component } from 'react';
import { authorConfig } from '../../config/author-config.js';

export default class AuthorPortfolio extends Component {
    constructor() {
        super();
        this.state = {
            activeSection: 'about',
            isMenuOpen: false
        };
    }

    changeSection = (section) => {
        this.setState({ activeSection: section });
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <div className="h-screen w-full bg-gradient-elegant overflow-hidden relative">
                {/* Global Animated Orbs Background - Throughout entire site */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="floating-orb orb-1"></div>
                    <div className="floating-orb orb-2"></div>
                    <div className="floating-orb orb-3"></div>
                    <div className="floating-orb orb-4"></div>
                    <div className="floating-orb orb-5"></div>
                    <div className="floating-orb orb-6"></div>
                    <div className="floating-orb orb-7"></div>
                    <div className="floating-orb orb-8"></div>
                    <div className="floating-orb orb-9"></div>
                    <div className="floating-orb orb-10"></div>
                    <div className="floating-orb orb-11"></div>
                    <div className="floating-orb orb-12"></div>
                </div>
                
                {/* Navigation Bar */}
                <nav className="bg-glass-golden border-b border-golden/20 px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-elegant backdrop-blur-lg">
                    <div className="font-serif text-2xl font-bold text-maroon-dark">
                        {authorConfig.name}
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Books', 'Expertise', 'Testimonials', 'Contact'].map((item) => (
                            <button 
                                key={item}
                                onClick={() => this.changeSection(item.toLowerCase())}
                                className={`font-sans font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                                    this.state.activeSection === item.toLowerCase() 
                                        ? 'bg-gradient-royal text-white shadow-elegant' 
                                        : 'text-royal-dark hover:bg-golden/10 hover:text-maroon-dark'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={this.toggleMenu}
                        className="md:hidden text-maroon-dark p-2 rounded-md hover:bg-golden/10 transition-all duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                {this.state.isMenuOpen && (
                    <div className="md:hidden fixed top-20 left-0 right-0 bg-glass-golden border-b border-golden/20 z-40 shadow-elegant backdrop-blur-lg">
                        <div className="px-6 py-4 space-y-2">
                            {['About', 'Books', 'Biography', 'Reviews', 'Contact'].map((item) => (
                                <button 
                                    key={item}
                                    onClick={() => {
                                        this.changeSection(item.toLowerCase());
                                        this.toggleMenu();
                                    }}
                                    className={`block w-full text-left font-sans font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                                        this.state.activeSection === item.toLowerCase() 
                                            ? 'bg-gradient-royal text-white shadow-elegant' 
                                            : 'text-royal-dark hover:bg-golden/10 hover:text-maroon-dark'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="pt-20 h-full overflow-y-auto relative z-10">
                    {/* Hero Section - Only show on About section */}
                    {this.state.activeSection === 'about' && (
                        <section className="py-20 px-6 relative overflow-hidden">
                            <div className="max-w-4xl mx-auto text-center relative z-10">
                                {/* Profile Image - Made Bigger */}
                                <div className="w-48 md:w-56 lg:w-64 mx-auto mb-8">
                                    <img 
                                        src={authorConfig.profileImage} 
                                        alt={authorConfig.name} 
                                        className="w-full h-full object-cover rounded-full border-4 border-golden shadow-elegant"
                                    />
                                </div>
                                
                                {/* Author Name and Title */}
                                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-dark mb-4">
                                    {authorConfig.name}
                                </h1>
                                <p className="font-sans text-xl md:text-2xl text-royal-dark mb-8">
                                    {authorConfig.title}
                                </p>
                                
                                {/* Call to Action */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button 
                                        onClick={() => this.changeSection('books')}
                                        className="bg-gradient-royal text-white px-8 py-3 rounded-md font-sans font-medium hover:bg-gradient-royal-hover transition-all duration-200 shadow-elegant"
                                    >
                                        Explore My Books
                                    </button>
                                    <button 
                                        onClick={() => this.changeSection('contact')}
                                        className="border border-golden text-golden-dark px-8 py-3 rounded-md font-sans font-medium hover:bg-golden/10 transition-all duration-200"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Main Content Area */}
                    <section className={`px-6 bg-glass-beige ${this.state.activeSection === 'about' ? 'py-16' : 'py-20'}`}>
                        <div className="max-w-4xl mx-auto">
                            {this.renderContent()}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    renderContent = () => {
        switch(this.state.activeSection) {
            case 'about':
                return <AboutSection />;
            case 'books':
                return <BooksSection />;
            case 'expertise':
                return <BiographySection />;
            case 'testimonials':
                return <ReviewsSection />;
            case 'contact':
                return <ContactSection />;
            default:
                return <AboutSection />;
        }
    }
}

// About Section Component
function AboutSection() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-maroon-dark mb-8">About {authorConfig.name.split(' ')[0]}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <p className="font-sans text-royal-dark leading-relaxed">
                        {authorConfig.about.introduction}
                    </p>
                    <p className="font-sans text-royal-dark leading-relaxed">
                        My work spans multiple genres, from contemporary fiction to historical narratives, 
                        each story carefully woven to resonate with readers on a profound level. I draw 
                        inspiration from everyday moments, finding extraordinary stories in ordinary lives.
                    </p>
                    <p className="font-sans text-royal-dark leading-relaxed">
                        When I'm not writing, you'll find me exploring local bookshops, attending literary 
                        events, or simply observing the world around me. Every conversation, every moment 
                        of human connection becomes a potential thread in my next story.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                        <h3 className="font-serif text-xl font-bold text-maroon-dark mb-3">Writing Philosophy</h3>
                        <p className="font-sans text-royal-dark text-sm leading-relaxed">
                            "{authorConfig.about.philosophy}"
                        </p>
                    </div>
                    <div className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                        <h3 className="font-serif text-xl font-bold text-maroon-dark mb-3">Latest Achievement</h3>
                        <p className="font-sans text-royal-dark text-sm leading-relaxed">
                            {authorConfig.about.achievement}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Books Section Component
function BooksSection() {
    return (
        <div>
            <h2 className="font-serif text-3xl font-bold text-maroon-dark mb-8">My Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorConfig.books.map((book, index) => (
                    <div key={index} className="bg-glass-golden p-6 rounded-lg shadow-elegant hover:shadow-royal transition-all duration-300">
                        <div className="mb-4 h-40 bg-gradient-beige rounded-lg flex items-center justify-center overflow-hidden">
                            {book.cover ? (
                                <img src={book.cover} alt={book.title} className="w-full h-full object-cover rounded-lg" />
                            ) : (
                                <span className="font-serif text-maroon-dark text-lg">Cover Image</span>
                            )}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-maroon-dark mb-2">{book.title}</h3>
                        <p className="font-sans text-sm text-golden-dark mb-2">{book.genre} • {book.year}</p>
                        <p className="font-sans text-royal-dark text-sm leading-relaxed">{book.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Biography Section Component
function BiographySection() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-maroon-dark mb-8">Who am I ?</h2>
            <div className="space-y-8">
                <div className="bg-glass-golden p-8 rounded-lg shadow-elegant">
                    <h3 className="font-serif text-2xl font-bold text-maroon-dark mb-4">Global Speaker & Thought Leader</h3>
                    <p className="font-sans text-royal-dark leading-relaxed mb-4">
                        {authorConfig.biography.earlyLife}
                    </p>
                    <p className="font-sans text-royal-dark leading-relaxed">
                        {authorConfig.biography.education}
                    </p>
                </div>
                
                <div className="bg-glass-golden p-8 rounded-lg shadow-elegant">
                    <h3 className="font-serif text-2xl font-bold text-maroon-dark mb-4">Speaking Expertise & Skills</h3>
                    <p className="font-sans text-royal-dark leading-relaxed">
                        {authorConfig.biography.career}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Reviews Section Component
function ReviewsSection() {
    return (
        <div>
            <h2 className="font-serif text-3xl font-bold text-maroon-dark mb-8">Reviews & Praise</h2>
            <div className="space-y-6">
                {authorConfig.reviews.map((review, index) => (
                    <div key={index} className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                        <blockquote className="font-serif text-lg text-maroon-dark italic mb-4">
                            "{review.text}"
                        </blockquote>
                        <div className="flex justify-between items-center">
                            <cite className="font-sans text-royal-dark font-medium">— {review.source}</cite>
                            <span className="font-sans text-golden-dark text-sm">{review.book}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Contact Section Component
function ContactSection() {
    return (
        <div>
            <h2 className="font-serif text-3xl font-bold text-maroon-dark mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                        <h3 className="font-serif text-xl font-bold text-maroon-dark mb-4">Connect With Me</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className="font-sans text-royal-dark">📧</span>
                                <span className="font-sans text-royal-dark">{authorConfig.contact.email}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="font-sans text-royal-dark">📱</span>
                                <span className="font-sans text-royal-dark">{authorConfig.contact.agent}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="font-sans text-royal-dark">🌐</span>
                                <span className="font-sans text-royal-dark">{authorConfig.contact.social}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                        <h3 className="font-serif text-xl font-bold text-maroon-dark mb-4">Speaking & Events</h3>
                        <p className="font-sans text-royal-dark text-sm leading-relaxed">
                            {authorConfig.contact.speakingInfo}
                        </p>
                    </div>
                </div>
                
                <div className="bg-glass-golden p-6 rounded-lg shadow-elegant">
                    <h3 className="font-serif text-xl font-bold text-maroon-dark mb-6">Send a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block font-sans text-royal-dark text-sm font-medium mb-2">Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-golden/30 rounded-md focus:ring-2 focus:ring-golden focus:border-transparent bg-white/50 backdrop-blur-sm"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block font-sans text-royal-dark text-sm font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 border border-golden/30 rounded-md focus:ring-2 focus:ring-golden focus:border-transparent bg-white/50 backdrop-blur-sm"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block font-sans text-royal-dark text-sm font-medium mb-2">Message</label>
                            <textarea 
                                rows="4" 
                                className="w-full px-4 py-2 border border-golden/30 rounded-md focus:ring-2 focus:ring-golden focus:border-transparent bg-white/50 backdrop-blur-sm"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-gradient-royal text-white px-6 py-3 rounded-md font-sans font-medium hover:bg-gradient-royal-hover transition-all duration-200 shadow-elegant"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
