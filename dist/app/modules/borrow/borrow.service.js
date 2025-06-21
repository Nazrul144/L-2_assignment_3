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
exports.BorrowService = {
    borrowBook: (bookId) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield book_model_1.Book.findById(bookId);
        if (!book)
            throw new Error('Book not found');
        if (book.copies < 1)
            throw new Error('No copies available');
        book.copies -= 1;
        yield book.updateAvailability();
        yield book.save();
        return book;
    }),
    getBorrowSummary: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield book_model_1.Book.aggregate([
            {
                $group: {
                    _id: '$genre',
                    totalBooks: { $sum: 1 },
                    totalCopies: { $sum: '$copies' },
                },
            },
            {
                $sort: { totalBooks: -1 },
            },
        ]);
        return result;
    }),
};
