# ZominAI Website

ZominAI is the official website for the ZominAI chatbot, an intelligent artificial intelligence chatbot developed by talented students from the Zomin IT Center in the Zomin district. The platform aims to provide a convenient, fast, and smart AI chat experience.

This project is built with modern web technologies to showcase the chatbot and provide information about the Zomin IT Center and its initiatives.

## Features

*   **AI Chatbot Interface**: Access the ZominAI chatbot for intelligent conversations and assistance.
*   **Zomin IT Center Information**: Learn more about the Zomin IT Center, its mission, and activities (`/center-haqida`).
*   **Course Details**: Explore programming courses offered at the center (`/kurs-haqida`).
*   **FAQ Section**: Find answers to frequently asked questions (`/faq`).
*   **Testimonials**: Read what others are saying about ZominAI and the IT Center.
*   **Sponsor Recognition**: View the sponsors supporting the project.
*   **Dual Language Support**: Switch between Uzbek and Russian languages.
*   **Theme Customization**: Toggle between light and dark modes for comfortable viewing.
*   **Responsive Design**: Adapts to various screen sizes for a seamless experience on desktop and mobile devices.

## Technology Stack

*   **Frontend Framework**: React (`react`)
*   **Build Tool**: Vite (`vite`)
*   **Language**: TypeScript (`typescript`)
*   **Styling**: Tailwind CSS (`tailwindcss`)
*   **Routing**: React Router DOM (`react-router-dom`)
*   **Animations**: Framer Motion (`framer-motion`)
*   **Icons**: Lucide React (`lucide-react`)
*   **Email Service**: EmailJS (`emailjs-com`) for client-side email sending (e.g., contact forms).
*   **Linting**: ESLint (`eslint`)
*   **Code Formatting**: Prettier (`prettier`)

## Project Structure

A brief overview of the key directories in this project:

```
zominai-website/
├── public/               # Static assets (images, favicon, etc.)
├── src/                  # Main source code
│   ├── components/       # Reusable React components
│   ├── contexts/         # React context providers (Theme, Language)
│   ├── pages/            # Page-level components (Home, Chat, About, etc.)
│   ├── App.tsx           # Root application component, sets up routing
│   ├── main.tsx          # Main entry point of the application
│   └── index.css         # Global styles
├── .gitignore            # Files and folders to be ignored by Git
├── index.html            # Main HTML entry point for Vite
├── package.json          # Project metadata, dependencies, and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (which includes npm) installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/zominai-website.git
    cd zominai-website
    ```
    *(Note: Replace `your-username/zominai-website.git` with the actual repository URL if you are not the owner and are cloning from the source.)*

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Project

*   **To start the development server:**
    ```sh
    npm run dev
    ```
    This will typically open the application in your default web browser at `http://localhost:5173` (the port might vary if 5173 is in use).

*   **To build the application for production:**
    ```sh
    npm run build
    ```
    The production-ready files will be placed in the `dist/` directory.

*   **To lint the codebase:**
    ```sh
    npm run lint
    ```
    This command checks the code for linting errors and potential issues based on the ESLint configuration.

*   **To preview the production build locally:**
    ```sh
    npm run preview
    ```
    This command serves the `dist/` folder, allowing you to test the production build before deployment.

## About the Creators

This website and the ZominAI chatbot are initiatives by the talented students of the **Zomin IT Center**, located in the Zomin district. This project showcases their skills in web development, AI, and user interface design. It serves as a testament to their learning and dedication to building innovative solutions.

For more information about the Zomin IT Center or to get in touch, please refer to the contact details available on the website.

## License

A standard `LICENSE` file (e.g., MIT, Apache 2.0) was not found in the root of this project at the time of this writing.

However, licensing information may be available in the following files:
*   `public/litsenziya.pdf`
*   `public/litsenziya.htm`

It is recommended that a clear and standard `LICENSE` file be added to the root of the project repository to explicitly state the terms under which the software can be used, modified, and distributed.
