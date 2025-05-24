Project Summary
EvoStore is a comprehensive e-commerce platform designed for managing and selling digital product keys. It features a modern and responsive user interface built with React.js for the frontend, paired with a secure and efficient backend developed using Spring Boot. The system aims to provide a seamless experience for both customers and administrators, offering functionalities such as key management, secure authentication, and real-time inventory tracking.

Project Module Description
The EvoStore project consists of two main modules:

Frontend: Developed with React.js, it provides a user-friendly interface for browsing products, managing keys, and handling purchases.
Backend: Built with Spring Boot, it serves as a RESTful API for managing product keys and sessions, ensuring secure data operations and user authentication.
Directory Tree
EvoStore/
├── frontend/                # React frontend application
│   ├── src/                # Source code for frontend
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── data/           # Static data and configurations
│   └── public/             # Static assets
└── backend/                # Spring Boot backend application
    ├── src/                # Source code for backend
    │   └── main/java/com/evostore/
    │       ├── config/     # Configuration files
    │       ├── controller/ # REST controllers
    │       ├── model/      # Data models
    │       ├── repository/  # Data access layer
    │       └── service/    # Business logic
    └── pom.xml             # Backend dependencies
File Description Inventory
frontend/: Contains all frontend-related files and directories for the React application.
backend/: Contains backend source files, including configuration, controllers, models, repositories, and services.
README.md: High-level overview of the project.
COMPLETE_DOCUMENTATION.md: Comprehensive documentation covering both frontend and backend.
BACKEND_DOCUMENTATION.md: Detailed documentation for the backend implementation.
FRONTEND_DOCUMENTATION.md: Detailed documentation for the frontend implementation.
Technology Stack
Frontend:

React.js
Vite (build tool)
Tailwind CSS (styling)
Axios (HTTP requests)
Backend:

Spring Boot
Spring Data JPA
H2 Database (in-memory)
Swagger/OpenAPI (API documentation)
Usage
Prerequisites
Node.js 16+
Java 11+
Maven
Installation
Clone the repository
Frontend Setup:
cd frontend
npm install
npm run dev
Backend Setup:
cd backend
mvn clean install
mvn spring-boot:run