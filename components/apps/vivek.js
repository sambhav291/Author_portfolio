import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import BookCard from '../util components/BookCard';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <AuthorAbout />,
            "books": <BookList />,
            "events": <Events />,
            "contact": <ContactAuthor />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined || !this.screens[lastVisitedScreen]) {
            lastVisitedScreen = "about";
        }

        // Set initial screen state
        this.setState({
            screen: this.screens[lastVisitedScreen],
            active_screen: lastVisitedScreen
        });

        // focus last visited screen element if it exists
        const screenElement = document.getElementById(lastVisitedScreen);
        if (screenElement) {
            this.changeScreen(screenElement);
        } else {
            this.changeScreen("about");
        }
    }

    changeScreen = (e) => {
        // Handle both element and event objects
        let screen;
        if (typeof e === 'string') {
            screen = e;
        } else if (e && e.target) {
            screen = e.target.id || e.target.closest('[id]')?.id;
        } else if (e && e.id) {
            screen = e.id;
        } else {
            screen = 'about'; // fallback to about
        }

        // Ensure we have a valid screen
        if (!screen || !this.screens[screen]) {
            screen = 'about';
        }

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about author" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About the Author</span>
                </div>
                <div id="books" tabIndex="0" onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "books" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="author books" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Books</span>
                </div>
                <div id="events" tabIndex="0" onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "events" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="author events" src="./themes/Yaru/status/experience.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Events</span>
                </div>
                <div id="contact" tabIndex="0" onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "contact" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="contact author" src="./themes/Yaru/status/contact.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Contact</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} onClick={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-pointer outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="author biography" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Biography</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/vivek9patel/button" title="Support the author" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function AuthorAbout() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full shadow-lg">
                <img className="w-full rounded-full" src="./images/logos/bitmoji.png" alt="Elena Rodriguez Author Photo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hello, I'm <span className="font-serif font-bold">Elena Rodriguez</span>,</div>
                <div className="font-normal ml-1">a <span className="text-ubt-blue font-bold">Contemporary Fiction Author</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">published novelist</span> with over a decade of experience crafting stories that explore the human condition. My work has been featured in <u className=' cursor-pointer text-ubt-blue'> <a href="#" target={"_blank"}>The Literary Review</a> </u> and I'm currently working on my seventh novel. ( Connect with me <a className='text-underline text-ubt-blue' href='mailto:elena.rodriguez.author@gmail.com'><u>@elena.rodriguez.author@gmail.com</u></a> )</li>
                <li className=" mt-3 list-building"> I specialize in writing emotionally resonant stories that delve into themes of family, identity, and belonging across different cultures and generations.</li>
                <li className=" mt-3 list-time"> When I'm not writing, you'll find me traveling to gather inspiration, reading works by fellow authors, or enjoying quiet mornings with coffee and my journal in my <a href="#" target="_blank" rel="noreferrer" className="text-ubt-blue"> home writing studio in Portland.</a></li>
                <li className=" mt-3 list-star"> My latest novel, "Whispers of the Ocean," explores the interconnected lives of three women across different decades, and I'm passionate about mentoring emerging writers!</li>
            </ul>
            
            {/* Author Stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-5/6 md:w-3/4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-serif text-lg md:text-xl font-bold text-ubt-blue">12+</div>
                    <div className="font-sans text-xs text-gray-600">Published Books</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-serif text-lg md:text-xl font-bold text-ubt-blue">3</div>
                    <div className="font-sans text-xs text-gray-600">Literary Awards</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-serif text-lg md:text-xl font-bold text-ubt-blue">50K+</div>
                    <div className="font-sans text-xs text-gray-600">Readers Worldwide</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-serif text-lg md:text-xl font-bold text-ubt-blue">15</div>
                    <div className="font-sans text-xs text-gray-600">Years Writing</div>
                </div>
            </div>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Arizona State University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2024</div>
                    <div className=" text-sm md:text-base">Computer Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.0/4.0</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Pandit Deendayal Energy University - PDEU
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2022</div>
                    <div className=" text-sm md:text-base">Computer Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.35/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 94.1%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">front-end development, React.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="vivek c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="vivek python" />
                        <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="vivek dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="vivek HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="vivek SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="vivek firebase" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="vivek next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="vivek react" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="vivek flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="vivek tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="vivek node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="vivek jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="vivek redux" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const book_list = [
        {
            title: "Whispers of the Ocean",
            coverImage: null, // Will use placeholder
            synopsis: "A haunting tale of three women across different decades, connected by a mysterious lighthouse and the secrets it holds. Set against the backdrop of a small coastal town, this novel explores themes of love, loss, and the enduring power of family bonds.",
            publicationDate: "March 2023",
            purchaseLink: "https://www.amazon.com/whispers-ocean-elena-rodriguez/dp/1234567890"
        },
        {
            title: "The Garden of Lost Memories",
            coverImage: null,
            synopsis: "When Clara inherits her grandmother's botanical garden, she discovers hidden letters that reveal a love story spanning two continents and five decades. A beautiful exploration of memory, heritage, and the stories that shape us.",
            publicationDate: "September 2022",
            purchaseLink: "https://www.amazon.com/garden-lost-memories-elena-rodriguez/dp/1234567891"
        },
        {
            title: "Dancing with Shadows",
            coverImage: null,
            synopsis: "In 1960s Buenos Aires, a young dancer must choose between following her dreams and protecting her family's secrets. A passionate story of art, politics, and the courage to pursue one's truth.",
            publicationDate: "June 2021",
            purchaseLink: "https://www.amazon.com/dancing-shadows-elena-rodriguez/dp/1234567892"
        },
        {
            title: "The Language of Rain",
            coverImage: null,
            synopsis: "A poetic novel about a translator who discovers that some stories can only be told in the language of the heart. Set in modern-day Seattle, it's a meditation on communication, culture, and connection.",
            publicationDate: "November 2020",
            purchaseLink: "https://www.amazon.com/language-rain-elena-rodriguez/dp/1234567893"
        },
        {
            title: "Echoes in the Valley",
            coverImage: null,
            synopsis: "A multi-generational saga following a Mexican-American family as they navigate identity, tradition, and change across four generations in California's Central Valley.",
            publicationDate: "April 2019",
            purchaseLink: "https://www.amazon.com/echoes-valley-elena-rodriguez/dp/1234567894"
        },
        {
            title: "The Mapmaker's Daughter",
            coverImage: null,
            synopsis: "In 1920s Morocco, the daughter of a French cartographer embarks on a journey that will challenge everything she believes about love, duty, and the boundaries between worlds.",
            publicationDate: "August 2018",
            purchaseLink: "https://www.amazon.com/mapmakers-daughter-elena-rodriguez/dp/1234567895"
        }
    ];

    const genre_colors = {
        "contemporary fiction": "blue-300",
        "historical fiction": "amber-300",
        "literary fiction": "purple-300",
        "family saga": "green-300",
        "romance": "pink-300",
        "mystery": "gray-300",
        "thriller": "red-300",
        "memoir": "indigo-300"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Published Books
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="text-sm md:text-base text-gray-300 mb-6">
                A collection of novels exploring themes of family, identity, and the human experience across cultures and generations.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    book_list.map((book, index) => {
                        return (
                            <BookCard
                                key={index}
                                imageUrl={book.coverImage}
                                title={book.title}
                                synopsis={book.synopsis}
                                year={book.publicationDate}
                                onClick={() => {
                                    if (book.purchaseLink) {
                                        window.open(book.purchaseLink, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Vivek-Patel-Resume.pdf" title="author biography" frameBorder="0"></iframe>
    )
}

// BookList Component - Renders a list of BookCard components
function BookList() {
    const books = [
        {
            id: 1,
            imageUrl: null, // Will use placeholder
            title: "Whispers of the Ocean",
            synopsis: "A haunting tale of three women across different decades, connected by a mysterious lighthouse and the secrets it holds. Set against the backdrop of a small coastal town, this novel explores themes of love, loss, and the enduring power of family bonds.",
            author: "Elena Rodriguez",
            year: "2023",
            genre: "Contemporary Fiction"
        },
        {
            id: 2,
            imageUrl: null,
            title: "The Garden of Lost Memories",
            synopsis: "When Clara inherits her grandmother's botanical garden, she discovers hidden letters that reveal a love story spanning two continents and five decades. A beautiful exploration of memory, heritage, and the stories that shape us.",
            author: "Elena Rodriguez",
            year: "2022",
            genre: "Historical Fiction"
        },
        {
            id: 3,
            imageUrl: null,
            title: "Dancing with Shadows",
            synopsis: "In 1960s Buenos Aires, a young dancer must choose between following her dreams and protecting her family's secrets. A passionate story of art, politics, and the courage to pursue one's truth.",
            author: "Elena Rodriguez",
            year: "2021",
            genre: "Historical Fiction"
        },
        {
            id: 4,
            imageUrl: null,
            title: "The Language of Rain",
            synopsis: "A poetic novel about a translator who discovers that some stories can only be told in the language of the heart. Set in modern-day Seattle, it's a meditation on communication, culture, and connection.",
            author: "Elena Rodriguez",
            year: "2020",
            genre: "Literary Fiction"
        },
        {
            id: 5,
            imageUrl: null,
            title: "Echoes in the Valley",
            synopsis: "A multi-generational saga following a Mexican-American family as they navigate identity, tradition, and change across four generations in California's Central Valley.",
            author: "Elena Rodriguez",
            year: "2019",
            genre: "Family Saga"
        },
        {
            id: 6,
            imageUrl: null,
            title: "The Mapmaker's Daughter",
            synopsis: "In 1920s Morocco, the daughter of a French cartographer embarks on a journey that will challenge everything she believes about love, duty, and the boundaries between worlds.",
            author: "Elena Rodriguez",
            year: "2018",
            genre: "Historical Fiction"
        }
    ];

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-6">
                Published Books
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            
            <div className="text-sm md:text-base text-gray-300 mb-6">
                A collection of novels exploring themes of family, identity, and the human experience across cultures and generations.
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {books.map((book) => (
                    <BookCard 
                        key={book.id}
                        imageUrl={book.imageUrl}
                        title={book.title}
                        synopsis={book.synopsis}
                        author={book.author}
                        year={book.year}
                        genre={book.genre}
                        onClick={() => console.log(`Selected book: ${book.title}`)}
                        className="transform hover:scale-105 transition-transform duration-200"
                    />
                ))}
            </div>
        </>
    );
}

// Events Component - Lists upcoming events and readings
function Events() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Book Reading & Signing",
            subtitle: "Whispers of the Ocean",
            date: "October 15, 2025",
            time: "7:00 PM - 9:00 PM",
            location: "Powell's City of Books, Portland",
            address: "1005 W Burnside St, Portland, OR",
            description: "Join Elena for an intimate reading from her latest novel, followed by a Q&A session and book signing.",
            type: "Reading",
            status: "upcoming"
        },
        {
            id: 2,
            title: "Writers' Workshop",
            subtitle: "Crafting Multi-Generational Stories",
            date: "October 28, 2025",
            time: "2:00 PM - 5:00 PM",
            location: "Literary Arts Center",
            address: "925 SW Washington St, Portland, OR",
            description: "A hands-on workshop exploring techniques for writing compelling family sagas that span generations.",
            type: "Workshop",
            status: "upcoming"
        },
        {
            id: 3,
            title: "Virtual Book Club Discussion",
            subtitle: "The Garden of Lost Memories",
            date: "November 10, 2025",
            time: "6:00 PM - 7:30 PM",
            location: "Online Event (Zoom)",
            address: "Virtual",
            description: "A virtual discussion about the themes and inspiration behind Elena's acclaimed novel.",
            type: "Virtual",
            status: "upcoming"
        },
        {
            id: 4,
            title: "Literary Festival Panel",
            subtitle: "Voices of Contemporary Fiction",
            date: "November 22, 2025",
            time: "3:00 PM - 4:30 PM",
            location: "Oregon Literary Festival",
            address: "Portland State University",
            description: "Panel discussion with fellow contemporary fiction authors about the future of storytelling.",
            type: "Panel",
            status: "upcoming"
        }
    ];

    const pastEvents = [
        {
            id: 5,
            title: "Author Interview",
            subtitle: "Portland Book Review Podcast",
            date: "September 5, 2025",
            description: "Discussed writing process and inspirations behind recent works.",
            type: "Interview",
            status: "past"
        },
        {
            id: 6,
            title: "Summer Reading Series",
            subtitle: "Dancing with Shadows",
            date: "August 12, 2025",
            location: "Pioneer Courthouse Square",
            description: "Reading as part of Portland's annual summer reading series.",
            type: "Reading",
            status: "past"
        }
    ];

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-6">
                Events & Readings
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="mb-8">
                <h3 className="font-serif text-xl font-semibold text-gray-200 mb-4">Upcoming Events</h3>
                <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 hover:bg-opacity-70 transition-all duration-200">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                <div>
                                    <h4 className="font-serif text-lg font-semibold text-white mb-1">{event.title}</h4>
                                    <p className="text-ubt-blue font-medium text-sm">{event.subtitle}</p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        event.type === 'Reading' ? 'bg-blue-100 text-blue-800' :
                                        event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                                        event.type === 'Virtual' ? 'bg-purple-100 text-purple-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {event.type}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-3 text-sm text-gray-300">
                                <div>
                                    <span className="font-medium">Date:</span> {event.date}
                                </div>
                                <div>
                                    <span className="font-medium">Time:</span> {event.time}
                                </div>
                                <div>
                                    <span className="font-medium">Location:</span> {event.location}
                                </div>
                                <div>
                                    <span className="font-medium">Address:</span> {event.address}
                                </div>
                            </div>
                            
                            <p className="text-gray-200 text-sm leading-relaxed">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Events */}
            <div>
                <h3 className="font-serif text-xl font-semibold text-gray-200 mb-4">Recent Past Events</h3>
                <div className="space-y-4">
                    {pastEvents.map((event) => (
                        <div key={event.id} className="bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-serif font-semibold text-gray-300 mb-1">{event.title}</h4>
                                    <p className="text-ubt-blue text-sm">{event.subtitle}</p>
                                </div>
                                <span className="text-gray-400 text-sm">{event.date}</span>
                            </div>
                            {event.location && (
                                <p className="text-gray-400 text-sm mb-2">{event.location}</p>
                            )}
                            <p className="text-gray-300 text-sm">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

// ContactAuthor Component - Simple contact form
function ContactAuthor() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Contact form submitted');
    };

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-6">
                Get In Touch
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-serif text-xl font-semibold text-gray-200 mb-4">Let's Connect</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I love hearing from readers, fellow writers, and book clubs. Whether you have 
                            questions about my work, want to discuss a potential collaboration, or simply 
                            want to share your thoughts on one of my books, I'd love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-ubt-blue rounded-full mr-3 flex items-center justify-center">
                                <span className="text-white text-xs">@</span>
                            </div>
                            <span className="text-gray-200">elena.rodriguez.author@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-ubt-blue rounded-full mr-3 flex items-center justify-center">
                                <span className="text-white text-xs">#</span>
                            </div>
                            <span className="text-gray-200">@ElenaRodriguezBooks</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-ubt-blue rounded-full mr-3 flex items-center justify-center">
                                <span className="text-white text-xs">📍</span>
                            </div>
                            <span className="text-gray-200">Portland, Oregon</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-ubt-blue rounded-full mr-3 flex items-center justify-center">
                                <span className="text-white text-xs">📚</span>
                            </div>
                            <span className="text-gray-200">Available for book clubs & readings</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-serif text-xl font-semibold text-gray-200 mb-4">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                Subject
                            </label>
                            <select 
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="bookclub">Book Club Discussion</option>
                                <option value="interview">Interview Request</option>
                                <option value="event">Event Invitation</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="feedback">Book Feedback</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Message
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                rows="4" 
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ubt-blue focus:border-transparent resize-none"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-ubt-blue hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}