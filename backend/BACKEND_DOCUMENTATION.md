# EvoStore Backend Documentation

## Overview
The EvoStore backend is built using Spring Boot and implements a RESTful API for managing digital product keys and their associated sessions. The system uses an H2 in-memory database for data storage and includes Swagger/OpenAPI documentation.

## Project Structure

```
backend/
├── src/main/java/com/evostore/
│   ├── EvoStoreApplication.java      # Main application entry point
│   ├── config/
│   │   └── WebConfig.java            # CORS and web configuration
│   ├── controller/
│   │   ├── KeyController.java        # Key management endpoints
│   │   └── SessionController.java     # Session management endpoints
│   ├── model/
│   │   ├── Key.java                  # Key entity
│   │   └── Session.java              # Session entity
│   ├── repository/
│   │   ├── KeyRepository.java        # Data access for keys
│   │   └── SessionRepository.java     # Data access for sessions
│   └── service/
│       ├── KeyService.java           # Key business logic
│       └── SessionService.java        # Session business logic
└── src/main/resources/
    └── application.properties        # Application configuration
```

## Components

### 1. Main Application (EvoStoreApplication.java)
- Entry point of the application
- Configured with OpenAPI documentation
- Uses annotations:
  - @SpringBootApplication
  - @OpenAPIDefinition for Swagger documentation

### 2. Configuration (WebConfig.java)
- Configures CORS (Cross-Origin Resource Sharing)
- Allows requests from frontend (http://localhost:5173)
- Configures allowed HTTP methods and headers
- Enables credentials and sets max age to 3600 seconds

### 3. Models

#### Key.java
- Represents a digital product key
- Properties:
  - id (Long): Auto-generated primary key
  - tipo (String): Type of the key
  - plano (String): Plan/subscription type
  - valor (Double): Price/value
  - dataCriacao (LocalDateTime): Creation timestamp
  - sessions (List<Session>): Associated sessions
- Includes validation annotations for required fields
- Uses Lombok for boilerplate code reduction

#### Session.java
- Represents a usage session for a key
- Properties:
  - id (Long): Auto-generated primary key
  - key (Key): Associated key (Many-to-One relationship)
  - inicio (LocalDateTime): Session start time
  - fim (LocalDateTime): Session end time
- Uses JPA annotations for entity mapping
- Includes validation for required fields

### 4. Controllers

#### KeyController.java
- Base path: /keys
- Endpoints:
  1. POST /keys
     - Creates new key
     - Returns 201 CREATED with key details
  2. GET /keys
     - Lists all keys
     - Returns 200 OK with key list
  3. GET /keys/{id}
     - Retrieves specific key
     - Returns 200 OK or 404 NOT FOUND
  4. DELETE /keys/{id}
     - Removes a key
     - Returns 204 NO CONTENT or 404 NOT FOUND

#### SessionController.java
- Base path: /sessions
- Endpoints:
  1. POST /sessions?keyId={keyId}
     - Creates new session
     - Returns 201 CREATED with session details
  2. GET /sessions/{keyId}
     - Lists all sessions for a key
     - Returns 200 OK with sessions list
  3. GET /sessions/details/{id}
     - Retrieves specific session
     - Returns 200 OK or 404 NOT FOUND

### 5. Services

#### KeyService.java
- Manages key business logic
- Methods:
  - createKey(Key): Creates new key
  - getAllKeys(): Retrieves all keys
  - getKeyById(Long): Finds key by ID
  - deleteKey(Long): Removes key
- Uses @Transactional for data consistency

#### SessionService.java
- Manages session business logic
- Methods:
  - createSession(Session, Long): Creates session for key
  - getSessionsByKeyId(Long): Gets all sessions for key
  - getSessionById(Long): Finds session by ID
- Handles relationships between keys and sessions

## Database Configuration

Application uses H2 in-memory database with the following settings:
- URL: jdbc:h2:mem:evostoredb
- Username: sa
- Password: password
- Console path: /h2-console

Database features:
- Automatic schema update (spring.jpa.hibernate.ddl-auto=update)
- SQL logging enabled for debugging
- H2 console enabled for development

## API Documentation
- Swagger UI available at: /swagger-ui.html
- OpenAPI docs at: /api-docs
- Detailed API documentation with operation descriptions
- Response codes and expected behaviors documented

## Security Notes
1. CORS is configured only for development (localhost:5173)
2. No authentication mechanism currently implemented
3. H2 console is enabled (should be disabled in production)

## Development Guidelines

1. Error Handling
   - Use EntityNotFoundException for not found resources
   - Validate input using javax.validation annotations
   - Return appropriate HTTP status codes

2. Transaction Management
   - Use @Transactional for data modifications
   - Use readOnly=true for queries

3. Code Organization
   - Follow existing package structure
   - Keep controllers thin, business logic in services
   - Use DTOs for complex data transfers (future improvement)

4. Database
   - Use JPA annotations for entity mapping
   - Follow naming conventions for tables and columns
   - Implement proper relationships between entities

5. API Design
   - Follow RESTful principles
   - Use proper HTTP methods
   - Document all endpoints with OpenAPI annotations