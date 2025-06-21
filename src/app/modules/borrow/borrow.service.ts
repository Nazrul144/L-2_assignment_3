import { Book } from '../../modules/books/book.model';
import { IBookDocument } from '../../modules/books/book.interface';

export const BorrowService = {
  borrowBook: async (bookId: string) => {
    const book = await Book.findById(bookId) as IBookDocument;
    if (!book) throw new Error('Book not found');

    if (book.copies < 1) throw new Error('No copies available');

    book.copies -= 1;
    await book.updateAvailability();
    await book.save();

    return book;
  },

  getBorrowSummary: async () => {
    const result = await Book.aggregate([
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
  },
};
