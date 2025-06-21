import mongoose, { Document, Model, Schema } from "mongoose";
import { IBook, IBookDocument, IBookMethods } from "./book.interface";

const bookSchema = new Schema<IBook, Model<IBook, {}, IBookMethods>>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

bookSchema.methods.updateAvailability = async function () {
  this.available = this.copies > 0;
  return this.save();
};

export const Book = mongoose.model<IBook, Model<IBook, {}, IBookMethods>>("Book", bookSchema);
