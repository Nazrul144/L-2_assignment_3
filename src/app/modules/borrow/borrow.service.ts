import { Book } from "../../modules/books/book.model";
import { BorrowedBook } from "./borrow.model";

export const BorrowService = {
  borrowBook: async (borrowData: { book: string; quantity: number; dueDate: string }) => {
    const { book: bookId, quantity, dueDate } = borrowData;

    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (book.copies < quantity) throw new Error("Not enough copies available");

    book.copies -= quantity;
    if (book.copies === 0) book.available = false;
    await book.save();

    const borrowRecord = new BorrowedBook({
      book: bookId,
      quantity,
      dueDate,
    });

    await borrowRecord.save();

    return borrowRecord;
  },

  getBorrowSummary: async () => {
    
    const result = await BorrowedBook.aggregate([
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
  },
};
