# 📚 Book Management System

## 🧾 Project Overview

The **Book Management System** is a full-stack web application designed
to manage books securely with authentication and authorization.\
It allows users to register, log in, and perform CRUD operations on
books through a modern Angular frontend and a secure .NET 8 Web API
backend.

This project demonstrates:

-   Full-stack development
-   JWT Authentication
-   RESTful API design
-   Database integration with Entity Framework Core
-   Modern Angular standalone architecture
-   Clean project structure and separation of concerns

------------------------------------------------------------------------

# 🏗️ System Architecture

Frontend (Angular)\
⬇\
REST API (.NET 8 Web API)\
⬇\
MySQL Database

------------------------------------------------------------------------

# 🚀 Technologies Used

## 🔹 Backend

-   .NET 8 Web API
-   Entity Framework Core
-   MySQL
-   JWT Authentication
-   Swagger (API Documentation)
-   Environment Variables (.env)

## 🔹 Frontend

-   Angular (Standalone Components)
-   TypeScript
-   Reactive Forms
-   Tailwind CSS
-   Angular Routing
-   AuthGuard & HTTP Interceptor

------------------------------------------------------------------------

# 🔐 Authentication & Security

-   JWT-based authentication
-   Protected routes using AuthGuard
-   Secure password handling
-   Token validation with issuer & audience
-   CORS configuration
-   Environment-based configuration

------------------------------------------------------------------------

# 📌 Backend Features

## 👤 Authentication

-   User Registration
-   User Login
-   JWT Token Generation
-   Secure Token Validation

## 📚 Book Management

-   Create Book
-   Get All Books
-   Get Book by ID
-   Update Book
-   Delete Book

## 🗄️ Database

-   Code First Migrations
-   MySQL Integration
-   Entity Relationships
-   Automatic Migration Support

------------------------------------------------------------------------

# 📌 Frontend Features

## 🔐 Authentication UI

-   Login Page
-   Register Page
-   Token Storage (localStorage)
-   Auto Attach JWT to API Calls

## 📚 Book Management UI

-   Book List Page
-   Add Book Form
-   Edit Book Form
-   Delete Book Confirmation
-   Date Handling (ISO → yyyy-MM-dd conversion)

## 🧠 UX Features

-   Loading Indicators
-   Form Validation
-   Error Handling
-   Protected Navigation
-   Responsive Design

------------------------------------------------------------------------

# ⚙️ How To Run (Development)

## 🔹 Backend

``` bash
dotnet restore
dotnet ef database update
dotnet run
```

API URL: http://localhost:5026

Swagger: http://localhost:5026/swagger

------------------------------------------------------------------------

## 🔹 Frontend

``` bash
npm install
ng serve
```

App URL: http://localhost:4200

------------------------------------------------------------------------

# 🧪 Sample Book Object

``` json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "9780132350884",
  "publicationDate": "2008-08-11T00:00:00"
}
```

------------------------------------------------------------------------

# ☁️ Deployment Strategy

Recommended cloud setup:

-   Azure App Service → .NET API
-   Azure Database for MySQL
-   Azure Static Web Apps → Angular Frontend
-   Environment Variables in Azure Configuration

------------------------------------------------------------------------

# 📈 Future Improvements

-   Role-based authorization
-   Refresh tokens
-   Pagination & search
-   Book categories
-   Image upload support
-   CI/CD pipeline
-   Docker containerization

------------------------------------------------------------------------

# 👨‍💻 Author

Full Stack Book Management System\
Built with .NET 8 & Angular