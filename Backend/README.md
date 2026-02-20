# 📚 Book Management API (Backend)

## 🚀 Tech Stack

- .NET 8 Web API
- Entity Framework Core
- MySQL
- JWT Authentication
- Swagger

---

## 📂 Project Structure

```bash
Backend/
├── Controllers/
├── Services/
├── Data/
├── DTOs/
├── Models/
├── Program.cs
├── appsettings.json
├── .env
```

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
dotnet restore
```

### 2️⃣ Configure Environment Variables (.env)

Create a `.env` file in the project root:

```bash
DB_HOST=localhost
DB_PORT=3306
DB_NAME=book_db
DB_USER=rushan
DB_PASSWORD=12345678

JWT_KEY=YOUR_SUPER_SECRET_KEY_32+CHARACTERS
JWT_ISSUER=BookApi
JWT_AUDIENCE=BookApiUsers
JWT_EXPIRE_MINUTES=120
```

---

### 3️⃣ Run Database Migrations

```bash
dotnet ef migrations add InitialCreate
```

```bash
dotnet ef database update
```

To reset database:

```bash
dotnet ef database drop
dotnet ef database update
```

---

### 4️⃣ Run Application

```bash
dotnet run
```

```bash
Swagger URL: http://localhost:5026/swagger
```

---

## 🔐 Authentication

Include JWT token in header:

```bash
Authorization: Bearer {your_token}
```

---

## 📌 API Endpoints

### Auth

```bash
- POST /api/auth/register
- POST /api/auth/login
```

### Books

```bash
-   GET /api/books
-   GET /api/books/{id}
-   POST /api/books
-   PUT /api/books/{id}
-   DELETE /api/books/{id}
```

---

## ☁️ Deployment

Recommended: Azure App Service + Azure MySQL

---

## ✨ Author

Book Management System
