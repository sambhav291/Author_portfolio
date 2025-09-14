# Author Portfolio Website

This is a professional author portfolio website with an Ubuntu-themed interface, made using Next.js & Tailwind CSS.
This template is perfect for showcasing books, author biography, events, and contact information.

To run this on localhost:
- Type `npm run dev` to start development mode
- When you are done coding, type `npm run build` to build your app

_NOTE: if you have yarn, replace `npm run dev` and `npm run build` with `yarn dev` and `yarn build`._

### To make the contact form work

- Create an account in [emailjs](https://www.emailjs.com/) and create a new Outlook or Gmail account to be able
  to send emails.
- Create a new service, select and log in to your newly created outlook or gmail account on EmailJS.
- Go back to the dashboard and get the Service ID copy it.
- Create a .env.local file in your root folder and add:

```

NEXT_PUBLIC_USER_ID = 'YOUR_USER_ID'
NEXT_PUBLIC_TEMPLATE_ID = 'template_fqqqb9g'
NEXT_PUBLIC_SERVICE_ID = 'YOUR_SERVICE_ID'

```

Replace YOUR_USER_ID and YOUR_SERVICE_ID with your values from your EmailJS service.

## Features

- Professional author portfolio design
- Book showcase with purchase links
- Author biography section
- Events and contact pages
- Responsive design
- Ubuntu-themed interface

## This project was made using Next.js! Here are the scripts you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributors who want to make this website better can make contributions, which will be **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
