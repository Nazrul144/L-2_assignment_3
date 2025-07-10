"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const book_route_1 = require("./modules/books/book.route");
const borrow_route_1 = require("./modules/borrow/borrow.route");
const router = express_1.default.Router();
router.use('/books', book_route_1.BookRoutes);
router.use("/borrow", borrow_route_1.BorrowRoutes);
exports.routes = router;
