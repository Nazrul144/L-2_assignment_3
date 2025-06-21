# Library Management API 🚀

A lightweight Express + TypeScript backend using MongoDB (Mongoose) to manage books and borrows.

---

## ✅ What's Implemented

- **Book & Borrow schemas** with full validation (genres, ISBN uniqueness, non‑negative/range checks)
- **Business logic**:
  - Borrowing checks available copies before saving
  - Automatically updates book's `copies` and toggles `available`
- **Mongoose features**:
  - **Instance method** (`updateAvailability()`) to recalc `available`
  - **Post-save middleware** on `Borrow` to decrement book copies
- **Aggregation endpoint** to summarize total borrowed quantity per book (title + ISBN)
- **Filtering, sorting & pagination** on `GET /api/books`

---

## 📌 Core Endpoints

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

---



