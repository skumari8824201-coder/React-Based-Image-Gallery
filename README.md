React-Based Image Gallery with API Integration
Overview

React-Based Image Gallery with API Integration is a modern, responsive web application built using React and TypeScript. The application fetches real-time images from the Pixabay REST API and displays them in a dynamic, user-friendly gallery interface.

The project demonstrates practical frontend engineering skills including API integration, state management, infinite scrolling, UI/UX enhancements, and secure environment configuration.

Features

Real-time image fetching using Pixabay REST API

Infinite scroll pagination

Search functionality with dynamic query updates

Modal image preview on click

Dark mode toggle

Loading skeleton for improved user experience

Responsive grid layout

Environment variable-based API configuration

Built using React with TypeScript for type safety

Tech Stack

React (Vite)

TypeScript

REST API Integration (Pixabay)

CSS (Custom Styling)

Environment Variables (.env configuration)

Project Structure
react-image-gallery-api/
src/
─ App.tsx
─ main.tsx
─ .env.example
─ package.json
─ tsconfig.json
─ README.md

Installation and Setup
1. Clone the Repository
git clone https://github.com/skumari8824201-coder/react-image-gallery-api.git
cd react-image-gallery-api

2. Install Dependencies
npm install

3. Environment Configuration

Create a .env file in the root directory and add:

VITE_PIXABAY_KEY=your_api_key_here
This project currently includes a template API key for demonstration purposes. In production scenarios, sensitive credentials should never be exposed publicly.

4. Run the Development Server
npm run dev
The application will run locally on:
http://localhost:5173

Key Implementation Highlights
API Integration
Images are fetched using asynchronous fetch calls with dynamic query parameters including search term, page number, and pagination size.
Infinite Scrolling

Scroll position detection is implemented using the window scroll event listener to automatically load additional images when reaching the bottom of the page.

State Management

React Hooks used:

useState

useEffect

The project manages multiple states including images, pagination, loading status, selected image, and theme mode.

Modal Preview

Clicking an image opens a full-screen modal overlay displaying the high-resolution version.

Dark Mode

A theme toggle dynamically switches between light and dark UI using conditional class rendering.

Loading Skeleton

A shimmer animation is displayed during API calls to improve perceived performance.

Learning Outcomes

This project demonstrates:

Strong understanding of React functional components

TypeScript interface usage for API response typing

Secure handling of environment variables

Component-level state management

UI/UX enhancement practices

Asynchronous programming with async/await

Clean and modular frontend architecture

Future Improvements

Implement debounced search input

Add error boundary handling

Add image category filters

Implement local storage persistence for theme

Add testing using Jest or React Testing Library

Deploy with CI/CD integration

Author

Sonali Kumari
B.Tech Computer Science and Engineering
Frontend Developer | React & TypeScript Enthusiast

GitHub: https://github.com/skumari8824201-coder
