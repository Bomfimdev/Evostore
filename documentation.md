# EvoStore - Complete System Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [Directory Structure](#directory-structure)
5. [Component Overview](#component-overview)
6. [Installation and Setup](#installation-and-setup)
7. [Security Implementation](#security-implementation)
8. [API Documentation](#api-documentation)

## Project Overview
EvoStore is an advanced e-commerce platform specializing in digital product keys, featuring a modern React.js frontend and a secure Spring Boot backend. The system is designed to provide a seamless experience for both customers and administrators.

### Key Features
- Digital product key management and sales
- Secure authentication system
- Administrative dashboard
- Real-time inventory tracking
- Detailed sales reporting

## System Architecture

The application follows a modern client-server architecture:

### Frontend Architecture
- Built with React.js using functional components and hooks
- State management through React Context API
- Responsive design using Tailwind CSS
- Client-side routing with React Router DOM
- HTTP communication via Axios

### Backend Architecture
- Spring Boot based REST API
- Spring Security for authentication
- Spring Data JPA for data persistence
- H2 Database for data storage
- JWT-based authentication system

## Technology Stack

### Frontend Technologies
- React.js (with hooks)
- React Router DOM for navigation
- Tailwind CSS for styling
- Axios for HTTP requests

### Backend Technologies
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database (in-memory)
- Lombok
- Swagger/OpenAPI

## Directory Structure

```
EvoStore/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── data/          # Static data and configurations
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
│
├── backend/               # Spring Boot backend application
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── evostore/
│   │       │           ├── config/      # Configuration files
│   │       │           ├── controller/  # REST controllers
│   │       │           ├── model/       # Data models
│   │       │           ├── repository/  # Data access layer
│   │       │           └── service/     # Business logic
│   │       └── resources/
│   └── pom.xml           # Backend dependencies
```

## Component Overview

### Frontend Components

1. **Pages**
   - `Home.jsx`: Main landing page displaying product catalog
   - `KeyManagement.jsx`: Key management interface
   - `ProductDetail.jsx`: Detailed product view

2. **Components**
   - `Header.jsx`: Site navigation and user menu
   - `KeyManager.jsx`: Key management functionality
   - `ProductCard.jsx`: Product display component
   - `ProductList.jsx`: Product grid layout

### Backend Components

1. **Controllers**
   - `KeyController.java`: Handles key-related operations
   - `SessionController.java`: Manages user sessions

2. **Models**
   - `Key.java`: Key entity model
   - `Session.java`: Session entity model

3. **Services**
   - `KeyService.java`: Business logic for key operations
   - `SessionService.java`: Session management logic

## Installation and Setup

### Prerequisites
- Node.js 16+
- Java 11+
- Maven

### Frontend Setup
1. Navigate to frontend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   - Frontend will be available at `http://localhost:5173`

### Backend Setup
1. Navigate to backend directory
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
   - Backend will be available at `http://localhost:8080`
   - H2 Console: `http://localhost:8080/h2-console`
   - Swagger UI: `http://localhost:8080/swagger-ui.html`

## Security Implementation

The system implements a comprehensive security strategy:

1. **Authentication**
   - JWT-based authentication
   - Refresh token mechanism
   - Optional 2FA support

2. **Authorization**
   - Role-based access control
   - Protected routes for admin features
   - Session management

## API Documentation

### Key Management Endpoints
- `POST /keys` - Create new key
- `GET /keys` - List all keys
- `GET /keys/{id}` - Get key details
- `DELETE /keys/{id}` - Delete key

### Session Management Endpoints
- `POST /sessions?keyId={keyId}` - Create new session
- `GET /sessions/{keyId}` - Get key sessions
- `GET /sessions/details/{id}` - Get session details

## Product Catalog

The system includes the following products with their respective pricing:

1. **Gold Bypass**
   - Monthly: R$1,140
   - Lifetime: R$3,450

2. **FFX Bypass**
   - Monthly: R$680
   - Monthly + HB 30 days: R$876

3. **RTPrivate**
   - Monthly: R$1,710

4. **Engine Soul**
   - Daily: R$16
   - Weekly: R$86
   - Monthly: R$186

5. **Hanbot**
   - Daily: R$9
   - Monthly: R$190

## Notes for Developers

1. **Development Environment**
   - Frontend and backend can be developed independently
   - H2 Database is in-memory; data resets on server restart
   - Use the Swagger UI for API testing and documentation

2. **Code Organization**
   - Follow the established directory structure
   - Implement new features in corresponding modules
   - Maintain separation of concerns between layers

3. **Best Practices**
   - Use TypeScript for new frontend components
   - Follow REST principles for new endpoints
   - Write tests for new features
   - Document API changes in Swagger

This documentation provides a comprehensive overview of the EvoStore system. For detailed implementation recommendations and improvements, refer to the `evostore_implementation_recommendations.md` file.