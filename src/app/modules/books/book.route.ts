import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getSingleBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);


export const BookRoutes = router;
