import React, { Component } from 'react';

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
            <div className="h-screen w-full bg-white overflow-hidden">
                {/* Navigation Bar */}
                <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50">
                    <div className="font-serif text-2xl font-bold text-gray-900">
                        Sarah Mitchell
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Books', 'Biography', 'Reviews', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => this.changeSection(item.toLowerCase())}
                                className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
                                    this.state.activeSection === item.toLowerCase()
                                        ? 'text-ubt-blue border-b-2 border-ubt-blue'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={this.toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {this.state.isMenuOpen && (
                    <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b border-gray-200 z-40">
                        <div className="px-6 py-4 space-y-4">
                            {['About', 'Books', 'Biography', 'Reviews', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        this.changeSection(item.toLowerCase());
                                        this.toggleMenu();
                                    }}
                                    className={`block w-full text-left font-sans text-sm tracking-wide transition-colors duration-200 ${
                                        this.state.activeSection === item.toLowerCase()
                                            ? 'text-ubt-blue'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="pt-20 h-full overflow-y-auto">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Profile Image */}
                            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                                <img 
                                    src="./images/logos/bitmoji.png" 
                                    alt="Sarah Mitchell" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Author Name and Title */}
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Sarah Mitchell
                            </h1>
                            <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8">
                                Bestselling Author & Literary Storyteller
                            </p>
                            
                            {/* Call to Action */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => this.changeSection('books')}
                                    className="bg-ubt-blue text-white px-8 py-3 rounded-md font-sans font-medium hover:bg-opacity-90 transition-colors duration-200"
                                >
                                    Explore My Books
                                </button>
                                <button 
                                    onClick={() => this.changeSection('contact')}
                                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-sans font-medium hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Main Content Area */}
                    <section className="py-16 px-6">
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
            case 'biography':
                return <BiographySection />;
            case 'reviews':
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
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">About Sarah</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <p className="font-sans text-gray-700 leading-relaxed">
                        Welcome to my literary world. I'm Sarah Mitchell, a passionate storyteller who believes 
                        in the transformative power of words. For over a decade, I've been crafting narratives 
                        that explore the depths of human emotion and the complexities of modern life.
                    </p>
                    <p className="font-sans text-gray-700 leading-relaxed">
                        My work spans multiple genres, from contemporary fiction to historical narratives, 
                        each story carefully woven to resonate with readers on a profound level. I draw 
                        inspiration from everyday moments, finding extraordinary stories in ordinary lives.
                    </p>
                    <p className="font-sans text-gray-700 leading-relaxed">
                        When I'm not writing, you'll find me reading voraciously, traveling to gather new 
                        perspectives, or enjoying quiet moments with a cup of tea and my notebook, always 
                        ready to capture the next story that calls to me.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                    <ul className="space-y-3 font-sans text-gray-700">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-ubt-blue rounded-full mr-3"></span>
                            15+ Published novels
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-ubt-blue rounded-full mr-3"></span>
                            3 Literary awards
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-ubt-blue rounded-full mr-3"></span>
                            New York Times Bestseller
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-ubt-blue rounded-full mr-3"></span>
                            Translated into 12 languages
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-ubt-blue rounded-full mr-3"></span>
                            Based in Portland, Oregon
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Books Section Component
function BooksSection() {
    const books = [
        {
            title: "The Silent Garden",
            year: "2023",
            genre: "Contemporary Fiction",
            description: "A haunting tale of family secrets and the healing power of nature.",
            cover: "/images/book-covers/silent-garden.jpg"
        },
        {
            title: "Echoes of Tomorrow",
            year: "2022",
            genre: "Science Fiction",
            description: "In a world where memories can be traded, one woman fights to keep her past.",
            cover: "/images/book-covers/echoes-tomorrow.jpg"
        },
        {
            title: "The Mapmaker's Daughter",
            year: "2021",
            genre: "Historical Fiction",
            description: "Set in 1920s Paris, a story of love, loss, and the pursuit of dreams.",
            cover: "/images/book-covers/mapmakers-daughter.jpg"
        }
    ];

    return (
        <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">My Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                            <span className="text-gray-500 font-sans text-sm">Book Cover</span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                        <p className="font-sans text-sm text-ubt-blue mb-2">{book.genre} • {book.year}</p>
                        <p className="font-sans text-gray-700 text-sm leading-relaxed">{book.description}</p>
                        <button className="mt-4 bg-ubt-blue text-white px-4 py-2 rounded-md font-sans text-sm hover:bg-opacity-90 transition-colors duration-200">
                            Learn More
                        </button>
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
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Biography</h2>
            <div className="space-y-8">
                <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Early Life & Education</h3>
                    <p className="font-sans text-gray-700 leading-relaxed">
                        Born in a small coastal town in Maine, Sarah Mitchell discovered her love for storytelling 
                        at an early age. She spent countless hours in her grandmother's library, surrounded by 
                        classic literature that would later influence her writing style. She earned her MFA in 
                        Creative Writing from Columbia University in 2010.
                    </p>
                </div>
                <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Literary Career</h3>
                    <p className="font-sans text-gray-700 leading-relaxed">
                        Sarah's debut novel, "Whispers in the Wind," was published in 2012 to critical acclaim. 
                        Since then, she has published fifteen novels, each exploring themes of identity, belonging, 
                        and the human condition. Her work has been featured in major literary magazines and has 
                        won several prestigious awards.
                    </p>
                </div>
                <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Recognition & Awards</h3>
                    <ul className="space-y-2 font-sans text-gray-700">
                        <li>• National Book Award Finalist (2020)</li>
                        <li>• Pulitzer Prize Nomination (2019)</li>
                        <li>• Literary Fiction Writer of the Year (2018)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Reviews Section Component
function ReviewsSection() {
    const reviews = [
        {
            quote: "Mitchell's prose is both elegant and accessible, weaving complex emotions into beautifully crafted narratives.",
            source: "The New York Times",
            book: "The Silent Garden"
        },
        {
            quote: "A masterpiece of contemporary fiction that will stay with readers long after the final page.",
            source: "Publishers Weekly",
            book: "Echoes of Tomorrow"
        },
        {
            quote: "Sarah Mitchell has established herself as one of the most important voices in modern literature.",
            source: "Literary Review",
            book: "The Mapmaker's Daughter"
        }
    ];

    return (
        <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">What Critics Say</h2>
            <div className="space-y-8">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-lg">
                        <blockquote className="font-serif text-xl text-gray-900 italic mb-4">
                            "{review.quote}"
                        </blockquote>
                        <div className="flex justify-between items-center">
                            <cite className="font-sans text-ubt-blue font-medium">— {review.source}</cite>
                            <span className="font-sans text-gray-600 text-sm">{review.book}</span>
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
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
                    <p className="font-sans text-gray-700 leading-relaxed mb-6">
                        I love hearing from readers, fellow writers, and book clubs. Whether you have 
                        questions about my work, want to discuss a potential collaboration, or simply 
                        want to share your thoughts on one of my books, I'd love to hear from you.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="w-5 h-5 bg-ubt-blue rounded-full mr-3"></span>
                            <span className="font-sans text-gray-700">hello@sarahmitchellauthor.com</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-5 h-5 bg-ubt-blue rounded-full mr-3"></span>
                            <span className="font-sans text-gray-700">@SarahMitchellBooks</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-5 h-5 bg-ubt-blue rounded-full mr-3"></span>
                            <span className="font-sans text-gray-700">Portland, Oregon</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent"
                            />
                        </div>
                        <div>
                            <textarea 
                                rows="4" 
                                placeholder="Your Message" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent resize-none"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-ubt-blue text-white px-6 py-3 rounded-md font-sans font-medium hover:bg-opacity-90 transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}