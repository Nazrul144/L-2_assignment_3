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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
exports.BookController = {
    createBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield book_service_1.BookService.createBook(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: result,
        });
    })),
    getAllBooks: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { filter, sortBy, sort, limit } = req.query;
        const result = yield book_service_1.BookService.getAllBooks({
            filter: filter,
            sortBy: sortBy,
            sort: sort,
            limit: limit ? Number(limit) : 10,
        });
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: result,
        });
    })),
    getSingleBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield book_service_1.BookService.getSingleBook(req.params.id);
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: result,
        });
    })),
    updateBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield book_service_1.BookService.updateBook(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: result,
        });
    })),
    deleteBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield book_service_1.BookService.deleteBook(req.params.id);
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    })),
};
