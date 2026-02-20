# 📖 Book Management App (Frontend)

## 🚀 Tech Stack

- Angular (Standalone Components)
- TypeScript
- Tailwind CSS
- Reactive Forms
- JWT Authentication

---

## 📂 Project Structure

```bash
src/
├── features/
│ ├── auth/
│ ├── books/
│ ├── home/
│ ├── profile/
├── Models/
│ ├── book/
├── shared/
│ ├── navbar/
├── core/
│ ├── services/
│ ├── guards/
├── environments/
```

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Configure API URL

Edit file:

src/environments/environment.ts

```ts
export const environment = {
  apiUrl: 'http://localhost:5026/api',
};
```

---

### 3️⃣ Run Application

```bash
ng serve
```

Application URL: http://localhost:4200

---

## 🔐 Authentication

- Login stores JWT in localStorage
- AuthGuard protects routes
- HTTP Interceptor attaches Bearer token

---

## 📌 Features

- Register & Login
- Create Book
- Edit Book
- Delete Book
- Reactive Form Validation
- Date Handling (ISO → yyyy-MM-dd conversion)

---

## 📦 Build For Production

```bash
ng build --configuration production
```

---

## ☁️ Deployment

Recommended: Azure Static Web Apps

---

## ✨ Author

Book Management System
