import { Request, Response } from 'express';
import { BookService } from './book.service';
import catchAsync from '../../../utils/catchAsync';

export const BookController = {
  createBook: catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.createBook(req.body);
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  }),

  getAllBooks: catchAsync(async (req: Request, res: Response) => {
    const { filter, sortBy, sort, limit } = req.query;
    const result = await BookService.getAllBooks({
      filter: filter as string,
      sortBy: sortBy as string,
      sort: sort as 'asc' | 'desc',
      limit: limit ? Number(limit) : 10,
    });
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  }),

  getSingleBook: catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getSingleBook(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  }),

  updateBook: catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.updateBook(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  }),

  deleteBook: catchAsync(async (req: Request, res: Response) => {
    await BookService.deleteBook(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: null,
    });
  }),
};
