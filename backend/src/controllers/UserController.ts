import { Request, Response } from 'express';
import UserModel from '../models/User';

export default abstract class UserController {
  static async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      let user = await UserModel.findOne({ email });
      if (user) return res.status(400).json({ error: 'Email already used' });

      user = await UserModel.create({
        name,
        email,
        password,
      });
      return res.status(201).json(user);
    } catch (e) {
      return res.status(400).json({ error: 'Missing fields' });
    }
  }
}
