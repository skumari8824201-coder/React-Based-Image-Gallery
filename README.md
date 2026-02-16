📸 React-Based Image Gallery with API Integration

A modern, responsive image gallery built using React + TypeScript that integrates with the Pixabay REST API.

This project demonstrates API integration, infinite scrolling, modal preview functionality, dark mode implementation, and modern UI/UX practices.

** Live Features**

🔎 Image Search Functionality

♾️ Infinite Scroll Pagination

🌙 Dark Mode Toggle

🖼️ Modal Image Preview

⏳ Loading Skeleton Animation

🔐 Environment Variable Support

📱 Responsive Grid Layout

⚡ Built with Vite for fast performance

🛠️ Tech Stack

React

TypeScript

Vite

Pixabay REST API

CSS3 (Modern UI Design)

📂 Project Structure
react-image-gallery-api/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│
├── .env
├── package.json
├── vite.config.ts
└── README.md

⚙️ How It Works
1️⃣ API Integration

The application fetches images dynamically using the Pixabay API:

https://pixabay.com/api/?key=API_KEY&q=search_query


Async/Await for API calls

State management using React Hooks

Conditional rendering for loading state

2️⃣ Infinite Scroll

Scroll detection is implemented using:

window.addEventListener("scroll", handleScroll);


When the user reaches the bottom of the page:

Page number increments

New images are appended to state

3️⃣ Dark Mode

Dark mode is handled using conditional class rendering:

<div className={darkMode ? "app dark" : "app"}>

4️⃣ Modal Image Preview

Clicking an image opens a full-screen preview modal.

🔧 Installation & Setup

Clone the repository:

git clone https://github.com/skumari8824201-coder/react-image-gallery-api.git


Navigate to the project:

cd react-image-gallery-api


Install dependencies:

npm install


Run development server:

npm run dev

🔑 Environment Variable

Create a .env file in the root:

VITE_PIXABAY_KEY=your_api_key_here


This project currently includes a template API key for demonstration purposes.

📸 Screenshots

You can add screenshots here after deployment.

Example:

![App Screenshot](screenshot.png)

🎯 Learning Objectives

This project demonstrates:

REST API consumption in React

TypeScript interface usage

Infinite scrolling implementation

UI state management

Responsive design principles

Clean component architecture

Secure environment configuration

💼 Resume Description

Developed a responsive React + TypeScript image gallery integrating REST API with infinite scroll, modal preview, dark mode, and environment-based configuration.

📌 Future Improvements

Add debounce search optimization

Add category filters

Add pagination controls

Add animations with Framer Motion

Deploy with CI/CD pipeline

👩‍💻 Author

Sonali Kumari
B.Tech CSE (3rd Year)
Frontend Developer | React & JavaScript

GitHub:
https://github.com/skumari8824201-coder

⭐ If You Like This Project

Give it a star on GitHub!
