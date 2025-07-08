

import mongoose, { Schema, Document } from 'mongoose';

export interface IBorrowedBook extends Document {
  book: mongoose.Types.ObjectId;
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BorrowedBookSchema = new Schema<IBorrowedBook>({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true },
  dueDate: { type: Date, required: true },
}, { timestamps: true });

export const BorrowedBook = mongoose.model<IBorrowedBook>('BorrowedBook', BorrowedBookSchema);
