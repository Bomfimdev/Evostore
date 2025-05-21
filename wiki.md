# Project Summary
EvoStore is an advanced e-commerce platform tailored for the purchase and management of digital products, particularly focusing on service keys. The platform features a responsive frontend built with React.js and a powerful backend powered by Java Spring Boot, ensuring smooth user experiences and efficient data processing.

# Project Module Description
## Frontend (React.js)
- **Header**: Displays the logo and navigation options.
- **ProductList**: Lists all available products in a card format.
- **ProductCard**: Shows individual product details including name, plan, price, and a purchase button.
- **KeyManager**: Allows users to view and manage their purchased keys.
- **Pages**: Includes Home, Key Management, and Product Detail pages.

## Backend (Java Spring Boot)
- **Key Management**: Endpoints for creating, retrieving, and deleting keys.
- **Session Management**: Endpoints for creating sessions associated with keys and retrieving session details.
- **Error Handling**: Global exception handling and standardized error responses.

# Directory Tree
```
.
├── README.md                    # Project overview and setup instructions
├── evostore-backend             # Backend source code
│   ├── pom.xml                  # Maven configuration file
│   ├── src/main/java/com/evostore
│   │   ├── EvoStoreApplication.java  # Main application entry point
│   │   ├── config
│   │   │   └── WebConfig.java        # Web configuration settings
│   │   ├── controller
│   │   │   ├── KeyController.java     # API for key management
│   │   │   └── SessionController.java  # API for session management
│   │   ├── dto
│   │   │   └── ErrorResponse.java     # Error response model
│   │   ├── exception
│   │   │   └── GlobalExceptionHandler.java # Global exception handler
│   │   ├── model
│   │   │   ├── Key.java               # Key entity model
│   │   │   └── Session.java           # Session entity model
│   │   ├── repository
│   │   │   ├── KeyRepository.java     # Data access for keys
│   │   │   └── SessionRepository.java  # Data access for sessions
│   │   └── service
│   │       ├── KeyService.java        # Business logic for keys
│   │       └── SessionService.java     # Business logic for sessions
│   └── src/main/resources
│       └── application.properties     # Application configuration
└── react_template                 # Frontend source code
    ├── README.md                    # Frontend project overview
    ├── eslint.config.js              # ESLint configuration
    ├── index.html                    # Main HTML file
    ├── package.json                  # Frontend dependencies
    ├── postcss.config.js             # PostCSS configuration
    ├── public/data/example.json       # Example data file
    ├── src
    │   ├── App.jsx                   # Main application component
    │   ├── components
    │   │   ├── Header.jsx             # Header component
    │   │   ├── KeyManager.jsx         # Key management component
    │   │   ├── ProductCard.jsx        # Product card component
    │   │   └── ProductList.jsx        # Product list component
    │   ├── data
    │   │   └── products.js            # Product data
    │   ├── index.css                  # Global styles
    │   ├── main.jsx                   # Entry point for React
    │   └── pages
    │       ├── Home.jsx               # Home page component
    │       ├── KeyManagement.jsx      # Key management page
    │       └── ProductDetail.jsx      # Product detail page
    ├── services
    │   └── api.js                    # API service for HTTP requests
    ├── tailwind.config.js             # Tailwind CSS configuration
    └── vite.config.js                 # Vite configuration
```

# File Description Inventory
- **README.md**: Overview and instructions for project setup and usage.
- **pom.xml**: Configuration file for managing backend dependencies with Maven.
- **EvoStoreApplication.java**: Entry point for the Spring Boot application.
- **WebConfig.java**: Configuration for web-related settings.
- **KeyController.java**: Handles API requests related to key operations.
- **SessionController.java**: Manages API requests for session handling.
- **ErrorResponse.java**: Defines the structure of error responses.
- **GlobalExceptionHandler.java**: Centralized exception handling.
- **Key.java**: Entity representing a product key.
- **Session.java**: Entity representing a session linked to a key.
- **KeyRepository.java**: Interface for key data access.
- **SessionRepository.java**: Interface for session data access.
- **KeyService.java**: Business logic for key operations.
- **SessionService.java**: Business logic for session operations.
- **application.properties**: Configuration properties for the Spring Boot application.
- **index.html**: Main HTML file for the React application.
- **App.jsx**: Main application component for React.
- **Header.jsx**: Component for the application header.
- **ProductList.jsx**: Component for listing products.
- **ProductCard.jsx**: Component for displaying individual product details.
- **KeyManager.jsx**: Component for managing keys.
- **Home.jsx**: Component for the home page.
- **KeyManagement.jsx**: Component for managing keys.
- **ProductDetail.jsx**: Component for displaying product details.
- **api.js**: Service for making API calls.
- **products.js**: Data file containing product information.

# Technology Stack
- **Frontend**: React.js, React Router DOM, Axios, Tailwind CSS
- **Backend**: Java, Spring Boot, Spring Web, Spring Data JPA, H2 Database, Lombok, Swagger/OpenAPI

# Usage
1. **Install Dependencies**:
   - For the backend, run `mvn install` in the `evostore-backend` directory.
   - For the frontend, run `pnpm install` in the `react_template` directory, including any additional dependencies such as `react-router-dom` and `axios`.

2. **Build and Run**:
   - Start the backend by running `mvn spring-boot:run` in the `evostore-backend` directory.
   - Start the frontend by running `pnpm run dev` in the `react_template` directory.
