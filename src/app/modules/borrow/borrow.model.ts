import mongoose from 'mongoose';

const borrowSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true, min: 1 },
  dueDate: { type: Date, required: true }
}, {
  timestamps: true
});

// Middleware to update book on borrow
borrowSchema.post('save', async function (doc) {
  const Book = mongoose.model('Book');
  const book = await Book.findById(doc.book);
  if (book) {
    book.copies -= doc.quantity;
    if (book.copies < 0) throw new Error('Not enough copies');
    book.available = book.copies > 0;
    await book.save();
  }
});

export const Borrow = mongoose.model('Borrow', borrowSchema);
