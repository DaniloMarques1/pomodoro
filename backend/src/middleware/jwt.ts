import { Request, Response, NextFunction } from 'express';
import Utils from '../utils/util';

function checkJWt(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.headers;
    if (!token) throw new Error('');
    const payload = Utils.getUserFromToken(<string>token);
    if (!payload) throw new Error('');
    next();
  } catch (e) {
    return res.status(400).json({ error: 'Invalid token' });
  }
}

export default checkJWt;
