import mongoose from "mongoose";

export interface IBorrow {
    book: mongoose.Schema.Types.ObjectId;
    quantity: number;
    dueDate: Date;
  }

 
export interface IBorrowInput {
  book: string;
  quantity: number;
  dueDate: string; // or Date
}

  