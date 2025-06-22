import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { routes } from "./app/routes";
import { ErrorRequestHandler } from "express";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);


const getRootController = (req: Request, res: Response) => {
 
  res.send("Weclome to the Library Management System !!!");
};

app.get("/", getRootController);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
    error: err,
  });
};

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
