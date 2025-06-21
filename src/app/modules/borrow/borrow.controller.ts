import { Request, Response } from 'express';
import { BorrowService } from './borrow.service';
import catchAsync from '../../../utils/catchAsync';

export const BorrowController = {
  borrowBook: catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowService.borrowBook(req.body.bookId);
    res.status(200).json({
      success: true,
      message: 'Book borrowed successfully',
      data: result,
    });
  }),

  getBorrowSummary: catchAsync(async (_req: Request, res: Response) => {
    const summary = await BorrowService.getBorrowSummary();
    res.status(200).json({
      success: true,
      message: 'Borrow summary retrieved successfully',
      data: summary,
    });
  }),
};
