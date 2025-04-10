# StyleGo - Beauty Salon Booking Platform

---

## How to start the project?

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (running locally on port 27017)

### Setting up the server

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    # Start with node
    npm start

    # Or start with nodemon for development
    npm run dev
    ```

4. The server will be running at http://localhost:5000

### Setting up the client

1. Navigate to the client directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. The client will be running at http://localhost:5173

---

## Description of the project

StyleGo is a comprehensive platform for beauty salons and studios. The application connects users with beauty services in an efficient and user-friendly way.

Key features:

-   **User Registration and Profiles**: Regular users can register, create profiles, and manage their personal information.
-   **Studio Registration**: Business owners can register as studios and create their business profiles.
-   **Service Management**: Studios can add, edit, and delete their services with customized pricing.
-   **Studio Discovery**: Users can browse all available studios or search by location.
-   **Appointment Booking**: Users can select services and book appointments online.
-   **Studio Management**: Studio owners can manage their business information, services, and view bookings.

The platform aims to simplify the process of finding and booking beauty services while providing studios with a digital presence to showcase their offerings.

---

## How does the code work?

### Architecture Overview

The project follows a client-server architecture:

1. **Frontend**: React application built with Vite
2. **Backend**: Express.js REST API
3. **Database**: MongoDB with Mongoose ODM

### Frontend Structure

The React application is organized as follows:

-   **Views**: Main page components

    -   Home, Dashboard and Studio Details
    -   Authentication pages (Login, Register)
    -   Studio management (AddStudio, EditStudio)
    -   User profile
    -   Booking system

-   **Components**: Reusable UI elements

    -   Layout components (Header, Footer)
    -   Form elements

-   **API**: Custom hooks for data fetching

    -   `authApi.js`: Authentication operations
    -   `userApi.js`: User operations
    -   `studioApi.js`: Studio operations

-   **Context**: React Context API for state management
    -   `UserContext.js`: Manages authentication state

### Backend Structure

The server follows an MVC-like pattern:

-   **Models**: Mongoose schemas defining the data structure

    -   `User.js`: Regular user accounts
    -   `StudioAcc.js`: Studio owner accounts
    -   `Studio.js`: Studio information and services

-   **Controllers**: Handle HTTP requests

    -   `authController.js`: Manages authentication
    -   `userController.js`: Handles user operations
    -   `studiosController.js`: Manages studio operations

-   **Services**: Business logic layer
    -   `authService.js`: Authentication logic
    -   `userService.js`: User management
    -   `studiosService.js`: Studio management

### Authentication Flow

1. Users register with email/password (separate flows for regular users and studios)
2. Credentials are validated and stored in the database
3. Password is hashed using bcrypt before storage
4. On login, credentials are verified and user data is returned
5. Authentication state is maintained in localStorage and UserContext

### Studio Management

1. Studio owners register as business accounts
2. After registration, they can create a studio profile
3. Studio profile includes name, address, description, services, etc.
4. Studio owners can edit or delete their studio information

### Booking System

1. Users browse studios and select one to view
2. They select services they want to book
3. Users pick a date/time range for their appointment
4. Booking information is stored in the studio's bookings array

### Data Flow

1. User interactions trigger API calls via custom hooks
2. API requests are processed by the server controllers
3. Controllers use services to execute business logic
4. Services interact with the database using Mongoose models
5. Results are returned to the frontend and displayed to the user

### Technologies Used

-   **Frontend**:

    -   React 19
    -   React Router 7
    -   Ant Design (for DatePicker)
    -   CSS Modules for styling
    -   Day.js for date manipulation

-   **Backend**:

    -   Express.js
    -   Mongoose
    -   bcrypt for password hashing
    -   CORS for cross-origin resource sharing

-   **Development Tools**:
    -   Vite for frontend build
    -   Nodemon for backend development
    -   ESLint for code linting

---

## _ReactJS Project for SoftUni ReactJS course - Feb 2025_

_Developed by Dimitar Pavlev (dpavlev557)_
