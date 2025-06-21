import { Response } from "express";

export const sendResponse = (res: Response, statusCode:number, message:string, data = null) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  