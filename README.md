# 📚 Library Management API

A REST API built with **Express**, **TypeScript**, and **MongoDB** (via Mongoose) to manage books and borrowing operations.

---

## ✅ Features

- **Book Management**: Create, read, update, and delete books with validation:
  - Required fields: title, author, genre, ISBN, copies
  - Genre enum: `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`
  - Unique ISBN and non-negative copies constraint

- **Borrowing Logic**:
  - Validate available copies before borrowing
  - Adjust `copies` and `available` status automatically
  - Post-save middleware ensures business rules are enforced

- **Mongoose Enhancements**:
  - Instance method `updateAvailability()` on Book schema
  - Post-save middleware in Borrow schema for updating Book

- **Aggregated Reporting**:
  - `/api/borrow` endpoint returns total borrowed quantities grouped by book (via aggregation)

- **Filtering, Sorting & Pagination**:
  - `/api/books` supports `filter`, `sortBy`, `sort`, and `limit` query parameters

---

