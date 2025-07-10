"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const book_model_1 = require("../../modules/books/book.model");
const borrow_model_1 = require("./borrow.model");
exports.BorrowService = {
    borrowBook: (borrowData) => __awaiter(void 0, void 0, void 0, function* () {
        const { book: bookId, quantity, dueDate } = borrowData;
        const book = yield book_model_1.Book.findById(bookId);
        if (!book)
            throw new Error("Book not found");
        if (book.copies < quantity)
            throw new Error("Not enough copies available");
        book.copies -= quantity;
        if (book.copies === 0)
            book.available = false;
        yield book.save();
        const borrowRecord = new borrow_model_1.BorrowedBook({
            book: bookId,
            quantity,
            dueDate,
        });
        yield borrowRecord.save();
        return borrowRecord;
    }),
    getBorrowSummary: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield borrow_model_1.BorrowedBook.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo",
                },
            },
            {
                $unwind: "$bookInfo",
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookInfo.title",
                        isbn: "$bookInfo.isbn",
                    },
                    totalQuantity: "$totalQuantity",
                },
            },
        ]);
        return result;
    }),
};
