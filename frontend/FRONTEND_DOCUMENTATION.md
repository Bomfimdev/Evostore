# EvoStore Frontend Documentation

## Overview
The EvoStore frontend is built using React with Vite as the build tool. It implements a modern, responsive user interface for an e-commerce platform specializing in digital product keys. The application uses React Router for navigation and Tailwind CSS for styling.

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── ProductCard.jsx     # Product display card
│   │   ├── ProductList.jsx     # Product grid layout
│   │   └── KeyManager.jsx      # Key management interface
│   ├── pages/                  # Page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── ProductDetail.jsx   # Product details page
│   │   └── KeyManagement.jsx   # Key management page
│   ├── services/               # API and service integrations
│   │   └── api.js             # Axios API configuration
│   └── data/                   # Static data
│       └── products.js         # Product information
├── public/                     # Static assets
└── index.html                 # HTML entry point
```

## Components

### 1. App.jsx (Main Application)
- Root component of the application
- Implements React Router setup
- Manages global state for purchased keys
- Features:
  - Responsive layout with sticky header
  - Dark theme with green accent colors
  - Global state management using useState
  - Footer with copyright information

### 2. Header.jsx
- Main navigation component
- Features:
  - Responsive design with mobile menu
  - Logo and brand name
  - Navigation links (Products and Key Management)
  - Mobile-friendly hamburger menu
  - Smooth transitions for menu interactions
- Styling:
  - Uses Tailwind CSS for responsive design
  - Brand color (#02B045) for accents
  - Hover effects on navigation items

### 3. ProductCard.jsx
- Displays individual product information
- Features:
  - Product name and plans display
  - Price information for each plan
  - Purchase functionality
  - Animated hover effects
  - "View more details" link
- Key Functions:
  - handlePurchase(): Processes product purchases
  - calculateEndDate(): Determines subscription end dates
- Styling:
  - Card-based design with green accents
  - Hover animations
  - Responsive layout

### 4. Home.jsx
- Landing page component
- Sections:
  1. Welcome banner
  2. Product listing
  3. Features showcase
- Features:
  - Grid layout for products
  - Advantage cards with icons
  - Responsive design for all screen sizes

## Services

### api.js
- Configures Axios for API communication
- Base URL: http://localhost:8080
- Endpoints:
  1. Keys API:
     - createKey(keyData)
     - getAllKeys()
     - getKey(id)
     - deleteKey(id)
  2. Sessions API:
     - createSession(sessionData)
     - getSessionsByKey(keyId)

## State Management

The application uses React's built-in useState hook for state management:
1. Global State (App.jsx):
   - purchasedKeys: Array of purchased key information
   - addPurchasedKey: Function to update purchased keys

2. Local State:
   - Header: isMenuOpen for mobile menu
   - ProductCard: Local purchase handling

## Routing Structure

Routes configured in App.jsx:
1. / (Home)
   - Displays product catalog
   - Features section
2. /product/:productId
   - Product detail page
   - Detailed information and purchase options
3. /keys
   - Key management interface
   - View and manage purchased keys

## Styling

### Theme Colors
- Primary Background: #011901
- Primary Green: #02B045
- Secondary Green: #079D3B
- Card Background: #012b01
- Text Colors:
  - Primary: white
  - Secondary: gray-300

### CSS Framework
- Tailwind CSS for utility-first styling
- Custom color scheme implementation
- Responsive design breakpoints

## Development Guidelines

1. Component Creation
   - Use functional components with hooks
   - Implement proper prop validation
   - Follow atomic design principles

2. Styling
   - Use Tailwind CSS utilities
   - Maintain consistent color scheme
   - Ensure mobile responsiveness

3. State Management
   - Use hooks for local state
   - Implement context for global state when needed
   - Keep state close to where it's used

4. API Integration
   - Use the api.js service for backend communication
   - Implement proper error handling
   - Use loading states for async operations

5. Routing
   - Keep routes organized in App.jsx
   - Implement protected routes when needed
   - Use proper route parameters

## Build and Deployment

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance Considerations

1. Code Splitting
   - Implement lazy loading for routes
   - Split vendor and application code

2. Asset Optimization
   - Optimize images before import
   - Use appropriate image formats

3. Component Optimization
   - Implement React.memo where beneficial
   - Use proper key props in lists
   - Optimize re-renders

## Testing

Recommended testing approach:
1. Unit tests for utility functions
2. Component tests using React Testing Library
3. Integration tests for key user flows
4. E2E tests for critical paths