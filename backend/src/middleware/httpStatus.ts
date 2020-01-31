import { Request, Response, NextFunction } from 'express';

export default function status(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(`REQUEST RECEIVED AT ${new Date()}`);
  const body = req.body;
  const header = req.headers;
  console.log({ header });
  console.log({ body });
  next();
}
