import { Request, Response } from 'express';
import UserModel from '../models/User';
import bcrypt from 'bcrypt';
import UserPayload from '../interfaces/UserPayload';
import Utils from '../utils/util';

export default abstract class SessionController {
  static async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Email incorrect' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload: UserPayload = { id: user._id };
      const token = Utils.getToken(payload);
      return res.status(201).json({ token: token });
    }
    return res.status(401).json({ error: 'Password incorrect' });
  }
}
