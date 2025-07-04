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
exports.BookService = void 0;
const book_model_1 = require("./book.model");
exports.BookService = {
    createBook: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield book_model_1.Book.create(payload);
        return book;
    }),
    getAllBooks: (options) => __awaiter(void 0, void 0, void 0, function* () {
        const { filter, sortBy, sort, limit } = options;
        const query = {};
        if (filter) {
            query.genre = filter;
        }
        const sortCondition = {};
        if (sortBy) {
            sortCondition[sortBy] = sort === 'desc' ? -1 : 1;
        }
        const books = yield book_model_1.Book.find(query)
            .sort(sortCondition)
            .limit(limit || 10);
        return books;
    }),
    getSingleBook: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield book_model_1.Book.findById(id);
    }),
    updateBook: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield book_model_1.Book.findByIdAndUpdate(id, payload, { new: true });
    }),
    deleteBook: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield book_model_1.Book.findByIdAndDelete(id);
    }),
};
