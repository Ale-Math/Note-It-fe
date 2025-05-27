# Note-It

A modern, fast, and modular note-taking web application built with **React**, **TypeScript**, and **TailwindCSS** for the frontend. Deployed app available at https://noteit.alexandermathew.co.in

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About

**Note-It** is a project for a note-taking application. The app allows users to manage, organize, and share notes efficiently.  
It is designed for speed, maintainability, and an intuitive user experience.

## Features

- User authentication (Login/SignUp)
- Personal dashboard for notes
- Completed notes dashboard
- Note sharing functionality
- Pricing page
- Responsive, modern UI
- Modular component-based architecture

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (development/build)
- **TailwindCSS** (styling)
- **Zod** (schema validation)
- **React Router** (navigation)
- **Axios** (HTTP requests)
- **dotenv** (environment variables)

## Project Structure

```
src/
├── Components/          # Reusable UI and logic components
│   ├── Icons/           # Icon components
│   ├── LandingComponents/ # Components for the landing page
│   ├── UI/              # Basic UI elements
│   └── ZodSchema.tsx    # Schema validation with Zod
├── Hooks/               # Custom React hooks
├── Pages/               # Application pages (routes)
│   ├── Dashboard.tsx
│   ├── CompletedDashboard.tsx
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── SignUp.tsx
│   ├── Pricing.tsx
│   ├── ShareDashboard.tsx
│   └── PageNotFound.tsx
├── assets/              # Static assets (images, etc.)
├── App.tsx              # Main App component
├── main.tsx             # Entry point
├── index.css            # Global styles
└── vite-env.d.ts        # Vite environment types
```

## Getting Started

### Prerequisites

- **Node.js** (>= 16 recommended)
- **npm** (>= 8 recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Ale-Math/Note-It-fe.git
cd Note-It-fe
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at [https://localhost:5173](http://localhost:5173) by default.

### Environment Variables

Create a `.env` file for any required environment variables.  
You can use `.env.example` as a reference.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production

The deployed app is available at:  
https://noteit.alexandermathew.co.in

## Contributing

Pull requests are welcome! Please open an issue or discussion for major changes.  
Consider the following before contributing:

- Use conventional commit messages
- Ensure code passes linting (`npm run lint`)
- Write clear, maintainable code
- Add/update documentation as needed

## License

© Alexander Mathew
