import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/books', BookController.createBook);
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getSingleBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

export const BookRoutes = router;
