# Library Management API 🚀

A lightweight Express + TypeScript backend using MongoDB (Mongoose) to manage books and borrows.

---

## ✅ What's Implemented

- **Book & Borrow schemas** with full validation (genres, ISBN uniqueness, non‑negative/range checks)

# 📚 Library Management API

## 🚀 Features

### 📘 Book Management
- ✅ Create a new book  
  `POST /api/books`

- ✅ Get all books with:
  - Filtering by genre
  - Sorting by any field
  - Limiting number of results  
  `GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

- ✅ Get a specific book by ID  
  `GET /api/books/:bookId`

- ✅ Update book information  
  `PUT /api/books/:bookId`

- ✅ Delete a book  
  `DELETE /api/books/:bookId`

### 🔄 Borrow System
- ✅ Borrow a book  
  `POST /api/borrow`
  - Validates if requested quantity is available
  - Automatically updates `copies` and `available` status
  - Business logic enforced via **instance/static method**

- ✅ Borrowed books summary  
  `GET /api/borrow`
  - Uses **MongoDB Aggregation Pipeline**
  - Returns total borrowed quantity and book info

### 🧠 Business Logic & Validations
- ✅ Schema validation with Mongoose
- ✅ `genre` field restricted to specific values:  
  `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`

- ✅ ISBN must be **unique**
- ✅ `copies` must be a non-negative number
- ✅ Automatic `available` status update based on stock

### ⚙️ Mongoose Features
- ✅ At least one **Static** or **Instance** method used
- ✅ Used **Mongoose Middleware** (`pre` or `post` hook)

### 🔎 Filtering & Querying
- ✅ Genre-based filtering
- ✅ Sorting (asc/desc)
- ✅ Pagination support via `limit` query parameter

### ❌ Error Handling
All error responses follow this structure:
```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    ...
  }
}

---

### 📌 Core Endpoints

- **`POST /api/books`** – Create a new book  
- **`GET  /api/books`** – List books with optional `filter`, `sortBy`, `sort`, `limit`  
- **`GET  /api/books/:bookId`** – Retrieve a single book  
- **`PUT  /api/books/:bookId`** – Update book fields (e.g., copies)  
- **`DELETE /api/books/:bookId`** – Remove a book  
- **`POST /api/borrow`** – Borrow books (executes business logic)  
- **`GET  /api/borrow`** – Get summary of all borrows via aggregation

---

## 🛠️ Highlights

- Schema-based validation + standardized error responses  
- Enforced business rules before/after DB actions  
- Modular TypeScript code (models, routes, controllers)  
- Aggregation demonstrates reporting capability





