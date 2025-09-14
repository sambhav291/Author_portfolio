import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Author Portfolio - Professional Book Author</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Author Portfolio - Professional Book Author" />
            <meta name="description"
                content="Professional Author Portfolio Website. A showcase of published books and literary works. Made with Next.js and Tailwind CSS." />
            <meta name="author" content="Author Portfolio" />
            <meta name="keywords"
                content="author portfolio, books, novels, literary works, published author, book author, literature, writing portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2c5aa0" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Author Portfolio - Professional Book Author" />
            <meta itemProp="description"
                content="Professional Author Portfolio Website. A showcase of published books and literary works. Made with professional styling using Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Author Portfolio - Professional Book Author" />
            <meta name="twitter:description"
                content="Professional Author Portfolio Website. A showcase of published books and literary works. Made with professional styling using Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="authorportfolio" />
            <meta name="twitter:creator" content="authorportfolio" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Author Portfolio - Professional Book Author" />
            <meta name="og:description"
                content="Professional Author Portfolio Website. A showcase of published books and literary works. Made with professional styling using Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://author-portfolio.github.io/" />
            <meta name="og:site_name" content="Author Portfolio Website" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
